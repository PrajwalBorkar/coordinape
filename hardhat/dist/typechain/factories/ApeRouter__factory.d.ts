import { Signer, BigNumberish, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { ApeRouter, ApeRouterInterface } from "../ApeRouter";
export declare class ApeRouter__factory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(_reg: string, _factory: string, _minDelay: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ApeRouter>;
    getDeployTransaction(_reg: string, _factory: string, _minDelay: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): ApeRouter;
    connect(signer: Signer): ApeRouter__factory;
    static readonly abi: ({
            type: string;
        }[];
        stateMutability: string;
        type: string;
        anonymous?: undefined;
        name?: undefined;
        outputs?: undefined;
    } | {
        anonymous: boolean;
        inputs: {
            indexed: boolean;
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        type: string;
        stateMutability?: undefined;
        outputs?: undefined;
    } | {
        inputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        outputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        stateMutability: string;
        type: string;
        anonymous?: undefined;
    })[];
    static createInterface(): ApeRouterInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): ApeRouter;
}
