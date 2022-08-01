window.onload = () => {
const woorden = ["krokodil","kikker","gans","kat","panter","stoel","bureau","computer"];
//Start knop
document.getElementById("start").addEventListener("click", ()=>{
    document.getElementById('hangman').src="img/hangman0.png";
});

//print streepjes gelijk aan aantal letters. MAak maar functie van later!
let lengteWoord = woorden[0].length;
const laagStreepje = "_";
document.getElementById("resultaat").innerHTML = laagStreepje.repeat(lengteWoord);

//nu op de klik van de knop, check of letter in het woord zit. indexOf??
    //even checken of je letters kan gebruiken net als in de scuffed scrabble van c!??!
    console.log("a ascci code is = " + "a".charCodeAt());
    console.log(" z ascci code is = " + "z".charCodeAt());

    console.log(String.fromCharCode(72));
    // nu nog uitvogele hoe ik dit process dan weer omkeer, dus van asci naar uhm alfabet. 
    // en dan 

    //NOTETOSELF ik denk dat ik een query selector ga gebruiken op de buttons, en dan met class
    //en dan even kijken of ik dan kan uitvolgen welke id de ingedrukte button heeft.
    //dan dat kopieren en printen in het word. Als goed dan prima als fout updat img src.
    

}