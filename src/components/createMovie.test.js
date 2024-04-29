/** 
 * @jest-environment jsdom
 */

import createMovie from "./createMovie.js";

describe ('Create a movie element', () => {
    const movie = createMovie(
        {
            id: 2,
            dataName: 'joker',
            src: './assets/joker.jpg',
            title: 'Joker',
    }
    )

    test('nodeName -> DIV', () => {
        expect(movie.nodeName).toEqual('DIV');
    })

    test('childElementCount -> 2', () => {
        expect(movie.childElementCount).toEqual(2);
    })
})