const libros = [
    { autor: 'Autor 1', titulo: 'Libro 1', isbn: '1234567890' },
    { autor: 'Autor 2', titulo: 'Libro 2', isbn: '0987654321' },
    { autor: 'Autor 3', titulo: 'Libro 3', isbn: '1357908642' }
  ];
  
  function buscarLibros(palabra) {
    return libros.filter(libro => {
      return libro.autor.includes(palabra) || libro.titulo.includes(palabra);
    });
  }
  
  // Ejemplo de uso
  console.log(buscarLibros('Autor 1')); // [{ autor: 'Autor 1', titulo: 'Libro 1', isbn: '1234567890' }]
  console.log(buscarLibros('Libro 2')); // [{ autor: 'Autor 2', titulo: 'Libro 2', isbn: '0987654321' }]
  
  //Para la Segunda Historia_____________
  function buscarLibros(autor, titulo, isbn) {

    return libros.filter(libro => {
      return (autor ? libro.autor.includes(autor) : true)
        && (titulo ? libro.titulo.includes(titulo) : true)
        && (isbn ? libro.isbn.includes(isbn) : true);
    });
  }
  
  // Ejemplo de uso
  console.log(buscarLibros('Autor 1')); // [{ autor: 'Autor 1', titulo: 'Libro 1', isbn: '1234567890' }]
  console.log(buscarLibros(null, null, '0987654321')); // [{ autor: 'Autor 2', titulo: 'Libro 2', isbn: '0987654321' }]
  console.log(buscarLibros('Autor 3', null, null)); // [{ autor: 'Autor 3', titulo: 'Libro 3', isbn: '1357908642' }]