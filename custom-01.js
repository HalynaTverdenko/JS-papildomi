/*
Uždavinių sprendimui nenaudoti, masyvų, ciklų ir savo parašytų funkcijų. JavaScript funkcijas žinoma naudokite (pageidautina).
Visi random generuojami skaičiai turi būti sveikieji.
*/

/* 01.
Sukurkite 4 kintamuosius, kurie saugotų jūsų vardą, pavardę, gimimo metus ir šiuos metus (nebūtinai tikrus). Parašykite kodą, kuris pagal gimimo metus paskaičiuotų jūsų amžių ir naudodamas vardo ir pavardės kintamuosius atspausdintų tokį sakinį :
"Aš esu Vardenis Pavardenis. Man yra XX metai(-ų)".
*/
let vardas = 'Halyna' 
let pavarde = 'Tverdenko' 
let gimimo_metus = 1989 
let metus = 2023 
console.log('Aš esu', vardas, pavarde+". Man yra", metus - gimimo_metus, 'metai(-ų)')


/* 02.
Naudokite funkciją Math.random(). Sukurkite du kintamuosius ir naudodamiesi funkcija Math.random() jiems priskirkite atsitiktines reikšmes nuo 0 iki 4. Didesnę reikšmę padalinkite iš mažesnės. Atspausdinkite rezultatą jį suapvalinę iki 2 skaičių po kablelio.
*/
    let numA = Math.floor(Math.random() * (4 - 0 + 1) + 0)
    let numB = Math.floor(Math.random() * (4 - 0 + 1) + 0) 
    console.log (numA)
    console.log (numB)
    let result = Math.max(numA,numB)/Math.min(numA,numB)
    console.log(result.toFixed(2))

/* 03.
Naudokite funkciją Math.random(). Sukurkite tris kintamuosius ir naudodamiesi funkcija Math.random() jiems priskirkite atsitiktines reikšmes nuo 0 iki 25. Raskite ir atspausdinkite kintąmąjį turintį vidurinę reikšmę.
*/

let c = Math.floor(Math.random() * (25 - 0 + 1) + 0)
console.log (c)
let d = Math.floor(Math.random() * (25 - 0 + 1) + 0)
console.log (d)
let e = Math.floor(Math.random() * (25 - 0 + 1) + 0)
console.log (e)

let suma = (c+d+e)
numKiekis = 3
vidurkis = (suma/numKiekis)
console.log(vidurkis)


/* 04.
Įvedami skaičiai - kr1, kr2, kr3 – kraštinių ilgiai, trys kintamieji (naudokite ​Math.random()​ funkcija nuo 1 iki 10). Parašykite JavaScript programą, kuri nustatytų, ar galima sudaryti trikampį ir atsakymą atspausdintų. 
*/

let kr1 = Math.floor(Math.random() * (10 - 1 + 1) + 1)
console.log (kr1)
let kr2 = Math.floor(Math.random() * (10 - 1 + 1) + 1)
console.log (kr2)
let kr3 = Math.floor(Math.random() * (10 - 1 + 1) + 1)
console.log (kr3)

if ((kr1 + kr2) <= kr3 || (kr2 + kr3) <= kr1 || (kr1 + kr3) <= kr2){
    console.log("negalima sudaryti trikampį");
} else if ((kr1 + kr2) >= kr3 || (kr2 + kr3) >= kr1 || (kr1 + kr3) >= kr2) {
    console.log("galima sudaryti trikampį");
}

/* 05.
Sukurkite keturis kintamuosius ir ​Math.random()​ funkcija sugeneruokite jiems reikšmes nuo 0 iki 2. Suskaičiuokite kiek yra nulių, vienetų ir dvejetų.
*/
let f = Math.floor(Math.random() * (2 - 0 + 1) + 0)
console.log (f)
let g = Math.floor(Math.random() * (2 - 0 + 1) + 0)
console.log (g)
let h = Math.floor(Math.random() * (2 - 0 + 1) + 0)
console.log (h)
let i = Math.floor(Math.random() * (2 - 0 + 1) + 0)
console.log (i)
let numbers = [f,g,h,i]

/* 06.
Naudokite funkcija Math.random(). Atspausdinkite 3 skaičius nuo -10 iki 10. Skaičiai mažesni už 0 turi būti  laužtiniuose skliaustuose [], 0 -  (), didesni už 0 {}.
*/

let j = Math.floor(Math.random() * (10 + 10 + 1)  - 10) 
    if (j < 0) {
    console.log(`[${j}]`);
    } 
    else if (j == 0) {
        console.log(`(${j})`);
}
     else if (j > 0) {
        console.log(`{${j}}`)
}

let k = Math.floor(Math.random() * (10 + 10 + 1)  - 10) 
    if (k < 0) {
    console.log(`[${k}]`);
    } 
    else if (k == 0) {
        console.log(`(${k})`);
}
     else if (k > 0) {
        console.log(`{${k}}`)
}

let l = Math.floor(Math.random() * (10 + 10 + 1)  - 10) 
    if (l < 0) {
    console.log(`[${l}]`);
    } 
    else if (l == 0) {
        console.log(`(${l})`);
}
     else if (l > 0) {
        console.log(`{${l}}`)
}


/* 07.
Įmonė parduoda žvakes po 1 EUR. Perkant daugiau kaip už 1000 EUR taikoma 3 % nuolaida, daugiau kaip už 2000 EUR - 4 % nuolaida. Parašykite programą, kuri skaičiuos žvakių kainą ir atspausdintų atsakymą kiek žvakių ir kokia kaina perkama. Žvakių kiekį generuokite ​Math.random()​ funkcija nuo 5 iki 3000.
*/

let kaina = 1
let kainasunuouz1000 = 0.97
let kainasunuouz2000 = 0.96
let zvakiu = console.log(Math.floor(Math.random() * (3000 - 5 + 1) + 5))
    if(zvakiu > 1000) {
        console.log(`Perkama zvakiu ${zvakiu} uz ${zvakiu*kainasunuouz1000} Eur`)
    } else if(zvakiu > 2000) {
        console.log(`Perkama zvakiu ${zvakiu} uz ${zvakiu*kainasunuouz2000} Eur`)
    } else {
        console.log(`Perkama zvakiu ${zvakiu} uz ${zvakiu*kaina} Eur`)
    }

/* 08.
Naudokite funkciją Math.random(). Sukurkite tris kintamuosius su atsitiktinėm reikšmėm nuo 0 iki 100. Paskaičiuokite jų aritmetinį vidurkį. Tada aritmetinį vidurkį atmetus tas reikšmes, kurios yra mažesnės nei 10 arba didesnės nei 90. Abu vidurkius atspausdinkite. Rezultatus apvalinkite iki sveiko skaičiaus.
*/

let t = Math.floor(Math.random() * (100 - 0 + 1) + 0)
console.log (t)
let o = Math.floor(Math.random() * (100 - 0 + 1) + 0)
console.log (o)
let p = Math.floor(Math.random() * (100 - 0 + 1) + 0)
console.log (p)
numKiekis1 = 3
console.log((t+o+p)/numKiekis1)

/* 09.
Padarykite skaitmeninį laikrodį, rodantį valandas, minutes ir sekundes. Valandom, minutėm ir sekundėm sugeneruoti panaudokite funkciją Math.random(). Sugeneruokite skaičių nuo 0 iki 300. Tai papildomos sekundės. Skaičių pridėkite prie jau sugeneruoto laiko. Atspausdinkite laikrodį prieš ir po sekundžių pridėjimo ir pridedamų sekundžių skaičių.
*/



let valanda = 13
val1 = Math.floor(Math.random() * (300 - 0 + 1) + 0)
console.log (valanda);
let minute = 30
minut1 = Math.floor(Math.random() * (300 - 0 + 1) + 0)
console.log (minute); 
let sekunde = 45
seku1 = Math.floor(Math.random() * (300 - 0 + 1) + 0)
console.log (sekunde);

console.log(`Laikrodis:(${valanda} : ${minute} : ${sekunde})`) 





/* 10.
Naudokite funkciją Math.random(). Sugeneruokite 6 kintamuosius su atsitiktinėm reikšmėm nuo 1000 iki 9999. Atspausdinkite reikšmes viename string'e, išrūšiuotas nuo didžiausios iki mažiausios, atskirtas tarpais. Naudoti ciklų ir masyvų NEGALIMA.
*/

let num1 = Math.floor(Math.random() * (9999 - 1000 + 1) + 1000)
let num2 = Math.floor(Math.random() * (9999 - 1000 + 1) + 1000)
let num3 = Math.floor(Math.random() * (9999 - 1000 + 1) + 1000)
let num4 = Math.floor(Math.random() * (9999 - 1000 + 1) + 1000)
let num5 = Math.floor(Math.random() * (9999 - 1000 + 1) + 1000)
let num6 = Math.floor(Math.random() * (9999 - 1000 + 1) + 1000)

skaiciai = [num1,num2,num3,num4,num5,num6]
let tekstas = skaiciai.join(' ')
console.log(tekstas)

let surikiuotiSkaiciai = skaiciai.sort()
surikiuotiSkaiciai.sort((a,b) => {
    return a - b
})

surikiuotiSkaiciai = skaiciai.reverse()
console.log(skaiciai)
