// Lista de Exercícios Lógicos com JavaScript
// Aluno: José Claudio da Silva Junior
// Professor: Jaques Antunes
// Data: 01/07/2025

const prompt = require("prompt-sync")()

//1. Escreva um programa que recebe um número inteiro e verifica se ele é par ou ímpar utilizando uma estrutura de controle if.

function exercicio1() {
    let numero = 2
    if (numero % 2 == 0) {
        console.log("O número escolhido é par")
    } else {
        console.log("O seu número é ímpar")
    }
}

//2. Crie um programa que classifica a idade de uma pessoa em categorias (criança, adolescente, adulto, idoso) com base no valor fornecido, utilizando uma estrutura de controle if-else.

function exercicio2() {
    let idade = -3
    const crianca = 0, adolescente = 12, adulto = 20, idoso = 60

    if (idade < adolescente && idade >= 0) {
        console.log("Ele é uma criança e tem:", idade, "anos")
    } else if (idade >= adolescente && idade < adulto) {
        console.log("Ele é um adolescente e tem:", idade, "anos")
    } else if (idade >= adulto && idade < idoso) {
        console.log("Ele é um adulto e tem:", idade, "anos")
    } else if (idade >= idoso) {
        console.log("Ele é um idoso e tem:", idade, "anos")
    } else {
        console.log("A idade fornecida não é válida!")
    }
}

//3. Implemente um programa que recebe uma nota de 0 a 10 e classifica como "Aprovado", "Recuperação", ou "Reprovado" utilizando if-else if.

function exercicio3() {
    let nota = 9.5
    if (nota === 5) {
        console.log("Recuperação")
    } else if (nota > 5 && nota <= 10) {
        console.log("Aprovado")
    } else if (nota < 5 && nota >= 0) {
        console.log("Reprovado")
    } else {
        console.log("A sua nota não foi válida")
    }
}

//4. Crie um menu interativo no console que oferece ao usuário a escolha de três opções. Utilize switch-case para implementar a lógica de cada opção selecionada.

function exercicio4() {
    const opcao1 = "seja", opcao2 = "bem", opcao3 = "vindo"
    let opcao = prompt("Escolha uma das 3 opções (opcao1, opcao2 ou opcao3): ")

    switch (opcao) {
        case "opcao1": console.log(opcao1); break;
        case "opcao2": console.log(opcao2); break;
        case "opcao3": console.log(opcao3); break;
        default: console.log("Escolha uma das opções válidas!")
    }
}

//Escreva um programa que calcula o Índice de Massa Corporal (IMC) de uma pessoa e determina a categoria de peso (baixo peso, peso normal, sobrepeso, obesidade) utilizando if-else

function exercicio5() {
    let peso = 86, altura = 1.73
    let imc = peso / (altura * altura)

    if (imc < 18.5) {
        console.log("Você está com baixo peso, seu IMC é:", imc.toFixed(2))
    } else if (imc <= 24.9) {
        console.log("Você está com peso normal, seu IMC é:", imc.toFixed(2))
    } else if (imc <= 29.9) {
        console.log("Você está com sobrepeso, seu IMC é:", imc.toFixed(2))
    } else {
        console.log("Você está com obesidade, seu IMC é:", imc.toFixed(2))
    }
}

//6. Ler três valores para os lados de um triângulo: A, B e C. Verificar se os lados fornecidos formam realmente um triângulo. Caso forme, deve ser indicado o tipo de triângulo: Isósceles, escaleno ou eqüilátero.

function exercicio6() {
    let l1 = 16, l2 = 16, l3 = 16
    if (l1 === l2 && l2 === l3) {
        console.log("É um triângulo equilátero")
    } else if (l1 === l2 || l2 === l3 || l1 === l3) {
        console.log("É um triângulo isósceles")
    } else {
        console.log("É um triângulo escaleno")
    }
}

//7. As maçãs custam R$ 0,30 se forem compradas menos do que uma dúzia, e R$ 0,25 se forem compradas pelo menos doze. Escreva um algoritmo que leia o número de maçãs compradas, calcule e escreva o valor total da compra.

function exercicio7() {
    let macasCompradas = 5
    const preco01 = 0.30, preco02 = 0.25

    if (macasCompradas < 12) {
        console.log(`Você comprou: ${macasCompradas} maçãs. Total: R$ ${(macasCompradas * preco01).toFixed(2)}`)
    } else {
        console.log(`Você comprou: ${macasCompradas} maçãs. Total: R$ ${(macasCompradas * preco02).toFixed(2)}`)
    }
}

//8. Escreva um algoritmo para ler 2 valores (considere que não serão lidos valores iguais) e escreve-los em ordem crescente.

function exercicio8() {
    let valor1 = 15, valor2 = 13
    if (valor1 > valor2) {
        console.log("1°", valor2, "2°", valor1)
    } else if (valor2 > valor1) {
        console.log("1°", valor1, "2°", valor2)
    } else {
        console.log("Os valores são iguais: ", valor1)
    }
}

//9. Implemente um programa que exibe uma contagem regressiva de 10 até 1 no console utilizando um loop for.

function exercicio9() {
    for (let contador = 10; contador >= 1; contador--) {
        console.log(contador)
    }
}

//10. Escreva um algoritmo para ler um número inteiro e escrevê-lo na tela 10 vezes.

function exercicio10() {
    let numero = 13
    for (let i = 0; i < 10; i++) {
        console.log(numero)
    }
}

//11. Escreva um programa que solicita ao usuário 5 números e calcula a soma total utilizando um loop for.

function exercicio11() {
    let soma = 0
    for (let i = 0; i < 5; i++) {
        let numero = Number(prompt(`Digite o ${i + 1}º número: `))
        soma += numero
    }
    console.log("A soma dos valores é:", soma)
}

//12. Crie um programa que exibe a tabuada de um número fornecido pelo usuário (de 1 a 10) utilizando um loop for.

function exercicio12() {
    let tabuada = Number(prompt("Digite um número para ver a tabuada: "))
    for (let i = 1; i <= 10; i++) {
        console.log(`${i} x ${tabuada} = ${i * tabuada}`)
    }
}

//13. Fazer um algoritmo para receber números decimais até que o usuário digite 0 e fazer a média aritmética desses números.

function exercicio13() {
    let soma = 0, contador = 0, numero = -1
    while (numero !== 0) {
        numero = Number(prompt("Digite um número decimal (0 para sair): "))
        if (numero !== 0) {
            soma += numero
            contador++
        }
    }
    let media = soma / contador
    console.log(`Média dos ${contador} números:`, media.toFixed(2))
}

//14. Crie um programa que calcula o fatorial de um número fornecido pelo usuário utilizando um loop for ou while.

function exercicio14() {
    let num = Number(prompt("Digite um número para calcular o fatorial: "))
    let fatorial = 1, linha = ""
    for (let i = num; i > 0; i--) {
        fatorial *= i
        linha += (i !== 1) ? `${i} x ` : `${i} = ${fatorial}`
    }
    console.log(linha)
}


//15. Escreva um programa que gera e imprime os primeiros 10 números da sequência de Fibonacci utilizando um loop for.

function exercicio15() {
    let termosDesejados = 10, inicial = 0, soma = 1
    let sequencia = `${inicial}, ${soma}`
    for (let i = 2; i < termosDesejados; i++) {
        let proximo = inicial + soma
        sequencia += `, ${proximo}`
        inicial = soma
        soma = proximo
    }
    console.log(sequencia)
}
//Menu interativo

function menu() {
    console.log("\nEscolha um exercício para executar (1 a 15):")
    let escolha = Number(prompt("Número do exercício: "))
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
        default: console.log("Escolha inválida.")
    }
}

menu()