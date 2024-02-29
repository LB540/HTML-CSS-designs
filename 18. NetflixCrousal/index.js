const sliders = document.querySelector(".carousel-box");
let scrollPerClick;
let imagePadding=20;


showMovieData();

let scrollAmount = 0;

function sliderScrollLeft() {
  sliders.scrollTo({
    top: 0,
    left: (scrollAmount-=scrollPerClick),
    behaviour: "smooth"
  });

  if(scrollAmount<0) {
    scrollAmount = 0;
  }
}

function sliderScrollRight() {
  sliders.scrollTo({
    top: 0,
    left: (scrollAmount+=scrollPerClick),
    behaviour: "smooth"
  });
}



async function showMovieData() {
  const api_key = "ac27c5196cf6a4365ceeb031444e526f";

  const data = await axios.get(
    "https://api.themoviedb.org/3/discover/movie?api_key="+api_key+"&sort_by=popularity.desc"
  )
  const result = data.data.results;
  result.map(function(curr,index) {
    sliders.insertAdjacentHTML(
      "beforeend",
      `<img class="img-${index} slider-img" src="https://image.tmdb.org/t/p/w185/${curr.poster_path}" />`
    )
  })
  scrollPerClick = 400
}