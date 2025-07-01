// Lista de Exercícios Lógicos com JavaScript
// Aluno: José Claudio da Silva Junior
// Professor: Jaques Antunes
// Data: 01/07/2025

const prompt = require("prompt-sync")();

//1. Escreva um programa para calcular a redução do tempo de vida de um fumante. Pergunte a quantidade de cigarros fumados por dias e quantos anos ele já fumou. Considere que um fumante perde 10 min de vida a cada cigarro. Calcule quantos dias de vida um fumante perderá e exiba o total em dias. 
function exercicio1() {
    const tempoDeVidaPerdido = 10;
    let cigarrosPorDia = 15;
    let tempoDeFumante = 3;

    const ano = 365;
    const diaEmMinutos = 1440;

    let tempoPerdidoNoDia = cigarrosPorDia * tempoDeVidaPerdido;
    let tempoPerdidoNoAno = tempoPerdidoNoDia * ano;
    let tempoPerdidoNoAnoEmDias = tempoPerdidoNoAno / diaEmMinutos;
    let tempoTotalDeVidaPerdido = tempoPerdidoNoAnoEmDias * tempoDeFumante;

    console.log("Você fuma um cigarro a cada:", (diaEmMinutos / cigarrosPorDia).toFixed(2), "minutos");
    console.log("Por dia você perde:", tempoPerdidoNoDia, "minutos por fumar", cigarrosPorDia, "cigarros");
    console.log("Você perdeu:", tempoTotalDeVidaPerdido.toFixed(2), "dias de vida desde que começou a fumar");
}
//2. Escreva um programa que pergunte a velocidade de um carro. Caso ultrapasse 80 Km h-1, exiba uma mensagem dizendo que o usuário foi multado. Nesse caso, exiba o valor da multa, cobrando R$ 5,00 por cada Km acima da velocidade permitida. 
function exercicio2() {
    let velocidadeDoCarro = 112;
    const velocidadeMaxima = 80;
    const valorMulta = 5;

    if (velocidadeDoCarro > velocidadeMaxima) {
        let quantosKMAcima = velocidadeDoCarro - velocidadeMaxima;
        let valorTotalMulta = valorMulta * quantosKMAcima;
        console.log("Você foi multado. Multa: R$", valorTotalMulta);
    } else {
        console.log("Você está dentro do limite de velocidade.");
    }
}
//3. Faça um algoritmo que pergunte a distância que um passageiro deseja percorrer em Km. Calcule o preço da passagem, cobrando R$ 0.50 por Km para viagens até 200 Km e R$ 0.45 para viagens mais longas. 
function exercicio3() {
    const precoViagemCurta = 0.50;
    const precoViagemLonga = 0.45;
    let distanciaDaViagem = 200;

    let valorViagem = distanciaDaViagem <= 200 ? distanciaDaViagem * precoViagemCurta : distanciaDaViagem * precoViagemLonga;
    console.log("O preço da sua viagem será de R$:", valorViagem.toFixed(2));
}

//4. Crie um programa que leia o tamanho de três segmentos de reta. Analise seus comprimentos e diga se é possível formar um triângulo com essas retas. Matematicamente, para três segmentos formarem um triângulo, o comprimento de cada lado deve ser menor que a soma dos outros dois. 
function exercicio4() {
    let l1 = 5, l2 = 10, l3 = 3;
    if (l1 + l2 > l3 && l1 + l3 > l2 && l2 + l3 > l1) {
        console.log("Essas medidas podem formar um triângulo");
    } else {
        console.log("Essas medidas não podem formar um triângulo");
    }
}
//5. Crie um jogo de JoKenPo (Pedra-Papel-Tesoura). 
function exercicio5() {
    let numeroAleatorio = Math.floor(Math.random() * 3) + 1;
    let numeroEscolhido = 1;

    console.log("Jó-");
    setTimeout(() => {
        console.log("Kem-");
        setTimeout(() => {
            console.log("Pô!");
            setTimeout(() => {
                if (numeroAleatorio === numeroEscolhido) {
                    console.log("Empate!");
                } else if ((numeroAleatorio === 1 && numeroEscolhido === 3) ||
                           (numeroAleatorio === 2 && numeroEscolhido === 1) ||
                           (numeroAleatorio === 3 && numeroEscolhido === 2)) {
                    console.log("Computador venceu!");
                } else {
                    console.log("Você venceu!");
                }
            }, 1000);
        }, 1000);
    }, 1000);
}

//6. Crie um jogo onde o computador vai sortear um número entre 1 e 5. O jogador vai tentar descobrir qual foi o valor sorteado. 
function exercicio6() {
    let numeroAleatorio = Math.floor(Math.random() * 5) + 1;
    let numeroEscolhido = 0;

    while (numeroEscolhido !== numeroAleatorio) {
        numeroEscolhido = Number(prompt("Escolha um número de 1 a 5: "));
        if (numeroEscolhido !== numeroAleatorio) {
            console.log("Errado, tente novamente.");
        } else {
            console.log("Parabéns, você acertou!");
        }
    }
}
/*7. Uma empresa de aluguel de carros precisa cobrar pelos seus serviços. O aluguel de um carro popular custa R$ 90,00 por dia e um carro de luxo custa R$ 150,00. Além disso, o cliente paga por Km percorrido. Faça um programa que leia o tipo de carro alugado (popular ou luxo), quantos dias de aluguel e quantos Km foram percorridos. No final, mostre o preço a ser pago de acordo com os dados a seguir: 
Carros populares 
- Até 100 Km percorridos: R$ 0,20 por Km 
- Acima de 100 Km percorridos: R$ 0,10 por Km 
Carros de luxo 
- Até 200 Km percorridos: R$ 0,30 por Km 
- Acima de 200 Km percorridos: R$ 0,25 por Km*/

function exercicio7() {
    const carroDeLuxo = 150;
    const carroNormal = 90;
    let carroEscolhido = carroNormal;
    let diasDeAluguel = 5;
    let KMPercorrido = 250;

    let precoPorDia = carroEscolhido;
    let valorPorKM = (carroEscolhido === carroNormal) ? (KMPercorrido <= 100 ? 0.20 : 0.10) : (KMPercorrido <= 200 ? 0.30 : 0.25);
    let valorDias = precoPorDia * diasDeAluguel;
    let valorKM = valorPorKM * KMPercorrido;
    let total = valorDias + valorKM;

    console.log("Total a pagar: R$", total.toFixed(2));
}

/*8. Um programa de vida saudável quer dar pontos por atividades físicas realizadas que podem ser trocados por dinheiro. Cada hora de atividade física no mês vale pontos. O sistema funciona assim: 
- até 10 h de atividade no mês: ganha 2 pontos por hora 
- de 10 h até 20 h de atividade no mês: ganha 5 pontos por hora 
- acima de 20 h de atividade no mês: ganha 10 pontos por hora 
- A cada ponto ganho, o cliente fatura R$ 0,05 (5 centavos) 
Faça um programa que leia quantas horas de atividade uma pessoa teve por mês. Calcule e mostre quantos pontos ela teve e quanto dinheiro ela conseguiu ganhar. */

function exercicio8() {
    let tempoDeAtividade = 45;
    let pontos = tempoDeAtividade < 10 ? tempoDeAtividade * 2 : (tempoDeAtividade <= 20 ? tempoDeAtividade * 5 : tempoDeAtividade * 10);
    let valoresGanhos = pontos * 0.05;
    console.log(`Você ganhou ${pontos} pontos e R$ ${valoresGanhos.toFixed(2)}`);
}


//9. Desenvolva um aplicativo que leia o salário e o sexo de vários funcionários. No final, mostre o total de salário pago aos homens e o total pago às mulheres. O programa vai perguntar ao usuário se ele quer continuar ou não sempre que ler os dados de um funcionário. 

function exercicio9() {
    let salarioTotalHomens = 0;
    let salarioTotalMulheres = 0;
    let continuar = 1;

    while (continuar !== 0) {
        let sexo = Number(prompt("Sexo [1 - Homem, 2 - Mulher]: "));
        let salario = Number(prompt("Salário: "));

        if (sexo === 1) salarioTotalHomens += salario;
        else if (sexo === 2) salarioTotalMulheres += salario;

        continuar = Number(prompt("Continuar? [0 - Não, 1 - Sim]: "));
    }

    console.log("Salário total - Homens: R$", salarioTotalHomens.toFixed(2));
    console.log("Salário total - Mulheres: R$", salarioTotalMulheres.toFixed(2));
}
/*10. Crie um programa usando a estrutura “faça enquanto” que leia vários números. A cada laço, pergunte se o usuário quer continuar ou não. No final, mostre na tela: a) O somatório entre todos os valores; 
b) Qual foi o menor valor digitado; 
c) A média entre todos os valores; 
d) Quantos valores são pares. */

function exercicio10() {
    let soma = 0, menorValor = null, contador = 0, pares = 0;
    let continuar;
    do {
        let numero = Number(prompt("Digite um número: "));
        soma += numero;
        if (menorValor === null || numero < menorValor) menorValor = numero;
        if (numero % 2 === 0) pares++;
        contador++;
        continuar = prompt("Continuar? [S/N]: ").toLowerCase();
    } while (continuar !== 'n');

    console.log(`Somatório: ${soma}, Menor: ${menorValor}, Média: ${(soma/contador).toFixed(2)}, Pares: ${pares}`);
}


//11. Desenvolva um programa que leia o primeiro termo e a razão de uma PA (Progressão Aritmética), mostrando na tela os 10 primeiros elementos da PA e a soma entre todos os valores da sequência. 

function exercicio11() {
    const a1 = Number(prompt("Primeiro termo: "));
    const r = Number(prompt("Razão: "));
    const n = Number(prompt("Quantos termos: "));
    const sn = (n / 2) * (2 * a1 + (n - 1) * r);

    console.log("PA:");
    for (let i = 0; i < n; i++) {
        console.log(a1 + i * r);
    }
    console.log("Soma total:", sn);
}

//12. Faça um programa que mostre os 10 primeiros elementos da Sequência de Fibonacci. Ex.: 1, 1, 2, 3, 5, 8, 13, 21. 

function exercicio12() {
    let a = 0, b = 1;
    let termos = [a, b];
    for (let i = 2; i < 10; i++) {
        termos[i] = termos[i - 1] + termos[i - 2];
    }
    console.log("Fibonacci:", termos.join(", "));
}

//13. Crie um programa que preencha automaticamente (usando lógica, não apenas atribuindo diretamente) um vetor numérico com 15 posições com os primeiros elementos da sequência de Fibonacci. 

function exercicio13() {
    let vetor = [0, 1];
    for (let i = 2; i < 15; i++) {
        vetor[i] = vetor[i - 1] + vetor[i - 2];
    }
    console.log("Fibonacci (15 termos):", vetor);
}

//14. Faça um programa que leia 7 nomes de pessoas e guarde-os em um vetor. No final, mostre uma listagem com todos os nomes informados, na ordem inversa daquela em que eles foram informados.

function exercicio14() {
    let nomes = [];
    for (let i = 0; i < 7; i++) {
        nomes.push(prompt(`Digite o nome ${i + 1}: `));
    }
    console.log("Nomes em ordem inversa:");
    for (let i = nomes.length - 1; i >= 0; i--) {
        console.log(nomes[i]);
    }
}

//15. Desenvolva um programa que leia 10 números inteiros e guarde-os em um vetor. No final, mostre quais são os números pares que foram digitados e em que posições eles estão armazenados. 
function exercicio15() {
  const prompt = require("prompt-sync")();
  let numeros = [], numerosPares = [];

  for (let i = 0; i < 10; i++) {
    let numero = Number(prompt("Digite um número: "));
    numeros.push(numero);
    if (numero % 2 === 0) numerosPares.push({ numero, pos: i });
  }

  for (let item of numerosPares) {
    console.log(`Número par ${item.numero} encontrado na posição ${item.pos}`);
  }
}

//16. Crie uma lógica que preencha um vetor de 20 posições com números aleatórios (entre 0 e 99) gerados pelo computador. Logo em seguida, mostre os números gerados e depois coloque o vetor em ordem crescente, mostrando no final os valores ordenados. 

function exercicio16() {
  let vetor = [];
  for (let i = 0; i < 20; i++) vetor.push(Math.floor(Math.random() * 100));
  console.log("Não ordenado:", vetor);
  console.log("Ordenado:", vetor.sort((a, b) => a - b));
}

//17. Crie um programa que leia o nome e a idade de 9 pessoas e guarde esses valores em dois vetores, em posições relacionadas. No final, mostre uma listagem contendo apenas os dados das pessoas menores de idade. 

function exercicio17() {
  const prompt = require("prompt-sync")();
  let nomes = [], idades = [];

  for (let i = 0; i < 9; i++) {
    nomes.push(prompt("Digite o nome: "));
    idades.push(Number(prompt("Digite a idade: ")));
  }

  for (let i = 0; i < 9; i++) {
    if (idades[i] < 18) console.log(`Nome: ${nomes[i]}, idade: ${idades[i]} (posição ${i})`);
  }
}

//18. Crie um registro com o nome do funcionário, cargo e salário. Leia este registro para um funcionário e ao final escreva o conteúdo do registro. 

function exercicio18() {
  const prompt = require("prompt-sync")();
  let funcionario = {
    nome: prompt("Nome: "),
    cargo: prompt("Cargo: "),
    salario: Number(prompt("Salário: "))
  };
  console.log(funcionario);
}

//19. Escrever um programa para ler 5 horários. Validar cada horário fornecendo através de repetição. Escrever cada um deles no formato HH.MM.SS. 

function exercicio19() {
  const prompt = require("prompt-sync")();
  let horarios = [];
  for (let i = 0; i < 5; i++) {
    let h = Number(prompt("Horas: ")), m = Number(prompt("Minutos: ")), s = Number(prompt("Segundos: "));
    while (h < 0 || h > 23) h = Number(prompt("Horas inválidas. Tente novamente: "));
    while (m < 0 || m > 59) m = Number(prompt("Minutos inválidos. Tente novamente: "));
    while (s < 0 || s > 59) s = Number(prompt("Segundos inválidos. Tente novamente: "));
    horarios.push(`${String(h).padStart(2, '0')}.${String(m).padStart(2, '0')}.${String(s).padStart(2, '0')}`);
  }
  console.log("Horários:", horarios);
}


/*20. Uma indústria faz a folha mensal de pagamentos de seus 80 empregados baseada no seguinte: existe uma tabela com os dados de cada funcionalidade: matrícula, nome e salário bruto. Escreva um programa que leia e processe a tabela e emita (escreva na tela), cada funcionário, seu contracheque, cujo formato é dado a seguir: 
Matrícula: 
Nome: 
Salário bruto: 
Dedução INSS: 
Salário líquido: 
(Dicas: desconto de 12%, salário líquido é a diferença entre salário bruto e a redução do INSS). */

function exercicio20() {
  let funcionarios = [
    { matricula: 1, nome: "José", salario: 2500 },
    { matricula: 2, nome: "Beatriz", salario: 2500 },
    { matricula: 3, nome: "Thiago", salario: 3200 },
    { matricula: 4, nome: "Rodrigo", salario: 1500 },
    { matricula: 5, nome: "Cristiano", salario: 8000 },
  ];

  for (let f of funcionarios) {
    let inss = f.salario * 0.12;
    let liquido = f.salario - inss;
    console.log(`\nMatrícula: ${f.matricula}\nNome: ${f.nome}\nBruto: R$${f.salario}\nINSS: R$${inss}\nLíquido: R$${liquido}`);
  }
}

//21. Faça uma função que recebe, por parâmetro, a altura (alt) e o sexo de uma pessoa e retorna o seu peso ideal. Para homens, calcular o peso ideal usando a fórmula: peso ideal = 72.7 x alt - 58 e, para mulheres, peso ideal = 62.1 x alt - 44.7. 

function exercicio21() {
  const prompt = require("prompt-sync")();
  let sexo = prompt("Sexo (h/m): ").toLowerCase();
  let altura = Number(prompt("Altura: "));
  let peso = sexo === "h" ? 72.7 * altura - 58 : sexo === "m" ? 62.1 * altura - 44.7 : null;
  console.log(peso ? `Peso ideal: ${peso.toFixed(2)}` : "Sexo inválido");
}

//22. A prefeitura de uma cidade fez uma pesquisa entre os seus habitantes, coletando dados sobre o salário e número de filhos. Faça uma função que leia esses dados para um número não determinado de pessoas e retorne a média de salário da população, a média do número de filhos, o maior salário e o percentual de pessoas com salário até R$ 350,00. 

function exercicio22() {
  const prompt = require("prompt-sync")();
  let totalFilhos = 0, maiorSalario = 0, contador = 0, ate350 = 0, totalSalarios = 0;
  while (true) {
    let salario = Number(prompt("Salário (0 para sair): "));
    if (salario === 0) break;
    let filhos = Number(prompt("Filhos: "));
    totalSalarios += salario;
    totalFilhos += filhos;
    if (salario > maiorSalario) maiorSalario = salario;
    if (salario <= 350) ate350++;
    contador++;
  }
  console.log(`Média salário: ${(totalSalarios / contador).toFixed(2)}`);
  console.log(`Média filhos: ${(totalFilhos / contador).toFixed(2)}`);
  console.log(`Maior salário: ${maiorSalario}`);
  console.log(`% até 350: ${((ate350 / contador) * 100).toFixed(2)}%`);
}

//23. Criar e imprimir a matriz identidade MI[1..7,1..7] em que todos os elementos da diagonal principal são iguais a 1 e os demais são nulos. 

function exercicio23() {
  let MI = [];
  for (let i = 0; i < 7; i++) {
    let linha = [];
    for (let j = 0; j < 7; j++) linha.push(i === j ? 1 : 0);
    MI.push(linha);
  }
  MI.forEach(l => console.log(l.join(" ")));
}

//24. Dada uma matriz M[1..6,1..8], criar um vetor C que contenha, em cada posição, a quantidade de elementos negativos da linha correspondente de M. 

function exercicio24() {
  let M = [
    [1, -2, 3, -4, 5, -6, 7, -8],
    [-1, 2, -3, 4, -5, 6, -7, 8],
    [1, 2, -3, -4, 5, 6, -7, 8],
    [1, -2, -3, 4, 5, -6, 7, 8],
    [1, 2, 3, 4, -5, -6, 7, 8],
    [1, -2, 3, -4, 5, -6, 7, -8]
  ];
  let C = M.map(linha => linha.filter(n => n < 0).length);
  console.log(C);
}

//25. Faça um algoritmo que leia uma matriz de 15 X 20 de números reais e mostre a soma de cada coluna separadamente. 

function exercicio25() {
  let M = Array.from({ length: 15 }, () => Array.from({ length: 20 }, () => Math.random() * 100));
  for (let j = 0; j < 20; j++) {
    let soma = 0;
    for (let i = 0; i < 15; i++) soma += M[i][j];
    console.log(`Soma da coluna ${j + 1}: ${soma.toFixed(2)}`);
  }
}


//26. Dadas duas matrizes numéricas A[1..3,1..5] e B[1..3,1..5], calcular a matriz produto P[1..3,1..5]. 

function exercicio26() {
  let A = [[1,2,3,4,5],[6,7,8,9,10],[11,12,13,14,15]];
  let B = [[5,4,3,2,1],[10,9,8,7,6],[15,14,13,12,11]];
  let P = [];

  for (let i = 0; i < 3; i++) {
    let linha = [];
    for (let j = 0; j < 5; j++) {
      linha.push(A[i][j] * B[i][j]);
    }
    P.push(linha);
  }
  console.log(P);
}

//27. Elaborar um algoritmo que leia uma matriz M(6,6) e um valor A. Após a leitura, multiplicar a matriz M pelo valor A e colocar os valores da matriz multiplicados por A em um vetor V(36). Escrever o vetor V no final. 

function exercicio27() {
  const prompt = require("prompt-sync")();
  let M = [
    [1, 2, 3, 4, 5, 6],
    [7, 8, 9, 10, 11, 12],
    [13, 14, 15, 16, 17, 18],
    [19, 20, 21, 22, 23, 24],
    [25, 26, 27, 28, 29, 30],
    [31, 32, 33, 34, 35, 36]
  ];

  let A = Number(prompt("Digite o valor de A: "));
  let V = [];

  for (let i = 0; i < 6; i++) {
    for (let j = 0; j < 6; j++) {
      V.push(M[i][j] * A);
    }
  }

  console.log("Vetor V:", V);
}

/*28. Fazer um algoritmo para receber uma matriz 10 x 10 e devolver o resultado pedido no item: 
a) a soma dos elementos acima da diagonal principal; 
b) a soma dos elementos abaixo da diagonal principal;*/ 

function exercicio28() {
  let M = Array.from({ length: 10 }, () =>
    Array.from({ length: 10 }, () => Math.floor(Math.random() * 100))
  );

  let somaAcimaDiagonal = 0;
  let somaAbaixoDiagonal = 0;

  for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
      if (i < j) somaAcimaDiagonal += M[i][j];
      else if (i > j) somaAbaixoDiagonal += M[i][j];
    }
  }

  console.log("Soma acima da diagonal principal:", somaAcimaDiagonal);
  console.log("Soma abaixo da diagonal principal:", somaAbaixoDiagonal);
}

/*29. Escreva um algoritmo que leia uma matriz M(5,5) e calcule as somas: a) da linha 4 de M; 
b) da coluna 2 de M; 
c) da diagonal principal; 
d) todos os elementos da matriz M. 
Escrever essas somas e a matriz. */

function exercicio29() {
  let M = [
    [1, 2, 3, 4, 5],
    [6, 7, 8, 9, 10],
    [11, 12, 13, 14, 15],
    [16, 17, 18, 19, 20],
    [21, 22, 23, 24, 25]
  ];

  let somaLinha4 = 0;
  let somaColuna2 = 0;
  let somaDiagonalPrincipal = 0;
  let somaTotal = 0;

  for (let i = 0; i < 5; i++) {
    somaLinha4 += M[3][i];
    somaColuna2 += M[i][1];
    somaDiagonalPrincipal += M[i][i];
    for (let j = 0; j < 5; j++) somaTotal += M[i][j];
  }

  console.log("Soma da linha 4:", somaLinha4);
  console.log("Soma da coluna 2:", somaColuna2);
  console.log("Soma da diagonal principal:", somaDiagonalPrincipal);
  console.log("Soma total da matriz:", somaTotal);
}

//30. Escrever um algoritmo que lê uma matriz M(5,5) e cria 2 vetores SL(5) e SC(5) que contenham, respectivamente, as somas das linhas e das colunas de M. Escrever a matriz e os vetores criados. 

function exercicio30() {
  let M = [
    [1, 2, 3, 4, 5],
    [6, 7, 8, 9, 10],
    [11, 12, 13, 14, 15],
    [16, 17, 18, 19, 20],
    [21, 22, 23, 24, 25]
  ];

  let SL = [];
  let SC = [];

  for (let i = 0; i < 5; i++) {
    let somaLinha = 0;
    for (let j = 0; j < 5; j++) somaLinha += M[i][j];
    SL.push(somaLinha);
  }

  for (let j = 0; j < 5; j++) {
    let somaColuna = 0;
    for (let i = 0; i < 5; i++) somaColuna += M[i][j];
    SC.push(somaColuna);
  }

  console.log("Matriz M:", M);
  console.log("Somas das linhas (SL):", SL);
  console.log("Somas das colunas (SC):", SC);
}

// 31. Escreva um algoritmo que leia um número inteiro A e uma matriz V 30 x 30 de inteiros. Conte quantos valores iguais a A estão na matriz. Crie, a seguir, uma matriz X contendo todos os elementos de V diferentes de A. Mostre os resultados.

function exercicio31() {
  const prompt = require("prompt-sync")();

  let V = [];
  for (let i = 0; i < 30; i++) {
    V.push(Array.from({ length: 30 }, () => Math.floor(Math.random() * 10)));
  }

  let A = Number(prompt("Digite o valor A: "));
  let countA = 0;
  let X = [];

  for (let i = 0; i < 30; i++) {
    for (let j = 0; j < 30; j++) {
      if (V[i][j] === A) countA++;
      else X.push(V[i][j]);
    }
  }

  console.log("Quantidade de A:", countA);
  console.log("Vetor X (elementos diferentes de A):", X);
}


//32. Escrever um algoritmo que lê uma matriz M(12,13) e divida todos os 13 elementos de cada uma das 12 linhas de M pelo maior elemento em módulo daquela linha. Escrever a matriz lida e a modificada. 

function exercicio32() {
  let M = [];
  for (let i = 0; i < 12; i++) {
    M.push(Array.from({ length: 13 }, () => Math.floor(Math.random() * 100)));
  }

  console.log("Matriz original:", M);

  for (let i = 0; i < 12; i++) {
    let maiorValor = Math.max(...M[i].map((n) => Math.abs(n)));
    for (let j = 0; j < 13; j++) {
      M[i][j] /= maiorValor;
    }
  }

  console.log("Matriz modificada:", M);
}


//33. Faça um algoritmo que leia uma matriz 3 x 3 e após a leitura, multiplique os elementos da diagonal principal com a média dos elementos da diagonal secundária. 

function exercicio33() {
  let M = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ];

  let somaDiagonalSecundaria = M[0][2] + M[1][1] + M[2][0];
  let mediaDiagonalSecundaria = somaDiagonalSecundaria / 3;

  for (let i = 0; i < 3; i++) {
    M[i][i] *= mediaDiagonalSecundaria;
  }

  console.log("Matriz após multiplicação:", M);
}



//34. Faça um algoritmo que leia uma matriz 50 x 50 de números reais. A seguir, multiplique cada linha pelo elemento da diagonal principal daquela linha. Mostre a matriz após as multiplicações. 

function exercicio34() {
  let M = [];
  for (let i = 0; i < 50; i++) {
    M.push(Array.from({ length: 50 }, () => Math.random() * 100));
  }

  for (let i = 0; i < 50; i++) {
    let diagonal = M[i][i];
    for (let j = 0; j < 50; j++) {
      M[i][j] *= diagonal;
    }
  }

  console.log("Matriz após multiplicação:", M);
}



//35. Elaborar um algoritmo que leia um conjunto de 30 valores e os coloca em 2 vetores conforme forem pares ou ímpares. O tamanho do vetor é de 5 posições. Se algum vetor estiver cheio, escrevê-lo. Terminada a leitura, escrever o conteúdo dos dois vetores. Cada vetor pode ser preenchido quantas vezes forem necessárias. 

function exercicio35() {
  const prompt = require("prompt-sync")();
  let pares = [];
  let impares = [];

  for (let i = 0; i < 30; i++) {
    let valor = Number(prompt(`Digite o valor ${i + 1}: `));

    if (valor % 2 === 0) {
      if (pares.length < 5) pares.push(valor);
      else {
        console.log("Vetor pares cheio:", pares);
        pares = [valor];
      }
    } else {
      if (impares.length < 5) impares.push(valor);
      else {
        console.log("Vetor ímpares cheio:", impares);
        impares = [valor];
      }
    }
  }

  console.log("Vetor pares:", pares);
  console.log("Vetor ímpares:", impares);
}

//36. Escreva um algoritmo que leia um vetor de 13 elementos inteiros, que é o Gabarito de um teste da loteria esportiva. Leia, a seguir, para cada um dos 100 apostadores, o número do seu cartão e um vetor de Respostas de 13 posições. Verifique para cada apostador o número de acertos, comparando o vetor de Gabarito com o vetor de Respostas. Escreva o número do apostador e o número de acertos. Se o apostador tiver 13 acertos, mostrar a mensagem "Parabéns, tu foi o GANHADOR". 

function exercicio36() {
  let gabarito = Array.from({ length: 13 }, () => Math.floor(Math.random() * 10));
  console.log("Gabarito:", gabarito);

  for (let apostador = 1; apostador <= 100; apostador++) {
    let respostas = Array.from({ length: 13 }, () => Math.floor(Math.random() * 10));
    let acertos = 0;

    for (let i = 0; i < 13; i++) {
      if (gabarito[i] === respostas[i]) acertos++;
    }

    console.log(`Apostador ${apostador}: ${acertos} acertos`);
    if (acertos === 13) console.log(`Parabéns, o Apostador ${apostador} foi o GANHADOR!`);
  }
}


//37. Escreva um algoritmo que leia um vetor G de 20 elementos caractere que representa o gabarito de uma prova. A seguir, para cada um dos 50 alunos da turma, leia o vetor de respostas (R) do aluno e conte o número de acertos. Mostre o número de acertos do aluno e uma mensagem “APROVADO” se a quantidade de acertos for maior ou igual a 12; e mostre uma mensagem de “REPROVADO”, caso contrário. 

function exercicio37() {
  let gabarito = Array.from({ length: 20 }, () =>
    String.fromCharCode(65 + Math.floor(Math.random() * 4))
  );
  console.log("Gabarito:", gabarito);

  for (let aluno = 1; aluno <= 50; aluno++) {
    let respostas = Array.from({ length: 20 }, () =>
      String.fromCharCode(65 + Math.floor(Math.random() * 4))
    );
    let acertos = 0;

    for (let i = 0; i < 20; i++) {
      if (gabarito[i] === respostas[i]) acertos++;
    }

    console.log(`Aluno ${aluno}: ${acertos} acertos`);
    console.log(acertos >= 12 ? "APROVADO" : "REPROVADO");
  }
}

/*38. Elabore um algoritmo que leia um vetor de 6 posições e após sua leitura leia outra variável identificadora que calcule a operação conforme a informação contida nesta variável: 
1- soma dos elementos; 
2- produto dos elementos; 
3- média dos elementos; 
4- ordene os elementos em ordem crescente; 
5- mostre o vetor.*/

function exercicio38() {
  const prompt = require("prompt-sync")();
  let vetor = [];

  for (let i = 0; i < 6; i++) {
    vetor.push(Number(prompt(`Digite o número ${i + 1}: `)));
  }

  let operacao = Number(
    prompt(
      "Escolha a operação:\n1 - Soma\n2 - Produto\n3 - Média\n4 - Ordenar\n5 - Mostrar\n"
    )
  );

  switch (operacao) {
    case 1:
      console.log("Soma:", vetor.reduce((a, b) => a + b, 0));
      break;
    case 2:
      console.log("Produto:", vetor.reduce((a, b) => a * b, 1));
      break;
    case 3:
      console.log("Média:", vetor.reduce((a, b) => a + b, 0) / vetor.length);
      break;
    case 4:
      vetor.sort((a, b) => a - b);
      console.log("Vetor ordenado:", vetor);
      break;
    case 5:
      console.log("Vetor:", vetor);
      break;
    default:
      console.log("Operação inválida");
  }
}

//39. Faça um algoritmo que leia um vetor (A) de 100 posições. Em seguida, compacte o vetor, retirando os valores nulos e negativos. Coloque o resultado no vetor B. 

function exercicio39() {
  let A = Array.from({ length: 100 }, () => Math.floor(Math.random() * 201) - 100);
  let B = A.filter((num) => num > 0);
  console.log("Vetor A:", A);
  console.log("Vetor B (positivos):", B);
}

//40. Faça um algoritmo que leia um vetor de 5 elementos inteiros, correspondentes ao resultado oficial da Loto. A seguir, leia 50 conjuntos de vetores (com 5 elementos inteiros cada), representando as apostas feitas. Compare os números das apostas com o resultado oficial e mostre uma mensagem ("Ganhador") se todos os números corresponderem ao resultado oficial. (Observação: não é necessário procurar por ternos e quadras, apenas por quinas.) 

function exercicio40() {
  let resultadoLoto = Array.from({ length: 5 }, () => Math.floor(Math.random() * 60) + 1);
  console.log("Resultado oficial:", resultadoLoto);

  for (let aposta = 1; aposta <= 50; aposta++) {
    let apostaUsuario = Array.from({ length: 5 }, () => Math.floor(Math.random() * 60) + 1);
    let acertou = apostaUsuario.every((num) => resultadoLoto.includes(num));

    if (acertou) {
      console.log(`Aposta ${aposta}: Ganhador!`);
    }
  }
}


//41. Dado o objeto pessoa com propriedades nome e idade, acesse e imprima o valor de idade. Adicione uma nova propriedade chamada email ao objeto pessoa que já possui nome e idade. 

function exercicio41() {
  let pessoa = {
    nome: "João",
    idade: 25
  };

  console.log("Idade:", pessoa.idade);

  pessoa.email = "joao@example.com";

  console.log("Pessoa atualizada:", pessoa);
}


//42. Crie um objeto chamado dados que contém várias propriedades, incluindo números, strings e arrays. Escreva uma função que retorne um novo objeto apenas com as propriedades que são arrays. 

function exercicio42() {
  let dados = {
    nome: "Junior",
    idade: 27,
    hobbies: ["futebol", "leitura", "viagem"],
    scores: [100, 85, 92],
    email: "juniorlds.98@gmail.com"
  };

  function filtraArrays(obj) {
    let resultado = {};
    for (let chave in obj) {
      if (Array.isArray(obj[chave])) {
        resultado[chave] = obj[chave];
      }
    }
    return resultado;
  }

  console.log(filtraArrays(dados));
}


//43. Dado dois objetos, obj1 e obj2, escreva uma função que crie um novo objeto combinando as propriedades de ambos, onde as propriedades de obj2 têm precedência sobre as do obj1 em caso de conflitos. 

function exercicio43() {
  let obj1 = {
    nome: "João",
    idade: 25,
    cidade: "São Paulo"
  };

  let obj2 = {
    idade: 30,
    cidade: "Rio de Janeiro",
    email: "joao@example.com"
  };

  function combinarObjetos(obj1, obj2) {
    return { ...obj1, ...obj2 };
  }

  console.log(combinarObjetos(obj1, obj2));
}


//44. Escreva uma função que conte quantas propriedades do tipo string existem em um objeto e retorne esse número. 

function exercicio44() {
  let pessoa = {
    nome: "João",
    idade: 25,
    cidade: "São Paulo",
    email: "joao@example.com"
  };

  function contarStrings(obj) {
    let count = 0;
    for (let chave in obj) {
      if (typeof obj[chave] === "string") {
        count++;
      }
    }
    return count;
  }

  console.log(contarStrings(pessoa));
}

//45. Dado um array de strings, crie um objeto onde cada string é uma chave, e seu valor é o número de vezes que a string aparece no array. 

function exercicio45() {
  let palavras = ["maçã", "banana", "maçã", "laranja", "banana", "banana"];

  function contarOcorrencias(arr) {
    let resultado = {};
    arr.forEach((palavra) => {
      if (resultado[palavra]) {
        resultado[palavra]++;
      } else {
        resultado[palavra] = 1;
      }
    });
    return resultado;
  }

  console.log(contarOcorrencias(palavras));
}


//46. Suponha que você tem um array de objetos onde cada objeto representa uma venda com vendedor e valor. Escreva uma função que retorne um objeto que sumarize o total de vendas por vendedor. 

function exercicio46() {
  let vendas = [
    { vendedor: "João", valor: 100 },
    { vendedor: "Maria", valor: 200 },
    { vendedor: "João", valor: 150 },
    { vendedor: "Pedro", valor: 250 },
    { vendedor: "Maria", valor: 300 }
  ];

  function totalVendasPorVendedor(vendas) {
    let resumo = {};
    vendas.forEach((venda) => {
      if (resumo[venda.vendedor]) {
        resumo[venda.vendedor] += venda.valor;
      } else {
        resumo[venda.vendedor] = venda.valor;
      }
    });
    return resumo;
  }

  console.log(totalVendasPorVendedor(vendas));
}

//47. Crie uma função que transforme um objeto de entrada aplicando uma função fornecida a cada uma das propriedades do objeto, retornando um novo objeto com os resultados. 

function exercicio47() {
  let pessoa = {
    nome: "João",
    idade: 25,
    cidade: "São Paulo"
  };

  function aplicarFuncaoEmPropriedades(obj, func) {
    let resultado = {};
    for (let chave in obj) {
      resultado[chave] = func(obj[chave]);
    }
    return resultado;
  }

  function maiuscula(valor) {
    return typeof valor === "string" ? valor.toUpperCase() : valor;
  }

  console.log(aplicarFuncaoEmPropriedades(pessoa, maiuscula));
}

//48. Você recebe dois objetos que representam o inventário de duas lojas diferentes: inventarioLojaA e inventarioLojaB. Cada chave é um item, e o valor é a quantidade desse item em estoque. Escreva uma função que combine os inventários em um único objeto. Se um item aparecer em ambas as lojas, some as quantidades.

function exercicio48() {
  let inventarioLojaA = {
    produto1: 10,
    produto2: 15,
    produto3: 5
  };

  let inventarioLojaB = {
    produto2: 8,
    produto3: 10,
    produto4: 20
  };

  function combinarInventarios(inventarioA, inventarioB) {
    let resultado = { ...inventarioA };
    for (let produto in inventarioB) {
      if (resultado[produto]) {
        resultado[produto] += inventarioB[produto];
      } else {
        resultado[produto] = inventarioB[produto];
      }
    }
    return resultado;
  }

  console.log(combinarInventarios(inventarioLojaA, inventarioLojaB));
}


//49. Você recebe um array de objetos representando transações financeiras. Cada transação possui id, valor, data, e categoria. Escreva uma função que retorne um objeto onde as chaves são as categorias, e os valores são arrays de transações pertencentes a essa categoria. Adicionalmente, inclua um subtotal de valores por categoria. 

function exercicio49() {
  let transacoes = [
    { id: 1, valor: 100, data: "2023-01-01", categoria: "Alimentação" },
    { id: 2, valor: 200, data: "2023-01-02", categoria: "Transporte" },
    { id: 3, valor: 150, data: "2023-01-03", categoria: "Alimentação" },
    { id: 4, valor: 250, data: "2023-01-04", categoria: "Saúde" }
  ];

  function agruparPorCategoria(transacoes) {
    let resultado = {};
    transacoes.forEach((transacao) => {
      if (!resultado[transacao.categoria]) {
        resultado[transacao.categoria] = { transacoes: [], subtotal: 0 };
      }
      resultado[transacao.categoria].transacoes.push(transacao);
      resultado[transacao.categoria].subtotal += transacao.valor;
    });
    return resultado;
  }

  console.log(agruparPorCategoria(transacoes));
}

/*50. Desenvolva um pequeno sistema de reserva de hotéis usando JavaScript. O sistema deverá ser capaz de interagir com o usuário através do console do navegador e manter um registro das reservas e hotéis disponíveis. Utilize objetos e arrays para gerenciar as informações. Não é necessário interface gráfica, apenas funcionalidade lógica. 
1. Estrutura de Dados: 
○ Hotel: Cada hotel deve ser um objeto com propriedades para id, nome, cidade, quartos totais e quartos disponiveis. 
○ Reservas: Cada reserva deve ser um objeto contendo idReserva, idHotel, e nomeCliente. 
2. Funcionalidades: 
○ Adicionar hotéis: Permitir que o usuário adicione novos hotéis ao sistema. ○ Buscar hotéis por cidade: Permitir que o usuário liste todos os hotéis disponíveis em uma cidade específica. 
○ Fazer reserva: Permitir que um usuário faça uma reserva em um hotel. Isso deve diminuir o número de quartos disponiveis do hotel. 
○ Cancelar reserva: Permitir que um usuário cancele uma reserva. Isso deve aumentar o número de quartos disponiveis no hotel correspondente. ○ Listar reservas: Mostrar todas as reservas, incluindo detalhes do hotel e do cliente. 
3. Regras de Negócio: 
○ Um hotel só pode aceitar reservas se houver quartos disponíveis. ○ As reservas devem ser identificadas por um ID único e associadas a um único hotel. 
4. Desafios Adicionais (Opcionais): 
○ Implementar uma função de check-in e check-out que atualize a disponibilidade de quartos. 
○ Gerar relatórios de ocupação para um hotel. 
○ Permitir que o usuário avalie o hotel após a estadia, e armazenar essas avaliações dentro do objeto do hotel.*/

function exercicio50() {
  let hoteis = [
    { id: 1, nome: "Hotel A", cidade: "Rio de Janeiro", quartosTotais: 10, quartosDisponiveis: 10 },
    { id: 2, nome: "Hotel B", cidade: "São Paulo", quartosTotais: 5, quartosDisponiveis: 5 }
  ];

  let reservas = [];

  function adicionarHotel(id, nome, cidade, quartosTotais) {
    let novoHotel = { id, nome, cidade, quartosTotais, quartosDisponiveis: quartosTotais };
    hoteis.push(novoHotel);
  }

  function buscarHotelPorCidade(cidade) {
    return hoteis.filter((hotel) => hotel.cidade === cidade);
  }

  function fazerReserva(idHotel, nomeCliente) {
    let hotel = hoteis.find((hotel) => hotel.id === idHotel);
    if (hotel && hotel.quartosDisponiveis > 0) {
      hotel.quartosDisponiveis--;
      reservas.push({ idReserva: reservas.length + 1, idHotel, nomeCliente });
      console.log("Reserva feita com sucesso!");
    } else {
      console.log("Não há quartos disponíveis no hotel!");
    }
  }

  function cancelarReserva(idReserva) {
    let reserva = reservas.find((reserva) => reserva.idReserva === idReserva);
    if (reserva) {
      let hotel = hoteis.find((hotel) => hotel.id === reserva.idHotel);
      hotel.quartosDisponiveis++;
      reservas = reservas.filter((reserva) => reserva.idReserva !== idReserva);
      console.log("Reserva cancelada com sucesso!");
    } else {
      console.log("Reserva não encontrada!");
    }
  }

  function listarReservas() {
    reservas.forEach((reserva) => {
      let hotel = hoteis.find((hotel) => hotel.id === reserva.idHotel);
      console.log(`Reserva ID: ${reserva.idReserva}, Hotel: ${hotel.nome}, Cliente: ${reserva.nomeCliente}`);
    });
  }

  // Exemplo de uso:
  adicionarHotel(3, "Hotel C", "Salvador", 8);
  fazerReserva(1, "João");
  fazerReserva(1, "Maria");
  cancelarReserva(1);
  listarReservas();
}



function menu() {
    console.log("\nEscolha um exercício para executar (1 a 50):");
    let escolha = Number(prompt("Número do exercício: "));
    switch (escolha) {
        case 1: exercicio1(); break;
        case 2: exercicio2(); break;
        case 3: exercicio3(); break;
        case 4: exercicio4(); break;
        case 5: exercicio5(); break;
        case 6: exercicio6(); break;
        case 7: exercicio7(); break;
        case 8: exercicio8(); break;
        case 9: exercicio9(); break;
        case 10: exercicio10(); break;
        case 11: exercicio11(); break;
        case 12: exercicio12(); break;
        case 13: exercicio13(); break;
        case 14: exercicio14(); break;
        case 15: exercicio15(); break;
        case 16: exercicio16(); break;
        case 17: exercicio17(); break;
        case 18: exercicio18(); break;
        case 19: exercicio19(); break;
        case 20: exercicio20(); break;
        case 21: exercicio21(); break;
        case 22: exercicio22(); break;
        case 23: exercicio23(); break;
        case 24: exercicio24(); break;
        case 25: exercicio25(); break;
        case 26: exercicio26(); break;
        case 27: exercicio27(); break;
        case 28: exercicio28(); break;
        case 29: exercicio29(); break;
        case 30: exercicio30(); break;
        case 31: exercicio31(); break;
        case 32: exercicio32(); break;
        case 33: exercicio33(); break;
        case 34: exercicio34(); break;
        case 35: exercicio35(); break;
        case 36: exercicio36(); break;
        case 37: exercicio37(); break;
        case 38: exercicio38(); break;
        case 39: exercicio39(); break;
        case 40: exercicio40(); break;
        case 41: exercicio41(); break;
        case 42: exercicio42(); break;
        case 43: exercicio43(); break;
        case 44: exercicio44(); break;
        case 45: exercicio45(); break;
        case 46: exercicio46(); break;
        case 47: exercicio47(); break;
        case 48: exercicio48(); break;
        case 49: exercicio49(); break;
        case 50: exercicio50(); break;
        default: console.log("Escolha inválida");
    }
}