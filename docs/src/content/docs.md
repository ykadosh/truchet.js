## Truchet Tiles
Truchet tiles are square tiles decorated in such a way that when they are placed in a random orientation on a plane, they create visually appealing patterns.

**Truchet.js** is a small library aimed at simplifying the creation of these visual patterns in an environment where the canvas size is unknown (i.e the web). Truchet.js is not a tool for creating patterns, but rather a tool for applying these patterns on a given canvas, and updating it when applicable if it's dimensions change.

But enough talking, let's get started!

## Installation

```
npm i truchet
```

```
<script src="https://unpkg.com/truchet@latest/truchet.min.js"></script>
```

## Magical Patterns

The first thing you need to do is create a tile that is asymmetric, so that it has more than one orientation. You can use any HTML element that you like, but the easiest way to create them is using SVG. For example:

```example:1
<g>
    <path class="path" d="M 0,50 A 50,50 0 0 0 50 0"></path>
    <path class="path" d="M 50,100 A 50,50 0 0 1 100 50"></path>
</g>
```

```example:2
const target = document.getElementById('target');
const truchet = new Truchet(target);

truchet.addTile({

});

truchet.render();
```