import Notiflix from 'notiflix';

export function showLoader() {
  console.log('show loader');
}

export function success(totalMovies, query) {
  Notiflix.Notify.success(`Hooray, we found ${totalMovies} movies for "${query}"`, {
    timeout: 4000,
  });
}

export function failure(query) {
  Notiflix.Notify.failure(`Sorry, we couldn't find any results for ${query}`, {
    timeout: 4000,
  });
}

export function warning() {
  Notiflix.Notify.warning('The search engine is empty.You must enter a query', {
    timeout: 4000,
  });
}

export function withoutTrailer() {
  Notiflix.Notify.failure('Trailer is not available');
}

export function withoutMovieDescription() {
  Notiflix.Notify.failure('Movie description is not available');
}
