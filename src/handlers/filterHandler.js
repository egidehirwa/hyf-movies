import dom from "../dom.js";
import data from "../data.js";

const filterHandler = (value) => {
    data.posters.forEach((poster) => {
        const posterExists = document.getElementById(poster.id);
        if(poster.title.toLowerCase().includes(value.toLowerCase())){
            if(!posterExists){
                dom.moviesContainer.append(poster.dom);
            }
        } else {
            if(posterExists){
                posterExists.remove();
            }
        }
    })

    if(dom.moviesContainer.children.length === 0){
        dom.message.innerText = 'Movie not found, please search for another one.';
        dom.message.classList.add('message');
        dom.moviesContainer.append(dom.message);
    } else {
        dom.message.remove();
    }

}

export default filterHandler;