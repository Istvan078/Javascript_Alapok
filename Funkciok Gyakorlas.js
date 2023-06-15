//  A funkciokat ertekkent is lehet kezelni. pl:
function ertek(a,b){
    return a*b
}
let eredmeny = ertek(10,10)+10   //tehat itt az eredmeny valtozo = 110-el, nem pedig a funkcioval.
pTag1.innerHTML = eredmeny;

const arrowFunction = (a,b) => a*b
const arrowFunction2 = (a,b) => {return (a+b)*100}
function ketto(){return 8+8}
let ketto2 = ketto()
pTag1.innerHTML = ketto2