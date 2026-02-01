const movieList = document.getElementById('movieposters');
const selectRadios = document.getElementsByName('movie-radio');

const addMoviesToDom = (movies) => {
  movies
    .map((item) => {
      const newLi = document.createElement('li');
      const newA = document.createElement('a');
      newA.href = `https://www.imdb.com/title/${item.imdbID}`;
      newA.target = '_blank';
      const newImg = document.createElement('img');
      newImg.src = `${item.Poster}`;
      newLi.classList.add('movie-item');
      newLi.appendChild(newA);
      newA.appendChild(newImg);
      return newLi;
    })
    .forEach((newLi) => {
      movieList.appendChild(newLi);
    });
};

const handleOnChangeEvent = (e) => {
  switch (e.target.value) {
    case 'new-movie': {
      filterLatestMovies();
      break;
    }
    case 'avengers': {
      filterMovies('Avengers');
      break;
    }
    case 'x-men': {
      filterMovies('X-Men');
      break;
    }
    case 'princess': {
      filterMovies('Princess');
      break;
    }
    case 'batman': {
      filterMovies('Batman');
      break;
    }
  }
};

const filterMovies = (wordInMovieTitle) => {
  const filteredMovies = movies.filter((movie) => {
    return movie.Title.includes(wordInMovieTitle);
  });
  movieList.innerHTML = '';
  addMoviesToDom(filteredMovies);
};

const filterLatestMovies = () => {
  const filterNewMovies = movies.filter((movie) => {
    const movieYear = parseInt(movie.Year);
    return movieYear >= 2014;
  });
  movieList.innerHTML = '';
  addMoviesToDom(filterNewMovies);
};

selectRadios.forEach((radio) => {
  radio.addEventListener('change', (e) => {
    handleOnChangeEvent(event);
  });
});

addMoviesToDom(movies);
