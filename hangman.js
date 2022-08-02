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

//functie woord controleren
function woordControleren(woord, controleWoord){
    for (let i = 0; woord.length <= i;i++){
        if (woord[0][i] == controleWoord){
            return 0;
        }
        else {
            return false;
        }

    }

}

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
            else if(woordControleren(woorden, woordCheck) == 0){
                alert("Winst");
            }
            console.log(woordCheck + woorden[0][0]);
        })
      })

}


// uhm de alert als het woord goed is gaat niet goed. 
    //for loop maken om alle letters individueel te vergelijken.
    //return true als true en false als false. als alles true dan prit wintst
    //mijn functite is kak, checken waar die fout loopt
//moet nog iets van een game over ding toegevoegd worden.
// shit wat mooier maken
//mischien de hangman ook wat mooier maken
//code opruimen want damn rommel man