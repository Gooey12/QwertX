const qwertyDic = {"q":"[1]-12", "w":"[1]-23", "e":"[1]-34", "r":"[1]-45", "t":"[1]-56", "y":"[1]-67", "u":"[1]-78", "i":"[1]-89", "o":"[1]-90", "p":"[1]-01", "a":"[2]-12", "s":"[2]-23", "d":"[2]-34", "f":"[2]-45", "g":"[2]-56", "h":"[2]-67", "j":"[2]-78", "k":"[2]-89", "l":"[2]-90", "z":"[3]-12", "x":"[3]-23", "c":"[3]-34", "v":"[3]-45", "b":"[3]-56", "n":"[3]-67", "m":"[3]-78", "1":"{1}", "2":"{2}", "3":"{3}", "4":"{4}", "5":"{5}", "6":"{6}", "7":"{7}", "8":"{8}", "9":"{9}", "0":"{0}", " ":"—", "'":"/", "?":">>"};

document.getElementById("translateBtn").addEventListener('click', function (){
    const textInput = document.getElementById("textInput");
    let output = ""

    for(let i of textInput.value.toLowerCase()){
        output += qwertyDic[i];
    }

    document.getElementById("Output").value = output;
});

document.getElementById("copyBtn").addEventListener('click', function (){
    const outputText = document.getElementById("Output");
    navigator.clipboard.writeText(outputText.value);
});