/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { ApeRouter, ApeRouterInterface } from "../ApeRouter";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_reg",
        type: "address",
      },
      {
        internalType: "address",
        name: "_factory",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "vault",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "token",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "DepositInVault",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    inputs: [],
    name: "apeVaultFactory",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_apeVault",
        type: "address",
      },
      {
        internalType: "address",
        name: "_token",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "delegateDeposit",
    outputs: [
      {
        internalType: "uint256",
        name: "deposited",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_token",
        type: "address",
      },
    ],
    name: "removeTokens",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_registry",
        type: "address",
      },
    ],
    name: "setRegistry",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "yearnRegistry",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b5060405162001d7f38038062001d7f8339818101604052810190620000379190620001c4565b620000576200004b620000e160201b60201c565b620000e960201b60201c565b81600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555080600260006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550505062000253565b600033905090565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050816000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b600081519050620001be8162000239565b92915050565b60008060408385031215620001d857600080fd5b6000620001e885828601620001ad565b9250506020620001fb85828601620001ad565b9150509250929050565b6000620002128262000219565b9050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b620002448162000205565b81146200025057600080fd5b50565b611b1c80620002636000396000f3fe608060405234801561001057600080fd5b50600436106100885760003560e01c8063a91ee0dc1161005b578063a91ee0dc14610103578063bb8703171461011f578063f2fde38b1461013d578063fc50baf51461015957610088565b806347d116dd1461008d57806364b84bc3146100ab578063715018a6146100db5780638da5cb5b146100e5575b600080fd5b610095610175565b6040516100a291906114fe565b60405180910390f35b6100c560048036038101906100c0919061125a565b61019b565b6040516100d291906116e4565b60405180910390f35b6100e3610846565b005b6100ed6108ce565b6040516100fa91906114fe565b60405180910390f35b61011d60048036038101906101189190611208565b6108f7565b005b6101276109b7565b60405161013491906114fe565b60405180910390f35b61015760048036038101906101529190611208565b6109dd565b005b610173600480360381019061016e9190611208565b610ad5565b005b600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600080600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663e177dc70856040518263ffffffff1660e01b81526004016101f991906114fe565b60206040518083038186803b15801561021157600080fd5b505afa158015610225573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906102499190611231565b9050600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614156102bb576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016102b290611624565b60405180910390fd5b600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16635487beb6866040518263ffffffff1660e01b815260040161031691906114fe565b60206040518083038186803b15801561032e57600080fd5b505afa158015610342573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061036691906112a9565b6103a5576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161039c90611664565b60405180910390fd5b8473ffffffffffffffffffffffffffffffffffffffff1663fbfa77cf6040518163ffffffff1660e01b815260040160206040518083038186803b1580156103eb57600080fd5b505afa1580156103ff573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061042391906112d2565b73ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614610490576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161048790611644565b60405180910390fd5b6104bd3330858773ffffffffffffffffffffffffffffffffffffffff16610c6a909392919063ffffffff16565b828473ffffffffffffffffffffffffffffffffffffffff1663dd62ed3e30846040518363ffffffff1660e01b81526004016104f9929190611519565b60206040518083038186803b15801561051157600080fd5b505afa158015610525573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061054991906112fb565b10156105c75761057b8160008673ffffffffffffffffffffffffffffffffffffffff16610cf39092919063ffffffff16565b6105c6817fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8673ffffffffffffffffffffffffffffffffffffffff16610cf39092919063ffffffff16565b5b60008473ffffffffffffffffffffffffffffffffffffffff166370a08231306040518263ffffffff1660e01b815260040161060291906114fe565b60206040518083038186803b15801561061a57600080fd5b505afa15801561062e573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061065291906112fb565b905060008273ffffffffffffffffffffffffffffffffffffffff16636e553f6586896040518363ffffffff1660e01b81526004016106919291906116ff565b602060405180830381600087803b1580156106ab57600080fd5b505af11580156106bf573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906106e391906112fb565b905060008673ffffffffffffffffffffffffffffffffffffffff166370a08231306040518263ffffffff1660e01b815260040161072091906114fe565b60206040518083038186803b15801561073857600080fd5b505afa15801561074c573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061077091906112fb565b9050808361077e919061175a565b94508773ffffffffffffffffffffffffffffffffffffffff1663be999705866040518263ffffffff1660e01b81526004016107b991906116e4565b600060405180830381600087803b1580156107d357600080fd5b505af11580156107e7573d6000803e3d6000fd5b505050508773ffffffffffffffffffffffffffffffffffffffff167fad1daa3a6c907d761416fa1a6d153dc1e6ff1d19b354bbfcbb848e79cecf91898884604051610833929190611579565b60405180910390a2505050509392505050565b61084e610e51565b73ffffffffffffffffffffffffffffffffffffffff1661086c6108ce565b73ffffffffffffffffffffffffffffffffffffffff16146108c2576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016108b990611604565b60405180910390fd5b6108cc6000610e59565b565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b6108ff610e51565b73ffffffffffffffffffffffffffffffffffffffff1661091d6108ce565b73ffffffffffffffffffffffffffffffffffffffff1614610973576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161096a90611604565b60405180910390fd5b80600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6109e5610e51565b73ffffffffffffffffffffffffffffffffffffffff16610a036108ce565b73ffffffffffffffffffffffffffffffffffffffff1614610a59576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610a5090611604565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415610ac9576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610ac0906115c4565b60405180910390fd5b610ad281610e59565b50565b610add610e51565b73ffffffffffffffffffffffffffffffffffffffff16610afb6108ce565b73ffffffffffffffffffffffffffffffffffffffff1614610b51576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610b4890611604565b60405180910390fd5b8073ffffffffffffffffffffffffffffffffffffffff1663a9059cbb338373ffffffffffffffffffffffffffffffffffffffff166370a08231306040518263ffffffff1660e01b8152600401610ba791906114fe565b60206040518083038186803b158015610bbf57600080fd5b505afa158015610bd3573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610bf791906112fb565b6040518363ffffffff1660e01b8152600401610c14929190611579565b602060405180830381600087803b158015610c2e57600080fd5b505af1158015610c42573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610c6691906112a9565b5050565b610ced846323b872dd60e01b858585604051602401610c8b93929190611542565b604051602081830303815290604052907bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff8381831617835250505050610f1d565b50505050565b6000811480610d8c575060008373ffffffffffffffffffffffffffffffffffffffff1663dd62ed3e30856040518363ffffffff1660e01b8152600401610d3a929190611519565b60206040518083038186803b158015610d5257600080fd5b505afa158015610d66573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610d8a91906112fb565b145b610dcb576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610dc2906116c4565b60405180910390fd5b610e4c8363095ea7b360e01b8484604051602401610dea929190611579565b604051602081830303815290604052907bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff8381831617835250505050610f1d565b505050565b600033905090565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050816000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b6000610f7f826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c65648152508573ffffffffffffffffffffffffffffffffffffffff16610fe49092919063ffffffff16565b9050600081511115610fdf5780806020019051810190610f9f91906112a9565b610fde576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610fd5906116a4565b60405180910390fd5b5b505050565b6060610ff38484600085610ffc565b90509392505050565b606082471015611041576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611038906115e4565b60405180910390fd5b61104a85611110565b611089576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161108090611684565b60405180910390fd5b6000808673ffffffffffffffffffffffffffffffffffffffff1685876040516110b291906114e7565b60006040518083038185875af1925050503d80600081146110ef576040519150601f19603f3d011682016040523d82523d6000602084013e6110f4565b606091505b5091509150611104828286611123565b92505050949350505050565b600080823b905060008111915050919050565b6060831561113357829050611183565b6000835111156111465782518084602001fd5b816040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161117a91906115a2565b60405180910390fd5b9392505050565b60008135905061119981611a8a565b92915050565b6000815190506111ae81611a8a565b92915050565b6000815190506111c381611aa1565b92915050565b6000815190506111d881611ab8565b92915050565b6000813590506111ed81611acf565b92915050565b60008151905061120281611acf565b92915050565b60006020828403121561121a57600080fd5b60006112288482850161118a565b91505092915050565b60006020828403121561124357600080fd5b60006112518482850161119f565b91505092915050565b60008060006060848603121561126f57600080fd5b600061127d8682870161118a565b935050602061128e8682870161118a565b925050604061129f868287016111de565b9150509250925092565b6000602082840312156112bb57600080fd5b60006112c9848285016111b4565b91505092915050565b6000602082840312156112e457600080fd5b60006112f2848285016111c9565b91505092915050565b60006020828403121561130d57600080fd5b600061131b848285016111f3565b91505092915050565b61132d8161178e565b82525050565b600061133e82611728565b611348818561173e565b93506113588185602086016117e8565b80840191505092915050565b600061136f82611733565b6113798185611749565b93506113898185602086016117e8565b6113928161184a565b840191505092915050565b60006113aa602683611749565b91506113b58261185b565b604082019050919050565b60006113cd602683611749565b91506113d8826118aa565b604082019050919050565b60006113f0602083611749565b91506113fb826118f9565b602082019050919050565b6000611413601d83611749565b915061141e82611922565b602082019050919050565b6000611436602483611749565b91506114418261194b565b604082019050919050565b6000611459601f83611749565b91506114648261199a565b602082019050919050565b600061147c601d83611749565b9150611487826119c3565b602082019050919050565b600061149f602a83611749565b91506114aa826119ec565b604082019050919050565b60006114c2603683611749565b91506114cd82611a3b565b604082019050919050565b6114e1816117de565b82525050565b60006114f38284611333565b915081905092915050565b60006020820190506115136000830184611324565b92915050565b600060408201905061152e6000830185611324565b61153b6020830184611324565b9392505050565b60006060820190506115576000830186611324565b6115646020830185611324565b61157160408301846114d8565b949350505050565b600060408201905061158e6000830185611324565b61159b60208301846114d8565b9392505050565b600060208201905081810360008301526115bc8184611364565b905092915050565b600060208201905081810360008301526115dd8161139d565b9050919050565b600060208201905081810360008301526115fd816113c0565b9050919050565b6000602082019050818103600083015261161d816113e3565b9050919050565b6000602082019050818103600083015261163d81611406565b9050919050565b6000602082019050818103600083015261165d81611429565b9050919050565b6000602082019050818103600083015261167d8161144c565b9050919050565b6000602082019050818103600083015261169d8161146f565b9050919050565b600060208201905081810360008301526116bd81611492565b9050919050565b600060208201905081810360008301526116dd816114b5565b9050919050565b60006020820190506116f960008301846114d8565b92915050565b600060408201905061171460008301856114d8565b6117216020830184611324565b9392505050565b600081519050919050565b600081519050919050565b600081905092915050565b600082825260208201905092915050565b6000611765826117de565b9150611770836117de565b9250828210156117835761178261181b565b5b828203905092915050565b6000611799826117be565b9050919050565b60008115159050919050565b60006117b78261178e565b9050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b60005b838110156118065780820151818401526020810190506117eb565b83811115611815576000848401525b50505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000601f19601f8301169050919050565b7f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160008201527f6464726573730000000000000000000000000000000000000000000000000000602082015250565b7f416464726573733a20696e73756666696369656e742062616c616e636520666f60008201527f722063616c6c0000000000000000000000000000000000000000000000000000602082015250565b7f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572600082015250565b7f417065526f757465723a204e6f207661756c7420666f7220746f6b656e000000600082015250565b7f417065526f757465723a20796561726e205661756c74206e6f74206964656e7460008201527f6963616c00000000000000000000000000000000000000000000000000000000602082015250565b7f417065526f757465723a205661756c7420646f6573206e6f7420657869737400600082015250565b7f416464726573733a2063616c6c20746f206e6f6e2d636f6e7472616374000000600082015250565b7f5361666545524332303a204552433230206f7065726174696f6e20646964206e60008201527f6f74207375636365656400000000000000000000000000000000000000000000602082015250565b7f5361666545524332303a20617070726f76652066726f6d206e6f6e2d7a65726f60008201527f20746f206e6f6e2d7a65726f20616c6c6f77616e636500000000000000000000602082015250565b611a938161178e565b8114611a9e57600080fd5b50565b611aaa816117a0565b8114611ab557600080fd5b50565b611ac1816117ac565b8114611acc57600080fd5b50565b611ad8816117de565b8114611ae357600080fd5b5056fea26469706673582212205a9570102f0117acb483a16640cd71defb2c26509e7af02c229ff52db7c2353164736f6c63430008020033";

export class ApeRouter__factory extends ContractFactory {
  constructor(
    ...args: [signer: Signer] | ConstructorParameters<typeof ContractFactory>
  ) {
    if (args.length === 1) {
      super(_abi, _bytecode, args[0]);
    } else {
      super(...args);
    }
  }

  deploy(
    _reg: string,
    _factory: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ApeRouter> {
    return super.deploy(_reg, _factory, overrides || {}) as Promise<ApeRouter>;
  }
  getDeployTransaction(
    _reg: string,
    _factory: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_reg, _factory, overrides || {});
  }
  attach(address: string): ApeRouter {
    return super.attach(address) as ApeRouter;
  }
  connect(signer: Signer): ApeRouter__factory {
    return super.connect(signer) as ApeRouter__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ApeRouterInterface {
    return new utils.Interface(_abi) as ApeRouterInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ApeRouter {
    return new Contract(address, _abi, signerOrProvider) as ApeRouter;
  }
}