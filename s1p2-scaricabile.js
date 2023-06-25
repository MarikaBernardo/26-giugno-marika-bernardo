/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/

I principali tipi di dati in JavaScript sono:

- Numeri.
- Stringa: stringa di numeri o di lettere, racchiuse all’intento di virgolette.
- Boolean: ha due valori: vero o falso e viene utilizzato per rappresentare la logica di una variabile.
- Oggetto: rappresenta una collezione di proprietà che a loro volta hanno un nome e un valore. E a loro volta possono contenere più variabili e considerarsi “un insieme di variabili”.
- Null: rappresenta l’assenza di valore.
- Undefined: rappresenta un valore non ancora identidicato.

Utilizzati per identificare la variabile e assegnargli valore, modifiche e dati.

/* ESERCIZIO 2
 Descrivi cos'è un oggetto in JavaScript, con parole tue.
*/

Un Oggetto in JavaScript è una struttura che consente di raggruppare insieme valori correlati che prendono il nome di proprietà.
Le proprietà sono una coppia “chiave-valore”
Dove la chiave è la stringa che identifica la proprietà e il valore può essere qualsiasi tipo di dato, anche un altro oggetto.


/* ESERCIZIO 3
 Scriti il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/

let n1 = 12
let n2= 22

let addizione = n1 + n2
console.log(addizione)

/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/

let x = 12;

/* ESERCIZIO 5
 Crea una variable chiamata "name" e assegna ad essa il tuo nome, sotto forma di stringa.
*/

let name = "Marika";

/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 Infine, verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
 NON HAI BISOGNO DI UN BLOCCO IF/ELSE. E' sufficiente utilizzare console.log().
*/

var name1 = "john"; 
var name2 = "John";

console.log(name1 !== name2); //vero.
console.log(name1.toLowerCase === name2.toLowerCase); //convertito in minuscolo: vero.
