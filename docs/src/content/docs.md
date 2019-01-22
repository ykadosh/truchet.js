## Truchet Tiles
Truchet tiles are square tiles decorated in such a way that when they are placed in a random orientation on a plane, they create visually appealing patterns.

**Truchet.js** is a small library aimed at simplifying the creation of these visual patterns in an environment where the canvas size is unknown (i.e the web). Truchet.js is not a tool for creating patterns, but rather a tool for applying these patterns on a given canvas, and updating it when applicable if it's dimensions change.

But enough talking, let's get started!

## Installation

#### NPM

Install with [npm](https://www.npmjs.com/), or [Yarn](https://yarnpkg.com/):

```sh
npm i truchet --save
```

Use with [Node.js](https://nodejs.org/en/), or [webpack](https://webpack.github.io/):

```js
const Truchet = require('truchet');
```

Or, if you are using ES6:

```js
import Truchet from 'truchet';
```

#### CDN

Alternatively you can add a `<script>` tag in your document's head, and it will export a global `Truchet` class:

```js
<script src="https://unpkg.com/truchet@latest/truchet.min.js"></script>
```

## Magical Patterns

The first thing you need to do is create a tile that is asymmetric, so that it has more than one orientation. You can use any HTML element that you like, but in the next examples
we'll be using SVG.

You can use a library like [SVG.js](https://svgjs.com/), but for our purpose, a simple utility function will suffice:

```js
// A function for creating SVG elements
const createNode = (n, v = {}) => {
    n = document.createElementNS("http://www.w3.org/2000/svg", n);
    Object.keys(v).forEach(p => {
        n.setAttributeNS(null, p, v[p]);
    })
    return n;
}
```
  
The `Truchet` instance expects a DOM element as its first argument in which it will render the tiles. In our case, it should be an `<svg/>` element.
The 2nd & 3rd argument are the tile **width** & **height** respectively.

```js
const size = 100;
const target = document.getElementById('target'); // Our SVG element
const truchet = new Truchet(target, size, size});
```

Now let's create a tile. Our tile will consist of 2 arcs that begin and end at the center of 2 adjacent edges, and will have a size of `100` pixels.
You can use `addTile(id, generator)` to define a new tile type. The `id` is used as a handle for this tile type, and the `generator` is a function that should
return a DOM element when called. This function receives the `props` object we pass to it from the `render` function, as we will later see.

```js
truchet.addTile('a', ({x, y}) => {
    // We need to wrap our 2 paths in a <g/> since we can only return a single DOM element.
    const g = createNode('g');
    g.appendChild(createNode('path', {d: 'M 0,50 A 50,50 0 0 0 50 0'}));
    g.appendChild(createNode('path', {d: 'M 50,100 A 50,50 0 0 1 100 50'}));
    g.style.setProperty('transform-origin', `${size/2}px ${size/2}px`);
    g.style.setProperty('transform', `translate(${x}px, ${y}px)`);
    return g;
});
```

Finally, we need to call `render(callback)` to render our pattern.  
The `render` function receives a callback that, when called, should return a props object to be passed to your tile generator function.  
These props are used by **Truchet.js** to determine whether a tile should be rendered or not.  
To determine that, these props are shallow compared with the tile's previous props and if they are different, the tile generator function will be called and the DOM will be updated.
The only prop that is mandatory here is the `id`, which is used to pick the correspnding tile generator function.

```example:1
truchet.render((row, col) => ({
    id: 'a', 
    x: col * size, 
    y: row * size,
}));
```

This looks nice, but not very exciting. Let's add some randomness to the mix by randomly rotating the tiles.
We can do this by passing an additional prop via the `render` callback to our tile generator function:

```js
truchet.addTile('a', ({x, y, rotate}) => {
    // We need to wrap our 2 paths in a <g/> since we can only return a single DOM element.
    const g = createNode('g');
    g.appendChild(createNode('path', {d: 'M 0,50 A 50,50 0 0 0 50 0'}));
    g.appendChild(createNode('path', {d: 'M 50,100 A 50,50 0 0 1 100 50'}));
    g.style.setProperty('transform-origin', `${width/2}px ${height/2}px`);
    g.style.setProperty('transform', `translate(${x}px, ${y}px) rotate(${rotate}deg)`);
    return g;
});
```

Update the `render` function to pass a `rotate` prop:

```example:2
truchet.render((x, y) => ({
    id: 'a',
    rotate: [0, 90][Math.floor(Math.random() * 2)], // Randomly toggle between 0 and 90 degree rotation
    x,
    y,
}));
```