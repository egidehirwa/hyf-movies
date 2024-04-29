import data from "../data.js";
import dom from "../dom.js";
import createMovie from "../components/createMovie.js";

const loadHandler = () => {
    data.movies.forEach((movie) => {
        const imageWrapper = createMovie(movie);
        dom.moviesContainer.append(imageWrapper);
    })
}

export default loadHandler;