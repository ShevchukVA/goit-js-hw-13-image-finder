import refs from './refs';
import gallaryItemsTpl from '../templates/img-list-items.hbs';

export function updateItemsMarkup(items) {
  const markup = gallaryItemsTpl(items);
  refs.listGallarey.insertAdjacentHTML('beforeend', markup);
}

export function clearList() {
  refs.listGallarey.innerHTML = '';
}
