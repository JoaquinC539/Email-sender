const express= require('express')
require('dotenv').config()
const bodyParser=require('body-parser')
const cors=require('cors');
const PORT=3752;
const app=express();
const routes=require('./routes');
const path=require('path')


app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.set('view engine','ejs');
app.set('views',path.join(__dirname,'resources','views'));
app.use('/static',express.static(__dirname+"/static"))
app.use('/',routes);
app.use((req,res)=>{
    console.log(__dirname)
    const errorPathFile=path.resolve(__dirname, 'static', 'html', '404.html');    
    res.sendFile(errorPathFile);
});
app.listen(PORT,()=>{
    console.log(`Listening on port ${PORT}`);
});


