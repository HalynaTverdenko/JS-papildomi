/* 01.
Sukurkite masyvą su dešimt augalų pavadinimų.
*/

let masyvas10 = ['abrikosas', 'agurkas', 'akacija', 'begonija', 'bukas', 'burokas', 'chlorofitas', 'citrina', 'dedešva', 'kalendra']



/* 02.
Atspausdinkite kiekvieną pirmo uždavinio augalą atskiroje eilutėje.
*/
function zodziai(zodziuMasyvas) {
    for(let i = 0; i < zodziuMasyvas.length; i++) {
        let zodis = zodziuMasyvas[i]
        console.log(`${zodis}`)
    }
}

zodziai(masyvas10)

/* 03.
Atspausdinkite pirmo uždavinio kiekvieną augalą pradedant nuo paskutinio, ir baigiant pirmuoju. (atvirkščias ciklas).
*/
const atvirkscias = masyvas10.sort().reverse()

console.log(atvirkscias)

/* 04.
Suskaičiuokite kiek pirmo uždavinio masyve yra žodžių trumpesnių nei 5 simboliai, ir kiek ilgesnių nei 7 simboliai.
*/

let trump = 0
for (let zodis of masyvas10) {
    if (zodis.length < 5) {
        console.log (zodis)
    } 
}
console.log(trump.length)
let ilg = 0
for (let zodis of masyvas10) {
    if (zodis.length > 7) {
        console.log (zodis)
    } 
}

