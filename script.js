console.log('Javascript Carregado');

function validaCPF(cpf) {
    // console.log (cpf.length);
    if (cpf.length != 11) {
    return false;
    }   else {
        var numbers = cpf.substring(0, 9);
        var digits = cpf.substring(9);

        var soma = 0;
        for (var i = 10; i > 1; i--) {
            soma += numbers.charAt(10 - i) * i;
        }
        // console.log (soma);

        var resulta = (soma % 11) < 2 ? 0 : 11 - (soma % 11);
        // Validando o primeiro dígito
        if(resulta != digits.charAt(0)) {
            return false;
        } 
               
        // console.log(digits.toString().charAt(0) + ' é a primeira posição da variável soma.');
        
        soma = 0;
        numbers = cpf.substring(0, 10);
        for (var k = 11; k > 1; k--) {
            soma += numbers.charAt(11 - k) * k;
        }
        // console.log (soma);
        resulta = (soma % 11) < 2 ? 0 : 11 - (soma % 11);
         // Validando o segundo dígito
         if(resulta != digits.charAt(1)) {
            return false;
        } 
        // console.log ('Números do CPF ' + numbers);
        // console.log ('Dígitos do CPF ' + digits);
        
        return true;
        
    }
}

function validar() {
    // console.log('Aqui inicia a validação do CPF digitado!');
        // Limpando a tela
        document.getElementById('success').style.display = 'none';
        document.getElementById('error').style.display = 'none';

    var cpf = document.getElementById('cpf_digitado').value;

    var resultadoValidarCPF = validaCPF(cpf);
    
    if (resultadoValidarCPF) {
        document.getElementById('success').style.display = 'block';
    }   else {
        document.getElementById('error').style.display = 'block';
    }    
}
/*let txt = "";
function funcao(value, index, array) {
    if (index % 2 == 0) {txt += value};
}
function xpto (x) {
        x.forEach(funcao);
        return txt;
}
alert (xpto([0, 1, 1, 2, 3, 5]));
*/