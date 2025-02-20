import View from './View';
import icons from '../../img/icons.svg';

class ResultsView extends View {
  _parentElement = document.querySelector('.results');
  _errorMessage = 'No recipes found. Please try again';
  _successMessage = '';

  _generateMarkup() {
    const markup = this._data
      .map(rec => {
        const id = window.location.hash.slice(1);

        return `
        <li class="preview">
            <a class="preview__link ${
              rec.id === id ? 'preview__link--active' : ''
            }" href="#${rec.id}">
                <figure class="preview__fig">
                    <img src="${rec.image}" alt="${rec.title}" />
                </figure>
                <div class="preview__data">
                    <h4 class="preview__title">${rec.title}</h4>
                    <p class="preview__publisher">${rec.publisher}</p>
                
                  <div class="preview__user-generated ${
                    this._data.key ? console.log('Key') : 'hidden'
                  }">
                    <svg>
                      <use href="${icons}#icon-user"></use>
                    </svg>
                  </div>
                </div>  
            </a>
        </li>
      `;
      })
      .join('');

    return markup;
  }
}

export default new ResultsView();
