let randomN1 = numeriCasuali ();
let randomN2 = numeriCasuali ();
let randomN3 = numeriCasuali ();
let randomN4 = numeriCasuali ();
let randomN5 = numeriCasuali ();

function numeriCasuali () {
    let randomnumber = Math.floor((Math.random() * 10) + 1);
    console.log("il computer ha scelto il numero " +  randomnumber)
}

