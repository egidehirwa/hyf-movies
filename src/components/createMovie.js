/**
 * Create a movie element.
 * 
 * @param {object} movie - Movie object data.
 * @returns {HTMLElement} - The movie element.
 */

const createMovie = (movie) => {
    // Create Image Wrapper
    const imageWrapper = document.createElement('div');
    imageWrapper.classList.add('image-wrapper')
    imageWrapper.id = movie.id;

    // Create image
    const img = document.createElement('img');
    img.src = movie.src;
    img.alt = movie.title;

    // Create title Wrapper
    const titleWrapper = document.createElement('div');
    titleWrapper.classList.add('title-wrapper');

    // Create title
    const title = document.createElement('h3');
    title.innerText = movie.title;
    
    titleWrapper.append(title);
    imageWrapper.append(img, titleWrapper);

    return imageWrapper;
}

export default createMovie;