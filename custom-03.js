/* LENGVESNI */

/* 01.
Sukurkite ciklą kuris atspausdintų 10 kartų žodį “labas”.
*/

for(let i = 0; i < 10; i++) {
    console.log ('labas')
}

/* 02.
Sukurkite ciklą kuris atspausdintų skaičius nuo 0 iki 9.
*/
for(let a = 0; a <= 9; a++) {
    console.log (a)
}

/* 03.
Atspausdinkite kas antrą skaičių nuo 10 iki 50 (porinius);
*/

for(let a = 10; a <= 50; a+=2) {
    console.log (a)
}

/* 04.
Atspausdinkite kas antrą skaičių nuo 10 iki 50. (porinius) Jei skaičius dalinasi iš 10 be liekanos jo nespausdinkite. ( naudokite continue.) (atspausdinti visus porinius skaičius, išskyrus tuos kurie dalinasi iš 10 be liekanos)
*/
for(a = 10; a <= 50; a+=2) {
    if (a % 10 == 0) {
        continue;
    }
    console.log (a)
}

/* 05.
Sukurkite ciklą kuris suktųsi nuo 0 iki 20. Suskaičiuokite, kiek kartų kintamasis i turėjo porinę reikšmę;
*/

for(a = 0; a <= 20; a++) {
    if (a % 2 == 0) {
        console.log (a);
    
    }
    
}

/* SUNKESNI */

/* 01.
Sugeneruokite 300 atsitiktinių skaičių nuo 0 iki 300, atspausdinkite juos atskirtus tarpais ir suskaičiuokite kiek tarp jų yra didesnių už 150.  Skaičiai didesni nei 275 turi būti atspausdinti skliausteliuose” [ ] “.
*/
let skaiciai = []
for(let i = 0; i <= 300; i++) {
    skaiciai.push(Math.floor(Math.random() * 300) + 1)
    }
    
function skaic (skaiciai) {

console.log(skaiciai.join(" "))
}
skaic(skaiciai)

/* 02.
Vienoje eilutėje atspausdinkite visus skaičius nuo 1 iki 3000, kurie dalijasi iš 77 be liekanos. Skaičius atskirkite kableliais. Po paskutinio skaičiaus kablelio neturi būti.
*/



/* 03.
Nupieškite kvadratą iš “*”, kurio kraštines sudaro 10 “*”.
* * * * * * * * * * *
* * * * * * * * * * *
* * * * * * * * * * *
* * * * * * * * * * *
* * * * * * * * * * *
* * * * * * * * * * *
* * * * * * * * * * *
*/

console.log("* * * * * * * * * *\n* * * * * * * * * *\n* * * * * * * * * *\n* * * * * * * * * *\n* * * * * * * * * *\n* * * * * * * * * *\n* * * * * * * * * *\n* * * * * * * * * *\n* * * * * * * * * *\n* * * * * * * * * *")

console.log("* * * * * * * * * *\n*                 *\n*                 *\n*                 *\n*                 *\n*                 *\n*                 *\n*                 *\n*                 *\n* * * * * * * * * *")
