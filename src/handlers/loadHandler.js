import data from "../data.js";
import dom from "../dom.js";
import createMovie from "../components/createMovie.js";

const loadHandler = () => {
    data.movies.forEach((movie) => {
        const imageWrapper = createMovie(movie);
        dom.moviesContainer.append(imageWrapper);

        data.posters.push({
            id: movie.id,
            dom: imageWrapper,
            title: movie.title
        })
    })
}

export default loadHandler;