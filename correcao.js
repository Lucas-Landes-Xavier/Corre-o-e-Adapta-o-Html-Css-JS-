let convidados = ["Rafaela", "Felipe", "SAIR", "Nicolas", "Amado", "Miguel"];
let entrada = [];
let i = 0;
while (entrada.length < 5) {
 console.log("Processando convidado: ", convidados[i]);

// O erro no código original se tratava na posição do break, que estva fora do if, portanto,
//ele encerrava todo o laço de repetição, não permitindo a execução dos comandos que vinham após
//ele dentro do laço.
 if (convidados[i] == "SAIR") {
    break;
 }
 
 entrada.push(convidados[i]);
 i++;
}
console.log("Lotação esgotada!");
console.log(entrada);