window.onload = () => {

const woorden = ["krokodil","kikker","gans","kat","panter","stoel","bureau","computer"];
let lengteWoord = woorden[0].length;
let tekst = [];
console.log(tekst.length);
const laagStreepje = "_";
for (let i = 0; i <= (lengteWoord - 1); i++){
    tekst.unshift(laagStreepje);
}
console.log("aftertekst: " + tekst);



//Start knop
document.getElementById("start").addEventListener("click", ()=>{
    document.getElementById('hangman').src="img/hangman0.png";
    document.getElementById("resultaat").innerHTML = tekst;
});

    let teller = 0;
    //the button clickevent
    document.querySelectorAll('.toets').forEach(item => {
        item.addEventListener('click', event => {
            let letterPositie = woorden[0].indexOf(event.target.id);
            
            if (letterPositie >= 0){
                tekst[letterPositie] = event.target.id;
                
                for(let i = 0; i <= woorden.length; i++){
                    letterPositie = woorden[0].indexOf(event.target.id,(letterPositie + 1));
                    tekst[letterPositie] = event.target.id;
                    document.getElementById("resultaat").innerHTML = tekst.join(' ');
                    woordCheck = tekst.toString();
                }
                
            }
            else if(letterPositie == -1){
                teller ++;
                let hangmansrc = "img/hangman" + teller + ".png";
                document.getElementById("hangman").src = hangmansrc;
                console.log(teller);
            }
            else if(woorden[0] === tekst.toString()){
                alert("Winst");
            }
            console.log(woordCheck + woorden[0]);
        })
      })

}


// uhm de alert als het woord goed is gaat niet goed. 
//moet nog iets van een game over ding toegevoegd worden.
// shit wat mooier maken
//mischien de hangman ook wat mooier maken
//code opruimen want damn rommel man