window.onload = () => {
const woorden = ["krokodil","kikker","gans","kat","panter","stoel","bureau","computer"];
//Start knop
document.getElementById("start").addEventListener("click", ()=>{
    document.getElementById('hangman').src="img/hangman0.png";
});

//print streepjes gelijk aan aantal letters. MAak maar functie van later!
let lengteWoord = woorden[0].length;
const laagStreepje = "_";
let tekst = laagStreepje.repeat(lengteWoord);
document.getElementById("resultaat").innerHTML = tekst;


    let teller = 0;
    //the button clickevent
    document.querySelectorAll('.toets').forEach(item => {
        item.addEventListener('click', event => {
            
            let letterPositie = woorden[0].indexOf(event.target.id);
            alert(event.target.id);
            
            
            if (letterPositie >= 0){
                //woorden is neit wat er in het streepje word geprint. dussss
                //tekst[letterPositie] = event.target.id;
                
                console.log("lp: " + letterPositie);
                console.log("tekst: " + tekst);
            }
            else if(letterPositie == -1){
                teller ++;
                let hangmansrc = "img/hangman" + teller + ".png";
                document.getElementById("hangman").src = hangmansrc;
                console.log(teller);
            }
            else {
                return;
            }
        })
      })

}


//nu nog de letters op de juiste plek zien te krijgen.
// dan vergelijken als het woord goed is, en dan volgende woord. 
//oof als game over melding maken ervoor. 