

alert("Benvenuto! Premi Invio per calcolare il prezzo del tuo biglietto");

/*richiesta età */

let eta = parseInt(prompt("Inserisci la tua età"));

/*richiesta chilometraggio */

let km = parseInt(prompt("Inserisci la distanza del tuo viaggio in chilometri"));

/* creazione costante da moltiplicare */

const unitakm=0.21;

/* calcolo prezzo over 65*/

let tot40 = (km * unitakm)- ((km * unitakm)*0.40);

/* calcolo prezzo under 18*/

let tot20 = (km * unitakm)- ((km * unitakm)*0.20);

/* calcolo prezzo normale*/

let tot = (km * unitakm);

/* stampa caso under 18 */

if(eta<18){

    document.getElementById('stampa').innerHTML= tot20;

}

/* stampa caso over 65*/

else if(eta>65){

    document.getElementById('stampa').innerHTML= "Il prezzo è : " + tot40;

}

/* stampa caso normale */

else if(eta<65 || eta > 18){

    document.getElementById('stampa').innerHTML= "Il prezzo è : " + tot;

}
