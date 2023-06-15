                                //   FUNCTION FOR USE  //

var array2 = []
var object = {alma: "korte", korte: 56}


function callBack(adat){

}

function emptyDivMaker(){
var newDiv = document.createElement("div")
newDiv.classList.add("newDivsClass")
document.body.appendChild(newDiv)
return newDiv
}
var emptyDiv = emptyDivMaker()


function dataToArrayCallBack(object){
    array2.push(object)
}

function objectIteraloEsDisplay(){
let propertyEsErtek = [];
for(property in object){
propertyEsErtek += property + ": " + object[property]
}
dataToArrayCallBack(propertyEsErtek);
return displayer(emptyDiv,propertyEsErtek);}

objectIteraloEsDisplay();
displayer(emptyDiv,array2)
console.log(array2)



function showAndHide(){              
setTimeout(function(){
    setTimeout(showAndHide,2000)
},2000)
}

function displayer(adatba,adatot){
adatba.innerHTML = adatot
}


function toUpperCaseInput(inputelem){   //  Input mezo ertekenek nagybetusse alakitasa  //
    var inputErtek = inputelem.value;
    var upperCaseValue = inputErtek.toUpperCase();
    inputelem.value = upperCaseValue;
}