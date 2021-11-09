/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
  BaseContract,
  ContractTransaction,
  Overrides,
  CallOverrides,
} from 'ethers';
import { BytesLike } from '@ethersproject/bytes';
import { Listener, Provider } from '@ethersproject/providers';
import { FunctionFragment, EventFragment, Result } from '@ethersproject/abi';
import type { TypedEventFilter, TypedEvent, TypedListener } from './common';

interface ApeDistributorInterface extends ethers.utils.Interface {
  functions: {
    'allowances(address,bytes32,address)': FunctionFragment;
    'checkpoints(bytes32,address,address)': FunctionFragment;
    'circleAlloc(bytes32,address)': FunctionFragment;
    'claim(bytes32,address,uint256,uint256,address,uint256,bool,bytes32[])': FunctionFragment;
    'claimMany(bytes32[],address[],uint256[],bool[],bytes32[][])': FunctionFragment;
    'currentAllowances(address,bytes32,address)': FunctionFragment;
    'epochClaimBitMap(bytes32,address,uint256,uint256)': FunctionFragment;
    'epochRoots(bytes32,address,uint256)': FunctionFragment;
    'epochTracking(bytes32,address)': FunctionFragment;
    'isClaimed(bytes32,address,uint256,uint256)': FunctionFragment;
    'owner()': FunctionFragment;
    'renounceOwnership()': FunctionFragment;
    'setAllowance(bytes32,address,uint256,uint256,uint256)': FunctionFragment;
    'transferOwnership(address)': FunctionFragment;
    'updateCircleAdmin(bytes32,address)': FunctionFragment;
    'uploadEpochRoot(address,bytes32,address,bytes32,uint256,uint8)': FunctionFragment;
    'vaultApprovals(address,bytes32)': FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: 'allowances',
    values: [string, BytesLike, string]
  ): string;
  encodeFunctionData(
    functionFragment: 'checkpoints',
    values: [BytesLike, string, string]
  ): string;
  encodeFunctionData(
    functionFragment: 'circleAlloc',
    values: [BytesLike, string]
  ): string;
  encodeFunctionData(
    functionFragment: 'claim',
    values: [
      BytesLike,
      string,
      BigNumberish,
      BigNumberish,
      string,
      BigNumberish,
      boolean,
      BytesLike[]
    ]
  ): string;
  encodeFunctionData(
    functionFragment: 'claimMany',
    values: [BytesLike[], string[], BigNumberish[], boolean[], BytesLike[][]]
  ): string;
  encodeFunctionData(
    functionFragment: 'currentAllowances',
    values: [string, BytesLike, string]
  ): string;
  encodeFunctionData(
    functionFragment: 'epochClaimBitMap',
    values: [BytesLike, string, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: 'epochRoots',
    values: [BytesLike, string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: 'epochTracking',
    values: [BytesLike, string]
  ): string;
  encodeFunctionData(
    functionFragment: 'isClaimed',
    values: [BytesLike, string, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: 'owner', values?: undefined): string;
  encodeFunctionData(
    functionFragment: 'renounceOwnership',
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: 'setAllowance',
    values: [BytesLike, string, BigNumberish, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: 'transferOwnership',
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: 'updateCircleAdmin',
    values: [BytesLike, string]
  ): string;
  encodeFunctionData(
    functionFragment: 'uploadEpochRoot',
    values: [string, BytesLike, string, BytesLike, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: 'vaultApprovals',
    values: [string, BytesLike]
  ): string;

  decodeFunctionResult(functionFragment: 'allowances', data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: 'checkpoints',
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: 'circleAlloc',
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: 'claim', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'claimMany', data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: 'currentAllowances',
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: 'epochClaimBitMap',
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: 'epochRoots', data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: 'epochTracking',
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: 'isClaimed', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'owner', data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: 'renounceOwnership',
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: 'setAllowance',
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: 'transferOwnership',
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: 'updateCircleAdmin',
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: 'uploadEpochRoot',
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: 'vaultApprovals',
    data: BytesLike
  ): Result;

  events: {
    'AdminApproved(address,bytes32,address)': EventFragment;
    'AllowanceUpdated(address,bytes32,address,uint256,uint256)': EventFragment;
    'Claimed(bytes32,address,uint256,uint256,address,uint256)': EventFragment;
    'OwnershipTransferred(address,address)': EventFragment;
    'apeVaultFundsTapped(address,address,uint256)': EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: 'AdminApproved'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'AllowanceUpdated'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'Claimed'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'OwnershipTransferred'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'apeVaultFundsTapped'): EventFragment;
}

export type AdminApprovedEvent = TypedEvent<
  [string, string, string] & { vault: string; circle: string; admin: string }
>;

export type AllowanceUpdatedEvent = TypedEvent<
  [string, string, string, BigNumber, BigNumber] & {
    vault: string;
    circle: string;
    token: string;
    amount: BigNumber;
    interval: BigNumber;
  }
>;

export type ClaimedEvent = TypedEvent<
  [string, string, BigNumber, BigNumber, string, BigNumber] & {
    circle: string;
    token: string;
    epoch: BigNumber;
    index: BigNumber;
    account: string;
    amount: BigNumber;
  }
>;

export type OwnershipTransferredEvent = TypedEvent<
  [string, string] & { previousOwner: string; newOwner: string }
>;

export type apeVaultFundsTappedEvent = TypedEvent<
  [string, string, BigNumber] & {
    apeVault: string;
    yearnVault: string;
    amount: BigNumber;
  }
>;

export class ApeDistributor extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  listeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter?: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): Array<TypedListener<EventArgsArray, EventArgsObject>>;
  off<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  on<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  once<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeListener<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeAllListeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): this;

  listeners(eventName?: string): Array<Listener>;
  off(eventName: string, listener: Listener): this;
  on(eventName: string, listener: Listener): this;
  once(eventName: string, listener: Listener): this;
  removeListener(eventName: string, listener: Listener): this;
  removeAllListeners(eventName?: string): this;

  queryFilter<EventArgsArray extends Array<any>, EventArgsObject>(
    event: TypedEventFilter<EventArgsArray, EventArgsObject>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEvent<EventArgsArray & EventArgsObject>>>;

  interface: ApeDistributorInterface;

  functions: {
    allowances(
      arg0: string,
      arg1: BytesLike,
      arg2: string,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber] & { maxAmount: BigNumber; maxInterval: BigNumber }
    >;

    checkpoints(
      arg0: BytesLike,
      arg1: string,
      arg2: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    circleAlloc(
      arg0: BytesLike,
      arg1: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    claim(
      _circle: BytesLike,
      _token: string,
      _epoch: BigNumberish,
      _index: BigNumberish,
      _account: string,
      _checkpoint: BigNumberish,
      _redeemShares: boolean,
      _proof: BytesLike[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    claimMany(
      _circles: BytesLike[],
      _tokensAndAccounts: string[],
      _epochsIndexesCheckpoints: BigNumberish[],
      _redeemShares: boolean[],
      _proofs: BytesLike[][],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    currentAllowances(
      arg0: string,
      arg1: BytesLike,
      arg2: string,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, BigNumber] & {
        debt: BigNumber;
        intervalStart: BigNumber;
        epochs: BigNumber;
      }
    >;

    epochClaimBitMap(
      arg0: BytesLike,
      arg1: string,
      arg2: BigNumberish,
      arg3: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    epochRoots(
      arg0: BytesLike,
      arg1: string,
      arg2: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string]>;

    epochTracking(
      arg0: BytesLike,
      arg1: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    isClaimed(
      _circle: BytesLike,
      _token: string,
      _epoch: BigNumberish,
      _index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setAllowance(
      _circle: BytesLike,
      _token: string,
      _amount: BigNumberish,
      _interval: BigNumberish,
      _epochs: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    updateCircleAdmin(
      _circle: BytesLike,
      _admin: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    uploadEpochRoot(
      _vault: string,
      _circle: BytesLike,
      _token: string,
      _root: BytesLike,
      _amount: BigNumberish,
      _tapType: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    vaultApprovals(
      arg0: string,
      arg1: BytesLike,
      overrides?: CallOverrides
    ): Promise<[string]>;
  };

  allowances(
    arg0: string,
    arg1: BytesLike,
    arg2: string,
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, BigNumber] & { maxAmount: BigNumber; maxInterval: BigNumber }
  >;

  checkpoints(
    arg0: BytesLike,
    arg1: string,
    arg2: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  circleAlloc(
    arg0: BytesLike,
    arg1: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  claim(
    _circle: BytesLike,
    _token: string,
    _epoch: BigNumberish,
    _index: BigNumberish,
    _account: string,
    _checkpoint: BigNumberish,
    _redeemShares: boolean,
    _proof: BytesLike[],
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  claimMany(
    _circles: BytesLike[],
    _tokensAndAccounts: string[],
    _epochsIndexesCheckpoints: BigNumberish[],
    _redeemShares: boolean[],
    _proofs: BytesLike[][],
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  currentAllowances(
    arg0: string,
    arg1: BytesLike,
    arg2: string,
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, BigNumber, BigNumber] & {
      debt: BigNumber;
      intervalStart: BigNumber;
      epochs: BigNumber;
    }
  >;

  epochClaimBitMap(
    arg0: BytesLike,
    arg1: string,
    arg2: BigNumberish,
    arg3: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  epochRoots(
    arg0: BytesLike,
    arg1: string,
    arg2: BigNumberish,
    overrides?: CallOverrides
  ): Promise<string>;

  epochTracking(
    arg0: BytesLike,
    arg1: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  isClaimed(
    _circle: BytesLike,
    _token: string,
    _epoch: BigNumberish,
    _index: BigNumberish,
    overrides?: CallOverrides
  ): Promise<boolean>;

  owner(overrides?: CallOverrides): Promise<string>;

  renounceOwnership(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setAllowance(
    _circle: BytesLike,
    _token: string,
    _amount: BigNumberish,
    _interval: BigNumberish,
    _epochs: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  transferOwnership(
    newOwner: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  updateCircleAdmin(
    _circle: BytesLike,
    _admin: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  uploadEpochRoot(
    _vault: string,
    _circle: BytesLike,
    _token: string,
    _root: BytesLike,
    _amount: BigNumberish,
    _tapType: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  vaultApprovals(
    arg0: string,
    arg1: BytesLike,
    overrides?: CallOverrides
  ): Promise<string>;

  callStatic: {
    allowances(
      arg0: string,
      arg1: BytesLike,
      arg2: string,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber] & { maxAmount: BigNumber; maxInterval: BigNumber }
    >;

    checkpoints(
      arg0: BytesLike,
      arg1: string,
      arg2: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    circleAlloc(
      arg0: BytesLike,
      arg1: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    claim(
      _circle: BytesLike,
      _token: string,
      _epoch: BigNumberish,
      _index: BigNumberish,
      _account: string,
      _checkpoint: BigNumberish,
      _redeemShares: boolean,
      _proof: BytesLike[],
      overrides?: CallOverrides
    ): Promise<void>;

    claimMany(
      _circles: BytesLike[],
      _tokensAndAccounts: string[],
      _epochsIndexesCheckpoints: BigNumberish[],
      _redeemShares: boolean[],
      _proofs: BytesLike[][],
      overrides?: CallOverrides
    ): Promise<void>;

    currentAllowances(
      arg0: string,
      arg1: BytesLike,
      arg2: string,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, BigNumber] & {
        debt: BigNumber;
        intervalStart: BigNumber;
        epochs: BigNumber;
      }
    >;

    epochClaimBitMap(
      arg0: BytesLike,
      arg1: string,
      arg2: BigNumberish,
      arg3: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    epochRoots(
      arg0: BytesLike,
      arg1: string,
      arg2: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;

    epochTracking(
      arg0: BytesLike,
      arg1: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    isClaimed(
      _circle: BytesLike,
      _token: string,
      _epoch: BigNumberish,
      _index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<boolean>;

    owner(overrides?: CallOverrides): Promise<string>;

    renounceOwnership(overrides?: CallOverrides): Promise<void>;

    setAllowance(
      _circle: BytesLike,
      _token: string,
      _amount: BigNumberish,
      _interval: BigNumberish,
      _epochs: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    transferOwnership(
      newOwner: string,
      overrides?: CallOverrides
    ): Promise<void>;

    updateCircleAdmin(
      _circle: BytesLike,
      _admin: string,
      overrides?: CallOverrides
    ): Promise<void>;

    uploadEpochRoot(
      _vault: string,
      _circle: BytesLike,
      _token: string,
      _root: BytesLike,
      _amount: BigNumberish,
      _tapType: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    vaultApprovals(
      arg0: string,
      arg1: BytesLike,
      overrides?: CallOverrides
    ): Promise<string>;
  };

  filters: {
    'AdminApproved(address,bytes32,address)'(
      vault?: string | null,
      circle?: BytesLike | null,
      admin?: string | null
    ): TypedEventFilter<
      [string, string, string],
      { vault: string; circle: string; admin: string }
    >;

    AdminApproved(
      vault?: string | null,
      circle?: BytesLike | null,
      admin?: string | null
    ): TypedEventFilter<
      [string, string, string],
      { vault: string; circle: string; admin: string }
    >;

    'AllowanceUpdated(address,bytes32,address,uint256,uint256)'(
      vault?: null,
      circle?: null,
      token?: null,
      amount?: null,
      interval?: null
    ): TypedEventFilter<
      [string, string, string, BigNumber, BigNumber],
      {
        vault: string;
        circle: string;
        token: string;
        amount: BigNumber;
        interval: BigNumber;
      }
    >;

    AllowanceUpdated(
      vault?: null,
      circle?: null,
      token?: null,
      amount?: null,
      interval?: null
    ): TypedEventFilter<
      [string, string, string, BigNumber, BigNumber],
      {
        vault: string;
        circle: string;
        token: string;
        amount: BigNumber;
        interval: BigNumber;
      }
    >;

    'Claimed(bytes32,address,uint256,uint256,address,uint256)'(
      circle?: null,
      token?: null,
      epoch?: null,
      index?: null,
      account?: null,
      amount?: null
    ): TypedEventFilter<
      [string, string, BigNumber, BigNumber, string, BigNumber],
      {
        circle: string;
        token: string;
        epoch: BigNumber;
        index: BigNumber;
        account: string;
        amount: BigNumber;
      }
    >;

    Claimed(
      circle?: null,
      token?: null,
      epoch?: null,
      index?: null,
      account?: null,
      amount?: null
    ): TypedEventFilter<
      [string, string, BigNumber, BigNumber, string, BigNumber],
      {
        circle: string;
        token: string;
        epoch: BigNumber;
        index: BigNumber;
        account: string;
        amount: BigNumber;
      }
    >;

    'OwnershipTransferred(address,address)'(
      previousOwner?: string | null,
      newOwner?: string | null
    ): TypedEventFilter<
      [string, string],
      { previousOwner: string; newOwner: string }
    >;

    OwnershipTransferred(
      previousOwner?: string | null,
      newOwner?: string | null
    ): TypedEventFilter<
      [string, string],
      { previousOwner: string; newOwner: string }
    >;

    'apeVaultFundsTapped(address,address,uint256)'(
      apeVault?: string | null,
      yearnVault?: null,
      amount?: null
    ): TypedEventFilter<
      [string, string, BigNumber],
      { apeVault: string; yearnVault: string; amount: BigNumber }
    >;

    apeVaultFundsTapped(
      apeVault?: string | null,
      yearnVault?: null,
      amount?: null
    ): TypedEventFilter<
      [string, string, BigNumber],
      { apeVault: string; yearnVault: string; amount: BigNumber }
    >;
  };

  estimateGas: {
    allowances(
      arg0: string,
      arg1: BytesLike,
      arg2: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    checkpoints(
      arg0: BytesLike,
      arg1: string,
      arg2: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    circleAlloc(
      arg0: BytesLike,
      arg1: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    claim(
      _circle: BytesLike,
      _token: string,
      _epoch: BigNumberish,
      _index: BigNumberish,
      _account: string,
      _checkpoint: BigNumberish,
      _redeemShares: boolean,
      _proof: BytesLike[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    claimMany(
      _circles: BytesLike[],
      _tokensAndAccounts: string[],
      _epochsIndexesCheckpoints: BigNumberish[],
      _redeemShares: boolean[],
      _proofs: BytesLike[][],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    currentAllowances(
      arg0: string,
      arg1: BytesLike,
      arg2: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    epochClaimBitMap(
      arg0: BytesLike,
      arg1: string,
      arg2: BigNumberish,
      arg3: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    epochRoots(
      arg0: BytesLike,
      arg1: string,
      arg2: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    epochTracking(
      arg0: BytesLike,
      arg1: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    isClaimed(
      _circle: BytesLike,
      _token: string,
      _epoch: BigNumberish,
      _index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setAllowance(
      _circle: BytesLike,
      _token: string,
      _amount: BigNumberish,
      _interval: BigNumberish,
      _epochs: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    updateCircleAdmin(
      _circle: BytesLike,
      _admin: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    uploadEpochRoot(
      _vault: string,
      _circle: BytesLike,
      _token: string,
      _root: BytesLike,
      _amount: BigNumberish,
      _tapType: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    vaultApprovals(
      arg0: string,
      arg1: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    allowances(
      arg0: string,
      arg1: BytesLike,
      arg2: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    checkpoints(
      arg0: BytesLike,
      arg1: string,
      arg2: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    circleAlloc(
      arg0: BytesLike,
      arg1: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    claim(
      _circle: BytesLike,
      _token: string,
      _epoch: BigNumberish,
      _index: BigNumberish,
      _account: string,
      _checkpoint: BigNumberish,
      _redeemShares: boolean,
      _proof: BytesLike[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    claimMany(
      _circles: BytesLike[],
      _tokensAndAccounts: string[],
      _epochsIndexesCheckpoints: BigNumberish[],
      _redeemShares: boolean[],
      _proofs: BytesLike[][],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    currentAllowances(
      arg0: string,
      arg1: BytesLike,
      arg2: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    epochClaimBitMap(
      arg0: BytesLike,
      arg1: string,
      arg2: BigNumberish,
      arg3: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    epochRoots(
      arg0: BytesLike,
      arg1: string,
      arg2: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    epochTracking(
      arg0: BytesLike,
      arg1: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    isClaimed(
      _circle: BytesLike,
      _token: string,
      _epoch: BigNumberish,
      _index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setAllowance(
      _circle: BytesLike,
      _token: string,
      _amount: BigNumberish,
      _interval: BigNumberish,
      _epochs: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    updateCircleAdmin(
      _circle: BytesLike,
      _admin: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    uploadEpochRoot(
      _vault: string,
      _circle: BytesLike,
      _token: string,
      _root: BytesLike,
      _amount: BigNumberish,
      _tapType: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    vaultApprovals(
      arg0: string,
      arg1: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
