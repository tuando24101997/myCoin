document.addEventListener("DOMContentLoaded", function(){
    
    // 
    const sendcoin = document.getElementsByClassName('btnsendcoid')[0];
    var sendcoinform = document.getElementsByClassName('card-send-coin')[0];
    const exitsendcoin = document.getElementsByClassName('exitsendcoin')[0];

    const btnview = document.getElementsByClassName('btnview')[0];
    var cardview = document.getElementsByClassName('card-view')[0];
    const iconexit = document.getElementsByClassName('iconexit')[0];


     // button click send coin
    sendcoin.onclick = () =>{
    	sendcoinform.classList.toggle('xuathien');
    	cardview.classList.remove('xuathien');
    }
    exitsendcoin.onclick = () =>{
    	sendcoinform.classList.remove('xuathien');
    }



    // button click view statistical

    btnview.onclick = () =>{
    	cardview.classList.toggle('xuathien');
    	sendcoinform.classList.remove('xuathien');
    }
    iconexit.onclick = () =>{
    	cardview.classList.remove('xuathien');
    }

    const btncreatewallet = document.getElementsByClassName('btncreatewallet')[0];
    const btnchangewallet = document.getElementsByClassName('btnchangewallet')[0];
    const btnformcreatewallet = document.getElementsByClassName('btnformcreatewallet')[0];

    var cardcreatewallet = document.getElementsByClassName('cardcreatewallet')[0];
    var cardchangewallet = document.getElementsByClassName('cardchangewallet')[0];

    btncreatewallet.onclick = () =>{
    	cardcreatewallet.classList.toggle('xuathien');
    	cardchangewallet.classList.remove('xuathien');
    }

    btnchangewallet.onclick = () =>{
    	cardchangewallet.classList.toggle('xuathien');
    	cardcreatewallet.classList.remove('xuathien');
    }

    btnformcreatewallet.onclick = () =>{
        cardcreatewallet.classList.remove('xuathien');
    }

    var formcreatewallet = document.getElementsByClassName('formcreatewallet')[0];
    formcreatewallet.onclick = () =>{
        formcreatewallet.reset();
    }

})