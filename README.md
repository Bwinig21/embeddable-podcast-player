# Embeddable Podcast Player
A simple, customizable podcast player for you to embed on your website.

## FAQ

### What is this?
Put simply, this is an open-source version of the embedded player found on [The Human Equation's website](https://rebrand.ly/human-equation). It was designed with podcasts in mind, but it can be used to play any type of audio.

### What's The Human Equation?
It's our podcast about what it means to be a teenager in the 21st century. This project is managed by Benjamin, one of our cohosts.

### What makes this player unique?
While other players require you to put in to work to make sure they are embedded in such a way that the content fits within the iframe, this one will automatically expand to fill a frame of any size, allowing you to build the website of your dreams without having to work around an uncooperative embedded embedded player. While some elements may not fit within the box at small sizes, this can be easily fixed by resizing these elements. Over time, we hope to improve the player to automatically adapt to iframes of any size by changing the size of the text and the control elements.

Additionally, unlike general music players, this player will not preload the audio file, ensuring that your analytics are counting episode plays, not page loads.

### How can I contribute to the project?
You should read through our [Contribution Guidelines](.github/CONTRIBUTING.md) and [Code of Conduct](.github/CODE_OF_CONDUCT.md) before getting started. That being said, every contribution to the project starts by filing an issue, so go ahead an report bugs, request features, and ask questions in the issues tab.

### How do I use the player?
There are a number of modifications that can be made to the player, including the colors of the outer border, the appearance and animation of the text, and the background color of the control area. All of this can be done through the mainstyle.css file. Once you have completed your customizations, you can set up the player by replacing the square brackets in the first couple lines of the script.js file with your episode information. If you need additional help, you can file an issue and we'll be happy to lend a hand. We're planning to add a Wiki with more detailed instructions soon, so remember to share your experience implementing the project on your website in the related feedback issue.

### What does the license mean?
The license is there to allow you to use this code for your own creations while ensure we get credit for our work. We are not lawyers, and nothing we say here represents a binding agreement or legal advice, but we want to inform you that the goal of utilizing the license is that **the documentation for the source code** of any projects you create using our code will include the following:

- A copy of the license itself and a statement that it applies to the code that is directly based on our project
- A similar license applied to your code unless our code is just a small piece of a much bigger project
- A link to this repository and a statment that some or all of your code was based on this project

To be clear, we are not trying to discourage you from using our code, quite the opposite, in fact. We simply want to ensure that the open-source nature of the project is maintained across forks and that everyone who wants to implement something similar is able to find this project in order to do so.

### What's the format for release numbers?
Each release will have a 2-number code to represent the type of changes that were made (ex. v2.3). An increase in the number after the decimal place indicates a minor release, such as a bug fix, asthetic changes, or another update that does not dramatically change the intended functionality of and process to use the player. An increase in the number before the decimal place represents a major release, which will usually be a combination of new features, low-priority bug fixes, and some amount of asthetic changes. Major releases will often change the process of setting up the player, so make sure you know how to use the new version before upgrading. There is no set number of minor updates that any major release will receive, rather we will define a new minor update when the project reaches stablility after a number of minor bug fixes. Major bug fixes will likely result in a minor release as soon as they are merged.

---
