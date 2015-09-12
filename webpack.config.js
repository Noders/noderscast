var getConfig = require('hjs-webpack');

module.exports = getConfig({
    in: 'index.jsx',
    out:'',
    isDev:process.env.NODE_ENV !== 'production',
    html: function (context) {
		//ISDEV
		if(process.env.NODE_ENV !== 'production'){
			console.log("test")
			return {
			'index.html': 
				'<!doctype html>'+
					'<head>'+
						'<meta charset="utf-8"/>'+
						'<meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no"/>'+
						"<link href='https://fonts.googleapis.com/css?family=Flamenco:400,300|Raleway:400,100|Fredericka+the+Great' rel='stylesheet' type='text/css'>"+
					'</head>'+
					'<body>'+
					'</body>'+
					'<script src="https://maps.googleapis.com/maps/api/js?sensor=true"></script>'+
					'<script src="/app.js"></script>'
			};
		}else{
			return {
			'index.html': 
				'<!doctype html>'+
					'<head>'+
						'<meta charset="utf-8"/>'+
						'<meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no"/>'+
						'<link rel="stylesheet" href="/noderscast.1.0.0.css"/>'+
						"<link href='https://fonts.googleapis.com/css?family=Flamenco:400,300|Raleway:400,100|Fredericka+the+Great' rel='stylesheet' type='text/css'>"+
					'</head>'+
					'<body>'+
					'</body>'+
					'<script src="/noderscast.1.0.0.js"></script>'+
					'<script src="https://maps.googleapis.com/maps/api/js?sensor=true"></script>'
			};
		}
	}
})
