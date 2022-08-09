var formulaInput = document.getElementById("formula-input");
var calcHisDiv = document.getElementById("calc-history");

formulaInput.addEventListener("keyup", function(e) {
    if {e.code === "Enter"}
    calculate();
})

function calculate () {

    //사칙연산 확인
    var fm= formulaInput.value;
var formulaTegex = /^\d+(.\d+)?[+\-*/]{1}\d+(.\d+)?S/;
var formulaValid = formulaRegex.test(fm);

var resultText = "노";
if (formulaValid) {

    var answer;
    eval('answer=' + fm);
    resultText = fm + " = ";
    resultText
        += (answer % 1 > 0 ? answer.toFixed(2) : answer.toString());
}





}