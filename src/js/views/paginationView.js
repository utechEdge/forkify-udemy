import View from './View';
import icons from '../../img/icons.svg';

class PaginationView extends View {
  _parentElement = document.querySelector('.pagination');

  addHandlerClick(handler) {
    this._parentElement.addEventListener('click', function (e) {
      const btn = e.target.closest('.btn--inline');
      if (!btn) return;

      const gotoPage = Number(btn.dataset.goto);

      handler(gotoPage);
    });
  }

  _generateMarkup() {
    const numPages = Math.ceil(
      this._data.results.length / this._data.resultsPerPage
    );

    // Page 1, other pages
    if (this._data.pageNum === 1 && numPages > 1) {
      return `
        <button data-goto="${
          this._data.pageNum + 1
        }" class="btn--inline pagination__btn--next">
            <span>Page ${this._data.pageNum + 1}</span>
            <svg class="search__icon">
                <use href="${icons}#icon-arrow-right"></use>
            </svg>
        </button>
    `;
    }

    // Last page
    if (this._data.pageNum === numPages) {
      return `
        <button data-goto="${
          this._data.pageNum - 1
        }" class="btn--inline pagination__btn--prev">
            <svg class="search__icon">
                <use href="${icons}#icon-arrow-left"></use>
            </svg>
            <span>Page ${this._data.pageNum - 1}</span>
        </button>
      `;
    }

    // Other pages
    if (this._data.pageNum < numPages) {
      return `
        <button data-goto="${
          this._data.pageNum - 1
        }" class="btn--inline pagination__btn--prev">
            <svg class="search__icon">
                <use href="${icons}#icon-arrow-left"></use>
            </svg>
            <span>Page ${this._data.pageNum - 1}</span>
        </button>
        <button data-goto="${
          this._data.pageNum + 1
        }" class="btn--inline pagination__btn--next">
            <span>Page ${this._data.pageNum + 1}</span>
            <svg class="search__icon">
                <use href="${icons}#icon-arrow-right"></use>
            </svg>
        </button>
      `;
    }

    // Page 1, no other pages
    return ``;
  }
}

export default new PaginationView();
