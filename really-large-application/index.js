const colors = require('colors');

const chosenColor = colors.getRandomColor();

console.log(`You should use ${chosenColor.name} on your website. It's HTML code is ${chosenColor.code}`);

const favColor = colors.getBlue();

console.log(`My Favourite color is ${favColor.name}/${favColor.code}, btw`);
