# Pretzel Vizualizer

This is a pretty simple program to create an image that can be used on streams/similar to showcase what you're listening to.

### Setup

First off you'll need to download the project and store it somewhere.

Then you'll need to go into your settings within Pretzel, and enable "Save Album cover to file" and "Save Now Playing JSON Data to file" - both of these need to point to the directory where the project is downloaded to with a filename of album.jpg and song.json respectively.

If you don't have it already, make sure you've got [NodeJS](https://nodejs.org/) installed

Open a command line and run `npm i`

Run `npm start`

If all goes well, you'll see a message saying "Watching for file changes on ./album.jpg". Once you pause/unpause or change track this'll kick off a render and you'll have song.png which you can add as an image source to  OBS/similar.