const form = document.getElementById('form-depositar')


    function validaNome(nomeCompleto){
        const nomeComoArray = nomeCompleto.split('');
        return nomeComoArray.leng >= 2;
    }
    form.addEventListener('submit', function(e){
        let formEValido = false;
        e.preventDefault();

        const nomeBeneficiario = document.getElementById('nome-beneficiario');
        const numeroContabeneficiario = document.getElementById('numero-conta');
        const valorDeposito = document.getElementById('valor-deposito');
        const mensagemSucesso = `Montante de: ${valorDeposito.value} depositado para o cliente: ${nomeBeneficiario} -conta ${numeroContabeneficiario}`;

        formEValido = validaNome(nomeBeneficiario.value)
        if (formEValido){
            alert(mensagemSucesso);

            nomeBeneficiario.value = '';
            numeroContabeneficiario.value = ''
            valorDeposito.value = '';
        } else {
            alert("O nome não esta completo");
        }
})

console.log(form);