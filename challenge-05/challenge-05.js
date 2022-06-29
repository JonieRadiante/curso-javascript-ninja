/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/
// ?
var variavel = [1, 'jonie', true, false, function(){}];

/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/
// ?
function myFunction(arr) {
  return arr;
}

/*
Imprima o segundo índice do array retornado pela função criada acima.
*/
// ?
myFunction(variavel)[1];

/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar o valor de um índice do array que foi passado
no primeiro parâmetro. O índice usado para retornar o valor, deve ser o número passado no
segundo parâmetro.
*/
// ?
function myFunction2 (arr, nunber) {
  return arr[nunber];
}

/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/
// ?
var myvar = [1.0, 'game', true, {cor: 'azul'}, [2, 3]];

/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/
// ?
myFunction2(myvar, 0)
myFunction2(myvar, 1)
myFunction2(myvar, 2)
myFunction2(myvar, 3)
myFunction2(myvar, 4)
myFunction2(myvar, 0);
myFunction2(myvar, 1);
myFunction2(myvar, 2);
myFunction2(myvar, 3);
myFunction2(myvar, 4)

/*
Crie uma função chamada `book`, que recebe um parâmetro, que será o nome do
livro. Dentro dessa função, declare uma variável que recebe um objeto com as
seguintes características:
- esse objeto irá receber 3 propriedades, que serão nomes de livros;
- cada uma dessas propriedades será um novo objeto, que terá outras 3
propriedades:
    - `quantidadePaginas` - Number (quantidade de páginas)
    - `autor` - String
    - `editora` - String
- A função deve retornar o objeto referente ao livro passado por parâmetro.
- Se o parâmetro não for passado, a função deve retornar o objeto com todos
os livros.
*/
// ?
function book (bookName) {
  var threeBooks = {
    'A volta dos que nao foram': {
      quantidadeDePaginas: 100,
      autor: 'Jonie Radiante',
      editora: 'Radiants Edition'
    },
 'As trancas do rei careca': {
      quantidadeDePaginas: 50,
      autor: 'Jonie Radiante',
      editora: 'Radiants Edition'
    },
  'Poeira em alto mar': {
      quantidadeDePaginas: 10,
      autor: 'Jonie Radiante',
      editora: 'Radiants Edition'
    }
  };
  return !bookName ? threeBooks : threeBooks[bookName];
}

/*
Usando a função criada acima, imprima o objeto com todos os livros.
*/
// ?
book()

/*
Ainda com a função acima, imprima a quantidade de páginas de um livro qualquer,
usando a frase:
"O livro [NOME_DO_LIVRO] tem [X] páginas!"
*/
// ?
'O livro ' + bookName +' tem ' + book(bookName).quantidadeDePaginas + ' páginas!'

/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/
// ?
'O autor do livro  ' + bookName + ' é ' + book(bookName).autor + '.'

/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/
// ?
'O livro ' + bookName + ' foi publicado pela editora ' + book(bookName).editora + '.'
