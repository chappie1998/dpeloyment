import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Provider, Contract, Wallet, ContractFactory } from "fuels";
import bytecode from "./NFT.bin";

function App() {
  const wallet = new Wallet(
    "0xde97d8624a438121b86a1956544bd72ed68cd69f2c99555b08b1e8c51ffd511c"
  );

  const deploy = async () => {
    // Byte code generated using: forc build

    const factory = new ContractFactory(bytecode, [], wallet);
    const contract = await factory.deployContract(factory);

    console.log(contract.id);
  };

  return (
    <div className="App">
      <button onClick={deploy}>click</button>
    </div>
  );
}

export default App;
