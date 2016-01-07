var https = require('https');
var completed = 0;
module.exports.cron = {
  myFirstJob: {
    schedule: '* * * * * *',
    onTick: function () {
    	if (completed == 0) {
	    	TrafficAlertSubscription.find().then(function(subscriptions) {
	    		for(subscription in subscriptions) {
	    			var currentSubscription = subscriptions[subscription];
					var options = {
				        host : "maps.googleapis.com",
				        port : 443,
				        path : '/maps/api/directions/json?origin=75+9th+Ave+New+York,+NY&destination=MetLife+Stadium+1+MetLife+Stadium+Dr+East+Rutherford,+NJ+07073&key=AIzaSyBoaB8mC8e2kWTChoGT6Wc4uLyasBVNq7U',
				        method : 'GET'
				    };

				    var directionsData = '';
				    console.log('Sending request', currentSubscription);
				    https.request(options, function(directionsResponse) {
				        directionsResponse.on('error', function(e){ console.log(e.message); });
				        directionsResponse.on('data', function(chunk){ directionsData += chunk; console.log(chunk);});
				        directionsResponse.on('end', function(){
				        	console.log(directionsData);
				        });	
				    });
	    		}
	    	});
	    	completed = 1;
    	}
    }
  }
};
