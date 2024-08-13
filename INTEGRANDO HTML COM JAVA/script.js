document.getElementById('numeroForm').addEventListener('submit', function(event) {
    event.preventDefault();  // Impede o envio do formulário para processar a validação

    const campoA = parseFloat(document.getElementById('campoA').value);
    const campoB = parseFloat(document.getElementById('campoB').value);
    const mensagem = document.getElementById('mensagem');

    if (campoB > campoA) {
        mensagem.textContent = "Formulário válido! O número B é maior que o número A.";
        mensagem.className = 'positivo';
    } else {
        mensagem.textContent = "Formulário inválido! O número B deve ser maior que o número A.";
        mensagem.className = 'negativo';
    }
});