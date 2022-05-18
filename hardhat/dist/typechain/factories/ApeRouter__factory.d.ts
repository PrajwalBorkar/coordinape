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
    static readonly bytecode = "0x60806040523480156200001157600080fd5b506040516200229c3803806200229c8339810160408190526200003491620000e3565b80620000403362000076565b60025550600380546001600160a01b039384166001600160a01b0319918216179091556004805492909316911617905562000123565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b80516001600160a01b0381168114620000de57600080fd5b919050565b600080600060608486031215620000f8578283fd5b6200010384620000c6565b92506200011360208501620000c6565b9150604084015190509250925092565b61216980620001336000396000f3fe608060405234801561001057600080fd5b50600436106100f15760003560e01c80631333cdda146100f65780632a9eda111461011e5780632c5eaf211461013157806347d116dd14610146578063499ab976146101665780634c84c5a11461017957806364b84bc31461018c578063715018a6146101ad5780638da5cb5b146101b55780639749b368146101bd578063a91ee0dc146101d0578063abeb6997146101e3578063b44716cb146101f6578063b587295814610209578063bb87031714610229578063c4d252f51461023c578063c63c4e9b1461024f578063f2fde38b14610258578063fc50baf51461026b575b600080fd5b610109610104366004611c80565b61027e565b60405190151581526020015b60405180910390f35b61010961012c366004611c80565b6102b1565b61014461013f366004611bce565b6102c7565b005b600454610159906001600160a01b031681565b6040516101159190611d06565b610144610174366004611b27565b610425565b610109610187366004611c80565b6107d1565b61019f61019a366004611b8e565b6107e7565b604051908152602001610115565b610144610cbc565b610159610cf7565b6101446101cb366004611c80565b610d06565b6101446101de366004611a9f565b610d2a565b6101446101f1366004611bce565b610d6b565b61019f610204366004611ad7565b610ea9565b61019f610217366004611c80565b60016020526000908152604090205481565b600354610159906001600160a01b031681565b61014461024a366004611c80565b6112a1565b61019f60025481565b610144610266366004611a9f565b611373565b610144610279366004611a9f565b611413565b60008181526001602052604081205442108015906102ab5750600082815260016020819052604090912054115b92915050565b6000908152600160208190526040909120541490565b336102d0610cf7565b6001600160a01b0316146102ff5760405162461bcd60e51b81526004016102f690611e2e565b60405180910390fd5b600061030e878787878761153b565b6000818152600160205260409020549091501561036d5760405162461bcd60e51b815260206004820181905260248201527f54696d654c6f636b3a2043616c6c20616c7265616479207363686564756c656460448201526064016102f6565b6002548210156103be5760405162461bcd60e51b815260206004820152601c60248201527b54696d654c6f636b3a20496e73756666696369656e742064656c617960201b60448201526064016102f6565b6103c88242611f2c565b60008281526001602052604090819020919091555181907f66dcc96f6c92c7919714879a908fc29b273e363ba3d409c0c6db86984ee3c48090610414908a908a908a908a908990611d62565b60405180910390a250505050505050565b600354604051630e177dc760e41b81526000916001600160a01b03169063e177dc7090610456908790600401611d06565b60206040518083038186803b15801561046e57600080fd5b505afa158015610482573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906104a69190611abb565b90506001600160a01b0381166104ce5760405162461bcd60e51b81526004016102f690611e63565b60048054604051632a43df5b60e11b81526001600160a01b0390911691635487beb6916104fd91339101611d06565b60206040518083038186803b15801561051557600080fd5b505afa158015610529573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061054d9190611c64565b6105695760405162461bcd60e51b81526004016102f690611ede565b846001600160a01b031663fbfa77cf6040518163ffffffff1660e01b815260040160206040518083038186803b1580156105a257600080fd5b505afa1580156105b6573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906105da9190611abb565b6001600160a01b0316816001600160a01b03161461060a5760405162461bcd60e51b81526004016102f690611e9a565b811561069457604051627b8a6760e11b81526001600160a01b0382169062f714ce9061063c9086908a90600401611f15565b602060405180830381600087803b15801561065657600080fd5b505af115801561066a573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061068e9190611c98565b50610716565b60405163a9059cbb60e01b81526001600160a01b0382169063a9059cbb906106c29089908790600401611d9b565b602060405180830381600087803b1580156106dc57600080fd5b505af11580156106f0573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906107149190611c64565b505b806001600160a01b03167ff77bbfe58c940481be63e90da9212a6bdeed12dd1d4b10fa66aebcdc94bc55e1826001600160a01b031663fc0c546a6040518163ffffffff1660e01b815260040160206040518083038186803b15801561077a57600080fd5b505afa15801561078e573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906107b29190611abb565b856040516107c1929190611d9b565b60405180910390a2505050505050565b6000908152600160208190526040909120541190565b600354604051630e177dc760e41b815260009182916001600160a01b039091169063e177dc709061081c908790600401611d06565b60206040518083038186803b15801561083457600080fd5b505afa158015610848573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061086c9190611abb565b90506001600160a01b0381166108945760405162461bcd60e51b81526004016102f690611e63565b60048054604051632a43df5b60e11b81526001600160a01b0390911691635487beb6916108c391899101611d06565b60206040518083038186803b1580156108db57600080fd5b505afa1580156108ef573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906109139190611c64565b61092f5760405162461bcd60e51b81526004016102f690611ede565b846001600160a01b031663fbfa77cf6040518163ffffffff1660e01b815260040160206040518083038186803b15801561096857600080fd5b505afa15801561097c573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906109a09190611abb565b6001600160a01b0316816001600160a01b0316146109d05760405162461bcd60e51b81526004016102f690611e9a565b6109e56001600160a01b038516333086611577565b604051636eb1769f60e11b815283906001600160a01b0386169063dd62ed3e90610a159030908690600401611d1a565b60206040518083038186803b158015610a2d57600080fd5b505afa158015610a41573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610a659190611c98565b1015610a9457610a806001600160a01b0385168260006115e8565b610a946001600160a01b03851682856115e8565b6040516370a0823160e01b81526000906001600160a01b038616906370a0823190610ac3903090600401611d06565b60206040518083038186803b158015610adb57600080fd5b505afa158015610aef573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610b139190611c98565b90506000826001600160a01b0316636e553f6586896040518363ffffffff1660e01b8152600401610b45929190611f15565b602060405180830381600087803b158015610b5f57600080fd5b505af1158015610b73573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610b979190611c98565b90506000866001600160a01b03166370a08231306040518263ffffffff1660e01b8152600401610bc79190611d06565b60206040518083038186803b158015610bdf57600080fd5b505afa158015610bf3573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610c179190611c98565b9050610c238184612097565b60405163be99970560e01b8152600481018290529095506001600160a01b0389169063be99970590602401600060405180830381600087803b158015610c6857600080fd5b505af1158015610c7c573d6000803e3d6000fd5b50505050876001600160a01b03166000805160206121148339815191528884604051610ca9929190611d9b565b60405180910390a2505050509392505050565b33610cc5610cf7565b6001600160a01b031614610ceb5760405162461bcd60e51b81526004016102f690611e2e565b610cf560006116ff565b565b6000546001600160a01b031690565b333014610d255760405162461bcd60e51b81526004016102f690611de7565b600255565b333014610d495760405162461bcd60e51b81526004016102f690611de7565b600380546001600160a01b0319166001600160a01b0392909216919091179055565b33610d74610cf7565b6001600160a01b031614610d9a5760405162461bcd60e51b81526004016102f690611e2e565b6000610da9878787878761153b565b9050610db48161027e565b610e165760405162461bcd60e51b815260206004820152602d60248201527f54696d654c6f636b3a204e6f7420726561647920666f7220657865637574696f60448201526c1b881bdc88195e1958dd5d1959609a1b60648201526084016102f6565b831580610e275750610e27846102b1565b610e835760405162461bcd60e51b815260206004820152602760248201527f54696d654c6f636b3a205072656465636573736f722063616c6c206e6f7420656044820152661e1958dd5d195960ca1b60648201526084016102f6565b610e8f8188888861174f565b600090815260016020819052604090912055505050505050565b600354604051630e177dc760e41b815260009182916001600160a01b039091169063e177dc7090610ede908790600401611d06565b60206040518083038186803b158015610ef657600080fd5b505afa158015610f0a573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610f2e9190611abb565b90506001600160a01b038116610f565760405162461bcd60e51b81526004016102f690611e63565b846001600160a01b0316816001600160a01b031614610fb75760405162461bcd60e51b815260206004820152601f60248201527f417065526f757465723a207976546f6b656e7320646f6e2774206d617463680060448201526064016102f6565b60048054604051632a43df5b60e11b81526001600160a01b0390911691635487beb691610fe6918a9101611d06565b60206040518083038186803b158015610ffe57600080fd5b505afa158015611012573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906110369190611c64565b6110525760405162461bcd60e51b81526004016102f690611ede565b856001600160a01b031663fbfa77cf6040518163ffffffff1660e01b815260040160206040518083038186803b15801561108b57600080fd5b505afa15801561109f573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906110c39190611abb565b6001600160a01b0316816001600160a01b0316146110f35760405162461bcd60e51b81526004016102f690611e9a565b6111086001600160a01b038616338886611577565b806001600160a01b031663313ce5676040518163ffffffff1660e01b815260040160206040518083038186803b15801561114157600080fd5b505afa158015611155573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906111799190611c98565b61118490600a611faa565b83826001600160a01b03166399530b066040518163ffffffff1660e01b815260040160206040518083038186803b1580156111be57600080fd5b505afa1580156111d2573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906111f69190611c98565b6112009190612078565b61120a9190611f44565b60405163be99970560e01b8152600481018290529092506001600160a01b0387169063be99970590602401600060405180830381600087803b15801561124f57600080fd5b505af1158015611263573d6000803e3d6000fd5b50505050856001600160a01b03166000805160206121148339815191528585604051611290929190611d9b565b60405180910390a250949350505050565b336112aa610cf7565b6001600160a01b0316146112d05760405162461bcd60e51b81526004016102f690611e2e565b6112d9816107d1565b6113255760405162461bcd60e51b815260206004820152601d60248201527f54696d654c6f636b3a2043616c6c206973206e6f742070656e64696e6700000060448201526064016102f6565b60008181526001602052604080822091909155517fab2af3494bc00bd4aa34e08bd246e5c402d3ee4856c19f5461ce47a6d57423e1906113689083815260200190565b60405180910390a150565b3361137c610cf7565b6001600160a01b0316146113a25760405162461bcd60e51b81526004016102f690611e2e565b6001600160a01b0381166114075760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b60648201526084016102f6565b611410816116ff565b50565b3361141c610cf7565b6001600160a01b0316146114425760405162461bcd60e51b81526004016102f690611e2e565b6040516370a0823160e01b81526001600160a01b0382169063a9059cbb90339083906370a0823190611478903090600401611d06565b60206040518083038186803b15801561149057600080fd5b505afa1580156114a4573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906114c89190611c98565b6040518363ffffffff1660e01b81526004016114e5929190611d9b565b602060405180830381600087803b1580156114ff57600080fd5b505af1158015611513573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906115379190611c64565b5050565b60008585858585604051602001611556959493929190611d62565b60405160208183030381529060405280519060200120905095945050505050565b6040516001600160a01b03808516602483015283166044820152606481018290526115e29085906323b872dd60e01b906084015b60408051601f198184030181529190526020810180516001600160e01b03166001600160e01b031990931692909217909152611853565b50505050565b8015806116705750604051636eb1769f60e11b81526001600160a01b0384169063dd62ed3e9061161e9030908690600401611d1a565b60206040518083038186803b15801561163657600080fd5b505afa15801561164a573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061166e9190611c98565b155b6116db5760405162461bcd60e51b815260206004820152603660248201527f5361666545524332303a20617070726f76652066726f6d206e6f6e2d7a65726f60448201527520746f206e6f6e2d7a65726f20616c6c6f77616e636560501b60648201526084016102f6565b6116fa8363095ea7b360e01b84846040516024016115ab929190611d9b565b505050565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b6000836001600160a01b0316838360405161176b929190611cda565b6000604051808303816000865af19150503d80600081146117a8576040519150601f19603f3d011682016040523d82523d6000602084013e6117ad565b606091505b50509050806118105760405162461bcd60e51b815260206004820152602960248201527f54696d656c6f636b3a20756e6465726c79696e67207472616e73616374696f6e604482015268081c995d995c9d195960ba1b60648201526084016102f6565b847fc08872e260006100fd2e00a3ba4c617fdb250f802f99384d55c10097dc1d048785858560405161184493929190611d34565b60405180910390a25050505050565b60006118a8826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c6564815250856001600160a01b03166119259092919063ffffffff16565b8051909150156116fa57808060200190518101906118c69190611c64565b6116fa5760405162461bcd60e51b815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e6044820152691bdd081cdd58d8d9595960b21b60648201526084016102f6565b6060611934848460008561193e565b90505b9392505050565b60608247101561199f5760405162461bcd60e51b815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f6044820152651c8818d85b1b60d21b60648201526084016102f6565b843b6119ed5760405162461bcd60e51b815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e747261637400000060448201526064016102f6565b600080866001600160a01b03168587604051611a099190611cea565b60006040518083038185875af1925050503d8060008114611a46576040519150601f19603f3d011682016040523d82523d6000602084013e611a4b565b606091505b5091509150611a5b828286611a66565b979650505050505050565b60608315611a75575081611937565b825115611a855782518084602001fd5b8160405162461bcd60e51b81526004016102f69190611db4565b600060208284031215611ab0578081fd5b8135611937816120f0565b600060208284031215611acc578081fd5b8151611937816120f0565b60008060008060808587031215611aec578283fd5b8435611af7816120f0565b93506020850135611b07816120f0565b92506040850135611b17816120f0565b9396929550929360600135925050565b600080600080600060a08688031215611b3e578081fd5b8535611b49816120f0565b94506020860135611b59816120f0565b93506040860135611b69816120f0565b9250606086013591506080860135611b8081612105565b809150509295509295909350565b600080600060608486031215611ba2578283fd5b8335611bad816120f0565b92506020840135611bbd816120f0565b929592945050506040919091013590565b60008060008060008060a08789031215611be6578081fd5b8635611bf1816120f0565b955060208701356001600160401b0380821115611c0c578283fd5b818901915089601f830112611c1f578283fd5b813581811115611c2d578384fd5b8a6020828501011115611c3e578384fd5b979a60209290920199509697604081013597506060810135965060800135945092505050565b600060208284031215611c75578081fd5b815161193781612105565b600060208284031215611c91578081fd5b5035919050565b600060208284031215611ca9578081fd5b5051919050565b60008284528282602086013780602084860101526020601f19601f85011685010190509392505050565b6000828483379101908152919050565b60008251611cfc8184602087016120ae565b9190910192915050565b6001600160a01b0391909116815260200190565b6001600160a01b0392831681529116602082015260400190565b6001600160a01b0384168152604060208201819052600090611d599083018486611cb0565b95945050505050565b6001600160a01b0386168152608060208201819052600090611d879083018688611cb0565b604083019490945250606001529392505050565b6001600160a01b03929092168252602082015260400190565b6000602082528251806020840152611dd38160408501602087016120ae565b601f01601f19169190910160400192915050565b60208082526027908201527f54696d654c6f636b3a2043616c6c6572206973206e6f7420636f6e74726163746040820152661034ba39b2b63360c91b606082015260800190565b6020808252818101527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604082015260600190565b6020808252601d908201527f417065526f757465723a204e6f207661756c7420666f7220746f6b656e000000604082015260600190565b60208082526024908201527f417065526f757465723a20796561726e205661756c74206e6f74206964656e746040820152631a58d85b60e21b606082015260800190565b6020808252601f908201527f417065526f757465723a205661756c7420646f6573206e6f7420657869737400604082015260600190565b9182526001600160a01b0316602082015260400190565b60008219821115611f3f57611f3f6120da565b500190565b600082611f5f57634e487b7160e01b81526012600452602481fd5b500490565b80825b6001808611611f765750611fa1565b818704821115611f8857611f886120da565b80861615611f9557918102915b9490941c938002611f67565b94509492505050565b60006119376000198484600082611fc357506001611937565b81611fd057506000611937565b8160018114611fe65760028114611ff05761201d565b6001915050611937565b60ff841115612001576120016120da565b6001841b915084821115612017576120176120da565b50611937565b5060208310610133831016604e8410600b8410161715612050575081810a8381111561204b5761204b6120da565b611937565b61205d8484846001611f64565b80860482111561206f5761206f6120da565b02949350505050565b6000816000190483118215151615612092576120926120da565b500290565b6000828210156120a9576120a96120da565b500390565b60005b838110156120c95781810151838201526020016120b1565b838111156115e25750506000910152565b634e487b7160e01b600052601160045260246000fd5b6001600160a01b038116811461141057600080fd5b801515811461141057600080fdfead1daa3a6c907d761416fa1a6d153dc1e6ff1d19b354bbfcbb848e79cecf9189a26469706673582212207440f3315817972b4018a2e0768522c4d5e9a90bf3ad76ea2270e3709959e6a464736f6c63430008020033";
    static readonly abi: ({
        inputs: {
            internalType: string;
            name: string;
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
