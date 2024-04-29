import dom from "../dom.js";
import filterHandler from "../handlers/filterHandler.js";

const keyupEvent = () => {
    dom.input.addEventListener('keyup', () => {
        filterHandler();
    })
}

export default keyupEvent;