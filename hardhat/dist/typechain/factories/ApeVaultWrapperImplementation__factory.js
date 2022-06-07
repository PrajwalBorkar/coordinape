'use strict';
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
Object.defineProperty(exports, '__esModule', { value: true });
exports.ApeVaultWrapperImplementation__factory = void 0;
const ethers_1 = require('ethers');
const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'apeVault',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'address',
        name: 'vault',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: '_amount',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'bool',
        name: 'underlying',
        type: 'bool',
      },
    ],
    name: 'ApeVaultFundWithdrawal',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'previousOwner',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'newOwner',
        type: 'address',
      },
    ],
    name: 'OwnershipTransferred',
    type: 'event',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: '_amount',
        type: 'uint256',
      },
    ],
    name: 'addFunds',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'allVaults',
    outputs: [
      {
        internalType: 'contract VaultAPI[]',
        name: '',
        type: 'address[]',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'apeMigrate',
    outputs: [
      {
        internalType: 'uint256',
        name: 'migrated',
        type: 'uint256',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'apeRegistry',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: '_shareAmount',
        type: 'uint256',
      },
      {
        internalType: 'bool',
        name: '_underlying',
        type: 'bool',
      },
    ],
    name: 'apeWithdraw',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: '_amount',
        type: 'uint256',
      },
    ],
    name: 'apeWithdrawSimpleToken',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'bestVault',
    outputs: [
      {
        internalType: 'contract VaultAPI',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'bool',
        name: '_underlying',
        type: 'bool',
      },
    ],
    name: 'exitVaultToken',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_apeRegistry',
        type: 'address',
      },
      {
        internalType: 'address',
        name: '_token',
        type: 'address',
      },
      {
        internalType: 'address',
        name: '_registry',
        type: 'address',
      },
      {
        internalType: 'address',
        name: '_simpleToken',
        type: 'address',
      },
      {
        internalType: 'address',
        name: '_newOwner',
        type: 'address',
      },
    ],
    name: 'init',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'owner',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'profit',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'registry',
    outputs: [
      {
        internalType: 'contract RegistryAPI',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'renounceOwnership',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_registry',
        type: 'address',
      },
    ],
    name: 'setRegistry',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'numShares',
        type: 'uint256',
      },
    ],
    name: 'shareValue',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256',
      },
    ],
    name: 'sharesForValue',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'simpleToken',
    outputs: [
      {
        internalType: 'contract IERC20',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'syncUnderlying',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: '_value',
        type: 'uint256',
      },
      {
        internalType: 'uint8',
        name: '_type',
        type: 'uint8',
      },
    ],
    name: 'tap',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'token',
    outputs: [
      {
        internalType: 'contract IERC20',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'totalAssets',
    outputs: [
      {
        internalType: 'uint256',
        name: 'assets',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'account',
        type: 'address',
      },
    ],
    name: 'totalVaultBalance',
    outputs: [
      {
        internalType: 'uint256',
        name: 'balance',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'newOwner',
        type: 'address',
      },
    ],
    name: 'transferOwnership',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'underlyingValue',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'bytes32',
        name: '_circle',
        type: 'bytes32',
      },
      {
        internalType: 'address',
        name: '_token',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: '_amount',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: '_interval',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: '_epochAmount',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: '_intervalStart',
        type: 'uint256',
      },
    ],
    name: 'updateAllowance',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'bytes32',
        name: '_circle',
        type: 'bytes32',
      },
      {
        internalType: 'address',
        name: '_admin',
        type: 'address',
      },
    ],
    name: 'updateCircleAdmin',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'vault',
    outputs: [
      {
        internalType: 'contract VaultAPI',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
];
const _bytecode =
  '0x608060405234801561001057600080fd5b50613b3a806100206000396000f3fe608060405234801561001057600080fd5b50600436106101495760003560e01c806301e1d1141461014e578063063effeb146101695780631963e7f81461017e5780632a64e6351461019357806330e5065e146101b357806331be3a60146101c6578063335df652146101d9578063359ef75b146101ec5780633a5d5a39146101ff57806344552b5f1461021257806366d16cc31461021a578063715018a6146102225780637b1039991461022a5780638c3268761461023d5780638da5cb5b14610246578063974d8c931461024e578063a91ee0dc14610261578063ac4ec17114610274578063b9c4b49614610287578063be9997051461029a578063e1ded2de146102ad578063e95b2de8146102c0578063f030d912146102c8578063f2fde38b146102db578063f5c16af3146102ee578063fbfa77cf146102f6578063fc0c546a14610309575b600080fd5b61015661031c565b6040519081526020015b60405180910390f35b6101716103f0565b6040516101609190613816565b61019161018c36600461370e565b6106b7565b005b6004546101a6906001600160a01b031681565b6040516101609190613777565b6101566101c1366004613580565b6108fa565b6101916101d4366004613628565b610b21565b6101916101e73660046136de565b610d67565b6101916101fa3660046135b8565b610db0565b61019161020d366004613660565b610f2e565b610191611046565b6101566110fc565b610191611161565b6002546101a6906001600160a01b031681565b61015660055481565b6101a66111c8565b61015661025c3660046136de565b6111d7565b61019161026f366004613580565b6112f5565b61019161028236600461368f565b611449565b6006546101a6906001600160a01b031681565b6101916102a83660046136de565b611586565b6101566102bb3660046136de565b611643565b6101a661175b565b6101566102d6366004613732565b6117e6565b6101916102e9366004613580565b6118ce565b6101566119ac565b6007546101a6906001600160a01b031681565b6000546101a6906001600160a01b031681565b6000806103276103f0565b905060005b81518110156103eb576103d782828151811061035857634e487b7160e01b600052603260045260246000fd5b60200260200101516001600160a01b03166301e1d1146040518163ffffffff1660e01b815260040160206040518083038186803b15801561039857600080fd5b505afa1580156103ac573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906103d091906136f6565b8490611a8f565b9250806103e381613a90565b91505061032c565b505090565b6001546002546000805460405163f9c7bba560e01b8152606094936001600160a01b039081169263f9c7bba59261042d9290911690600401613777565b60206040518083038186803b15801561044557600080fd5b505afa158015610459573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061047d91906136f6565b9050808214156104eb5760018054806020026020016040519081016040528092919081815260200182805480156104dd57602002820191906000526020600020905b81546001600160a01b031681526001909101906020018083116104bf575b5050505050925050506106b4565b6000816001600160401b0381111561051357634e487b7160e01b600052604160045260246000fd5b60405190808252806020026020018201604052801561053c578160200160208202803683370190505b50905060005b838110156105d3576001818154811061056b57634e487b7160e01b600052603260045260246000fd5b9060005260206000200160009054906101000a90046001600160a01b03168282815181106105a957634e487b7160e01b600052603260045260246000fd5b6001600160a01b0390921660209283029190910190910152806105cb81613a90565b915050610542565b50825b828110156106ae57600254600054604051633ddfe34f60e11b81526001600160a01b0392831692637bbfc69e926106149291169085906004016137fd565b60206040518083038186803b15801561062c57600080fd5b505afa158015610640573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610664919061359c565b82828151811061068457634e487b7160e01b600052603260045260246000fd5b6001600160a01b0390921660209283029190910190910152806106a681613a90565b9150506105d6565b50925050505b90565b336106c06111c8565b6001600160a01b0316146106ef5760405162461bcd60e51b81526004016106e6906138ad565b60405180910390fd5b60006106fa836111d7565b90506005548111156107605760405162461bcd60e51b815260206004820152602960248201527f756e6465726c79696e6720616d6f756e7420686967686572207468616e207661604482015268756c742076616c756560b81b60648201526084016106e6565b600654604080516303e21fa960e61b815290516000926001600160a01b03169163f887ea40916004808301926020929190829003018186803b1580156107a557600080fd5b505afa1580156107b9573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906107dd919061359c565b905081600560008282546107f19190613a4d565b909155505060075461080d906001600160a01b03168286611aa2565b806001600160a01b031663499ab9766108246111c8565b60075460408051637e062a3560e11b8152905130926001600160a01b03169163fc0c546a916004808301926020929190829003018186803b15801561086857600080fd5b505afa15801561087c573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906108a0919061359c565b88886040518663ffffffff1660e01b81526004016108c29594939291906137a5565b600060405180830381600087803b1580156108dc57600080fd5b505af11580156108f0573d6000803e3d6000fd5b5050505050505050565b6000806109056103f0565b905060005b8151811015610b1a57610b066103d083838151811061093957634e487b7160e01b600052603260045260246000fd5b60200260200101516001600160a01b031663313ce5676040518163ffffffff1660e01b815260040160206040518083038186803b15801561097957600080fd5b505afa15801561098d573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906109b191906136f6565b6109bc90600a613960565b610b008585815181106109df57634e487b7160e01b600052603260045260246000fd5b60200260200101516001600160a01b03166399530b066040518163ffffffff1660e01b815260040160206040518083038186803b158015610a1f57600080fd5b505afa158015610a33573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610a5791906136f6565b868681518110610a7757634e487b7160e01b600052603260045260246000fd5b60200260200101516001600160a01b03166370a082318a6040518263ffffffff1660e01b8152600401610aaa9190613777565b60206040518083038186803b158015610ac257600080fd5b505afa158015610ad6573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610afa91906136f6565b90611afd565b90611b09565b925080610b1281613a90565b91505061090a565b5050919050565b33610b2a6111c8565b6001600160a01b031614610b505760405162461bcd60e51b81526004016106e6906138ad565b600060058190556007546040516370a0823160e01b81526001600160a01b03909116906370a0823190610b87903090600401613777565b60206040518083038186803b158015610b9f57600080fd5b505afa158015610bb3573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610bd791906136f6565b90506000600660009054906101000a90046001600160a01b03166001600160a01b031663f887ea406040518163ffffffff1660e01b815260040160206040518083038186803b158015610c2957600080fd5b505afa158015610c3d573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610c61919061359c565b600754909150610c7b906001600160a01b03168284611aa2565b806001600160a01b031663499ab976610c926111c8565b60075460408051637e062a3560e11b8152905130926001600160a01b03169163fc0c546a916004808301926020929190829003018186803b158015610cd657600080fd5b505afa158015610cea573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610d0e919061359c565b86886040518663ffffffff1660e01b8152600401610d309594939291906137a5565b600060405180830381600087803b158015610d4a57600080fd5b505af1158015610d5e573d6000803e3d6000fd5b50505050505050565b33610d706111c8565b6001600160a01b031614610d965760405162461bcd60e51b81526004016106e6906138ad565b600454610dad906001600160a01b03163383611aa2565b50565b600454600160a01b900460ff1615610dc757600080fd5b6001600160a01b038416151580610de657506001600160a01b03821615155b610def57600080fd5b6004805460ff60a01b1916600160a01b179055600680546001600160a01b038088166001600160a01b031990921691909117909155841615610ec857604051630e177dc760e41b81526001600160a01b0384169063e177dc7090610e57908790600401613777565b60206040518083038186803b158015610e6f57600080fd5b505afa158015610e83573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610ea7919061359c565b600780546001600160a01b0319166001600160a01b03929092169190911790555b600480546001600160a01b038085166001600160a01b031992831617909255600080548784169083161781556002805487851690841617905560038054938516939092168317909155604051600080516020613ae5833981519152908290a35050505050565b33610f376111c8565b6001600160a01b031614610f5d5760405162461bcd60e51b81526004016106e6906138ad565b600660009054906101000a90046001600160a01b03166001600160a01b031663bfe109286040518163ffffffff1660e01b815260040160206040518083038186803b158015610fab57600080fd5b505afa158015610fbf573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610fe3919061359c565b6001600160a01b0316633a5d5a3983836040518363ffffffff1660e01b8152600401611010929190613863565b600060405180830381600087803b15801561102a57600080fd5b505af115801561103e573d6000803e3d6000fd5b505050505050565b3361104f6111c8565b6001600160a01b0316146110755760405162461bcd60e51b81526004016106e6906138ad565b6007546040516370a0823160e01b81526110f7916001600160a01b0316906370a08231906110a7903090600401613777565b60206040518083038186803b1580156110bf57600080fd5b505afa1580156110d3573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061025c91906136f6565b600555565b6007546040516370a0823160e01b81526000918291611133916001600160a01b0316906370a08231906110a7903090600401613777565b905060055481116111485760009150506106b4565b6005546111559082613a4d565b9150506106b4565b5090565b3361116a6111c8565b6001600160a01b0316146111905760405162461bcd60e51b81526004016106e6906138ad565b6003546040516000916001600160a01b031690600080516020613ae5833981519152908390a3600380546001600160a01b0319169055565b6003546001600160a01b031690565b6007546040805163313ce56760e01b815290516000926001600160a01b03169163313ce567916004808301926020929190829003018186803b15801561121c57600080fd5b505afa158015611230573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061125491906136f6565b61125f90600a613960565b60075460408051634ca9858360e11b8152905185926001600160a01b0316916399530b06916004808301926020929190829003018186803b1580156112a357600080fd5b505afa1580156112b7573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906112db91906136f6565b6112e59190613a2e565b6112ef91906138fa565b92915050565b600260009054906101000a90046001600160a01b03166001600160a01b0316635aa6e6756040518163ffffffff1660e01b815260040160206040518083038186803b15801561134357600080fd5b505afa158015611357573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061137b919061359c565b6001600160a01b0316336001600160a01b03161461139857600080fd5b600280546001600160a01b0319166001600160a01b03838116919091179182905560408051635aa6e67560e01b815290519290911691635aa6e67591600480820192602092909190829003018186803b1580156113f457600080fd5b505afa158015611408573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061142c919061359c565b6001600160a01b0316336001600160a01b031614610dad57600080fd5b336114526111c8565b6001600160a01b0316146114785760405162461bcd60e51b81526004016106e6906138ad565b600660009054906101000a90046001600160a01b03166001600160a01b031663bfe109286040518163ffffffff1660e01b815260040160206040518083038186803b1580156114c657600080fd5b505afa1580156114da573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906114fe919061359c565b60405163a7fde93f60e01b8152600481018890526001600160a01b03878116602483015260448201879052606482018690526084820185905260a48201849052919091169063a7fde93f9060c401600060405180830381600087803b15801561156657600080fd5b505af115801561157a573d6000803e3d6000fd5b50505050505050505050565b600660009054906101000a90046001600160a01b03166001600160a01b031663f887ea406040518163ffffffff1660e01b815260040160206040518083038186803b1580156115d457600080fd5b505afa1580156115e8573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061160c919061359c565b6001600160a01b0316336001600160a01b03161461162957600080fd5b806005600082825461163b91906138e2565b909155505050565b60075460408051634ca9858360e11b815290516000926001600160a01b0316916399530b06916004808301926020929190829003018186803b15801561168857600080fd5b505afa15801561169c573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906116c091906136f6565b600760009054906101000a90046001600160a01b03166001600160a01b031663313ce5676040518163ffffffff1660e01b815260040160206040518083038186803b15801561170e57600080fd5b505afa158015611722573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061174691906136f6565b61175190600a613960565b6112e59084613a2e565b60025460008054604051630e177dc760e41b815291926001600160a01b039081169263e177dc7092611791921690600401613777565b60206040518083038186803b1580156117a957600080fd5b505afa1580156117bd573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906117e1919061359c565b905090565b600654604080516317fc212560e31b815290516000926001600160a01b03169163bfe10928916004808301926020929190829003018186803b15801561182b57600080fd5b505afa15801561183f573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611863919061359c565b6001600160a01b0316336001600160a01b03161461188057600080fd5b60ff8216611899576118928333611b15565b50816112ef565b60ff8216600114156118af576118928333611d60565b60ff8216600214156118c5576118c58333611f76565b50600092915050565b336118d76111c8565b6001600160a01b0316146118fd5760405162461bcd60e51b81526004016106e6906138ad565b6001600160a01b0381166119625760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b60648201526084016106e6565b6003546040516001600160a01b03808416921690600080516020613ae583398151915290600090a3600380546001600160a01b0319166001600160a01b0392909216919091179055565b6000336119b76111c8565b6001600160a01b0316146119dd5760405162461bcd60e51b81526004016106e6906138ad565b6119e630612130565b600254600054604051630e177dc760e41b81529293506001600160a01b039182169263e177dc7092611a1c921690600401613777565b60206040518083038186803b158015611a3457600080fd5b505afa158015611a48573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611a6c919061359c565b600780546001600160a01b0319166001600160a01b039290921691909117905590565b6000611a9b82846138e2565b9392505050565b611af88363a9059cbb60e01b8484604051602401611ac19291906137fd565b60408051601f198184030181529190526020810180516001600160e01b03166001600160e01b03199093169290921790915261213e565b505050565b6000611a9b8284613a2e565b6000611a9b82846138fa565b60065460408051631674811760e31b815290516000926001600160a01b03169163b3a408b8916004808301926020929190829003018186803b158015611b5a57600080fd5b505afa158015611b6e573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611b92919061359c565b604051636a89e82d60e01b815260048101859052602481018590526001600160a01b039190911690636a89e82d90604401602060405180830381600087803b158015611bdd57600080fd5b505af1158015611bf1573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611c1591906136f6565b90506000612710611c268386613a2e565b611c3091906138fa565b611c3a90856138e2565b9050611c446110fc565b611c4d826111d7565b1115611c9b5760405162461bcd60e51b815260206004820181905260248201527f4e6f7420656e6f7567682070726f66697420746f20636f7665722065706f636860448201526064016106e6565b600754611cb2906001600160a01b03168486611aa2565b600654604080516361d027b360e01b81529051611d5a926001600160a01b0316916361d027b3916004808301926020929190829003018186803b158015611cf857600080fd5b505afa158015611d0c573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611d30919061359c565b612710611d3d8588613a2e565b611d4791906138fa565b6007546001600160a01b03169190611aa2565b50505050565b6000611d6b836111d7565b90506000611d776110fc565b90506000600660009054906101000a90046001600160a01b03166001600160a01b031663b3a408b86040518163ffffffff1660e01b815260040160206040518083038186803b158015611dc957600080fd5b505afa158015611ddd573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611e01919061359c565b604051636a89e82d60e01b815260048101849052602481018590526001600160a01b039190911690636a89e82d90604401602060405180830381600087803b158015611e4c57600080fd5b505af1158015611e60573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611e8491906136f6565b90506000612710611e958386613a2e565b611e9f91906138fa565b611ea990856138e2565b905082811115611ed457611ebd8382613a4d565b60056000828254611ece9190613a4d565b90915550505b600754611eeb906001600160a01b03168688611aa2565b600654604080516361d027b360e01b8152905161103e926001600160a01b0316916361d027b3916004808301926020929190829003018186803b158015611f3157600080fd5b505afa158015611f45573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611f69919061359c565b612710611d3d858a613a2e565b6000612710600660009054906101000a90046001600160a01b03166001600160a01b031663b3a408b86040518163ffffffff1660e01b815260040160206040518083038186803b158015611fc957600080fd5b505afa158015611fdd573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190612001919061359c565b6001600160a01b031663231051b46040518163ffffffff1660e01b815260040160206040518083038186803b15801561203957600080fd5b505afa15801561204d573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061207191906136f6565b61207b9085613a2e565b61208591906138fa565b60045490915061209f906001600160a01b03168385611aa2565b600654604080516361d027b360e01b81529051611af8926001600160a01b0316916361d027b3916004808301926020929190829003018186803b1580156120e557600080fd5b505afa1580156120f9573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061211d919061359c565b6004546001600160a01b03169083611aa2565b60006112ef82600019612210565b6000612193826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c6564815250856001600160a01b031661221e9092919063ffffffff16565b805190915015611af857808060200190518101906121b19190613644565b611af85760405162461bcd60e51b815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e6044820152691bdd081cdd58d8d9595960b21b60648201526084016106e6565b6000611a9b83836000612235565b606061222d84846000856123cf565b949350505050565b60008061224061175b565b90506000816001600160a01b031663ecf708586040518163ffffffff1660e01b815260040160206040518083038186803b15801561227d57600080fd5b505afa158015612291573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906122b591906136f6565b90506000826001600160a01b03166301e1d1146040518163ffffffff1660e01b815260040160206040518083038186803b1580156122f257600080fd5b505afa158015612306573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061232a91906136f6565b905080821161233f5760009350505050611a9b565b8560001983108015612352575060001981105b1561237357600061236384846124f7565b905080821115612371578091505b505b80156123c45760006123888930846000612503565b90508061239d57600095505050505050611a9b565b6123aa308a836000612f49565b9550866123b782886124f7565b11156123c257600080fd5b505b505050509392505050565b6060824710156124305760405162461bcd60e51b815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f6044820152651c8818d85b1b60d21b60648201526084016106e6565b843b61247e5760405162461bcd60e51b815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e747261637400000060448201526064016106e6565b600080866001600160a01b0316858760405161249a919061375b565b60006040518083038185875af1925050503d80600081146124d7576040519150601f19603f3d011682016040523d82523d6000602084013e6124dc565b606091505b50915091506124ec82828661336b565b979650505050505050565b6000611a9b8284613a4d565b60008061250e61175b565b9050600061251a6103f0565b9050612525816133a4565b60005b8151811015612cd357841580156125775750826001600160a01b031682828151811061256457634e487b7160e01b600052603260045260246000fd5b60200260200101516001600160a01b0316145b1561258157612cc1565b60008282815181106125a357634e487b7160e01b600052603260045260246000fd5b60200260200101516001600160a01b03166370a082318a6040518263ffffffff1660e01b81526004016125d69190613777565b60206040518083038186803b1580156125ee57600080fd5b505afa158015612602573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061262691906136f6565b90506001600160a01b03891630146126e9576126e68184848151811061265c57634e487b7160e01b600052603260045260246000fd5b60200260200101516001600160a01b031663dd62ed3e8c306040518363ffffffff1660e01b815260040161269192919061378b565b60206040518083038186803b1580156126a957600080fd5b505afa1580156126bd573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906126e191906136f6565b6133c6565b90505b61274d8184848151811061270d57634e487b7160e01b600052603260045260246000fd5b60200260200101516001600160a01b03166375de29026040518163ffffffff1660e01b815260040160206040518083038186803b1580156126a957600080fd5b90508015612cbf576000198714612b505760006128ab84848151811061278357634e487b7160e01b600052603260045260246000fd5b60200260200101516001600160a01b03166399530b066040518163ffffffff1660e01b815260040160206040518083038186803b1580156127c357600080fd5b505afa1580156127d7573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906127fb91906136f6565b610b0086868151811061281e57634e487b7160e01b600052603260045260246000fd5b60200260200101516001600160a01b031663313ce5676040518163ffffffff1660e01b815260040160206040518083038186803b15801561285e57600080fd5b505afa158015612872573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061289691906136f6565b6128a190600a613960565b610afa8c8b6124f7565b90506000811180156128bc57508181105b15612a34576001600160a01b038a16301461297c578383815181106128f157634e487b7160e01b600052603260045260246000fd5b60200260200101516001600160a01b03166323b872dd8b30846040518463ffffffff1660e01b8152600401612928939291906137d9565b602060405180830381600087803b15801561294257600080fd5b505af1158015612956573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061297a9190613644565b505b612a2d84848151811061299f57634e487b7160e01b600052603260045260246000fd5b60200260200101516001600160a01b0316632e1a7d4d836040518263ffffffff1660e01b81526004016129d491815260200190565b602060405180830381600087803b1580156129ee57600080fd5b505af1158015612a02573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190612a2691906136f6565b8790611a8f565b9550612b4a565b6001600160a01b038a163014612aef57838381518110612a6457634e487b7160e01b600052603260045260246000fd5b60200260200101516001600160a01b03166323b872dd8b30856040518463ffffffff1660e01b8152600401612a9b939291906137d9565b602060405180830381600087803b158015612ab557600080fd5b505af1158015612ac9573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190612aed9190613644565b505b612b47848481518110612b1257634e487b7160e01b600052603260045260246000fd5b60200260200101516001600160a01b0316632e1a7d4d846040518263ffffffff1660e01b81526004016129d491815260200190565b95505b50612cb2565b6001600160a01b0389163014612c0b57828281518110612b8057634e487b7160e01b600052603260045260246000fd5b60200260200101516001600160a01b03166323b872dd8a30846040518463ffffffff1660e01b8152600401612bb7939291906137d9565b602060405180830381600087803b158015612bd157600080fd5b505af1158015612be5573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190612c099190613644565b505b612caf838381518110612c2e57634e487b7160e01b600052603260045260246000fd5b60200260200101516001600160a01b0316633ccfd60b6040518163ffffffff1660e01b8152600401602060405180830381600087803b158015612c7057600080fd5b505af1158015612c84573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190612ca891906136f6565b8690611a8f565b94505b848711612cbf5750612cd3565b505b80612ccb81613a90565b915050612528565b508483118015612dda5750612dce826001600160a01b031663313ce5676040518163ffffffff1660e01b815260040160206040518083038186803b158015612d1a57600080fd5b505afa158015612d2e573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190612d5291906136f6565b612d5d90600a613960565b836001600160a01b03166399530b066040518163ffffffff1660e01b815260040160206040518083038186803b158015612d9657600080fd5b505afa158015612daa573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610b0091906136f6565b612dd884876124f7565b115b15612f1857612de983866124f7565b600054604051636eb1769f60e11b81526001600160a01b039091169063dd62ed3e90612e1b903090879060040161378b565b60206040518083038186803b158015612e3357600080fd5b505afa158015612e47573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190612e6b91906136f6565b1015612e8a57600054612e8a906001600160a01b0316836000196133dc565b6001600160a01b038216636e553f65612ea385886124f7565b896040518363ffffffff1660e01b8152600401612ec1929190613863565b602060405180830381600087803b158015612edb57600080fd5b505af1158015612eef573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190612f1391906136f6565b508492505b6001600160a01b0386163014612f3f57600054612f3f906001600160a01b03168785611aa2565b5050949350505050565b600080612f5461175b565b9050821561301c576000198414612f8257600054612f7d906001600160a01b03168730876134ee565b61301c565b6000546040516370a0823160e01b815261301c91889130916001600160a01b0316906370a0823190612fb8908590600401613777565b60206040518083038186803b158015612fd057600080fd5b505afa158015612fe4573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061300891906136f6565b6000546001600160a01b03169291906134ee565b600054604051636eb1769f60e11b815285916001600160a01b03169063dd62ed3e9061304e903090869060040161378b565b60206040518083038186803b15801561306657600080fd5b505afa15801561307a573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061309e91906136f6565b10156130d857600080546130bf916001600160a01b039091169083906133dc565b6000546130d8906001600160a01b0316826000196133dc565b600080546040516370a0823160e01b81526001600160a01b03909116906370a0823190613109903090600401613777565b60206040518083038186803b15801561312157600080fd5b505afa158015613135573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061315991906136f6565b90506001600160a01b03861630146131f157604051636e553f6560e01b81526001600160a01b03831690636e553f65906131999088908a90600401613863565b602060405180830381600087803b1580156131b357600080fd5b505af11580156131c7573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906131eb91906136f6565b5061329c565b60001985146132275760405163b6b55f2560e01b8152600481018690526001600160a01b0383169063b6b55f2590602401613199565b816001600160a01b031663d0e30db06040518163ffffffff1660e01b8152600401602060405180830381600087803b15801561326257600080fd5b505af1158015613276573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061329a91906136f6565b505b600080546040516370a0823160e01b81526001600160a01b03909116906370a08231906132cd903090600401613777565b60206040518083038186803b1580156132e557600080fd5b505afa1580156132f9573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061331d91906136f6565b905061332982826124f7565b93506001600160a01b03881630148015906133445750600081115b1561336057600054613360906001600160a01b03168983611aa2565b505050949350505050565b6060831561337a575081611a9b565b82511561338a5782518084602001fd5b8160405162461bcd60e51b81526004016106e6919061387a565b60015481511115610dad5780516133c290600190602084019061350f565b5050565b60008183106133d55781611a9b565b5090919050565b8015806134645750604051636eb1769f60e11b81526001600160a01b0384169063dd62ed3e90613412903090869060040161378b565b60206040518083038186803b15801561342a57600080fd5b505afa15801561343e573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061346291906136f6565b155b6134cf5760405162461bcd60e51b815260206004820152603660248201527f5361666545524332303a20617070726f76652066726f6d206e6f6e2d7a65726f60448201527520746f206e6f6e2d7a65726f20616c6c6f77616e636560501b60648201526084016106e6565b611af88363095ea7b360e01b8484604051602401611ac19291906137fd565b611d5a846323b872dd60e01b858585604051602401611ac1939291906137d9565b828054828255906000526020600020908101928215613564579160200282015b8281111561356457825182546001600160a01b0319166001600160a01b0390911617825560209092019160019091019061352f565b5061115d9291505b8082111561115d576000815560010161356c565b600060208284031215613591578081fd5b8135611a9b81613ac1565b6000602082840312156135ad578081fd5b8151611a9b81613ac1565b600080600080600060a086880312156135cf578081fd5b85356135da81613ac1565b945060208601356135ea81613ac1565b935060408601356135fa81613ac1565b9250606086013561360a81613ac1565b9150608086013561361a81613ac1565b809150509295509295909350565b600060208284031215613639578081fd5b8135611a9b81613ad6565b600060208284031215613655578081fd5b8151611a9b81613ad6565b60008060408385031215613672578182fd5b82359150602083013561368481613ac1565b809150509250929050565b60008060008060008060c087890312156136a7578081fd5b8635955060208701356136b981613ac1565b95989597505050506040840135936060810135936080820135935060a0909101359150565b6000602082840312156136ef578081fd5b5035919050565b600060208284031215613707578081fd5b5051919050565b60008060408385031215613720578182fd5b82359150602083013561368481613ad6565b60008060408385031215613744578182fd5b82359150602083013560ff81168114613684578182fd5b6000825161376d818460208701613a64565b9190910192915050565b6001600160a01b0391909116815260200190565b6001600160a01b0392831681529116602082015260400190565b6001600160a01b03958616815293851660208501529190931660408301526060820192909252901515608082015260a00190565b6001600160a01b039384168152919092166020820152604081019190915260600190565b6001600160a01b03929092168252602082015260400190565b6020808252825182820181905260009190848201906040850190845b818110156138575783516001600160a01b031683529284019291840191600101613832565b50909695505050505050565b9182526001600160a01b0316602082015260400190565b6000602082528251806020840152613899816040850160208701613a64565b601f01601f19169190910160400192915050565b6020808252818101527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604082015260600190565b600082198211156138f5576138f5613aab565b500190565b60008261391557634e487b7160e01b81526012600452602481fd5b500490565b80825b600180861161392c5750613957565b81870482111561393e5761393e613aab565b8086161561394b57918102915b9490941c93800261391d565b94509492505050565b6000611a9b600019848460008261397957506001611a9b565b8161398657506000611a9b565b816001811461399c57600281146139a6576139d3565b6001915050611a9b565b60ff8411156139b7576139b7613aab565b6001841b9150848211156139cd576139cd613aab565b50611a9b565b5060208310610133831016604e8410600b8410161715613a06575081810a83811115613a0157613a01613aab565b611a9b565b613a13848484600161391a565b808604821115613a2557613a25613aab565b02949350505050565b6000816000190483118215151615613a4857613a48613aab565b500290565b600082821015613a5f57613a5f613aab565b500390565b60005b83811015613a7f578181015183820152602001613a67565b83811115611d5a5750506000910152565b6000600019821415613aa457613aa4613aab565b5060010190565b634e487b7160e01b600052601160045260246000fd5b6001600160a01b0381168114610dad57600080fd5b8015158114610dad57600080fdfe8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0a26469706673582212207952f60688e576c58bd6a940bd89d8ce785b2cdc8e9bd748bb9b8309b234969264736f6c63430008020033';
class ApeVaultWrapperImplementation__factory extends ethers_1.ContractFactory {
  constructor(signer) {
    super(_abi, _bytecode, signer);
  }
  deploy(overrides) {
    return super.deploy(overrides || {});
  }
  getDeployTransaction(overrides) {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address) {
    return super.attach(address);
  }
  connect(signer) {
    return super.connect(signer);
  }
  static createInterface() {
    return new ethers_1.utils.Interface(_abi);
  }
  static connect(address, signerOrProvider) {
    return new ethers_1.Contract(address, _abi, signerOrProvider);
  }
}
exports.ApeVaultWrapperImplementation__factory =
  ApeVaultWrapperImplementation__factory;
ApeVaultWrapperImplementation__factory.bytecode = _bytecode;
ApeVaultWrapperImplementation__factory.abi = _abi;
