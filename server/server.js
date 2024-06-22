import Express from 'express' ;
import MySQL from 'mysql' ;
import Cors from 'cors' ;

const App = Express();
App.use(Cors());
App.use(Express.json());
const port = 8081 ;



App.get("/",(req,res) => { 
    res.json("555");
})

App.listen(port,() => {
    console.log("Listen to Me") ;
});