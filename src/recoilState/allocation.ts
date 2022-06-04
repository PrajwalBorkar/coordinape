/* eslint-disable no-console */
import iti from 'itiriri';
import { selectorFamily, useRecoilValue, selector } from 'recoil';

import {
  STEP_MY_EPOCH,
  STEP_MY_TEAM,
  STEP_ALLOCATION,
  STEPS,
  NO_TEAM_STEPS,
} from 'routes/allocation';

import {
  rSelectedCircleId,
  rUsersMap,
  rGiftsMap,
  rCircle,
  rMyProfile,
} from './app';

import { IUser, IAllocationStep } from 'types';

export const rUserGifts = selectorFamily({
  key: 'rUserGifts',
  get:
    (userId: number) =>
    ({ get }) => {
      console.log('buildingRUserGifts');
      const sortedGifts = Array.from(get(rGiftsMap).values()).sort(
        ({ id: a }, { id: b }) => a - b
      );
      console.log('buildingRUserGifts.2');
      const giftsFrom = iti(sortedGifts)
        .filter(g => g.sender_id === userId)
        .toArray();
      const giftsFor = iti(sortedGifts)
        .filter(g => g.recipient_id === userId)
        .toArray();
      const fromUserByEpoch = iti(giftsFrom).toGroups(g => g.epoch_id);
      const forUserByEpoch = iti(giftsFor).toGroups(g => g.epoch_id);
      const totalReceivedByEpoch = new Map(
        iti(forUserByEpoch.entries()).map(([epochId, arr]) => [
          epochId,
          iti(arr.map(g => g.tokens)).sum() ?? 0,
        ])
      );
      return {
        pendingGiftsFrom: [...giftsFrom].filter(g => g.pending),
        pendingGiftsFor: [...giftsFor].filter(g => g.pending),
        fromUser: giftsFrom,
        forUser: giftsFor,
        fromUserByEpoch,
        forUserByEpoch,
        totalReceivedByEpoch,
      };
    },
});

export const rAvailableTeammates = selector({
  key: 'rAvailableTeammates',
  get: ({ get }) => {
    const selectedCircleId = get(rSelectedCircleId);
    const { myUser } = get(rCircle(selectedCircleId));
    const usersMap = get(rUsersMap);
    return iti(usersMap.values())
      .filter(
        u =>
          !u.deleted_at &&
          u.id !== myUser?.id &&
          u.circle_id === selectedCircleId
      )
      .toArray();
  },
});

export const rBaseTeammates = selectorFamily<IUser[], number>({
  key: 'rBaseTeammates',
  get:
    (circleId: number) =>
    ({ get }) => {
      const { myUser } = get(rCircle(circleId));

      if (!myUser.circle.team_selection) {
        return get(rAvailableTeammates);
      }

      const teammateIds = myUser.teammates.map(t => t.id);
      return get(rAvailableTeammates).filter(t => teammateIds.includes(t.id));
    },
});

export const rAllocationStepStatus = selectorFamily<
  [Set<IAllocationStep>, IAllocationStep | undefined],
  number
>({
  key: 'rAllocationStepStatus',
  get:
    (circleId: number) =>
    ({ get }) => {
      const user = get(rMyProfile).myUsers?.find(u => u.circle_id === circleId);
      if (user === undefined) {
        return [new Set(), STEP_MY_EPOCH];
      }
      const pendingGiftsFrom = get(rUserGifts(user.id)).pendingGiftsFrom;
      const completedSteps = new Set<IAllocationStep>();
      if (!user.epoch_first_visit) {
        completedSteps.add(STEP_MY_EPOCH);
      }
      if (
        !user.epoch_first_visit &&
        user.teammates &&
        user.teammates.length > 0
      ) {
        completedSteps.add(STEP_MY_TEAM);
      }
      if (pendingGiftsFrom.length > 0) {
        completedSteps.add(STEP_ALLOCATION);
      }
      const steps = user.circle.team_selection ? STEPS : NO_TEAM_STEPS;
      return [completedSteps, steps.find(step => !completedSteps.has(step))];
    },
});

export const useUserGifts = (userId: number) =>
  useRecoilValue(rUserGifts(userId));
