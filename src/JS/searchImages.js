import refs from './refs';
import newService from './apiService';
import { updateItemsMarkup } from './creatList';
import { clearList } from './creatList';

refs.searchForm.addEventListener('submit', searchFormSubmitHandler);
refs.loadMoreBtn.addEventListener('click', loadMoreBtnHandler);

function searchFormSubmitHandler(e) {
  e.preventDefault();

  const form = e.currentTarget;
  const input = form.elements.query;

  clearList();

  newService.resetPage();
  newService.searchQuery = input.value;
  newService
    .fetchImages()
    .then(updateItemsMarkup)
    .catch(error => console.warn(error));

  input.value = '';
}

function loadMoreBtnHandler() {
  newService
    .fetchImages()
    .then(updateItemsMarkup)
    .catch(error => console.warn(error));
  window.scrollTo({
    top: 20,
    behavior: 'smooth',
  });
}
