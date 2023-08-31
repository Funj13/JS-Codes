
function calcularMultiplicacao(){
    let nMul1 = parseFloat (document.getElementById("nMul1").value);
    
    let nMul2 = parseFloat (document.getElementById("nMul2").value);

    let nMul3 = parseFloat (document.getElementById("nMul3").value);0

    let resultadoMu = nMul1 * nMul2 * nMul3;

    alert(resultadoMu);
}

function calcularMédia(){
    let nMe1 = parseFloat (document.getElementById("nMe1").value);
    
    let nMe2 = parseFloat (document.getElementById("nMe2").value);

    let nMe3 = parseFloat (document.getElementById("nMe3").value);

    let resultadoMe = (nMe1 + nMe2 +nMe3) / 3;

    alert(resultadoMe);
}