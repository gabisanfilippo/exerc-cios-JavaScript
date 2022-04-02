// Desafio 1
/* JavaScript possui um operador lógico `&&`, o qual recebe dois valores e retorna `true` se ambos os valores são verdadeiros, 
e retorna `false` se algum dos valores não o for.

Considerando isso, crie uma função chamada `compareTrue` que, ao receber dois booleanos:

- Retorne `true` se ambos os valores são verdadeiros;
- Retorne `false` se um ou ambos os parâmetros forem falsos.

Faça a função utilizando o operador `&&`. */
function compareTrue(bool1,bool2) {
    if(bool1 && bool2){
        return true
    } else {
        return false
    }
}
compareTrue(true,false)
  
// Desafio 2
/* Escreva uma função com o nome `calcArea` que receba um valor de base (chamado `base`) e outro de altura (chamado `height`) 
de um triângulo e retorne o cálculo da sua área.

Lembre-se que a área de um triângulo é calculada através da seguinte fórmula: (base * altura) / 2. */
function calcArea(base,height) {
    return (base*height)/2
}
calcArea(5,10)
  
// Desafio 3
/* Escreva uma função com o nome `splitSentence`, a qual receberá uma string e retornará uma array de strings separadas 
por cada espaço na string original.

Exemplo: se a função receber a string `"go Trybe"`, o retorno deverá ser `['go', 'Trybe']`. */
function splitSentence(texto) {
    return texto.split(" ")
}
splitSentence("Olá Mundo")
  
// Desafio 4
/* Escreva uma função com o nome `concatName` que, ao receber uma array de strings, retorne uma string com o formato `'ÚLTIMO ITEM, 
PRIMEIRO ITEM'`, independente do tamanho da array.

Isso quer dizer que, caso o parâmetro passado para `concatName` seja a Array ['Lucas', 'Cassiano', 'Ferraz', 'Paolillo'], 
a função deverá retornar `Paolillo, Lucas`. */
function concatName(array) {
    let tamanho = array.length
    return array[tamanho-1] + ", " + array[0]
}
concatName(['Gabrielle', 'Felipe', 'Maria', 'Moises', 'Claudia'])
  
// Desafio 5
/* Escreva uma função com o nome `footballPoints` que receba o número de vitórias (esse parâmetro deverá se chamar `wins`) 
e o número de empates (esse parâmetro deverá se chamar `ties`) e retorne a quantidade de pontos que o time marcou em um campeonato.

Para tanto, considere que cada vitória vale 3 pontos e cada empate vale 1 ponto. */
function footballPoints(wins,ties) {
    let ptWins = wins * 3
    let ptTies = ties * 1
    return ptWins + ptTies
}
footballPoints(1,1)
  
// Desafio 6
/* Escreva uma função chamada `highestCount` que, ao receber uma array de números, retorne  a quantidade de vezes que o maior deles se repete.

Exemplo: caso o parâmetro de `highestCount` seja uma array com valores `[9, 1, 2, 3, 9, 5, 7]`, a função deverá retornar `2`, 
que é a quantidade de vezes que o número `9` (maior número do array) se repete. */
function highestCount(array) {
    let maior = Math.max(...array)
    let contador = 0
    for (let index = 0; index < array.length; index++) {
        if(array[index]==maior){
            contador=contador+1
        }
    }
    return contador
}
highestCount([9, 1, 2, 3, 9, 5, 7])
  
// Desafio 7
/* Imagine que existem dois gatos, os quais chamaremos de `cat1` e `cat2`, e que ambos estão atrás de um rato chamado `mouse`. 
Imagine que cada um dos três animais está em uma posição representada por um número.

Sabendo disso, crie uma função chamada `catAndMouse` que, ao receber a posição de `mouse`, `cat1` e `cat2`, **nessa ordem**, 
calcule as distâncias entre o rato e os gatos e retorne qual dos felinos irá alcançar o rato primeiro (sendo aquele que estará mais perto).

Exemplo: caso o gato `cat2` esteja a 2 unidades de distância do rato, e `cat1` esteja a 3 unidades, sua função deverá retornar `cat2`.

Caso os gatos estejam na mesma distância do rato, a função deverá retornar a string `"os gatos trombam e o rato foge"`. */
function catAndMouse(mouse,cat1,cat2) {
    let subCat1 = mouse-cat1
    let subCat2 = mouse-cat2
    let moduloSubCat1 = Math.abs(subCat1)
    let moduloSubCat2 = Math.abs(subCat2)
    if(moduloSubCat1 < moduloSubCat2){
        console.log("cat1")
    } else {
        if (moduloSubCat1 > moduloSubCat2){
            console.log("cat2")
        } else {
            console.log("os gatos trombam e o rato foge")
        }
    }
}
catAndMouse(5,6,4)
  
// Desafio 8
/* Crie uma função chamada `fizzBuzz` que receba uma array de números e retorne uma array da seguinte forma:

- Para cada número da Array que seja divisível por 3, apresente uma string `"fizz"`;
- Para cada número da Array que seja divisível por 5, apresente uma string `"buzz"`;
- Caso o número seja divisível por 3 ou 5, retorne a string `"fizzBuzz"`;
- Caso o número não possa ser dividido por 3 nem por 5, retorne a string `"bug!"`;

Exemplo: caso o parâmetro seja [2, 15, 7, 9, 45], sua função deverá retornar `["bug!", "fizzBuzz", "bug!", "fizz", "fizzBuzz"]`. */

function fizzBuzz(array) {
    let novoArray = []
    array.forEach(i => {
        if(i%3 == 0 && i%5 == 0){
            i = 'fizzBuzz'
            novoArray.push(i)
        } else {
            if(i%3 == 0){
                i = 'fizz'
                novoArray.push(i)
            } else {
                if(i%5 == 0){
                    i = 'buzz'
                    novoArray.push(i)
                } else {
                    i = 'bug!'
                    novoArray.push(i)
                }
            }
        }
    });
    return novoArray
}
fizzBuzz([3,5,15,2])
  
// Desafio 9
/* Crie duas funções: a primeira deverá se chamar `encode` e, ao receber uma string como parâmetro, 
deverá trocar todas as vogais minúsculas por números, de acordo com o formato a seguir:

a -> 1 \
e -> 2 \
i -> 3 \
o -> 4 \
u -> 5

Ou seja, caso o parâmetro de `encode` seja `"hi there!"`, o retorno deverá ser `"h3 th2r2!"`.

A segunda função deverá se chamar `decode` e faz o contrário de `encode` - ou seja, recebe uma string contendo números no lugar de 
letras minúsculas e retornará uma string com vogais minúsculas no lugar dos números (então, caso o parâmetro de `decode` seja `"h3 th2r2!"`, 
o retorno deverá ser `"hi there!"`). */
function encode(texto) {
    let novoTexto = ""
    for(let i = 0 ; i < texto.length ; i++){
        let caracter = texto.charAt(i)
        switch (caracter){
            case 'a':
                caracter = '1'
                novoTexto = novoTexto.concat(caracter)
                break
            case 'e':
                caracter = '2'
                novoTexto = novoTexto.concat(caracter)
                break
            case 'i':
                caracter = '3'
                novoTexto = novoTexto.concat(caracter)
                break
            case 'o':
                caracter = '4'
                novoTexto = novoTexto.concat(caracter)
                break
            case 'u':
                caracter = '5'
                novoTexto = novoTexto.concat(caracter)
                break
            default:
                novoTexto = novoTexto.concat(caracter)
        }
    }
    return novoTexto
}
encode('hi there!')
function decode(texto) {
    let novoTexto = ""
    for(let i = 0 ; i < texto.length ; i++){
        let caracter = texto.charAt(i)
        switch (caracter){
            case '1':
                caracter = 'a'
                novoTexto = novoTexto.concat(caracter)
                break
            case '2':
                caracter = 'e'
                novoTexto = novoTexto.concat(caracter)
                break
            case '3':
                caracter = 'i'
                novoTexto = novoTexto.concat(caracter)
                break
            case '4':
                caracter = 'o'
                novoTexto = novoTexto.concat(caracter)
                break
            case '5':
                caracter = 'u'
                novoTexto = novoTexto.concat(caracter)
                break
            default:
                novoTexto = novoTexto.concat(caracter)
        }
    }
    return novoTexto
}
decode('h3 th2r2!')
  
// Desafio 10
/* Crie uma função que recebe um array de nomes de tecnologias que você quer aprender. 
Essa função deve receber também um segundo parâmetro chamado `name` com um nome.

Para cada tecnologia no array, crie um objeto com a seguinte estrutura:

```
{
  tech: "NomeTech",
  name: name
}
```

Estes objetos devem ser inseridos em uma nova lista em ordem crescente a partir do campo `tech` no objeto.

A saída da sua função deve ser uma lista de objetos ordenada pelo campo `tech` dos objetos com o formato acima.

Exemplo:
```
Entradas da função:

["React", "Jest", "HTML", "CSS", "JavaScript"]
"Lucas"

// Saída:

[
  {
    tech: "CSS",
    name: "Lucas"
  },
  {
    tech: "HTML",
    name: "Lucas"
  },
  {
    tech: "JavaScript",
    name: "Lucas"
  },
  {
    tech: "Jest",
    name: "Lucas"
  },
  {
    tech: "React",
    name: "Lucas"
  }
]
``` */
function techList(array,name) {
    let arrayUpper = []
    array.forEach(i => {
        i = i.toUpperCase()
        arrayUpper.push(i)
    })
    let arrayOrdenado = arrayUpper.sort()
    let objetos = []
    let novoObjeto = new Object()
    arrayOrdenado.forEach(i => {
        novoObjeto.tech = i
        novoObjeto.name = name
        objetos.push(novoObjeto)
    })
    return objetos
}
techList(["React", "Jest", "HTML", "CSS", "JavaScript"],'Lucas')