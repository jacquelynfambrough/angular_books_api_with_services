angular.module('libraryApp')
  .controller('BooksIndexController', BooksIndexController);

BooksIndexController.$inject=['BooksService'];
function BooksIndexController( BooksService) {
  var vm = this;
  // exports
  vm.books = [];

  // initialize data
  getBooks();

  // implementations
  function getBooks() {
    BooksService.query(function(data){
      console.log('here\'s the books data in the controller', data);
      vm.books = data;
    });
  }
}