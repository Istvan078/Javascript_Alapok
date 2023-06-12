const person = prompt("Elmúltál 18?" , "Y or N?");
const y ="Y";
const n = "N";


if(person===n){
    alert("Bocsi, előbb legyél felnőtt!")
    window.location = "https://google.com";
}
else if(person===y){
    alert("Üdvözöllek a Sörházban!");
}
else{
    alert("Nem megfelelő válasz, kérlek Y-t, vagy N-t használj válaszként!");
    location.reload();
}



function foglalas(){
   const foglalas1= prompt("Szeretnél asztalt foglalni?","Y vagy N?");
    if(y==foglalas1){
     var fo = prompt("Hány főre?")
    }
    while(fo<2){
       var fo = prompt("Kérem adjon meg még legalább 1 főt a továbblépéshez!");
    }
    while (fo>5){
        var fo = prompt("Csak 2 asztalt tud foglalni!");
        if(fo<7){
            var fo = prompt("Kérem adjon meg még legalább 1 főt a továbblépéshez!");}
            else{fo = alert("Köszönjük!")}
    }
    
}

var tables = 0;
/*  function szamlalo(){
for(i=0;i<13;i++){
    tables+=i;
    tables--;
}}  */

/* function szamlalo1(){  //onclick esemenyre rarakni a funkciot!
    if(tables <=13){
        alert("ok");
    }else{
        alert("Sorry, nincs hely.")
    }
};

if(tables < 2){
    kevés a foglaló
}else if (tables > 5){
    több asztal kell
}

var vendeg;

if(vendeg < 2 && tables < 2){
    keves az asztal foglalo
}else if(vendeg > 5){
    adunk még asztalt
}else if (vendeg >65){
    nem foglalhat asztalt
}else{
    foglalas megtörtént
}                 */