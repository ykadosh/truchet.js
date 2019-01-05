## Truchet Tiles
Truchet tiles are square tiles decorated in such a way that when they are placed in a random orientation on a plane, they create visually appealing patterns.

**Truchet.js** is a small library aimed at simplifying the creation of these visual patterns in an environment where the canvas size is unknown (i.e the web). Truchet.js is not a tool for creating patterns, but rather a tool for applying these patterns on a given canvas, and updating it when applicable if it's dimensions change.

But enough talking, let's get started!

## Installation

#### NPM

Install with [npm](https://www.npmjs.com/), or [Yarn](https://yarnpkg.com/):

```
npm i truchet --save
```

Use with [Node.js](https://nodejs.org/en/), or [webpack](https://webpack.github.io/):

```
const Truchet = require('truchet');
```

Or, if you are using ES6:

```
import Truchet from 'truchet';
```

#### CDN

Alternatively you can add a `<script>` tag in your document's head, and it will export a global `Truncate` class:

```
<script src="https://unpkg.com/truchet@latest/truchet.min.js"></script>
```

## Magical Patterns

The first thing you need to do is create a tile that is asymmetric, so that it has more than one orientation. You can use any HTML element that you like, but in the next examples
we'll be using SVG.

You can use a library like [SVG.js](https://svgjs.com/), but for our purpose, a simple utility function will suffice:

```
// A function for creating SVG elements
const createNode = (n, v = {}) => {
    n = document.createElementNS("http://www.w3.org/2000/svg", n);
    Object.keys(v).forEach(p => {
        n.setAttributeNS(null, p, v[p]);
    })
    return n;
}
```

Now let's create a tile. Our tile will consist of 2 arcs that begin and end at the center of 2 adjacent edges, and will have a size of `100` pixels.
We can use the above function to create a tile from 2 paths. The resulting SVG should look like this when rendered:


```example:1
g.appendChild(createNode('path', {d: 'M 0,50 A 50,50 0 0 0 50 0'}));
g.appendChild(createNode('path', {d: 'M 50,100 A 50,50 0 0 1 100 50'}));
```

We can now use **Truchet.js** to create a visual pattern from this tile. The `Truchet` instance expects a DOM element as its first
argument in which it will render the tiles. In our case, it should be an `<svg/>` element.

```example:2
const target = document.getElementById('target');
const truchet = new Truchet(target, {size: 100});

truchet.addTile({
    id: 'a',
    render: () => {
        // We need to wrap our 2 paths in a <g/> since we can only return a single DOM element.
        const g = createNode('g');
        g.appendChild(createNode('path', {d: 'M 0,50 A 50,50 0 0 0 50 0'}));
        g.appendChild(createNode('path', {d: 'M 50,100 A 50,50 0 0 1 100 50'}));
        return g;
    }
});

truchet.render();
```

This looks nice, but not very exciting. Let's add some randomness to the mix by randomly rotating the tiles.
We can do this using the `rotate` argument:

```example:3
truchet.addTile({
    id: 'a',
    render: () => {...},
    rotate: [0, 90] // This will cause the tile to randomly receive a rotation of 0 or 90 degrees.
});
```