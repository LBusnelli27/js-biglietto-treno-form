// Variable declaration
let userInputName = document.getElementById('my-input-name');
let userInputDistance = document.getElementById('my-input-distance');
let userInputSelect = document.getElementById('inputGroupSelect');



// eventListener for generate ticket button
const userBtnGen = document.getElementById('my-btn-gen');
userBtnGen.addEventListener('click', function() {
    // Make my-ticket section visible
    document.getElementById('my-section-ticket').classList.remove('d-none');
    document.getElementById('my-section-ticket').classList.add('d-block');


    // Put user name in the ticket name in html
    document.getElementById('my-name-user').innerHTML = userInputName.value;


    console.log(`Nome: ${userInputName.value}`);
    console.log(`Distanza KM: ${userInputDistance.value}`);


    // Calc for ticket price
    let priceTicket = userInputDistance.value * 0.27;
    console.log(`Prezzo base: ${priceTicket}`);
    
    // If for ticket type (Minorenne)
    if (userInputSelect.value == 1) {
        priceTicket -= priceTicket * 0.17;
        priceTicket = priceTicket.toFixed(2);
        document.getElementById('my-ticket-type').innerHTML = "Biglietto minorenne";
        console.log('Ha scelto il biglietto minorenne');
    }

    // If for ticket type (Standard)
    if (userInputSelect.value == 2) {
        priceTicket = priceTicket.toFixed(2);
        document.getElementById('my-ticket-type').innerHTML = "Biglietto standard";
        console.log('Ha scelto il biglietto standard');
    }

    // If for ticket type (Over 65)
    if (userInputSelect.value == 3) {
        priceTicket -= priceTicket * 0.33
        priceTicket = priceTicket.toFixed(2);
        document.getElementById('my-ticket-type').innerHTML = "Biglietto over 65";
        console.log('Ha scelto il biglietto over 65');
    }


    // Put in html the final ticket price
    document.getElementById('my-ticket-price').innerHTML = priceTicket + "<span>&euro;</span>";
    console.log(`Prezzo finale: ${priceTicket}`);
    

    // Random gen for carriage position
    let randomInt = Math.floor(Math.random() * 15) + 1;
    document.getElementById('my-ticket-position').innerHTML = randomInt;

    // Random gen for ticket code
    let randomIntCode = Math.floor(Math.random() * 99999) + 1;
    document.getElementById('my-ticket-code').innerHTML = randomIntCode;


    // Reset user input
    userInputName.value = "";
    userInputDistance.value = "";
    userInputSelect.value = 2;
});



// eventListener for delete ticket button (this button delete my ticket section)
const userBtnDelete = document.getElementById('my-btn-delete');
userBtnDelete.addEventListener('click', function() {
    // Make my-ticket section invisible
    document.getElementById('my-section-ticket').classList.remove('d-block');
    document.getElementById('my-section-ticket').classList.add('d-none');


    // Reset user input
    userInputName.value = "";
    userInputDistance.value = "";
    userInputSelect.value = 2;
});