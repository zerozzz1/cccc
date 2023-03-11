import React, { useState } from "react";
import "./App.css";
import Chat from "./components/Chat";
import Sidebar from "./components/Sidebar";
import BlockchainChatArtifact from "./contract/BlockchainChat-artifact.json";
import useChatContract from "./useChatContract";

function App() {
  const contractAddress = "0x2884DD99A5A9b276352604dDaEDc565c89Fe080E";
  const [account, setAccount] = useState<string>();
  const chatContract = useChatContract(
    contractAddress,
    BlockchainChatArtifact.abi,
    account
  );

  return (
    <div className="App">
      <Sidebar setAccount={setAccount} account={account} />
      <Chat account={account} chatContract={chatContract} />
    </div>
  );
}

export default App;
