  var carousel = document.querySelector('.carousel');
        var images = carousel.querySelectorAll('img');
        var currentIndex = 0;
        var interval = setInterval(nextSlide, 3000);

function nextSlide(){
    currentIndex = (currentIndex+1) % images.length
    carousel.style.transform = 'translateX(' + (currentIndex * 33.33) + '%)'
}

let popupForm = document.querySelector(".popupForm")
let foDoboz = document.querySelector(".foDoboz")
let footer = document.querySelector(".footer")
var beirtAdatok = document.querySelector(".beirtAdatok")
var hatterkep = document.querySelector(".hatterkep")
var hatterkepDisplay = hatterkep.style.display


function form1(){
    foDoboz.style.display = "none";
    footer.style.display = "none";
    popupForm.style.display = "flex";
    hatterkep.style.display = "block";
    hatterkep.style.backgroundImage = "url(https://www.autonavigator.hu/wp-content/uploads/2023/02/341451_source.jpg)"
    hatterkep.style.backgroundSize = "cover";
    showImage()
}

                                    // Provider adatai Inputmezok //
let nev = document.getElementById("nev");
let tel = document.getElementById("tel");
let email = document.getElementById("email");
let kor = document.getElementById("kor");
let munkaterulet = document.getElementById("munkaterulet");
let telephely = document.getElementById("hely");
let szallitas = document.getElementById("szallitas");
let hova = document.getElementById("hova");
let nyitvatartas = document.getElementById("nyitvatartas");


var adatokTomb = []
var adatokObj = {}

var kep1 = document.getElementById("kep1");
var kep2 = document.getElementById("kep2");
var kep3 = document.getElementById("kep3");
var kep4 = document.getElementById("kep4");

var szamlalo = 0

var foDobozDisplay = foDoboz.style.display
var footerDisplay = footer.style.display
var beirtAdatokDisplay = beirtAdatok.style.display


var gepjarmuAdatokTomb = [];
var gepjarmuAdatokObject = {};
var usernameTomb = [];
var userpasswordTomb = [];
var beirtAdatokDoboz;


function bejelentkezes(){
    if(usernameTomb.includes(loginName.value) && userpasswordTomb.includes(loginPassword.value)){
         beirtAdatok.style.display = beirtAdatokDisplay
         eltuntetes();
         osszesTermek.style.display = "none";
        var ujGomb = document.querySelectorAll(".ujGomb")
        ujGomb.forEach(function(elemek){
            elemek.style.display = "none"})
            var div1 = document.createElement("div")
            div1.appendChild(ujKep)
            var kijelentkezesGomb = document.createElement("button")
            kijelentkezesGomb.innerText = "Kijelentkezes"
            div1.appendChild(kijelentkezesGomb)
            div1.classList.add("bejelentkezesDoboz")
            document.body.appendChild(div1)
        alert("Udvozoljuk!")

            kijelentkezesGomb.onclick = function(){
                megjelenites()
                osszesTermek.style.display = "grid"
                foDoboz.style.display = foDobozDisplay
                div1.style.display = "none"
                beirtAdatokDoboz = document.querySelectorAll(".beirtAdatokDoboz");
                beirtAdatokDoboz.forEach(function(doboz){
                doboz.style.display = "none"
                })
            
            }
    }}
        
 


 let kepFeltoltes = document.getElementById("kepFeltoltes")
 let termekKep = document.getElementById("termekKep")
 var kepSzamlalo = 0;
 var feltKep;


 kepFeltoltes.addEventListener("change", kepFeltoltesFunction) //kepbeolvaso esemeny

 function kepFeltoltesFunction(kepFelt){     
    var file = kepFelt.target.files[0]
    var reader = new FileReader();
    reader.readAsDataURL(file); 
    reader.onload = function(e){        //az onload egy esemenykezelo fuggveny, a fajl beolvasasa utan fut le
        feltKep = e.target.result;
         // A target a FileReader objektumra hivatkozik, és a result tulajdonságon keresztül elérhetjük az olvasott fájl tartalmát.
         }
        return feltKep}

    var randomBetukEsSzamok = "abcdefghijklmnopqrstuvwxyz0123456789"
    var providerDataSzamlalo = 0

    function providerData(beirtEmberAdatok,beirtTermekAdatok){
        var ujDiv = document.createElement("div")
        ujDiv.innerHTML = beirtEmberAdatok;
        ujDiv.classList.add("beirtAdatokDoboz")
        var ujDiv2 = document.createElement("div")
        ujDiv2.innerHTML = beirtTermekAdatok;
        ujDiv2.classList.add("beirtAdatokDoboz")
        var ujGomb = document.createElement("button");
        var ujGomb2 = document.createElement("button");
        ujGomb.innerText = "Megerosites"
        ujGomb2.innerText = "Vissza"
        ujDiv.appendChild(ujGomb)
        ujDiv.appendChild(ujGomb2)
        ujGomb.classList.add("ujGomb");
        ujGomb2.classList.add("ujGomb")
        ujGomb.onclick = function(){              //anonim/nevtelen funkciot lehet hozzarendelni onclick esemenyhez
        foDoboz.style.display = foDobozDisplay
        footer.style.display = footerDisplay
        beirtAdatok.style.display = "none"
        var loginAdatokDiv = document.createElement("div");
        

        var randomUsername = "";
        var randomPassword = "";

        
        for(var i=0;i<2;i++){

           randomUsername += randomBetukEsSzamok.charAt(Math.floor(Math.random()*randomBetukEsSzamok.length))
            randomPassword += randomBetukEsSzamok.charAt(Math.floor(Math.random()*randomBetukEsSzamok.length))

        }usernameTomb.push(randomUsername);
        userpasswordTomb.push(randomPassword); 
        console.log(usernameTomb); console.log(userpasswordTomb)
        loginAdatokDiv.innerHTML = "Sikeres regisztracio, a bejelentkezesi adatai: " + "<br>" +"Felhasznalonev: "+ randomUsername
        + "<br>" + "Jelszo: " + randomPassword + "<br>" + "Kerem KATTINTSON a folytatashoz!"
        loginAdatokDiv.classList.add("loginAdatok")
        document.body.appendChild(loginAdatokDiv)
        eltuntetes()
        osszesTermek.style.display = "none"
        loginAdatokDiv.onclick = function(){
            loginAdatokDiv.style.display = "none"
            osszesTermek.style.display = "grid"
            megjelenites()
        }
        }
        ujGomb2.onclick = function(){
            foDoboz.style.display = "none"
            footer.style.display = "none"
            popupForm.style.display = "flex"
            beirtAdatok.style.display = "none"
        }
        while(beirtAdatok.firstChild){
            beirtAdatok.removeChild(beirtAdatok.firstChild)
        }
        
        beirtAdatok.appendChild(ujDiv);
        beirtAdatok.appendChild(ujDiv2);
        foDoboz.style.display = "none"
        footer.style.display = "none"
    }
    
    function showImage(){
        hatterkep.classList.add("fade")
        hatterkep.style.opacity = 0.5
    }

var login = document.querySelector(".login")
var carousel = document.querySelector(".carousel")
var aside = document.querySelector(".aside")
var osszesTermek = document.querySelector(".osszesTermek")
var termek0 = document.querySelector(".termek0")
var termekek = document.querySelector(".termekek")




        function eltuntetes(){
        login.style.display = "none";
        carousel.style.display = "none";
        aside.style.display = "none";
        footer.style.display = "none";
        termekek.style.display = "none";
        }

    var loginName = document.getElementById("loginName")
    var loginPassword = document.getElementById("loginPassword")

 
        


function visszaAFooldalra(){
    foDoboz.style.display = foDobozDisplay;
    footer.style.display = footerDisplay;
    popupForm.style.display = "none"
}



                    //  Provider Termekadatok input mezok  //

var gepjarmuNeve = document.getElementById("gepjarmuNeve");
var gepjarmuAllapot = document.getElementById("allapot");
var gepjarmuSzine = document.getElementById("gepjarmuSzine");
var probaDoboz = document.querySelector(".proba")

var termAdat = document.querySelectorAll(".termAdat")
 
function megjelenites(){
    login.style.display = "grid";
    carousel.style.display = "flex";
    aside.style.display = "grid";
    footer.style.display = footerDisplay;
    termekek.style.display = "grid";
}

var ujKep;
var termek0 = document.querySelector(".termek0");
var mintaTermeke = document.querySelectorAll(".mintaTermekek")






function termReg(objErtek, termekAdatok){
    foDoboz.style.display = "grid";
    popupForm.style.display = "none";
    document.body.style.backgroundImage = "none"
    beirtAdatok.style.display = beirtAdatokDisplay
    

    termAdat.forEach(function(inputElem) {
        var mezoid = inputElem.getAttribute("id");
        var inputertek = inputElem.value
        gepjarmuAdatokObject[mezoid] = inputertek
        })

        var termekAdatok= ""
        for(var tulajdonsag in gepjarmuAdatokObject){
            
            termekAdatok += tulajdonsag +": " + gepjarmuAdatokObject[tulajdonsag] + "<br>"; 
            
             }

    adatokObj.nev1=nev.value; adatokObj.tel = tel.value; adatokObj.email = email.value; adatokObj.kor = kor.value;
    adatokObj.munkaterulet = munkaterulet.value; adatokObj.telephely = telephely.value;
    adatokObj.nyitvatartas = nyitvatartas.value;
    if(szallitas.checked){
        adatokObj.szallitas = "Szallitas: Igen"
    } else{adatokObj.szallitas = "Szallitas: Nem"}
    if(szallitas.checked){
        adatokObj.hova = "Hova szallit? " + hova.value
    } else {adatokObj.hova = "Szemelyes vasarlas lehetseges"}
    
    adatokTomb.push(adatokObj);
    for(i=0; i<adatokTomb.length;i++){
        let tombindex = adatokTomb[i]
        objErtek = "Nev: " + tombindex.nev1+"<br>" + "Telefonszam: " + tombindex.tel + "<br>"+ "E-mail: " + tombindex.email+ "<br>"+ "Kor: " + tombindex.kor + "<br>"
         +"Munkaterulet: "+tombindex.munkaterulet+"<br>" + "Telephely: "+ tombindex.telephely +"<br>" +
        tombindex.szallitas +"<br>" + tombindex.hova +"<br>" +"Nyitvatartas: "+ tombindex.nyitvatartas}
         
        ujKep = document.createElement("img");
        ujKep.src = feltKep;
        ujKep.classList.add("kepek")
        ujKep.loading = "lazy"
        var tovabbGomb = document.createElement("button")
        tovabbGomb.innerText = "Mutasd Reszletesebben"
        tovabbGomb.classList.add("gomb2")
        var ujDiv = document.createElement("div");
        ujDiv.appendChild(ujKep);
        ujDiv.innerHTML += termekAdatok;
        ujDiv.classList.add("termekek");
        ujDiv.appendChild(tovabbGomb)
    /*    mintaTermeke.forEach(function(mintadoboz){
            osszesTermek.replaceChild(ujDiv,mintadoboz)
       })       */
       osszesTermek.appendChild(ujDiv) ;
        providerData(objErtek, termekAdatok);
        termekAdatok= "";
        tovabbGomb.onclick = function(){ 
            
            ujDiv.style.overflow="auto"
            ujDiv.style.position = "initial"
            tovabbGomb.style.position = "initial";
            tovabbGomb.style.transform = "translateX(0%)"
            eltuntetes()
            var ujGomb = document.createElement("button")
            ujGomb.innerText = "Vissza"
            ujGomb.onclick = function(){
                login.style.display = "grid";
                carousel.style.display = "flex";
                aside.style.display = "grid";
                footer.style.display = footerDisplay;
                termekek.style.display = "grid";
                ujGomb.style.display = "none"
            }
            ujDiv.appendChild(ujGomb)
            }
            
            return ujDiv
    }
let proba = document.getElementById("proba")

let inputMezok = document.querySelectorAll("form input")
inputMezok.forEach(function(inputMezo){
    inputMezo.style.color = "white"
    inputMezo.style.textAlign = "center"
    inputMezo.onfocus = function(){
        inputMezo.style.backgroundColor = "rgba(6, 98, 12,0.7)"  
    }
    inputMezo.onblur = function(){
        inputMezo.style.backgroundColor = "rgba(69, 8, 131, 0.7)"
    }
})

let forms = document.forms[0];
for(i=0;i<forms.length;i++){
    forms.elements[i].style.backgroundColor = "rgba(69, 8, 131, 0.7)"

}
forms = document.forms[1];
for(i=0;i<forms.length;i++){
    forms.elements[i].style.backgroundColor = "rgba(69, 8, 131, 0.7)"
}

function toUpperCaseInput(inputelem){
var inputErtek = inputelem.value;
var upperCaseValue = inputErtek.toUpperCase();
inputelem.value = upperCaseValue;
}
                            //  Datum es Ido
let ido = document.getElementById("ido");
setInterval(ido01,1000)
function ido01(){
    let newDate = new Date();
    ido.innerHTML = newDate.getFullYear() + "." + (newDate.getMonth() + 1) + "." + 
    newDate.getDate() + "<br>" + newDate.getHours() + ":" + newDate.getMinutes() + ":" +
    newDate.getSeconds();
}

const markaEsTipus1 = document.querySelectorAll(".markaEsTipus");
const markaEsTipus2 = "Audi A6 Avant ";
for(i=0;i<markaEsTipus1.length;i++){
markaEsTipus1[i].insertAdjacentText("afterbegin",markaEsTipus2); break}  //   A szöveges tartalmat az elem tartalma elejére helyezi el.

let mintaErtekekTomb = ["4.2 FSI V8 (350 LE) quattro Tiptronic", 2008, 2010, "Kombi (Combi)", 5, 5, "350 LE / 6800 rpm",
8, 4, "Benzin", "Közvetlen befecskendezés", "Összekrékhajtás (4x4)", "6 Tiptronic", "4927 mm", "1855 mm", "	1463 mm",
"80 l", "1830 kg", "2460 kg", "Hűtött tárcsafék", "Tárcsafék", "Van", "Steering rack", "225/55 R17", "14.8 l/100 km",
 "7.5 l/100 km", "10.2 l/100 km", "244 g/km", "EURO V"]
let mintaTulajdonsagok = document.querySelectorAll(".mintaTulajdonsagok");
let mintaErtekek = document.querySelectorAll(".mintaErtekek")
const mintaTulajdonsagokTomb= ["Motor: ", "Gyartas kezdete: ", "Gyartas vege: ", "Felepites: ",
"Ajtok szama: ", "Ulesek szama: ", "Teljesitmeny: ", "Hengerek száma: ", "Szelepek száma hengerenként: ",
"Üzemanyagtípus: ", "Üzemanyagrendszer: ", "Meghajtás: ", "Automata sebességváltó fokozatainak száma:",
"Hosszúság: ", "Szélesség: ", "Magasság: ", "Üzemanyagtartály: ", "Saját tömeg: ", "Együttes tömeg: ",
"Első fékek: ", "Hátsó fékek: ", "ABS: ", "Kormányzás típusa: ", "Gumiabroncsméret: ", "Fogyasztás városban: ",
"Fogyasztás városon kívül: ", "Kombinált fogyasztás: ", "CO2 kibocsátás: ", "Európai kibocsátási normák: "];

let index;
for(index=0;index<mintaTulajdonsagokTomb.length && mintaErtekekTomb.length;index++){
    if(mintaTulajdonsagok[0].innerHTML == "" || mintaTulajdonsagok[0].innerHTML){
        for(i=0;i<mintaTulajdonsagok.length;i++){

mintaTulajdonsagok[0].innerHTML += mintaTulajdonsagokTomb[index] +"<br>";
mintaErtekek[0].innerHTML += mintaErtekekTomb[index] + "<br>" ;break}
}}


let mintaReszletekFoDoboz = document.querySelector(".mintaTermekekLeiras")
let mintaTermekLeirasBelsoDoboz1 = document.querySelector(".mintaTermekLeirasBelsoDoboz1")
let mintaTermekLeirasBelsoDoboz2 = document.querySelector(".mintaTermekLeirasBelsoDoboz2")
function mintaReszletek(){
foDoboz.style.display = "none"
footer.style.display = "none"
mintaTermekLeirasBelsoDoboz1.style.display = "grid";
mintaTermekLeirasBelsoDoboz2.style.display = "grid";
let mintaKep0 = document.getElementById("mintaKep0");
mintaKep0.classList.add("flex0")
mintaTermekLeirasBelsoDoboz1.appendChild(mintaKep0)
}
