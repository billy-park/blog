---
title: The Great GatsbyJS
date: '2018-04-09'
---
This blog is built using GatsbyJS which for me was a great opportunity to get a little more experience working with React + Webpack, all while learning about static site generators, Netlify and Netlify CMS. GatsbyJS is in their own words, a "blazing-fast static site generator for React" and it certainly seems to live up to that statement in my limited experience with it building this blog.

<!-- end -->

<br>

Gatsby can almost be seen as a website compiler, you provide it with the source code and it outputs a wonderfully optimised site that loads extremely fast. The reason Gatsby feels so fast is due to a number of features working together to make the magic happen:

<br>

**\-** **Progressive rendering**

Optimising the order in which content is loaded in order of importance for user experience and instead deferring unnecessary content until the essentials are rendered. This prevents the page hanging on a white screen while waiting for all of the code and assets to load and instead loads them progressively as seen in the diagram below.

![Progressive rendering diagram](/assets/progressiverendering.png)

Image source: <https://developers.google.com/web/fundamentals/performance/critical-rendering-path/>

An obvious example of progressive rendering on this blog is the header image above, when the page first loads a plugin for gatsby named gatsby-image will make a few optimisations.

First off gatsby-image generates multiple smaller copies of the image so that smartphone and tablet users aren't required to download a full desktop sized version of the image. As it is quite a big image it is lazy loaded so that it doesn't slow down the page too much, however a placeholder file will automatically be displayed in the meantime as a preview with a blur effect so as to not take away from the user experience as much as there being a large white space, or the site readjusting itself when the image does load. Very cool.

gatsby-image: <https://www.npmjs.com/package/gatsby-image>

<br>

**\- Code splitting**

Splitting JavaScript code into multiple bundles which can be loaded as necessary as opposed to having one monolithic bundle that is going to slow down the page load time. Essentially only loading JavaScript that is immediately necessary for the current page being loaded to function properly and letting the user get on with it as fast as possible.

Gatsby does this automatically on a per-route basis making each different route load that much faster than they would being loaded all at once.

<br>

**Benefits of Static Sites**

Another beautiful thing about Gatsby is that the end result of all of its optimisations is a website composed of a number of static files, which means it can be easily hosted just about anywhere. I'm hosting the code for this blog on GitHub, and Netlify is using that repository to build and deploy a working version of the site. 

All of the blog posts are simply markdown files being pulled into React components using GraphQL meaning that a database isn't required. This combined with Netlify's own lightweight CMS means that I can write up new posts smoothly from anywhere, on any device with internet access, generating a new markdown file which gets added to my GitHub repository in turn triggering a new build and deploy on Netlify automatically. Bam, new blog post up in seconds.

The diagram below is a great way to see where Gatsby can pull data from and be deployed to easily.

![Gatsby diagram](/assets/gatsbydiagram.png)

Image source: <https://www.gatsbyjs.org/>

<br>

Find out more about Gatsby and give it a go at: <https://www.gatsbyjs.org/>

Interesting read on why Gatsby is so fast: <https://www.gatsbyjs.org/blog/2017-09-13-why-is-gatsby-so-fast/>
