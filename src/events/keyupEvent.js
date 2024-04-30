import dom from "../dom.js";
import filterHandler from "../handlers/filterHandler.js";

const keyupEvent = () => {
    dom.input.addEventListener('keyup', () => {
        const value = dom.input.value;
        filterHandler(value);
    })
}

export default keyupEvent;