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
} from "ethers";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";
import type { TypedEventFilter, TypedEvent, TypedListener } from "./common";

interface AirdropInterface extends ethers.utils.Interface {
  functions: {
    "claimAirdrop()": FunctionFragment;
    "holders(address)": FunctionFragment;
    "memeCoinAddress()": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "claimAirdrop",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "holders", values: [string]): string;
  encodeFunctionData(
    functionFragment: "memeCoinAddress",
    values?: undefined
  ): string;

  decodeFunctionResult(
    functionFragment: "claimAirdrop",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "holders", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "memeCoinAddress",
    data: BytesLike
  ): Result;

  events: {
    "AirdropEvent(address,uint256,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "AirdropEvent"): EventFragment;
}

export type AirdropEventEvent = TypedEvent<
  [string, BigNumber, BigNumber] & {
    sender: string;
    holderId: BigNumber;
    amount: BigNumber;
  }
>;

export class Airdrop extends BaseContract {
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

  interface: AirdropInterface;

  functions: {
    claimAirdrop(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    holders(arg0: string, overrides?: CallOverrides): Promise<[boolean]>;

    memeCoinAddress(overrides?: CallOverrides): Promise<[string]>;
  };

  claimAirdrop(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  holders(arg0: string, overrides?: CallOverrides): Promise<boolean>;

  memeCoinAddress(overrides?: CallOverrides): Promise<string>;

  callStatic: {
    claimAirdrop(overrides?: CallOverrides): Promise<void>;

    holders(arg0: string, overrides?: CallOverrides): Promise<boolean>;

    memeCoinAddress(overrides?: CallOverrides): Promise<string>;
  };

  filters: {
    "AirdropEvent(address,uint256,uint256)"(
      sender?: string | null,
      holderId?: null,
      amount?: null
    ): TypedEventFilter<
      [string, BigNumber, BigNumber],
      { sender: string; holderId: BigNumber; amount: BigNumber }
    >;

    AirdropEvent(
      sender?: string | null,
      holderId?: null,
      amount?: null
    ): TypedEventFilter<
      [string, BigNumber, BigNumber],
      { sender: string; holderId: BigNumber; amount: BigNumber }
    >;
  };

  estimateGas: {
    claimAirdrop(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    holders(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    memeCoinAddress(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    claimAirdrop(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    holders(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    memeCoinAddress(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}
