/*******************************************************************************

    Per ognuno dei seguenti esercizi, rispondi a queste domande:
    1- Che cosa fa questo codice?
    2- Sono presenti errori di sintassi?
    3- Sono presenti errori logici?

    Inserisci i tuoi commenti con le risposte, sotto ciascun esercizio

*******************************************************************************/


// ESERCIZIO 1
for (let i = 0; i < 5; i++) {
    console.log(i);
}

// funziona
// cambiato > con < 


// ESERCIZIO 2
function addIfEven(num) {
    if (num % 2 === 0){
        return num + 5;
    }
    return num;
}
console.log(addIfEven(4));

// funziona
// servivano i 3 uguali al posto di uno SVGFEColorMatrixElement, in modo da essere in modalità comparazione e non scrittura



// ESERCIZIO 3
function loopToFive() {
    for (let i = 0; i < 5; i++) {
        console.log(i);
    }
}

loopToFive();

// funziona
// servivano i ; al posto delle ,




// ESERCIZIO 4 (suggerimento: ci sono 7 errori)
function displayEvenNumbers() {
    let numbers = [1, 2, 3, 4, 5, 6, 7, 8];
    let evenNumbers = [];
    for (let i = 0; i < numbers.length-1; i++) {
        if ((numbers[i] % 2)===0) {
            evenNumbers.push(numbers[i]);
        }
    }
    return evenNumbers;
}

// tolto ; dopo if e messo ===, messo numbers.length -1, in modo che il ciclo si concluda dopo che abbia ciclato anche l' ultimo indice tra parentesi e tolto ; dopo i,
//  ho spostato il returnfuori dal loop for, in modo che ritorni evenNumbers una volta iterato tutto l' array numbers
displayEvenNumbers();// dovrebbe restituire [2,4,6,8]
console.log("------------",displayEvenNumbers());