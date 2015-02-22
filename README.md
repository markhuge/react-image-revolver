# react-image-revolver 
> Revolve through an array of images

## Installation

```sh
npm install react-image-revolver --save
```

# Usage

```js
var Revolver = require('react-image-revolver');

React.render(Revolver({
  images: [ '/img1.jpg', '/img2.gif', '/img3.png' ],  // array of img urls
  interval: 1000 // cycle interval in ms
}, document.body);

```
