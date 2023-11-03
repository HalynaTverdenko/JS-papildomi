/* 
Užduotis 1
Naudodami while loop, konsolėje parašykite nuo 10 iki 1. 
*/

let skaicius = 10; 
do {
    console.log(skaicius);
    skaicius--; 
} while (skaicius >= 1) 


/* 
Užduotis 2
Naudodami for loop, konsolėje parašykite nuo 10 iki 1.
*/
for(let i=10; i >= 1; i--) {
    console.log(i)
}


/*
Užduotis 3
Per mėnesį avių skaičius išauga 4 kartais. Naudodami while loop ir tris nurodytus kintamuosius, išveskite avių skaičių 12 mėnesių.

let numAvys = 4;
let numMenuo = 1;
let kiekMenSpausdinti = 12;

Štai kaip atrodys pirmos dvi eilutės:

Po 1 mėnesio(-ių) bus 16 avių!
Po 2 mėnesio(-ių) bus 64 avių!
*/
let numAvys = 4;
let numMenuo = 1; 
let numAvysPerMen = (numAvys*4)
while (numMenuo <= 12) {
    console.log (`Po ${numMenuo} mėnesio(-ių) bus ${numAvysPerMen} avių!`)
    numMenuo++
    numAvysPerMen*4 
}


/*
Užduotis 4
Atlikite užduotį JS 03 su for loop
*/
numAvys = 4;
numMenuo = 1; 

for(numMenuo = 1; numMenuo <= 12; numMenuo++) {
    if (numAvysPerMen = (numAvys*4)) {
    console.log (`Po ${numMenuo} mėnesio(-ių) bus ${numAvysPerMen} avių!`)
    }
}

/*
Užduotis 5
Hidroeleketrinėje yra 19 generatorių. Pirmi 4 gamina po 62 MW, likusieji 15 - po 124 MW. Inžinieriai paprašė tavęs sukurti du ciklus (loops), kurie vienas po kito įjungia visus 19 generatorių ir atspausdina generuojamų MW skaičių. Pirmiems 4 generatoriams panaudok while loop, likusiems 15 - for loop. Kiekviena spausdinama eilutė turėtų atrodyti taip (koreguojant currentGen ir totalMW):

Generatorius #1 įjungtas, pridėjo 62 MW, viso generuojama 62 MW!
Generatorius #2 įjungtas, pridėjo 62 MW, viso generuojama 124 MW!

Naudokis tokiais kintamaisiais:
*/
let currentGen = 1;
let totalGen = 19;
let totalMW = 0;


while (currentGen <= 4) {
    console.log (`Generatorius #${currentGen} įjungtas, pridėjo 62 MW, viso generuojama ${totalMW+62} MW!`)
    currentGen++
    totalMW+=62 
}
for (currentGen = 5; currentGen <=19; currentGen++) {
    console.log (`Generatorius #${currentGen} įjungtas, pridėjo 62 MW, viso generuojama ${totalMW+124} MW!`)
    totalMW+=124
}

/*
Užduotis 6
Keli pakeitimai JS 05 užduočiai. Veikia tik lyginiai generatoriai. Panaudok tik vieną for loop. Nepamiršk, kad pirmi 4 generatoriai gamina po 62 MW, o likusieji 15 - po 124 MW.

Konsolės formatas:

Generatorius #1 išjungtas.
Generatorius #2 įjungtas, pridėjo 62 MW, viso generuojama 62 MW!

Naudojami kintamieji:
*/
totalGen = 19;
totalMW = 0;
for (currentGen = 1; currentGen <=19; currentGen++) {
    if (currentGen <= 4) {
        totalMW+=62
        console.log (`Generatorius #${currentGen} įjungtas, pridėjo 62 MW, viso generuojama ${totalMW} MW!`)
    } else if (currentGen > 4) {
        totalMW+=124
        console.log (`Generatorius #${currentGen} įjungtas, pridėjo 62 MW, viso generuojama ${totalMW} MW!`)
    }
}


/*
Užduotis 7
Papildyk while loop taip, kad tik lyginiai skaičiai būtų spausdinami. Tavo rezultatas turėtų būti lyginiai skaičiai nuo 10 iki 2 žemėjančia tvarka.
*/
let num=10;
while (num > 0) {
console.log(num);
num-=2;
}




/*
Užduotis 8
Sukurk funkciją maxOf2, kuri priima du skaičius ir gražina didesnį skaičių. Nepamiršk galimybės, kad skaičiai bus lygūs. Tuo atveju gražink vieną iš skaičių.
*/
number1 = Math.floor(Math.random() * (100 - 0 + 1) + 0)
number2 = Math.floor(Math.random() * (100 - 0 + 1) + 0)
console.log(Math.max(number1, number2))

