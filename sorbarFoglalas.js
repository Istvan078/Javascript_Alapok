// const asztalokSzama = + document.getElementById("asztalokszama").innerText;
// const ferohelyekSzama = + document.getElementById("ferohelyekszama").innerText;
// const maxulohelyekSzama = + document.getElementById("maxulohelyekszama").innerText;
// const asztalok = Array.from(document.querySelectorAll(".asztal"))
const inputember =  document.getElementById("ember")
const inputasztal =  document.getElementById("asztal")
const emberek = []
const asztalok = []
let lefaszt =  document.getElementById("lefoglaltasztalokszama")
let leffero =  document.getElementById("lefoglaltferohelyekszama")
let inputIdozito ; let inputIdozito2;
let szoveg = document.getElementById("szoveg")
const foglaltember = []


let szabadAsztalokSzama = document.getElementById("szabadasztalokszama");
let osszesAsztalSzama = 13;


function beleptetes(){
    ultetes()
}

let uj;
let x;
let uj1;
let y;

let query = document.querySelector(".doboz");
let h2= query.querySelectorAll("h2")
let h2tartalom = ["gyors","megbízható", "kedves", "intelligens", "precíz"]

function ultetes(){  //megnézi, hogy a belépés lehetséges-e, a beérkező vendégek számát kezeli
        let nem; 
          emberek.push(parseInt(inputember.value));
        y = leffero.innerText = emberek.reduce(reduceTombOsszeadas,0);
            if(y>65){leffero.innerText = 65}
            if(y%5 === 0 || y%4 ===0 || y%3 ===0 || y%2 ===0){
                asztalok.length + y/5
                uj1 = lefaszt.innerText = asztalok.length + Math.floor( y/5) }
            if(uj1>13){lefaszt.innerText = 13}
          

           
        
            for(let i=-3; i<62; i++){
            nem = i += 4;
            if(nem == y){
                szoveg.style.display = "none"
                leffero.innerText= "Egy asztalhoz minimum 2 főre kell foglalnia, kérem adjon meg egy másik összeget!"
                return nem
            } else if(nem !=y){
                szoveg.style.display = "block";
                szoveg.innerText= "Köszönöm, kérem erősítse meg a foglalást a megerősítés gomra kattintva!"}
        } 
        
        let lefoglaltFerohelyekSzama1 = 65
        let xy;
        if(lefoglaltFerohelyekSzama1 <=65){
             foglaltember.push(parseInt(inputember.value));
             xy= foglaltember.reduce(reduceTombOsszeadas);
            xy= lefoglaltFerohelyekSzama1 - xy
            h2.forEach(function(h2){
                h2.textContent = "Szabad Férőhelyek Száma: "  + xy
        })
 }            if (xy<=0) {
        h2.forEach(function(h2){
            h2.textContent = "Sajnos telve vagyunk, több embert nem tudunk fogadni! Kérem próbálja újra kicsit később!"})
    }

    
    if(osszesAsztalSzama<=13 && xy>0){
       xy = osszesAsztalSzama  - uj1;
        szabadAsztalokSzama.textContent = "A szabad asztalaink száma: " + xy
    } else{szabadAsztalokSzama.textContent = "A szabad asztalaink sajnos elfogyott, kérjük próbálja újra később!"}


}
        


  
 
function megerosites(){
    alert("A foglalása: " + y + " Főre és " + uj1 + " Asztalra rögzítésre került!")
    document.getElementById('popupContainer').style.display = 'block';
}


function reduceTombOsszeadas(total, value){
   return total + value
}





//inputember.addEventListener("input", timer)

//function timer(){
 //   clearTimeout(inputIdozito);
  //  inputIdozito = setTimeout(ultetes2,1500)
//}

inputember.addEventListener("input",timer2);

function timer2(){
clearTimeout(inputIdozito2);
inputIdozito2 = setTimeout(ultetes, 1500)}



let paragraph = document.createElement("p");

paragraph.textContent = "Ez egy új paragrafus létrehozva a JS-ből."

let doboz = document.querySelector(".doboz2");
doboz.appendChild(paragraph);

// HTML stringből is létre lehet hozni új elemet: 

let htmlStringbol = "<h2>HTML Stringből lettem létrehozva Javascriptben.</h2>"
doboz.innerHTML += htmlStringbol;

//
                                    //Styleoljuk a dobozt :)//
doboz.style.backgroundColor = "rgba(12, 12, 200, 0.6)"
doboz.style.textAlign = "left"
doboz.style.fontSize = "30px"
doboz.style.display = "grid"
doboz.style.gridTemplateColumns = "3fr 2fr";
doboz.style.boxShadow = "10px 10px 10px 20px rgba(237, 230, 11, 0.6)"
doboz.style.textShadow = "3px 3px 3px green"
doboz.style.marginBottom= "50px"
doboz.style.padding = "10px"

// Több elem létrehozása és hozzáadása a DocumentFragment segítségével: //
// Üres DocumentFragment létrehozása:
let documentFragment = document.createDocumentFragment();
// Több új <p> elem létrehozása és hozzáadása a DocumentFragmenthez
for(i=0; i<10; i++){
    const h2Tagek = document.createElement("h2")
    const paragraphs = document.createElement("p");
    h2Tagek.textContent = `Tartalom:`
    paragraphs.textContent = `Ide írd be amit szeretnél ${i+1}`;
    documentFragment.appendChild(h2Tagek)
    documentFragment.appendChild(paragraphs)
}
// Az új elemek hozzáadása a DOM-hoz
doboz.appendChild(documentFragment)


function proba(){
    globalisValtozoMertKeywordNelkulVan = "gfhfgjfgjjfgjgf"
}
proba()


document.getElementById("glob").innerText= globalisValtozoMertKeywordNelkulVan
console.log(globalisValtozoMertKeywordNelkulVan)

let para = document.createElement("h2");
doboz.appendChild(para)


let szamlalo = (function(){
    szamolo = 0;
    return function(){
        szamolo += 1;
        return szamolo;
    }
})()

let button = document.createElement("button");
button.textContent= "SzámlálóGomb"
doboz.appendChild(button)
button.onclick = szamolo2




function szamolo2 (){
    para.textContent = "Hány darabot rendelsz? " + szamlalo()
}


szamlalo()
console.log(szamolo)


// Objektum létrehozása
const obj = {
    name: 'John',
    age: 30,
    city: 'New York',
    alkat: "Vékony"
  };

  // Üres lista elemek létrehozása
const listItems = [];

// Objektum propertyinek és értékeinek bejárása
for (const property in obj) {
if(obj.hasOwnProperty(property)){
      // Új listaelem létrehozása
      const listItem = document.createElement('li');
      // Listaelem tartalmának beállítása az objektum property és érték alapján
    listItem.textContent = `${property}: ${obj[property]}`;
       // Listaelem hozzáadása a listához
       listItems.push(listItem);
}
}

// Üres lista létrehozása
const list = document.createElement('ul');

// Listaelemek hozzáadása a listához
listItems.forEach(item => {
    list.appendChild(item);
  });

  // Lista hozzáadása a dokumentumhoz
document.body.appendChild(list);


            //Objektumok egyszerű folyamatos kiíratása tulajdonság + értékpárokként ezzel a kóddal: //
const objekt = {
    name: 'John',
    age: 30,
    city: 'New York',
    alkat: "Vékony",
    haj: "Fekete",
    Szemszín: "Barna"
  };

  const tomb = [];

  for(x in objekt){
    if(objekt.hasOwnProperty(x)){
        let listaelem = document.createElement("li");
        listaelem.textContent = `${x}: ${objekt[x]}`
        tomb.push(listaelem)
    }
  }

  let szamozottLista = document.createElement("ol")

  tomb.forEach(function (listaelem){
    szamozottLista.appendChild(listaelem)
  })

  document.body.appendChild(szamozottLista)


        // Arrow function: Nyíl funkció.    =>       //

    let arrow = (a,b) => a*b
    let arrowfunkcio2= () => console.log("arrowfunkcio")
    arrowfunkcio2()  // - Meghívva kiírja console log-ban hogy arrowfunkcio
    let arrowfuncio3 = () => {
        let x = document.body.insertAdjacentHTML("beforeend","hello")  // Ha hosszabb az utasítás kapcsoszárójelet kell használni a nyíl után
    }
    arrowfuncio3()  //  Meghívtam tehát végrehajtotta a feladatát

    
    let gyakorlas = function(a){
     if( a%2===0){
        return "A szám páros: " + a }
        else{return "A szám páratlan: " + a}
        }

    

    function szamok(a){
        if(a>0){
            return "A szám pozitív"
        } else if(a==0)
            {return "A szám 0"}
            else{return "A szám negatív"}
    } 
    console.log(szamok(-1))

    function szamok2(tomb){   // ez a függvény a tömb páratlan számainak összegét adja vissza
        let osszeg =0;
        for(i=0; i<tomb.length; i++){
            if (tomb[i] %2 !==0){
                osszeg += tomb[i];
            }
        } return osszeg
    } console.log(szamok2([3,5,6,7,8,9]))

    function isprime(szam){
        if(szam<=1){
            return false
        } for(i=2; i<=Math.sqrt(szam);i++)
        {if(szam % i === 0) return false}
        return true
    } console.log(isprime(64))



    const products = {
        "apple": 100,
        "banana": 50,
        "orange": 80,
        "grape": 120
      };
    function termek(neve){
         if(products.hasOwnProperty(neve)){
            return products[neve];
         }else {return "A termék nem található"}
    } 

    const products2 = [
        { id: 1, name: "Apple", price: 100 },
        { id: 2, name: "Banana", price: 50 },
        { id: 3, name: "Orange", price: 80 },
        { id: 4, name: "Grape", price: 120 }
      ];

      function termekIdAlapjan(id){
        for(let i = 0; i<products2.length; i++){
            if(products2[i].id === id){
                return products2[i]
            }
        } return "A termék nem található"
      } 
console.log(termekIdAlapjan(2))