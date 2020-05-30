import React, { useState } from 'react';
import './App.css';
import CardLeft from './components/cardLeft/CardLeft';
import CardRight from './components/cardRight/CardRight';
import md5 from 'md5';

const propOfWork = (index, prevHash ) =>{
  var nonce = 0;
  while (true){
    var time = Date.now();
    const hash = index + prevHash + time + nonce;
    const codeHash = md5 (hash.toString());
    if (codeHash.indexOf(0) === 0){
      return codeHash;
    }
    nonce++;
  }
}

function App() {

  // Khai bao state Block
  const [block, setBlock] = useState([
    { id: 0, data: 'This is first block', prevHash: '0', hash: '0a57713a039009ebff2dc43afd450706', name: 'GENESIS BLOCK' }
  ]);

  // Khai baos state wallet
  const [wallet, setWallet] = useState([
    { id: 0, status: true, name: 'Panigale', coin: 100, transfer: 0, recieved: 0}
  ])
  
  // Khai bao wallet active
  const [walletActive, setWalletActive] = useState(0);

  // Function create wallet
  function getValueFormCreate(value){
    const numberWalet = wallet.length;
    const nameValue = value.name;
    const newWallet = {
      id: numberWalet,
      status: false,
      name: nameValue,
      coin: 0,
      transfer: 0,
      recieved: 0
    }
    var newListWallet = [...wallet];
    newListWallet.push(newWallet);
    setWallet(newListWallet);
    setWalletActive(numberWalet);
  }

  //Function change wallet
  function getIdWallet(value){
    setWalletActive(value.newId);
  }

  // Function change status (connected/disconnected)
  function getStatusWallet(value){
    console.log(value);
    const newWallet = [...wallet];
    newWallet[value.idForm].status = !newWallet[value.idForm].status;
    setWallet(newWallet);
  }

  function xuathiendiv(clName){
    document.getElementsByClassName(clName)[0].classList.add('xuathien');
  }

  function xoabodiv(clName){
    document.getElementsByClassName(clName)[0].classList.remove('xuathien');
  }

  function clearDataForm(id){
    document.getElementById(id).reset();
  }

  function getSendCoinWallet(value){
    var newWallet = [...wallet];
    var mycoin = newWallet[walletActive].coin;
    if (value.id === walletActive || value.coin > mycoin || value.coin <= 0 || isNaN(value.coin) ){
      //xuathiendiv('txtinvalid');
      document.getElementsByClassName('txtinvalid')[0].classList.add('xuathientxtinvalid');
      //alert("Input coin invalid")
      clearDataForm('formsendcoin');
    }
    else{
      // add block to blockchain
      const newId = block.length;
      const iPrevHash = block[newId  - 1].hash;
      var newListBlock = [...block];
      const newData = newWallet[walletActive].name + " send to " + newWallet[value.id].name+ " " + value.coin + " Coin"
      var newBlock = {
        id: newId,
        data: newData,
        prevHash: iPrevHash,
        hash: propOfWork(newId, iPrevHash),
        name: "BLOCK #" + newId,
      }
      newListBlock.push(newBlock);
      setBlock(newListBlock);

      console.log(newBlock);
      newWallet[walletActive].coin = mycoin - value.coin;
      newWallet[walletActive].recieved -= value.coin;
      newWallet[value.id].coin = newWallet[value.id].coin + value.coin;
      newWallet[value.id].transfer += value.coin;
      setWallet(newWallet);
      clearDataForm('formsendcoin');
      xoabodiv('card-send-coin');    
    }
  }

  return (
    <div className="App">
      <div>
        <h1 className="titleName mt-3 mb-4">MY COIN</h1>
        <div className="container">
          <div className="row">
            <CardLeft 
              myWallet={wallet[walletActive]} 
              wallets={wallet}
              wActive={walletActive}
              getFormCreate={getValueFormCreate}
              getIdChangeWallet={getIdWallet}
              getStatus={getStatusWallet}
              getSendCoin={getSendCoinWallet}
            />
            <CardRight blocks={block} wActive={wallet[walletActive]} />
          </div>
        </div>
      </div>
    </div>
);
}

export default App;