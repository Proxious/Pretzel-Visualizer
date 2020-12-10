const nodeHtmlToImage = require('node-html-to-image');
const fs = require('fs');
require('log-timestamp');

const songFile = './album.jpg';
const htmlTemplate = fs.readFileSync('index.html').toString();

console.log(`Watching for file changes on ${songFile}`);
let fsWait = false;

fs.watch(songFile, (event, filename) => {
    if (filename) {
        if (fsWait) {
            return;
        }

        fsWait = setTimeout(() => {
            fsWait = false;
        }, 50);

        if (fs.statSync(songFile).size === 0) {
            return;
        }

        console.log(`${filename} file changed`);

        let details = JSON.parse(fs.readFileSync('./song.json'));
        let albumImage = fs.readFileSync('./album.jpg');

        let albumBase64 = new Buffer.from(albumImage).toString('base64');
        let albumCover = `data:image/jpeg;base64,${albumBase64}`;

        nodeHtmlToImage({
            output: 'song.png',
            html: htmlTemplate,
            content: {
                artist: details['track']['artistsString'],
                song: details['track']['title'],
                album: details['track']['release']['title'],
                albumCover: albumCover
            }
        }).then(() => console.log('rendered'));
    }
});