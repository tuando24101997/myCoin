import React, { useState } from 'react';

function CardLeft(props) {

    const {myWallet, wallets, getFormCreate, wActive, getIdChangeWallet} = props;
    const [valueForm, setValueForm] = useState('');

    function handleFormCreateChange(e){
        setValueForm(e.target.value);    
    }

    function handleFormCreateSubmit(e){
        e.preventDefault();
        if(valueForm === ''){return}
        const formValue = {
            name: valueForm
        }
        setValueForm('');
        getFormCreate(formValue);
    }

    function handleClickChangeWallet(id){
        const value={
            newId: id
        }
        document.getElementsByClassName('cardchangewallet')[0].classList.remove('xuathien');
        getIdChangeWallet(value);

    }

    return (
        <div className="col-4">

            {/* CARD MY WALLET*/}
            <div className="card shadow">
                <div className="card-header mb-3">
                    <h5>My Wallet <i className="fas fa-coins ml-2" /></h5>	
                </div>
                <div className="card-content">
                    <div className="card-content-small">
                        <span className="card-content-name">Name</span>
                        <span className="card-content-name">{myWallet.name}</span>
                    </div>
                    <div className="card-content-small">
                        <span className="card-content-name">Status</span>
                        <span className={myWallet.status === true?"txtstatus":"txtstatusdis"}>
                            {myWallet.status === true?"Connected":"Disconnected"}
                        </span>
                    </div>						    
                    <div className="card-content-small">
                        <span className="card-content-name">My coin</span>
                        <span className="txtcoin">{myWallet.coin}</span>
                    </div>
                    <div className="card-content-small">
                        <button className="btn btn-danger btnsendcoid">Send Coin</button>
                        <button className="btn btn-warning btnview">View Statistical</button>
                    </div>
                    <div className="card card-send-coin">
                        <div className="card-header card-coin">
                            <span>Send Coin</span>
                            <i style={{cursor: 'pointer'}} className="fas fa-times-circle exitsendcoin" />
                        </div>
                        <div className="card-body">
                            <form>
                            <div className="form-group">
                                <label htmlFor="sendcoin">Coin</label>
                                <input type="text" className="form-control form-control-sm" id="sendcoin" />
                                <label className="txtinvalid">Input coin invalid</label>
                            </div>
                            <div className="form-group">
                                <label htmlFor="wallet">Wallet</label>
                                <select className="form-control form-control-sm" id="wallet">
                                    {wallets.map(wallet=>(
                                        <option 
                                            key={wallet.id}
                                            className={wallet.id === wActive?"andi":""}
                                        >
                                            {wallet.name}
                                        </option>                                       
                                    ))}
                                </select>
                            </div>
                            <button className="btn btn-block btn-success">Send</button>
                            </form>
                        </div>
                    </div>
                    <div className="card card-view">
                        <div className="card-header card-coin">
                            <span>Statistical Wallet</span>
                            <i style={{cursor: 'pointer'}} className="fas fa-times-circle iconexit" />
                        </div>
                        <div className="card-body">
                            <div style={{marginBottom: '15px'}}>
                            <span style={{fontWeight: 'bold'}}>Coin Received: </span>
                            <span style={{color: 'green', fontWeight: 'bold'}}>{myWallet.transfer}</span>
                            </div>
                            <div>
                            <span style={{fontWeight: 'bold'}}>Coin Transferred: </span>
                            <span style={{color: 'red', fontWeight: 'bold'}}>-{myWallet.recieved}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            

            {/* CARD CREATE WALLET*/}
            <div className="card shadow mt-3">
                <h5 className="card-header btncreatewallet" style={{cursor: 'pointer'}}>
                    Create Wallet <i className="fas fa-plus ml-2" />
                </h5>
                <div className="card-body cardcreatewallet">
                    <form 
                        className="form-inline formcreatewallet" 
                        style={{display: 'flex', justifyContent: 'space-around'}}
                        onSubmit={handleFormCreateSubmit}
                    >
                        <div className="form-group">
                            <input 
                                type="text" 
                                className="form-control" 
                                placeholder="Name wallet..." 
                                onChange={handleFormCreateChange}
                            />
                        </div>
                        <button className="btn btn-primary btnformcreatewallet">Create</button>
                    </form>
                </div>
            </div>	
            

            {/* CARD CHANGE WALLET*/}
            <div className="card shadow mt-3">
                <h5 className="card-header btnchangewallet" style={{cursor: 'pointer'}}>
                    Change Wallet 
                    <i className="fas fa-exchange-alt ml-2" />
                </h5>
                <div className="card-body cardchangewallet">
                    {wallets.map(wallet =>(
                        <div 
                            key={wallet.id}
                            className={wActive === wallet.id ? "active changewallet mb-2":"changewallet mb-2"}
                            onClick={()=>handleClickChangeWallet(wallet.id)}
                        >
                            <span>{wallet.name}</span>
                        </div>
                    ))}
                </div>
            </div>				
        </div>
    );
}

export default CardLeft;