window.onload = (event) => {
    //array met 8 letter woorden
    const woordenLijst = ["absolute","abstract","academic","accepted","accident","accuracy","accurate","achieved","acquired","activity","actually","addition","adequate","adjacent","adjusted",
"advanced","advisory","advocate","affected","aircraft","alliance","although","aluminum","analysis","announce","anything","anywhere","apparent","appendix","approach","approval","argument",
"artistic","assembly","assuming","athletic","attached","attitude","attorney","audience","autonomy","aviation","bachelor","bacteria","baseball","bathroom","becoming","benjamin","birthday",
"boundary","breaking","breeding","building","bulletin","business","calendar","campaign","capacity","casualty","catching","category","Catholic","cautious","cellular","ceremony","chairman",
"champion","chemical","children","circular","civilian","clearing","clinical","clothing","collapse","colonial","colorful","commence","commerce","complain","complete","composed","compound",
"comprise","computer","conclude","concrete","conflict","confused","congress","consider","constant","consumer","continue","contract","contrary","contrast","convince","corridor","coverage",
"covering","creation","creative","criminal","critical","crossing","cultural","currency","customer","database","daughter","daylight","deadline","deciding","decision","decrease","deferred",
"definite","delicate","delivery","describe","designer","detailed","diabetes","dialogue","diameter","directly","director","disabled","disaster","disclose","discount","discover","disorder",
"disposal","distance","distinct","district","dividend","division","doctrine","document","domestic","dominant","dominate","doubtful","dramatic","dressing","dropping","duration","dynamics",
"earnings","economic","educated","efficacy","eighteen","election","electric","eligible","emerging","emphasis","employee","endeavor","engaging","engineer","enormous","entirely","entrance",
"envelope","equality","equation","estimate","evaluate","eventual","everyday","everyone","evidence","exchange","exciting","exercise","explicit","exposure","extended","external","facility",
"familiar","featured","feedback","festival","finished","firewall","flagship","flexible","floating","football","foothill","forecast","foremost","formerly","fourteen","fraction","franklin",
"frequent","friendly","frontier","function","generate","generous","genomics","goodwill","governor","graduate","graphics","grateful","guardian","guidance","handling","hardware","heritage",
"highland","historic","homeless","homepage","hospital","humanity","identify","identity","ideology","imperial","incident","included","increase","indicate","indirect","industry","informal",
"informed","inherent","initiate","innocent","inspired","instance","integral","intended","interact","interest","interior","internal","interval","intimate","intranet","invasion","involved",
"isolated","judgment","judicial","junction","keyboard","landlord","language","laughter","learning","leverage","lifetime","lighting","likewise","limiting","literary","location","magazine",
"magnetic","maintain","majority","marginal","marriage","material","maturity","maximize","meantime","measured","medicine","medieval","memorial","merchant","midnight","military","minimize",
"minister","ministry","minority","mobility","modeling","moderate","momentum","monetary","moreover","mortgage","mountain","mounting","movement","multiple","national","negative","nineteen",
"northern","notebook","numerous","observer","occasion","offering","official","offshore","operator","opponent","opposite","optimism","optional","ordinary","organize","original","overcome",
"overhead","overseas","overview","painting","parallel","parental","patented","patience","peaceful","periodic","personal","persuade","petition","physical","pipeline","platform","pleasant",
"pleasure","politics","portable","portrait","position","positive","possible","powerful","practice","precious","pregnant","presence","preserve","pressing","pressure","previous","princess",
"printing","priority","probable","probably","producer","profound","progress","property","proposal","prospect","protocol","provided","provider","province","publicly","purchase","pursuant",
"quantity","question","rational","reaction","received","receiver","recovery","regional","register","relation","relative","relevant","reliable","reliance","religion","remember","renowned",
"repeated","reporter","republic","required","research","reserved","resident","resigned","resource","response","restrict","revision","rigorous","romantic","sampling","scenario","schedule",
"scrutiny","seasonal","secondly","security","sensible","sentence","separate","sequence","sergeant","shipping","shortage","shoulder","simplify","situated","slightly","software","solution",
"somebody","somewhat","southern","speaking","specific","spectrum","sporting","standard","standing","standout","sterling","straight","strategy","strength","striking","struggle","stunning",
"suburban","suitable","superior","supposed","surgical","surprise","survival","sweeping","swimming","symbolic","sympathy","syndrome","tactical","tailored","takeover","tangible","taxation",
"taxpayer","teaching","tendency","terminal","terrible","thinking","thirteen","thorough","thousand","together","tomorrow","touching","tracking","training","transfer","traveled","treasury",
"triangle","tropical","turnover","ultimate","umbrella","universe","unlawful","unlikely","valuable","variable","vertical","victoria","violence","volatile","warranty","weakness","weighted",
"whatever","whenever","wherever","wildlife","wireless","withdraw","woodland","workshop","yourself"];

    //woordenlijst shufflen als de pagina geladen is. 
    function shuffleArray(array){
       array.sort(function () {
            return Math.random() - 0.5;
        });
    }
        shuffleArray(woordenLijst);
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
        document.getElementById("a1").value = woord[letterCombinaties[i[0]][0]].toUpperCase();
        document.getElementById("b1").value = woord[letterCombinaties[i[0]][1]].toUpperCase();
        document.getElementById("c1").value = woord[letterCombinaties[i[0]][2]].toUpperCase();
        document.getElementById("a2").value = woord[letterCombinaties[i[0]][3]].toUpperCase();
        document.getElementById("c2").value = woord[letterCombinaties[i[0]][4]].toUpperCase();
        document.getElementById("a3").value = woord[letterCombinaties[i[0]][5]].toUpperCase();
        document.getElementById("b3").value = woord[letterCombinaties[i[0]][6]].toUpperCase();
        document.getElementById("c3").value = woord[letterCombinaties[i[0]][7]].toUpperCase();
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
    };
    let teller = 0;
    function controleerWoord(woord){
        resultaat = document.getElementById("resultaat").innerHTML;
        if (resultaat == woord){
            alert("Goed!");
            updateWoord(woordenLijst,woordIndex,teller);
            teller += 1;
            score = document.getElementById("score").innerHTML = "Score: " + teller;
        }
    }
    
    //onclick   
    a1.onclick = function(){a1.style.background='#1e1e1e';copyContent(a1);controleerWoord(woord,teller)};
    b1.onclick = function(){b1.style.background='#1e1e1e';copyContent(b1);controleerWoord(woord,teller)};
    c1.onclick = function(){c1.style.background='#1e1e1e';copyContent(c1);controleerWoord(woord,teller)};
    a2.onclick = function(){a2.style.background='#1e1e1e';copyContent(a2);controleerWoord(woord,teller)};
    c2.onclick = function(){c2.style.background='#1e1e1e';copyContent(c2);controleerWoord(woord,teller)};
    a3.onclick = function(){a3.style.background='#1e1e1e';copyContent(a3);controleerWoord(woord,teller)};
    b3.onclick = function(){b3.style.background='#1e1e1e';copyContent(b3);controleerWoord(woord,teller)};
    c3.onclick = function(){c3.style.background='#1e1e1e';copyContent(c3);controleerWoord(woord,teller)};
    start.onclick = function(){start.innerHTML = "Volgende woord";startPositieToewijzing(woord);PrintLettersOpScherm(); woordIndex += 1};
    reset.onclick = function(){document.getElementById("resultaat").innerHTML = "";resetButtonKleuren();}
};

  //winst alert vervangen voor melding op scherm. 
  //hover werkt niet meer nadat de value gereset is(dus na start geklikt te hebben), waarom?

  