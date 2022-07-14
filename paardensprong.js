window.onload = (event) => {
    //array met 8 letter woorden
    const woordenLijst = ["striking","struggle","stunning","suburban","suitable","superior","supposed","surgical","surprise","survival","sweeping","swimming","symbolic","sympathy","syndrome","tactical","tailored","takeover","tangible","taxation","taxpayer","teaching","tendency","terminal","terrible","thinking","thirteen","thorough","thousand","together","tomorrow","touching","tracking","training","transfer","traveled","treasury","triangle","tropical","turnover","ultimate","umbrella","universe","unlawful","unlikely","valuable","variable","vertical","victoria","violence","volatile","warranty","weakness","weighted","whatever","whenever","wherever","wildlife","wireless","withdraw","woodland","workshop","yourself"];
    //woordenlijst shufflen als de pagina geladen is. 
    function shuffleArray(array){
       array.sort(function () {
            return Math.random() - 0.5;
        });
    }
        shuffleArray(woordenLijst);
        console.log(woordenLijst);
        //deze moet geupdate worden als het woord geraden is!
        let woordIndex = 0;
        let woord = woordenLijst[woordIndex];
        
        function updateWoord(woordenLijst,woordIndex){
            woord = woordenLijst[woordIndex]
        }

    let letterCombinaties = [[0,5,2,3,7,4,1,6],[3,6,1,0,4,5,2,7],[5,2,7,0,4,3,6,1],[6,1,4,3,7,0,5,2],[3,0,5,6,2,1,4,7],[5,0,3,2,6,7,4,1],[1,4,7,6,2,3,0,5],[7,4,1,2,6,5,0,3],[6,3,0,1,5,4,7,2],[1,6,3,4,0,7,2,5],[7,2,5,4,0,1,6,3],[4,1,6,7,3,2,5,0]];
    
    //functies met letter combinaties.
    function startPositieToewijzing(woord) {
        //nummer shuffle voor 1e index
        let i = [1, 2, 3, 4, 5, 6, 7, 8];
        shuffleArray(i);
        console.log("startpostoewij. log:" + woord)
        document.getElementById("a1").value = woord[letterCombinaties[i[0]][0]];
        document.getElementById("b1").value = woord[letterCombinaties[i[0]][1]];
        document.getElementById("c1").value = woord[letterCombinaties[i[0]][2]];
        document.getElementById("a2").value = woord[letterCombinaties[i[0]][3]];
        document.getElementById("c2").value = woord[letterCombinaties[i[0]][4]];
        document.getElementById("a3").value = woord[letterCombinaties[i[0]][5]];
        document.getElementById("b3").value = woord[letterCombinaties[i[0]][6]];
        document.getElementById("c3").value = woord[letterCombinaties[i[0]][7]];
    }
    //reset de kleuren vd ingedrukte buttons.
    function resetButtonKleuren(){
        a1.style.background="#333";
        b1.style.background="#333";
        c1.style.background="#333";
        a2.style.background="#333";
        c2.style.background="#333";
        a3.style.background="#333"; 
        b3.style.background="#333";
        c3.style.background="#333";
    }
    //vull de buttons met juiste letters
    function PrintLettersOpScherm(){
        a1.innerHTML = a1.value;
        b1.innerHTML = b1.value;
        c1.innerHTML = c1.value;
        a2.innerHTML = a2.value;
        c2.innerHTML = c2.value;
        a3.innerHTML = a3.value;
        b3.innerHTML = b3.value;
        c3.innerHTML = c3.value;
        resetButtonKleuren();
        document.getElementById("resultaat").innerHTML = "";
    }
    function copyContent(id){
                document.getElementById("resultaat").innerHTML += id.value;
                console.log(id.value);
    };
    let teller = 0;
    function controleerWoord(woord){
        resultaat = document.getElementById("resultaat").innerHTML;
        if (resultaat == woord){
            alert("woord = geraden");
            updateWoord(woordenLijst,woordIndex,teller);
            teller += 1;
            score = document.getElementById("score").innerHTML = "Score: " + teller;
        }
    }
    
    //onclick   
    a1.onclick = function(){a1.style.background='#011936';copyContent(a1);controleerWoord(woord,teller)};
    b1.onclick = function(){b1.style.background='#011936';copyContent(b1);controleerWoord(woord,teller)};
    c1.onclick = function(){c1.style.background='#011936';copyContent(c1);controleerWoord(woord,teller)};
    a2.onclick = function(){a2.style.background='#011936';copyContent(a2);controleerWoord(woord,teller)};
    c2.onclick = function(){c2.style.background='#011936';copyContent(c2);controleerWoord(woord,teller)};
    a3.onclick = function(){a3.style.background='#011936';copyContent(a3);controleerWoord(woord,teller)};
    b3.onclick = function(){b3.style.background='#011936';copyContent(b3);controleerWoord(woord,teller)};
    c3.onclick = function(){c3.style.background='#011936';copyContent(c3);controleerWoord(woord,teller)};
    start.onclick = function(){start.innerHTML = "Volgende woord";startPositieToewijzing(woord);PrintLettersOpScherm(); woordIndex += 1};
    reset.onclick = function(){document.getElementById("resultaat").innerHTML = "";resetButtonKleuren();}
};

 
  // Alles nog wat opleuken, en responsive maken. 
  //woordenlijst uitbreiden met meer woorden, van A tot Z
  //foutmeldingen toevoeging als het geen paardensprong is.
  //winst alert vervangen voor melding op scherm. 
  //hover werkt niet meer nadat de value gereset is(dus na start geklikt te hebben), waarom?

  