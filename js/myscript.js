let userInputName = document.getElementById('my-input-name');
let userInputDistance = document.getElementById('my-input-distance');
let userInputSelect = document.getElementById('inputGroupSelect');



const userBtnGen = document.getElementById('my-btn-gen');
userBtnGen.addEventListener('click', function() {
    document.getElementById('my-section-ticket').classList.remove('d-none');
    document.getElementById('my-section-ticket').classList.add('d-block');
    document.getElementById('my-name-user').innerHTML = userInputName;
    

    switch (userInputSelect.value) {
        case 1:
            console.log('Ha scelto minorenne');
            break;
        case 2:
            console.log('Ha scelto standard');
            break;
        case 3:
            console.log('Ha scelto over 65');
            break;

        default:
            console.error('Buggino Mannaggino')
    }

    
    let randomInt = Math.floor(Math.random() * 15) + 1;
    document.getElementById('my-ticket-position').innerHTML = randomInt;
    
    let randomIntCode = Math.floor(Math.random() * 99999) + 1;
    document.getElementById('my-ticket-code').innerHTML = randomIntCode;
    
    
    
    console.log(userInputName.value);
    console.log(userInputDistance.value);
    console.log(userInputSelect.value);
    
    userInputName.value = "";
    userInputDistance.value = "";
    userInputSelect.value = 1;
});