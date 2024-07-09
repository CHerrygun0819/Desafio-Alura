function criptografar() {
    const texto = document.getElementById('inputText').value;
    const textoCriptografado = texto
        .replace(/e/g, 'pese')
        .replace(/i/g, 'pigb')
        .replace(/a/g, 'padt')
        .replace(/o/g, 'pobg')
        .replace(/u/g, 'phuk');
    document.getElementById('outputText').value = textoCriptografado;
}

function descriptografar() {
    const texto = document.getElementById('inputText').value;
    const textoDescriptografado = texto
        .replace(/pese/g, 'e')
        .replace(/pigb/g, 'i')
        .replace(/padt/g, 'a')
        .replace(/pobg/g, 'o')
        .replace(/phuk/g, 'u');
    document.getElementById('outputText').value = textoDescriptografado;
}

function copiar() {
    const texto = document.getElementById('outputText');
    texto.select();
    document.execCommand('copy');
    alert('Texto copiado para a área de transferência!');
}
