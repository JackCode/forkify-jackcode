class SearchView {
  #parentElement = document.querySelector('.search');

  getQuery() {
    const value = this.#parentElement.querySelector('.search__field').value;
    this.#clearInput();
    return value;
  }

  #clearInput() {
    this.#parentElement.querySelector('.search__field').value = '';
  }

  addHandlerSearch(handler) {
    this.#parentElement.addEventListener('submit', function (e) {
      e.preventDefault();
      handler();
    });
  }
}
export default new SearchView();
