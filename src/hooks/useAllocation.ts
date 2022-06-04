/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-console */

import { useState } from 'react';

import iti from 'itiriri';
import * as mutations from 'lib/gql/mutations';
import isEqual from 'lodash/isEqual';
import { useRecoilValue } from 'recoil';

import { useApiBase } from 'hooks';
import { useUserGifts } from 'recoilState/allocation';
import { rUsersMap, useCircle } from 'recoilState/app';

import { useRecoilLoadCatch } from './useRecoilLoadCatch';

import {
  ISimpleGift,
  IUser,
  ITokenGift,
  PostTokenGiftsParam,
  ISimpleGiftUser,
} from 'types';

/**
 * Methods and state for an allocation.
 */
export const useAllocation = (circleId: number) => {
  const { fetchCircle } = useApiBase();
  const { myUser } = useCircle(circleId);

  const [localGifts, setLocalGifts] = useState<ISimpleGift[]>([]);

  const tokenStarting = myUser.non_giver ? 0 : myUser.starting_tokens;
  const tokenAllocated = Array.from(localGifts).reduce(
    (sum, { tokens }: ISimpleGift) => sum + tokens,
    0
  );
  const tokenRemaining = tokenStarting - tokenAllocated;
  const teammateReceiverCount = localGifts
    .map(g => (g.user.non_receiver ? 0 : 1))
    .reduce((a: number, b: number) => a + b, 0);
  const givePerUser = new Map<number, ISimpleGift>(
    localGifts.map(g => [g.user.id, g])
  );

  const { pendingGiftsFrom } = useUserGifts(myUser.id);

  const localGiftsChanged =
    buildDiffMap(pendingGiftMap(pendingGiftsFrom), simpleGiftsToMap(localGifts))
      .size > 0;

  const usersMap = useRecoilValue(rUsersMap);

  const rebalanceGifts = () => {
    if (teammateReceiverCount === 0) {
      return;
    }
    if (tokenAllocated === 0) {
      console.log('X.REBALANCETOKEN0');
      setLocalGifts(
        localGifts.slice().map(g => {
          if (!g.user.non_receiver) {
            return {
              ...g,
              tokens: Math.floor(tokenStarting / teammateReceiverCount),
            };
          }
          return g;
        })
      );
    } else {
      const rebalance = tokenStarting / tokenAllocated;
      console.log('X.REBALANCETOKEN!=0');
      setLocalGifts(
        localGifts
          .slice()
          .map(g => ({ ...g, tokens: Math.floor(g.tokens * rebalance) }))
      );
    }
  };

  const saveGifts = useRecoilLoadCatch(
    () => async () => {
      const diff = buildDiffMap(
        pendingGiftMap(pendingGiftsFrom),
        simpleGiftsToMap(localGifts)
      );

      const params: PostTokenGiftsParam[] = iti(diff.entries())
        .map(([userId, [tokens, note]]) => ({
          tokens,
          recipient_id: userId,
          note,
        }))
        .toArray();

      await mutations.updateAllocations(myUser.circle_id, params);

      // FIXME: calling fetchCircle here is wasteful
      await fetchCircle({ circleId: myUser.circle_id });
    },
    [myUser, pendingGiftsFrom, localGifts],
    { success: 'Saved Gifts' }
  );

  const updateLocalGifts = (
    newTeammates: ISimpleGiftUser[],
    newGifts?: ISimpleGift[]
  ) => {
    console.log('X.UPDATELOCALGIFTS');
    console.log(newTeammates);
    setLocalGifts(calculateGifts(newTeammates, newGifts));
  };

  return {
    localGifts,
    localGiftsChanged,
    tokenRemaining,
    givePerUser,
    rebalanceGifts,
    saveGifts,
    updateLocalGifts,
    setLocalGifts,
  };
};

/**
 * Updater for gifts, for non-empty gifts and teammates.
 *
 * @param newTeammates - Include these.
 * @param newGifts - Overwrite the existing gifts.
 */
const calculateGifts =
  (newTeammates: ISimpleGiftUser[], newGifts?: ISimpleGift[]) =>
  (baseGifts: ISimpleGift[]) => {
    const startingGifts = newGifts ?? baseGifts;
    const startingSet = new Set(startingGifts.map(g => g.user.id));
    const newSet = new Set(newTeammates.map(u => u.id));
    const keepers = [] as ISimpleGift[];
    startingGifts.forEach(g => {
      if (newSet.has(g.user.id) || g.note !== '' || g.tokens > 0) {
        keepers.push(g);
      }
    });
    newTeammates.forEach(u => {
      if (!startingSet.has(u.id)) {
        keepers.push({ user: u, tokens: 0, note: '' } as ISimpleGift);
      }
    });
    return keepers;
  };

type tokenNote = [number, string];

const simpleGiftsToMap = (source: ISimpleGift[]): Map<number, tokenNote> =>
  new Map(source.map(g => [g.user.id, [g.tokens, g.note ?? '']]));

const pendingGiftMap = (pending: ITokenGift[]): Map<number, tokenNote> =>
  new Map(pending.map(g => [g.recipient_id, [g.tokens, g.note ?? '']]));

const buildDiffMap = (
  remoteMap: Map<number, tokenNote>,
  localMap: Map<number, tokenNote>
) => {
  const diff = iti(localMap.keys()).reduce<Map<number, tokenNote>>(
    (changes: Map<number, tokenNote>, key: number) => {
      // changes is initialized as remote,
      if (!changes.has(key)) {
        const tn = localMap.get(key) as tokenNote;
        if (tn[0] !== 0 || tn[1] !== '') {
          changes.set(key, tn);
        }
      } else {
        const remote = changes.get(key) as tokenNote;
        const local = localMap.get(key) as tokenNote;
        if (isEqual(remote, local)) {
          changes.delete(key);
        } else {
          changes.set(key, local);
        }
      }
      return changes;
    },
    new Map(remoteMap)
  );

  return diff;
};
