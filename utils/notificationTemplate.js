const fs = require('fs');
const path=require('path');

function get(filePath) {
    // return __dirname
    const templatePath=path.join(__dirname,'..','/notifications/',filePath);
    const template=fs.readFileSync(templatePath,'utf-8');
    return template    
}
module.exports=get