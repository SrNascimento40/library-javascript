const livros = require('./database')

const readline = require('readline-sync')

const entradaInicial = readline.question('Deseja filtrar a categoria para encontrar um livro? S/N\t')

// if sim, mostrar categorias disponíveis e perguntar qual deseja
// if não, mostrar todos os livros em ordem crescente pela quantia de paginas

if (entradaInicial.toLocaleUpperCase() === 'S') {
    console.log('Essas são as categorias disponíveis');
    console.log('literatura', "/Ação", "/Filosofia", "/Desenvolvimento pessoal", "/Romance");

    const entradaCategoria = readline.question('Qual categoria você escolhe:\t')

    const retorno = livros.filter(livro => livro.categoria === entradaCategoria)

    console.table(retorno)
}

else {
    const livrosOrdenados = livros.sort((a,b)=> a.paginas - b.paginas)
    console.log("estes são todos os livros disponíveis:\n");
    console.table(livrosOrdenados);
}