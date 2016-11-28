var express=require('express');
var app=express();
var port=3000;
/*app.get('/',
	function(req,res)
	{
		res.send('Hello Express!');
	}
);
*/
var middleware=require('./middleware');
// var middleware={
// 	logger:
// 		function(req,res,next)
// 		{			
// 			console.log('Request: '+new Date().toString()+' '+req.method+' '+req.originalUrl);
// 			//console.log();
// 			next();
// 		}
// }
app.use(middleware.logger);
app.get('/about',
	function(req,res)
	{
		res.send('About Us!');
	}
);

app.use(express.static(__dirname+'/public'));
app.listen(port,
	function()
	{
		console.log('Express server started at port:'+port+'!');
	}
);