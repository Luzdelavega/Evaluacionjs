// Definición de la biblioteca
const library = [
    {
        author: 'Bill Gates',
        title: 'The Road Ahead',
        readingStatus: true,
    },
    {
        author: 'Steve Jobs',
        title: 'Walter Isaacson',
        readingStatus: true,
    },
    {
        author: 'Suzanne Collins',
        title: 'Mockingjay: The Final Book of The Hunger Games',
        readingStatus: false,
    }
];

// Seleccionar el elemento donde se mostrará el resultado
const resultado = document.getElementById('resultado');

// Filtrar y mostrar los libros que están en estado de lectura
library.forEach(book => {
    if (book.readingStatus) {
        const listItem = document.createElement('li');
        listItem.innerText = `${book.title} por ${book.author}`;
        resultado.appendChild(listItem);
    }
});