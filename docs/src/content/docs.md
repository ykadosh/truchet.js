**Truchet.js** is a tiny library for performantly rendering tile patterns using JavaScript.
You control which tile is rendered, when, and how, by passing around lists of props which are used by the library to determine whether a change has been made, and a re-render is due.

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

Alternatively, you can add a `<script>` tag in your document's head, and it will export a global `Truchet` class:

```js
<script src="https://unpkg.com/truchet@latest/truchet.min.js"></script>
```

## Truchet Tiles

Truchet tiles are square tiles decorated in such a way that when they are placed in a random orientation on a plane, they create visually appealing patterns.
In **Truchet.js** each tile is a class that inherits from `Truchet.Tile`:

```js
import Truchet from 'truchet';

class MyTile extends Truchet.Tile {

}
```

A `Tile` has 2 lifecycle methods: `mount` and `render`. 
The `mount` method is used for initially creating the tile element, and it receives the target element as an argument.
The `render` method is used for updating the tile element, and it receives a list of props that are passed to it from our `Truchet` instance (which we will create later).

```js
import Truchet from 'truchet';

class MyTile extends Truchet.Tile {

    mount(target) {...}

    render(props) {...}
}
```

To make interesting patterns, we need to create a tile that is asymmetric, so that it has more than one orientation. 
You can use any HTML element that you like, but in the next examples, we'll be using SVG.

You can use a library like [SVG.js](https://svgjs.com/), but for our purpose, a simple utility function will suffice:

```js
import Truchet from 'truchet';

class MyTile extends Truchet.Tile {
    
    // A function for creating SVG elements
    createNode(n, v = {}) {
        n = document.createElementNS("http://www.w3.org/2000/svg", n);
        Object.keys(v).forEach(p => {
            n.setAttributeNS(null, p, v[p]);
        })
        return n;
    }

    mount(target) {...}
    
    render(props) {...}
}
```

Our tile will consist of 2 arcs that begin and end at the center of 2 adjacent edges and will have a size of `100` pixels.
We will use the `mount` method to create it, and append it to the target:

```js
class MyTile extends Truchet.Tile {
    ...
    mount(target) {
        const size = this.width; // Tile width/height are assigned automatically by the Truchet instance
        this.el = this.createNode('g');
        this.el.appendChild(this.createNode('path', {class: 'path', d: 'M 0,50 A 50,50 0 0 0 50 0'}));
        this.el.appendChild(this.createNode('path', {class: 'path', d: 'M 50,100 A 50,50 0 0 1 100 50'}));
        this.el.style.setProperty('transform-origin', `${size/2}px ${size/2}px`);
        target.appendChild(this.el);
    }
    ...
}
```

We will use the `render` method to update the element when the pattern is rendered.
(The `props` will be passed when we will create our `Truchet` instance).

```js
class MyTile extends Truchet.Tile {
    ...
    render(props) {
        const {x, y} = props;
        this.el.style.setProperty('transform', `translate(${x}px, ${y}px)`);
    }
    ...
}
```

Now let's move forward to creating a `Truchet` instance.
The `Truchet` instance expects a DOM element as its first argument in which it will render the tiles. In our case, it should be an `<svg/>` element.
The 2nd & 3rd argument are the tile **width** & **height** respectively.

```js
const size = 100;
const target = document.getElementById('target'); // Our SVG element
const truchet = new Truchet(target, size, size});
```

You can use `addTile(id, cls)` to define a new tile type. The `id` is used as a handle for this tile type, and the `cls` is a class that inherits from `Truchet.Tile`.

```js
truchet.addTile('my-tile', MyTile);
```

Finally, we need to call `render(callback)` to render our pattern.  
The `render` function receives a callback that, when called, should return a props object to be passed to your tile class `render` method.
These props are used by **Truchet.js** to determine whether a tile should be rendered or not.  
To determine that, these props are shallow compared with the tile's previous props and if they are different, the tile's `render` method will be called and the DOM will be updated.
The only prop that is mandatory here is the `id`, which is used to pick the corresponding tile class.

```example:1
truchet.render((row, col) => ({
    id: 'my-tile', 
    x: col * size, 
    y: row * size,
}));
```

This looks nice, but not very exciting. Let's add some randomness to the mix by randomly rotating the tiles.
We can do this by passing an additional prop via the `render` callback to our tile `render` function:

```js
class MyTile extends Truchet.Tile {
    ...
    render(props) {
        const {x, y, rotate} = props;
        this.el.style.setProperty('transform', `translate(${x}px, ${y}px) rotate(${rotate}deg)`);
    }
    ...
}
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