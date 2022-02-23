let userInputName = document.getElementById('my-input-name');
let userInputDistance = document.getElementById('my-input-distance');
let userInputSelect = document.getElementById('inputGroupSelect');



const userBtnGen = document.getElementById('my-btn-gen');
userBtnGen.addEventListener('click', function() {
    document.getElementById('my-section-ticket').classList.remove('d-none');
    document.getElementById('my-section-ticket').classList.add('d-block');
    

    document.getElementById('my-name-user').innerHTML = userInputName.value;
    

    console.log(`Nome: ${userInputName.value}`);
    console.log(`Distanza KM: ${userInputDistance.value}`);


    let priceTicket = userInputDistance.value * 0.27;
    console.log(`Prezzo base: ${priceTicket}`);
    
    if (userInputSelect.value == 1) {
        priceTicket -= priceTicket * 0.17;
        priceTicket = priceTicket.toFixed(2);
        document.getElementById('my-ticket-type').innerHTML = "Biglietto minorenne";
        console.log('Ha scelto il biglietto minorenne');
    }

    if (userInputSelect.value == 2) {
        priceTicket = priceTicket.toFixed(2);
        document.getElementById('my-ticket-type').innerHTML = "Biglietto standard";
        console.log('Ha scelto il biglietto standard');
    }

    if (userInputSelect.value == 3) {
        priceTicket -= priceTicket * 0.33
        priceTicket = priceTicket.toFixed(2);
        document.getElementById('my-ticket-type').innerHTML = "Biglietto over 65";
        console.log('Ha scelto il biglietto over 65');
    }
    

    document.getElementById('my-ticket-price').innerHTML = priceTicket + "<span>&euro;</span>";
    console.log(`Prezzo finale: ${priceTicket}`);
    

    let randomInt = Math.floor(Math.random() * 15) + 1;
    document.getElementById('my-ticket-position').innerHTML = randomInt;

    let randomIntCode = Math.floor(Math.random() * 99999) + 1;
    document.getElementById('my-ticket-code').innerHTML = randomIntCode;
    
    
    userInputName.value = "";
    userInputDistance.value = "";
    userInputSelect.value = 2;
});



const userBtnDelete = document.getElementById('my-btn-delete');
userBtnDelete.addEventListener('click', function() {
    document.getElementById('my-section-ticket').classList.remove('d-block');
    document.getElementById('my-section-ticket').classList.add('d-none');
    
    
    userInputName.value = "";
    userInputDistance.value = "";
    userInputSelect.value = 2;
});