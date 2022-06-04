import { RecoilValue } from 'recoil';
import { IEpoch, IUser, ITokenGift } from './models';
import { ICircle } from './api.circle';
import { IApiProfile } from './api.user.profile';

export type IRecoilGet = <T>(recoilState: RecoilValue<T>) => T;

export type IRecoilSet = <T>(
  recoilVal: RecoilState<T>,
  valOrUpdater: ((currVal: T) => T) | T
) => void;

export interface IRecoilGetParams {
  get: IRecoilGet;
}

export interface IRecoilSetParams {
  get: IRecoilGet;
  set: <T>(
    recoilVal: RecoilState<T>,
    newVal: T | DefaultValue | ((prevValue: T) => T | DefaultValue)
  ) => void;
  reset: (recoilVal: RecoilState<any>) => void; // eslint-disable-line @typescript-eslint/no-explicit-any
}

export interface ISimpleGiftUser {
  id: number;
  non_receiver: boolean;
  fixed_non_receiver: boolean;
  bio?: string;
  created_at: string;
  name: string;
  profile?: Omit<IApiProfile, 'users'>;
  role: number;
  address: string;
}

export interface ISimpleGift {
  user: ISimpleGiftUser;
  tokens: number;
  note: string;
}

export interface IAtomEffectParams {
  node: RecoilState<T>;
  trigger: 'set' | 'get';

  // Call synchronously to initialize value or async to change it later
  setSelf: (
    param:
      | T
      | DefaultValue
      | Promise<T | DefaultValue>
      | ((param: T | DefaultValue) => T | DefaultValue)
  ) => void;
  resetSelf: () => void;

  // Subscribe callbacks to events.
  // Atom effect observers are called before global transaction observers
  onSet: (
    param: (newValue: T | DefaultValue, oldValue: T | DefaultValue) => void
  ) => void;
}

export interface IAllocationStep {
  key: number;
  buildLabel: (circle: ICircle) => string;
  path: string;
}
