//comment this is my first js code
console.log('hello világ');
let name = 'moksha'; 
console.log(name);

//adattípusok: 

//string
console.log('szia');
console.log("szia");
//tegyük nagybetűssé
//nézzük meg hány karakterből áll
//fordítsuk meg
//fűzzünk hozzá egy másik stinget


//szám
console.log(500);
//adjunk hozzá egy másik számot
//vonjunk ki belőle
//osztás utáni maradék

//boolean
console.log(true);
console.log(false);

//undefined
console.log(undefined);

//null
console.log(null); 

/* ezek a primitív adattípusok
*/ 


//komplex adattípusok: TÖMB (array)
// Array of <_> 
// array of ? ... valamik tömbje: számok tömbje, szövegek tömbje
//mindig 0-val kezdődik és egyesével növekszik

//array <strings>
console.log(['elso', 'masodik']);

//array <number>
console.log([2, 12, 3]);

//szűrés
//sorba rendezés
//új elem hozzáadása
//aggregálás vmi féle szabály szerint
//alább a 12-es szám kikéréséhez a szögletes zárójelbe 1-et kell írni.. ha a 3-at akarom kikérni akkor 2-t
console.log([2, 12, 3][1]);

//több dimenziós : a tömb elemei további tömbök
//Array<array<number>> - olyan tömb aminek az elemei számok tömbjei
console.log([[2,3],[32,1],[5,7]])

//ebben a példában a fruits változó egy tömb, ami 4 gyümölcsöt tartalmaz. 
let fruits = ['alma', 'körte', 'szilva', 'barack'];

console.log(fruits[0]); // Az első elem kiírása: 'alma'

fruits.push('banán'); // Elem hozzáadása a tömb végéhez

console.log(fruits); // Az új tömb kiírása: ['alma', 'körte', 'szilva', 'barack', 'banán']

/*
objektumok (object adattípus) - kulcs- értékpárok sorozata  - szótár - kapcsos zárójelek

*/

console.log (

  {
    firstName: 'Józsi',
    lastName: 'Kovács',
    age: 30
  }
);

// lookup - kulcs alapú kikérés

console.log (

  {
    firstName: 'Józsi',
    lastName: 'Kovács',
    age: 30
  }.age
);

//többdimenziós objektum 
console.log (

  {
    firstName: 'Józsi',
    lastName: 'Kovács',
    age: 30,
    address:{
      street: 'damjanich',
      city: 'Budapest'
    }
  }.address.street
);

console.log (
  {
    firstName: 'Józsi',
    lastName: 'Kovács',
    age: 30,
    phoneNumbers:['063012345', '067012345'],
    address: {
      street: 'damjanich',
      city: 'Budapest'
    }
  }.phoneNumbers[0]
);

console.log(
  [
    { 
      brand:'Apple',
      name: 'iPhone X',
      price: 8500,
      provider: {
          country:'HU',
          name:'Vodafone'
         }
    }
  ]
)

let car = {
  brand: 'Toyota',
  model: 'Corolla',
  year: 2022
};

console.log(car.brand); // A brand kulcshoz tartozó érték kiírása: 'Toyota'
console.log(car.year); // Az year kulcshoz tartozó érték kiírása: 2022


/*
*Operátorok - valamilyen adaton műveletet végrehajtó nyelvi eszköz 
*/

/*operandusok csoportosíthatók:
  -operandusok száma szerint:
    1. unary
    2. binary
    3. ternary
  -operátor lexikális elhelyezkedése
    előtte: prefix
    közötte: infix
    utána: postfix
  -hajt-e végre mellékhatást? (sideeffect)
  igen
  nem
*/

/*matematikai operátor - aritmetikai operátorok
+,-,*, /, %, 
modulus: osztás után kapott maradékot generálja ki
(number, number)->number
*/
   
console.log(2 + 3);/* tehát a plusz jel az operátor, a 2 és 3 az operandusok*/
console.log(2-1);
console.log(2*4);
console.log(2/4);
console.log(7%3);  /* itt az eredmény 1 lesz: a modulus az osztás után kapott maradékot generálja ki! 7:3=2, maradék az 1 


/*összehasonlító
többfajta típus bemenetként, az eredmény igaz vagy hamis
igaz-e vagy hamis az összehasonlításunk?
(any, any)-> Boolean
*/ 

//== (equality)
console.log(2==2); /*erre truet fog adni*/
console.log(2==1); /*erre falset fog visszaadni*/
//nem egyenlő != 
console.log(2!=2);
// === (identity)
console.log('József'==='János'); 

// >, <, >=, <=, 

/* logikai operátorok 
bemenetként várnak booleant és a kimenet is bool. */
/*logikai ÉS*/ console.log(true, false); 
/*logikai VAGY*/ console.log(true || false); 
/*negálás*/ console.log(!true);
if (szam >= 1 && szam <= 10) // Csak akkor fut le ez a rész, ha a szám nagyobb vagy egyenlő 1-gyel ÉS kisebb vagy egyenlő 10-zel
  // Az && azt jelenti, hogy mindkét feltételnek igaznak kell lennie
  // Ha a szám 1 és 10 között van, akkor ez a feltétel igaz lesz

/* az operátorcsaládok kompatibilisek egymással: pl az egyik kimenete kompatibilis az egyik bemenetével. 
nagyobb kifejezések is építhetők több operátor felhasználásával! de van precedenciájuk: a végrahajtás sorrendje meg van határozva.*/

/* string operátorok */

// kontakenálás (összefűzés)
console.log('szia'+'józsi'); 
// conditional - ez 3 operanduson dolgozik - (bool, any, any)-> any
console.log 

//háttérkép ennek az oldalnak a példájára : https://enopera.uy/Home 
const background = document.querySelector('.background');

document.addEventListener('mousemove', (e) => {
  const xPos = e.clientX / window.innerWidth * 100;
  const yPos = e.clientY / window.innerHeight * 100;
  background.style.backgroundImage = `url('img/foto.jpg')`;
});


// órák //
//1//
let szam1;   
let szam2;         
let eredmeny; 
 
szam1 = 5;         
szam2 = 7;

eredmeny = szam1 + szam2; 
