const fs = require('fs');

module.exports = (caminho) => fs.readFile(caminho, 'utf8');