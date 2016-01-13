# Behold! Hagrid!

[Visit the site](http://bradleystafford.com/projects/hagrid/)

Hagrid is an HTML-attribute Grid system used for the layout of your websites. It's a method of styling that uses _attributes_ as opposed to classes, so if you're worried about munging your semantic class names with your layout stylings, worry no more!

Hagrid was built to primarily make a joke. A pun, really.

**You're probably wondering** about the speed of CSS attribute selectors. I'd say that's a fair concern. 

Take a look at [this article](http://benfrain.com/css-performance-revisited-selectors-bloat-expensive-styles/), we've come a long way. 

## How Do I Even?

If you're looking to just grab the files, the CSS file should be in the `/build` folder. You're welcome.

`npm install` to throw down and install dependencies.
`grunt all` to build the site in `/site` and the CSS in `/build`

## Actual usage

__Three steps__:

1. Define a grid container: `<div data-hagrid="grid-container"></div>`
2. Define a grid row inside that container: `<div data-hagrid="grid-row"></div>`
3. Define a span inside the `grid-row` div: `<div data-hagrid="span-10"></div>`

__Pre/Post__:

You can also push columns (to the right or left) using:

`<div data-hagrid="span-20 pre-20"></div>` (Gives 20% margin on left before placing) 

`div data-hagrid="span-20 post-20"></div>` (Gives 20% margin on right, any element after this column will be placed after that margin).

# Questions

## Attribute selectors? Is this some kind of joke?

Yes. This is a joke. A mostly ie8-compatible joke.

## Can I contribute?

By all means! Fork it! Update the site! Update the library! Give more examples! I DON'T EVEN KNOW. I'll accept Pull Requests if they're not totally trying to ruin my precious jokes. 

## Notes

- the LESS file is in really sad shape. Will it compile? Yes. But it's far from optimized! I plan on working on that in the future.
- I should probably support SASS, too. 
- If you have feedback or issues, be sure to log them in the repo!

Happy coding!



