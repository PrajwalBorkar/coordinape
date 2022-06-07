'use strict';
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
Object.defineProperty(exports, '__esModule', { value: true });
exports.ApeDistributor__factory = void 0;
const ethers_1 = require('ethers');
const _abi = [
  {
    inputs: [
      {
        internalType: 'address',
        name: '_registry',
        type: 'address',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'constructor',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'vault',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'bytes32',
        name: 'circle',
        type: 'bytes32',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'admin',
        type: 'address',
      },
    ],
    name: 'AdminApproved',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'address',
        name: 'vault',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'bytes32',
        name: 'circle',
        type: 'bytes32',
      },
      {
        indexed: false,
        internalType: 'address',
        name: 'token',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'interval',
        type: 'uint256',
      },
    ],
    name: 'AllowanceUpdated',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'address',
        name: 'vault',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'bytes32',
        name: 'circle',
        type: 'bytes32',
      },
      {
        indexed: false,
        internalType: 'address',
        name: 'token',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'epoch',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'index',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'address',
        name: 'account',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256',
      },
    ],
    name: 'Claimed',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'vault',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'bytes32',
        name: 'circle',
        type: 'bytes32',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'token',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'epochId',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint8',
        name: '_tapType',
        type: 'uint8',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256',
      },
    ],
    name: 'EpochFunded',
    type: 'event',
  },
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
        name: 'yearnVault',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256',
      },
    ],
    name: 'yearnApeVaultFundsTapped',
    type: 'event',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
      {
        internalType: 'bytes32',
        name: '',
        type: 'bytes32',
      },
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    name: 'allowances',
    outputs: [
      {
        internalType: 'uint256',
        name: 'maxAmount',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'cooldownInterval',
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
        name: '',
        type: 'address',
      },
      {
        internalType: 'bytes32',
        name: '',
        type: 'bytes32',
      },
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    name: 'checkpoints',
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
        internalType: 'address',
        name: '',
        type: 'address',
      },
      {
        internalType: 'bytes32',
        name: '',
        type: 'bytes32',
      },
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    name: 'circleAlloc',
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
        internalType: 'address',
        name: '_vault',
        type: 'address',
      },
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
        name: '_epoch',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: '_index',
        type: 'uint256',
      },
      {
        internalType: 'address',
        name: '_account',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: '_checkpoint',
        type: 'uint256',
      },
      {
        internalType: 'bool',
        name: '_redeemShares',
        type: 'bool',
      },
      {
        internalType: 'bytes32[]',
        name: '_proof',
        type: 'bytes32[]',
      },
    ],
    name: 'claim',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: 'address',
            name: 'vault',
            type: 'address',
          },
          {
            internalType: 'bytes32',
            name: 'circle',
            type: 'bytes32',
          },
          {
            internalType: 'address',
            name: 'token',
            type: 'address',
          },
          {
            internalType: 'uint256',
            name: 'epoch',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'index',
            type: 'uint256',
          },
          {
            internalType: 'address',
            name: 'account',
            type: 'address',
          },
          {
            internalType: 'uint256',
            name: 'checkpoint',
            type: 'uint256',
          },
          {
            internalType: 'bool',
            name: 'redeemShare',
            type: 'bool',
          },
          {
            internalType: 'bytes32[]',
            name: 'proof',
            type: 'bytes32[]',
          },
        ],
        internalType: 'struct ApeDistributor.ClaimData[]',
        name: '_claims',
        type: 'tuple[]',
      },
    ],
    name: 'claimMany',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
      {
        internalType: 'bytes32',
        name: '',
        type: 'bytes32',
      },
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    name: 'currentAllowances',
    outputs: [
      {
        internalType: 'uint256',
        name: 'debt',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'intervalStart',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'epochs',
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
        name: '',
        type: 'address',
      },
      {
        internalType: 'bytes32',
        name: '',
        type: 'bytes32',
      },
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    name: 'epochClaimBitMap',
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
        internalType: 'address',
        name: '',
        type: 'address',
      },
      {
        internalType: 'bytes32',
        name: '',
        type: 'bytes32',
      },
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    name: 'epochRoots',
    outputs: [
      {
        internalType: 'bytes32',
        name: '',
        type: 'bytes32',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'bytes32',
        name: '',
        type: 'bytes32',
      },
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    name: 'epochTracking',
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
        internalType: 'address',
        name: '_vault',
        type: 'address',
      },
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
        name: '_epoch',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: '_index',
        type: 'uint256',
      },
    ],
    name: 'isClaimed',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
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
        name: '_cooldownInterval',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: '_epochs',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: '_intervalStart',
        type: 'uint256',
      },
    ],
    name: 'setAllowance',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_vault',
        type: 'address',
      },
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
        internalType: 'address[]',
        name: '_users',
        type: 'address[]',
      },
      {
        internalType: 'uint256[]',
        name: '_amounts',
        type: 'uint256[]',
      },
      {
        internalType: 'uint256',
        name: '_amount',
        type: 'uint256',
      },
      {
        internalType: 'uint8',
        name: '_tapType',
        type: 'uint8',
      },
    ],
    name: 'tapEpochAndDistribute',
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
    inputs: [
      {
        internalType: 'address',
        name: '_vault',
        type: 'address',
      },
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
        internalType: 'bytes32',
        name: '_root',
        type: 'bytes32',
      },
      {
        internalType: 'uint256',
        name: '_amount',
        type: 'uint256',
      },
      {
        internalType: 'uint8',
        name: '_tapType',
        type: 'uint8',
      },
    ],
    name: 'uploadEpochRoot',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
      {
        internalType: 'bytes32',
        name: '',
        type: 'bytes32',
      },
    ],
    name: 'vaultApprovals',
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
];
const _bytecode =
  '0x60806040523480156200001157600080fd5b50604051620025d1380380620025d183398101604081905262000034916200005a565b600280546001600160a01b0319166001600160a01b03929092169190911790556200008a565b6000602082840312156200006c578081fd5b81516001600160a01b038116811462000083578182fd5b9392505050565b612537806200009a6000396000f3fe608060405234801561001057600080fd5b50600436106100d05760003560e01c8063100956f9146100d55780632417957e1461012257806324c17997146101535780633a5d5a39146101685780633efd825e1461017b5780633fdd34cc146101bc5780634766c2dc146101cf5780635abc5d0b146101e25780637b103999146101f5578063a78618c514610208578063a7fde93f1461022b578063bf6fe2871461023e578063c313bac914610278578063c8f4d8e3146102a3578063da269c09146102e5578063e4b8b2dc14610331575b600080fd5b61010f6100e3366004611e35565b600860209081526000948552604080862082529385528385208152918452828420909152825290205481565b6040519081526020015b60405180910390f35b61010f610130366004611df4565b600760209081526000938452604080852082529284528284209052825290205481565b610166610161366004611f3a565b610389565b005b610166610176366004612232565b6103e3565b6101af610189366004611dc9565b60036020908152600092835260408084209091529082529020546001600160a01b031681565b60405161011991906122e4565b6101666101ca3660046120e0565b61044a565b6101666101dd366004611e87565b610601565b6101666101f0366004612034565b6107f0565b6002546101af906001600160a01b031681565b61021b610216366004611fe3565b610c16565b6040519015158152602001610119565b610166610239366004612261565b610c89565b61010f61024c366004611f9c565b600460209081526000948552604080862082529385528385208152918452828420909152825290205481565b61010f610286366004612232565b600560209081526000928352604080842090915290825290205481565b61010f6102b1366004611fe3565b6006602090815260009586526040808720825294865284862081529285528385208352908452828420909152825290205481565b61031c6102f3366004611df4565b600060208181529381526040808220855292815282812090935282529020805460019091015482565b60408051928352602083019190915201610119565b61036e61033f366004611df4565b600160208181526000948552604080862082529385528385209052908352912080549181015460029091015483565b60408051938452602084019290925290820152606001610119565b610397868686858588610e71565b6001600160a01b0380871660009081526007602090815260408083208984528252808320938816835292905290812080548492906103d69084906123e0565b9091555050505050505050565b33600081815260036020908152604080832086845290915280822080546001600160a01b0319166001600160a01b03861690811790915590519092859290917f99c55459df64a58c031e4e675400c552c7ab3fb4952eaae32b64a091b14f7bcd9190a45050565b60005b81518110156105fd576105eb82828151811061047957634e487b7160e01b600052603260045260246000fd5b6020026020010151600001518383815181106104a557634e487b7160e01b600052603260045260246000fd5b6020026020010151602001518484815181106104d157634e487b7160e01b600052603260045260246000fd5b6020026020010151604001518585815181106104fd57634e487b7160e01b600052603260045260246000fd5b60200260200101516060015186868151811061052957634e487b7160e01b600052603260045260246000fd5b60200260200101516080015187878151811061055557634e487b7160e01b600052603260045260246000fd5b602002602001015160a0015188888151811061058157634e487b7160e01b600052603260045260246000fd5b602002602001015160c001518989815181106105ad57634e487b7160e01b600052603260045260246000fd5b602002602001015160e001518a8a815181106105d957634e487b7160e01b600052603260045260246000fd5b602002602001015161010001516107f0565b806105f58161246a565b91505061044d565b5050565b8483146106685760405162461bcd60e51b815260206004820152602a60248201527f4170654469737472696275746f723a204172726179206c656e6774687320646f604482015269040dcdee840dac2e8c6d60b31b60648201526084015b60405180910390fd5b816106738585611650565b146106dc5760405162461bcd60e51b815260206004820152603360248201527f4170654469737472696275746f723a20416d6f756e7420646f6573206e6f74206044820152726d617463682073756d206f662076616c75657360681b606482015260840161065f565b6106ec8989898585600019610e71565b60005b858110156107e457876001600160a01b031663a9059cbb88888481811061072657634e487b7160e01b600052603260045260246000fd5b905060200201602081019061073b9190611d91565b87878581811061075b57634e487b7160e01b600052603260045260246000fd5b905060200201356040518363ffffffff1660e01b815260040161077f9291906122f8565b602060405180830381600087803b15801561079957600080fd5b505af11580156107ad573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906107d19190612216565b50806107dc8161246a565b9150506106ef565b50505050505050505050565b6107fd8989898989610c16565b1561083c5760405162461bcd60e51b815260206004820152600f60248201526e436c61696d656420616c726561647960881b604482015260640161065f565b604080516020808201889052606087901b6001600160601b03191682840152605480830187905283518084039091018152607490920183528151918101919091206001600160a01b038c81166000908152600484528481208d82528452848120918c1681529083528381208a8252909252919020546108bd908390836116a9565b6108f75760405162461bcd60e51b815260206004820152600b60248201526a2bb937b73390383937b7b360a91b604482015260640161065f565b6001600160a01b03808b1660009081526008602090815260408083208d845282528083208c8516845282528083209389168352929052205480851161099a5760405162461bcd60e51b815260206004820152603360248201527f476976656e20636865636b706f696e74206e6f7420686967686572207468616e6044820152720818dd5c9c995b9d0818da1958dadc1bda5b9d606a1b606482015260840161065f565b60006109a6828761240c565b9050600760008d6001600160a01b03166001600160a01b0316815260200190815260200160002060008c815260200190815260200160002060008b6001600160a01b03166001600160a01b0316815260200190815260200160002054811115610a625760405162461bcd60e51b815260206004820152602860248201527f43616e277420636c61696d206d6f7265207468616e20636972636c652068617360448201526720746f206769766560c01b606482015260840161065f565b6001600160a01b03808d1660009081526007602090815260408083208f84528252808320938e1683529290529081208054839290610aa190849061240c565b90915550506001600160a01b03808d1660009081526008602090815260408083208f845282528083208e851684528252808320938b16835292905220869055610aed8c8c8c8c8c6116c1565b848015610b025750336001600160a01b038816145b15610b8d57604051627b8a6760e11b8152600481018290526001600160a01b0388811660248301528b169062f714ce90604401602060405180830381600087803b158015610b4f57600080fd5b505af1158015610b63573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610b8791906122b0565b50610ba1565b610ba16001600160a01b038b168883611732565b604080516001600160a01b038e81168252602082018e90528c811682840152606082018c9052608082018b9052891660a082015260c0810183905290517fb55a6b31ba8a4be3eabbb854fd8adef29d42d7aa9bf91df4c77d5687b59809ef9181900360e00190a1505050505050505050505050565b600080610c25610100846123f8565b90506000610c3561010085612485565b6001600160a01b0398891660009081526006602090815260408083209a835299815289822098909a168152968952878720958752948852508585209085529095525091902054600190911b90811614919050565b4281610c93578091505b80821015610ce05760405162461bcd60e51b815260206004820152601a602482015279125b9d195c9d985b081cdd185c9d081a5b881d1a19481c185cdd60321b604482015260640161065f565b604051806040016040528086815260200185815250600080336001600160a01b03166001600160a01b0316815260200190815260200160002060008981526020019081526020016000206000886001600160a01b03166001600160a01b0316815260200190815260200160002060008201518160000155602082015181600101559050506040518060600160405280600081526020018381526020018481525060016000336001600160a01b03166001600160a01b0316815260200190815260200160002060008981526020019081526020016000206000886001600160a01b03166001600160a01b031681526020019081526020016000206000820151816000015560208201518160010155604082015181600201559050507f13241e168a73dc44609b3c902bf37a573168224a56087e3bf181bfab79a617e03388888888604051610e609594939291906001600160a01b03958616815260208101949094529190931660408301526060820192909252608081019190915260a00190565b60405180910390a150505050505050565b600260009054906101000a90046001600160a01b03166001600160a01b031663c45a01556040518163ffffffff1660e01b815260040160206040518083038186803b158015610ebf57600080fd5b505afa158015610ed3573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610ef79190611dad565b6001600160a01b0316635487beb6876040518263ffffffff1660e01b8152600401610f2291906122e4565b60206040518083038186803b158015610f3a57600080fd5b505afa158015610f4e573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610f729190612216565b610fca5760405162461bcd60e51b8152602060048201526024808201527f4170654469737472696275746f723a205661756c7420646f6573206e6f7420656044820152631e1a5cdd60e21b606482015260840161065f565b6000336001600160a01b0316876001600160a01b0316638da5cb5b6040518163ffffffff1660e01b815260040160206040518083038186803b15801561100f57600080fd5b505afa158015611023573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906110479190611dad565b6001600160a01b0389811660009081526003602090815260408083208c8452909152902054918116929092149250163314806110805750805b6110d85760405162461bcd60e51b815260206004820152602360248201527f4170654469737472696275746f723a2053656e646572206e6f7420617070726f6044820152621d995960ea1b606482015260840161065f565b60ff83166002141561118a57846001600160a01b0316876001600160a01b0316632a64e6356040518163ffffffff1660e01b815260040160206040518083038186803b15801561112757600080fd5b505afa15801561113b573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061115f9190611dad565b6001600160a01b0316146111855760405162461bcd60e51b815260040161065f90612344565b61122b565b846001600160a01b0316876001600160a01b031663fbfa77cf6040518163ffffffff1660e01b815260040160206040518083038186803b1580156111cd57600080fd5b505afa1580156111e1573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906112059190611dad565b6001600160a01b03161461122b5760405162461bcd60e51b815260040161065f90612344565b8061123c5761123c8787878761178d565b6040516370a0823160e01b81526000906001600160a01b038716906370a082319061126b9030906004016122e4565b60206040518083038186803b15801561128357600080fd5b505afa158015611297573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906112bb91906122b0565b6040516378186c8960e11b81526004810187905260ff861660248201529091506000906001600160a01b038a169063f030d91290604401602060405180830381600087803b15801561130c57600080fd5b505af1158015611320573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061134491906122b0565b90506000876001600160a01b03166370a08231306040518263ffffffff1660e01b815260040161137491906122e4565b60206040518083038186803b15801561138c57600080fd5b505afa1580156113a0573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906113c491906122b0565b9050866113d1848361240c565b1461143f5760405162461bcd60e51b815260206004820152603860248201527f4170654469737472696275746f723a20446964206e6f74207265636569766520604482015277636f727265637420616d6f756e74206f6620746f6b656e7360401b606482015260840161065f565b81156114f957896001600160a01b03167fc01d33a8020741602dd424793b13242b879ac09190c3314317c142ed94b8c1748b6001600160a01b031663fbfa77cf6040518163ffffffff1660e01b815260040160206040518083038186803b1580156114a957600080fd5b505afa1580156114bd573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906114e19190611dad565b846040516114f09291906122f8565b60405180910390a25b6000600560008b815260200190815260200160002060008a6001600160a01b03166001600160a01b0316815260200190815260200160002054905085600460008d6001600160a01b03166001600160a01b0316815260200190815260200160002060008c815260200190815260200160002060008b6001600160a01b03166001600160a01b03168152602001908152602001600020600083815260200190815260200160002081905550600560008b815260200190815260200160002060008a6001600160a01b03166001600160a01b0316815260200190815260200160002060008154809291906115ea9061246a565b90915550506040805182815260ff891660208201529081018990526001600160a01b03808b16918c918e16907f4150e192e15f92cd46a4aeea3fff087735dd08c3ce908174c4e91e038c3b96f69060600160405180910390a45050505050505050505050565b6000805b828110156116a25783838281811061167c57634e487b7160e01b600052603260045260246000fd5b905060200201358261168e91906123e0565b91508061169a8161246a565b915050611654565b5092915050565b6000826116b685846118c5565b1490505b9392505050565b60006116cf610100836123f8565b905060006116df61010084612485565b6001600160a01b039788166000908152600660209081526040808320998352988152888220979099168152958852868620948652938752508484209084529094529190208054600190921b909117905550565b6117888363a9059cbb60e01b84846040516024016117519291906122f8565b60408051601f198184030181529190526020810180516001600160e01b03166001600160e01b03199093169290921790915261197f565b505050565b6001600160a01b038085166000818152602081815260408083208884528252808320948716808452948252808320815180830183528154815260019182015481850152948452825280832088845282528083209483529390529190912081518311156118465760405162461bcd60e51b815260206004820152602260248201527f416d6f756e742074617070656420657863656564206d617820616c6c6f77616e604482015261636560f01b606482015260840161065f565b80600101544210156118925760405162461bcd60e51b8152602060048201526015602482015274115c1bd8da081a185cc81b9bdd081cdd185c9d1959605a1b604482015260640161065f565b815181546118a19085906123e0565b11156118b1576118b18183611a51565b828160000160008282546103d691906123e0565b600081815b84518110156119775760008582815181106118f557634e487b7160e01b600052603260045260246000fd5b60200260200101519050808311611937576040805160208101859052908101829052606001604051602081830303815290604052805190602001209250611964565b60408051602081018390529081018490526060016040516020818303038152906040528051906020012092505b508061196f8161246a565b9150506118ca565b509392505050565b60006119d4826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c6564815250856001600160a01b0316611b2d9092919063ffffffff16565b80519091501561178857808060200190518101906119f29190612216565b6117885760405162461bcd60e51b815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e6044820152691bdd081cdd58d8d9595960b21b606482015260840161065f565b6000826001015442611a63919061240c565b905081602001518111611ab85760405162461bcd60e51b815260206004820152601e60248201527f436f6f6c646f776e20696e74657276616c206e6f742066696e69736865640000604482015260640161065f565b6000836002015411611b085760405162461bcd60e51b8152602060048201526019602482015278436972636c652063616e6e6f742074617020616e796d6f726560381b604482015260640161065f565b600080845542600185015560028401805491611b2383612453565b9190505550505050565b6060611b3c8484600085611b44565b949350505050565b606082471015611ba55760405162461bcd60e51b815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f6044820152651c8818d85b1b60d21b606482015260840161065f565b611bae85611c73565b611bfa5760405162461bcd60e51b815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e7472616374000000604482015260640161065f565b600080866001600160a01b03168587604051611c1691906122c8565b60006040518083038185875af1925050503d8060008114611c53576040519150601f19603f3d011682016040523d82523d6000602084013e611c58565b606091505b5091509150611c68828286611c7d565b979650505050505050565b803b15155b919050565b60608315611c8c5750816116ba565b825115611c9c5782518084602001fd5b8160405162461bcd60e51b815260040161065f9190612311565b8035611c78816124db565b60008083601f840112611cd2578182fd5b5081356001600160401b03811115611ce8578182fd5b6020830191508360208083028501011115611d0257600080fd5b9250929050565b600082601f830112611d19578081fd5b81356020611d2e611d29836123bd565b61238d565b8281528181019085830183850287018401881015611d4a578586fd5b855b85811015611d6857813584529284019290840190600101611d4c565b5090979650505050505050565b8035611c78816124f3565b803560ff81168114611c7857600080fd5b600060208284031215611da2578081fd5b81356116ba816124db565b600060208284031215611dbe578081fd5b81516116ba816124db565b60008060408385031215611ddb578081fd5b8235611de6816124db565b946020939093013593505050565b600080600060608486031215611e08578081fd5b8335611e13816124db565b9250602084013591506040840135611e2a816124db565b809150509250925092565b60008060008060808587031215611e4a578081fd5b8435611e55816124db565b9350602085013592506040850135611e6c816124db565b91506060850135611e7c816124db565b939692955090935050565b600080600080600080600080600060e08a8c031215611ea4578485fd5b8935611eaf816124db565b985060208a0135975060408a0135611ec6816124db565b965060608a01356001600160401b0380821115611ee1578687fd5b611eed8d838e01611cc1565b909850965060808c0135915080821115611f05578586fd5b50611f128c828d01611cc1565b90955093505060a08a01359150611f2b60c08b01611d80565b90509295985092959850929598565b60008060008060008060c08789031215611f52578384fd5b8635611f5d816124db565b9550602087013594506040870135611f74816124db565b93506060870135925060808701359150611f9060a08801611d80565b90509295509295509295565b60008060008060808587031215611fb1578182fd5b8435611fbc816124db565b9350602085013592506040850135611fd3816124db565b9396929550929360600135925050565b600080600080600060a08688031215611ffa578283fd5b8535612005816124db565b945060208601359350604086013561201c816124db565b94979396509394606081013594506080013592915050565b60008060008060008060008060006101208a8c031215612052578283fd5b893561205d816124db565b985060208a0135975060408a0135612074816124db565b965060608a0135955060808a0135945060a08a0135612092816124db565b935060c08a0135925060e08a01356120a9816124f3565b91506101008a01356001600160401b038111156120c4578182fd5b6120d08c828d01611d09565b9150509295985092959850929598565b600060208083850312156120f2578182fd5b82356001600160401b0380821115612108578384fd5b818501915085601f83011261211b578384fd5b8135612129611d29826123bd565b81815284810190848601875b84811015612207578135870161012080601f19838f03011215612156578a8bfd5b61215f8161238d565b61216a8b8401611cb6565b81526040808401358c8301526060612183818601611cb6565b828401526080915081850135818401525060a0808501358284015260c091506121ad828601611cb6565b818401525060e0808501358284015261010091506121cc828601611d75565b908301529183013591898311156121e1578c8dfd5b6121ef8f8d85870101611d09565b90820152865250509287019290870190600101612135565b50909998505050505050505050565b600060208284031215612227578081fd5b81516116ba816124f3565b60008060408385031215612244578182fd5b823591506020830135612256816124db565b809150509250929050565b60008060008060008060c08789031215612279578384fd5b86359550602087013561228b816124db565b95989597505050506040840135936060810135936080820135935060a0909101359150565b6000602082840312156122c1578081fd5b5051919050565b600082516122da818460208701612423565b9190910192915050565b6001600160a01b0391909116815260200190565b6001600160a01b03929092168252602082015260400190565b6000602082528251806020840152612330816040850160208701612423565b601f01601f19169190910160400192915050565b60208082526029908201527f4170654469737472696275746f723a205661756c742063616e6e6f742073757060408201526838363c903a37b5b2b760b91b606082015260800190565b604051601f8201601f191681016001600160401b03811182821017156123b5576123b56124c5565b604052919050565b60006001600160401b038211156123d6576123d66124c5565b5060209081020190565b600082198211156123f3576123f3612499565b500190565b600082612407576124076124af565b500490565b60008282101561241e5761241e612499565b500390565b60005b8381101561243e578181015183820152602001612426565b8381111561244d576000848401525b50505050565b60008161246257612462612499565b506000190190565b600060001982141561247e5761247e612499565b5060010190565b600082612494576124946124af565b500690565b634e487b7160e01b600052601160045260246000fd5b634e487b7160e01b600052601260045260246000fd5b634e487b7160e01b600052604160045260246000fd5b6001600160a01b03811681146124f057600080fd5b50565b80151581146124f057600080fdfea26469706673582212203d38048a777c8b9e1ce3702b53c701478b25179cac4b29b511e082106d22b10264736f6c63430008020033';
class ApeDistributor__factory extends ethers_1.ContractFactory {
  constructor(signer) {
    super(_abi, _bytecode, signer);
  }
  deploy(_registry, overrides) {
    return super.deploy(_registry, overrides || {});
  }
  getDeployTransaction(_registry, overrides) {
    return super.getDeployTransaction(_registry, overrides || {});
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
exports.ApeDistributor__factory = ApeDistributor__factory;
ApeDistributor__factory.bytecode = _bytecode;
ApeDistributor__factory.abi = _abi;
