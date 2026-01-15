// Exibe uma mensagem de boas-vindas ao jogador
alert('Boas-vindas ao jogo do número secreto!');

// Define o número máximo que pode ser sorteado
let numeroMaximo = 100;

// Gera um número aleatório entre 1 e o número máximo
let numeroSecreto = parseInt(Math.random() * numeroMaximo + 1);

// Variável que vai armazenar o número digitado pelo usuário
let chute;

// Mostra o número secreto no console (útil para testes)
console.log(numeroSecreto);

// Conta quantas tentativas o usuário fez
let tentativas = 1;

// Enquanto o chute for diferente do número secreto
while (chute != numeroSecreto) {

    // Pede para o usuário escolher um número
    chute = prompt(`Escolha um número entre 1 e ${numeroMaximo}`);

    // Se o usuário acertar o número secreto
    if (Number(chute) === numeroSecreto) {
        break; // Sai do loop
    } 
    // Caso o usuário erre
    else {

        // Se o chute for menor que o número secreto
        if (chute < numeroSecreto) {
            alert(`O número secreto é maior que ${chute}`);
        } 
        // Se o chute for maior que o número secreto
        else {
            alert(`O número secreto é menor que ${chute}`);
        }

        // Incrementa o número de tentativas
        tentativas++;
    }
}

// Define se a palavra será "tentativa" ou "tentativas"
let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';

// Exibe a mensagem final de sucesso
alert(
    `Isso aí! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} ${palavraTentativa}.`
);
