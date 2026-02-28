const fs = require('fs');
const path = process.env.TEMP + '/gemini.html';
let html = fs.readFileSync(path, 'utf8');

// Unescape unicode \uXXXX
html = html.replace(/\\u([\d\w]{4})/gi, function (match, grp) {
    return String.fromCharCode(parseInt(grp, 16));
});

let matches = html.match(/.{0,200}(聆聽模式|TEST WIN|測試|我要的功能).{0,500}/g);
if (matches) {
    console.log(matches.join('\n\n===================\n\n'));
} else {
    console.log("No matches found even after unicode unescape.");
}
