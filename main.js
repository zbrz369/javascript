let X;   
let y;         
let eredmeny; 
 
x = 5;         
y = 7;

eredmeny = x + y; 
console.log(eredmeny);

// 2

console.log(5+7); 

                    // írj programot ami bekér egy pozitív egész számot majd eredménybe írja az összegüket, 
//különbségüket, szorzatukat, hányadosukat, az első szám másodikkal történő maradékosztásának eredményét!



                    //írj programot mely bekér egy pozitív számot mely a kör átmérője, és kiírja a kör területét és kerületét! a pi értékének a meghatározásához
//használd a Math.PI értéket!
// Kérjük be a felhasználótól a kör átmérőjét
let atmero = parseFloat(prompt("Kérem, adja meg a kör átmérőjét:"));

// Számítsuk ki a sugárt az átmérő alapján
let sugar = atmero / 2;

// Számítsuk ki a kör területét és kerületét
let terulet = Math.PI * Math.pow(sugar, 2);
let kerulet = 2 * Math.PI * sugar;

// Írjuk ki az eredményeket a konzolra
console.log(`A kör területe: ${terulet.toFixed(2)}`);
console.log(`A kör kerülete: ${kerulet.toFixed(2)}`);

                //írj programot, mely beolvassa a téglatest három élének hosszát, és kiírja a felszínének és térfogatának mérőszámát!
// Kérjük be a felhasználótól a téglatest három élének hosszát
let a = parseFloat(prompt("Kérem, adja meg az 'a' él hosszát:"));
let b = parseFloat(prompt("Kérem, adja meg a 'b' él hosszát:"));
let c = parseFloat(prompt("Kérem, adja meg a 'c' él hosszát:"));

// Számítsuk ki a téglatest felszínét és térfogatát
let felszin = 2 * (a * b + a * c + b * c);
let terfogat = a * b * c;

// Írjuk ki az eredményeket a konzolra
console.log(`A téglatest felszíne: ${felszin.toFixed(2)}`);
console.log(`A téglatest térfogata: ${terfogat.toFixed(2)}`);

                //Írj egy programot ami ismer három zöldséget ["répa","retek","uborka"] és három gyümölcsöt ["alma","körte","banán"].
//Bekér egy szót, és ha az ismert 6 közül valamelyik, akkor kiírja, hogy "ez egy gyümölcs" vagy "ez egy zöldség" vagy ha nem ismert
//akkor azt, hogy "ezt nem ismerem".

//ismert zöldségek és gyümölcsök listája
let zoldseg = ["répa","retek","uborka"];
let gyumolcs= ["alma","körte","banán"];
//bekérünk egy szót a felhasználótól
let szo= prompt("kérem adjon meg egy szót");
//ellenőrizzük, hogy a szó zöldség-e vagy gyümölcs
if (zoldseg.includes(szo)) {
    console.log("Ez egy zöldség.");
  } else if (gyumolcs.includes(szo)) {
    console.log("Ez egy gyümölcs.");
  } else {
    console.log("Ezt nem ismerem.");
  } 

            //írj egy programot ami bekér egy számot 1 és 10 tartományban és eredménybe ír megfelelő római számot
 let szam = parseInt(prompt("Kérem, adjon meg egy számot 1 és 10 között:"));
 // Ellenőrizzük, hogy a megadott szám 1 és 10 között van-e
if (szam >= 1 && szam <= 10) {
let romanNumeral = '';
            
// Készítsünk egy táblázatot a számokhoz és a hozzájuk tartozó római számokhoz
 const romaiSzamok = {
1: 'I',
2: 'II',
3: 'III',
4: 'IV',
5: 'V',
6: 'VI',
7: 'VII',
8: 'VIII',
9: 'IX',
10: 'X'
 };
            
 // Keresés a táblázatban és megtalálás a megfelelő római számhoz
romanNumeral = romaiSzamok[szam];
            
// Kiírjuk a megfelelő római számot
console.log(`A megadott szám római számírásban: ${romanNumeral}`);
 } else {
console.log("A megadott szám nem felel meg a megadott tartománynak.");
 }
            
//írj egy programot mely véletlen számokat generál 1 és 30 között. Addig generáljon számot míg az egyik nem lesz 25-nél nagyobb.
//Írja ki ezek után a beolvasott számok összegét!

//Írj egy programot, mely bekér egy pozitív egész számot 0-1000 között majd elostja 2-vel annyiszor, ahányszor lehet
//és közben felírja a számot a kettes számok szorzataként megszorozva egy olyan számmal, mely már nem osztható 2-vel!

let num = parseInt(prompt("Kérem, adjon meg egy pozitív egész számot 0 és 1000 között:"));

//ellenőrizzük, hogy a szám a megadott tartományban van-e
if (num >= 0 && num <= 1000) {
  let eredetiNum = num;
  let osztasok = 0;

  // Addig osztjuk a számot 2-vel, amíg lehet, és számoljuk az osztások számát
  while (num % 2 === 0 && num > 0) {
    num /= 2;
    osztasok++;
  }

  // Számoljuk ki a kettes számok szorzatát
  let kettesSzorzat = Math.pow(2, osztasok);

  // Keresünk egy olyan számot, ami már nem osztható 2-vel
  let nemKettes = eredetiNum / kettesSzorzat;

  console.log(`Eredeti szám: ${eredetiNum}`);
  console.log(`Kettesek száma: ${osztasok}`);
  console.log(`Kettesek szorzata: ${kettesSzorzat}`);
  console.log(`Az eredeti szám osztatlan része: ${nemKettes}`);
} else {
  console.log("A megadott szám nem felel meg a megadott tartománynak.");
}



//1. Írj programot, ami kiírja a képernyőre, hogy ”Hello world!”!
console.log("Hellóvilág");
//rj programot, beolvassa a felhasználó nevét, majd köszön neki!
let nev= prompt("kérem adja meg a nevét");
//köszön
console.log("üdv!");
//írj egy programot mely bekér egy számot s kíírja a kétszeresét!
let szamot = parseFloat(prompt("Kérem a számot:"));
let ketszeres = szamot * 2;
console.log("A szám kétszerese:", ketszeres);
//Írj programot, ami beolvas két számot, majd kiírja: a. az összegüket;b. különbségüket;c. szorzatukat;d. hányadosukat, ha lehet!
let szam1 = parseFloat(prompt("Kérem az első számot:"));
let szam2 = parseFloat(prompt("Kérem a második számot:"));

let osszeg = szam1 + szam2;
let kulonbseg = szam1 - szam2;
let szorzat = szam1 * szam2;
let hanyados = szam2 !== 0 ? szam1 / szam2 : "nem értelmezett (osztás nullával)";

console.log("Az összeg:", osszeg);
console.log("A különbség:", kulonbseg);
console.log("A szorzat:", szorzat);
console.log("A hányados:", hanyados);
//rj programot, mely beolvas két egész számot, és kiírja a képernyőre a nagyobbikat!
//beolvas
let szamegy = parseInt(prompt("Kérem az első egész számot:"));
let szamketto = parseInt(prompt("Kérem a második egész számot:"));

if (szamegy > szamketto) {
    console.log("A nagyobbik szám:", szamegy);
} else if (szamketto > szamegy) {
    console.log("A nagyobbik szám:", szamketto);
} else {
    console.log("A két szám egyenlő.");
}

//szöveges
//Írj programot mely bekér két szöveget és megszámolja hogy melyik tartalmaz több szót és azt írja ki.
//Ha a két szöveg azonos számú szót tartalmaz akkor írja ki hogy "nem tudok dönteni."
//A szavak számolásánál a szóközöket ls az írásjeleket vegye figyelembe.
let elsoszoveg=prompt('kérem adja meg az első szöveget');
let masodikszoveg=prompt('kérem adja meg a második szöveget');

let wordcount=countWords (elsoszoveg);