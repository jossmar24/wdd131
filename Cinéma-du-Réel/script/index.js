function getElement(selector) {
    return document.querySelector(selector);
  }
  
  function getElements(selector) {
    return document.querySelectorAll(selector);
  }
  
  function setTheme(theme) {
    document.body.classList.toggle('dark-theme', theme === 'dark');
    localStorage.setItem('theme', theme);
  }
  
  function loadTheme() {
    setTheme(localStorage.getItem('theme') || 'light');
  }
  
  function toggleMenu() {
    getElement('.nav-mobile').classList.toggle('active');
  }
  
  function closeMenu() {
    getElement('.nav-mobile').classList.remove('active');
  }
  
  const movies = [
    {
      title: "Succession",
      director: "Jean-Christophe Mary",
      year: 2023,
      genre: "suspense, mystery",
      description: "A chilling dive into the heart of a dysfunctional family in the media and entertainment empire.",
      poster: "images/succession.jpg",
      key: "Succession"
    },
    {
      title:"Spirited Away",
      director:"Geoffrey Nabavian",
      year: 2023,
      genre: "inspiration, suspense",
      description: "The creation documentary more alive than ever",
      poster: "images/plus-vivant.png",
      key: "Spirited Away"
    },
    {
      title: "Vourdalak",
      director: "Kevin Sonsa-Kini",
      year: 2023,
      genre: "Gothic",
      description: "Vourdalak presents a strange family that lives in the middle of the countryside. A pale and powdery individual presents himself as an emissary of the King of France.",
      poster: "images/figure-du-vourdalak.jpg",
      key: "horror, mystery"
    },
    {
      title: "L’Art du muet",
      director: "Nicole Gabriel",
      year: 2023,
      genre: "mystery",
      description: "A false quote from Bushido: “There is no loneliness deeper than that of the samurai.",
      poster: "images/LArt-du-muet.jpg", 
      key: "muet"
    }
  ];
  
  function createMovieElement(movie) {
    const section = document.createElement('section');
    section.classList.add('movie');
    section.dataset.movie = movie.key;
  
    section.innerHTML = `
          <h2>${movie.title}</h2>
          <img src="${movie.poster}" alt="${movie.title} poster" loading="lazy">
          <p><strong>Director:</strong> ${movie.director}</p>
          <p><strong>Year:</strong> ${movie.year}</p>
          <p><strong>Genre:</strong> ${movie.genre}</p>
          <p>${movie.description}</p>
      `;
  
    return section;
  }
  
  function renderMovies() {
    const movieList = getElement('#movieList');
    if (movieList) {
      const container = document.createElement('div');
      container.id = 'movieListContainer';
  
      movies.forEach(movie => {
        container.appendChild(createMovieElement(movie));
      });
  
      movieList.appendChild(container);
    }
  }
  
  function showMovieDetails(movieKey) {
    const movie = movies.find(m => m.key === movieKey);
    const movieDetails = getElement('#movieDetails');
    const movieInfo = getElement('#movieInfo');
  
    if (movie && movieInfo && movieDetails) {
      movieInfo.innerHTML = `
              <h2>${movie.title}</h2>
              <p><strong>Director:</strong> ${movie.director}</p>
              <p><strong>Year:</strong> ${movie.year}</p>
              <p><strong>Genre:</strong> ${movie.genre}</p>
              <p><strong>Description:</strong> ${movie.description}</p>
          `;
  
      movieDetails.style.display = 'block';
    }
  }
  
  function validateForm() {
    const name = getElement('#name').value;
    const email = getElement('#email').value;
  
    if (!name || !email) {
      alert("Please complete all fields");
      return false;
    }
  
    return true;
  }
  
  function submitForm(event) {
    event.preventDefault();
    if (validateForm()) {
      alert('Form submitted (simulated)');
    }
  }
  
  function displayFooterInfo() {
    const year = getElement('#year');
    const lastModify = getElement('#lastModify');
    const today = new Date();
  
    if (year && lastModify) {
      year.innerHTML = `&copy${today.getFullYear()} | Josselyn Juleidy Martinez | Ecuador`;
      lastModify.innerHTML = `<span>Last Modification: ${document.lastModified}</span>`;
    }
  }
  
  document.addEventListener('DOMContentLoaded', () => {
    loadTheme();
    displayFooterInfo();
  
    const menuToggle = getElement('#menuToggle');
    if (menuToggle) {
      menuToggle.addEventListener('click', toggleMenu);
    }
  
    getElements('.nav-main a').forEach(link => {
      link.addEventListener('click', closeMenu);
    });
  
    if (getElement('#movieList')) {
      renderMovies();
      getElements('.movie').forEach(section => {
        section.addEventListener('click', () => {
          showMovieDetails(section.dataset.movie);
        });
      });
    }
  
    const contactForm = getElement('#contactForm');
    if (contactForm) {
      contactForm.addEventListener('submit', submitForm);
    }
  
    getElement('#themeToggle').addEventListener('click', () => {
      setTheme(localStorage.getItem('theme') === 'light' ? 'dark' : 'light');
    });
  });