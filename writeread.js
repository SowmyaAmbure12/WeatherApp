const fs=require('fs');
const path=require('path');
const {pipe}=require('stream');
const srcfile="source.txt";
const destfile="destination.txt";
const readStream=fs.createReadStream(srcfile,'utf-8');
const writeStream=fs.createWriteStream(destfile,'utf-8');
console.log('success');
readStream.pipe(writeStream);
