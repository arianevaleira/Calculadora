// Seleciona o elemento de resultado
var resultado = document.getElementById('resultado');
var botoes = document.querySelectorAll('button');
var operacao = '';


for (var i = 0; i < botoes.length; i++) {
    botoes[i].addEventListener('click', function() {
        if (!isNaN(this.textContent)) {
            resultado.textContent += this.textContent;
        }
        else if (this.textContent === '+' || this.textContent === '-' || this.textContent === '*' || this.textContent === '/') {
            operacao = this.textContent;
            resultado.textContent += ' ' + operacao + ' ';
        }
        else if (this.textContent === '=') {
            resultado.textContent = eval(resultado.textContent);
        }
        else if (this.textContent === 'C') {
            resultado.textContent = '';
        }
    });
}
