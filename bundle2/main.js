/*******************************************************************************
​
    Per questo esercizio, rispondi a queste domande:
    1- Che cosa fa questo codice?
    2- Sono presenti errori di sintassi?
    3- Sono presenti errori logici?
​
    Inserisci i tuoi commenti con le risposte alla fine dell'esercizio
​
*******************************************************************************/


// ESERCIZIO 1
function checkAge() {
    const myAge = 16;
    let message = '';

    if (myAge < 18) {
        return message = `Sei troppo giovane! Hai ${myAge} anni!`;
    } else {
        return message = 'Hai più di 18 anni!';
    }
    console.log(message);
}
checkAge();
console.log(checkAge());

// funziona
// ho cambiato da const a let



// ESERCIZIO 2
function printColorsNumber() {
    const colors = ['blue', 'red', 'yellow', 'green', 'black'];
    const lunghezza = colors.length
    console.log(`Nella mia palette ci sono ${lunghezza} colori!`);
    console.log(colors.length);
}
printColorsNumber();

// funziona?
// ho assegnato la lunghezza dell' array ad una variabile






// ESERCIZIO 3

// let total = 0;

// function addNumbers() {
//     // const userNumber =parseInt (prompt('Inserisci un numero'));
//     let total = userNumber + 12;

//     console.log(`Il risultato finale è ${total}`);
// }
// addNumbers();


// serviva un parse int del prompt, poichè se no essendo un input ti restituisce una stringa, che sommata a un numero non da il risultato corretto





// ESERCIZIO 4

function checkAccess() {
    const addresses = ['mymail@mail.com', 'yourmail@mail.com', 'hermail@mail.com', 'hismail@mail.com'];
    const userEmail =  prompt('Inserisci il tuo indirizzo email');


    let grantAccess = false;

    if (addresses.includes(userEmail)) {
        grantAccess = true;
    }

    if (grantAccess === true) {
        console.log('Accesso consentito!');
    } else {
        console.log('Accesso negato!');
    }
}
checkAccess();
// i valori booleani tre e false del flag erano stringhe


// ESERCIZIO 5 (suggerimento: c'è un solo errore)
function checkAccessImproved() {
    const addresses = ['mymail@mail.com', 'yourmail@mail.com', 'hermail@mail.com', 'hismail@mail.com'];

    const userEmail = prompt('Inserisci il tuo indirizzo email');

    let grantAccess = 'false';

    for (let i = 0; i < addresses.length; i++) {
        const email = addresses[i];

        if (userEmail.length > 5) {

            if (email === userEmail) {
                grantAccess = 'true';

            }

        }

        if (grantAccess) {
            console.log('Accesso consentito!');
        } else {
            console.log('Accesso negato!');
        }
    }
}
checkAccessImproved();
console.log(checkAccessImproved());

// nonn era stat invocata la funzione
// messo } 



























