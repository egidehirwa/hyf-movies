import dom from "../dom.js";

const filterHandler = () => {
    const imageWrapper = document.querySelectorAll('.image-wrapper');
    imageWrapper.forEach((movie) => {
        const title = movie.querySelector('h3').innerText;
        const value = dom.input.value;

        if(title.toLowerCase().includes(value.toLowerCase())){
            movie.classList.remove('hidden');
        } else {
            movie.classList.add('hidden');
        }
    })
}

export default filterHandler;