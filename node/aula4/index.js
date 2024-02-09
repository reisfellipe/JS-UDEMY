const fs = require('fs').promises;
const { stat } = require('fs');
const path = require('path');

async function readdir(rootDir){
    rootDir = rootDir || path.resolve(__dirname);
    const files = await fs.readdir(rootDir);
    walk(files,rootDir);
}

async function walk(files, rootDir){
    for(let file of files){
        const fileFullPath = path.resolve(rootDir,file);
        const stats = await fs.stat(fileFullPath); 
        
        if(/\.git/g.test(fileFullPath)) continue;
        if(/node_modules/g.test(fileFullPath)) continue;
        
        if(stats.isDirectory()){
            readdir(fileFullPath);
            continue;
        }
        
        if(
            !/\.css$/g.test(fileFullPath) && !/\.html$/g.test(fileFullPath) 
            ) continue;

        console.log(fileFullPath);
    }
}

//para listar os diretorios dentro das pastas use a função criada 
readdir('C:/Users/DELL/OneDrive/Documentos/Estudos Fellipe/JS-UDEMY/JS-UDEMY');

// fs.readdir(path.resolve(__dirname))
//     .then(files => console.log(files))
//     .catch(e => console.log(e));