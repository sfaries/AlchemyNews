$(document).ready(function(){

/**********		Event Listeners		**********/

	$('.entire-database').submit(function(event){
		//code for entire database
		$('.container-results').html('');

		var topic = $(this).find("input[name='topic']").val();
		var dateStart = $('.start').val();
		var dateEnd = $('.end').val();
		var apiKEY = $('.apikey').val();
		
		var start = Date.parse(dateStart);
		var end = Date.parse(dateEnd);
		getDatabase(topic, start, end, apiKEY);

		//call function and pass 'topic' -> function that gets all results
		//pass 'start' and 'end' to parameters for call
	});

	$('.select-news').submit(function(event){
		//code for select news
		$('.container-results').html('');

		var topic = $(this).find("input[name='select']").val();
		var dateStart = $('.start').val();
		var dateEnd = $('.end').val();
		var apiKEY = $('.apikey').val();


		var start = Date.parse(dateStart);
		var end = Date.parse(dateEnd);
		getSelect(topic, start, end, apiKEY);

		//call function and pass topic ->function that gets select news orgs
		//pass 'start' and 'end' to parameters for call
	});

/*********** getRequests **********/

//This function searches the entire database for news

var getDatabase = function(topic, start, end, apiKEY){

//This ajax call should work.  wait for new apikey and test
$.ajax({
	url: "https://gateway-a.watsonplatform.net/calls/data/GetNews",
	data: {
		apikey: apiKEY,
		start: 'now-10d', //try passed in arguments
		end: 'now',
		outputMode: "json",
		maxResults: '10',
		'q.enriched.url.title': topic,
		return: 'enriched.url.title,enriched.url.author,original.url',
	},
	
		type: "GET",
		success: function(data) {
			console.log(data);
		},
		failure: function(error) {
			console.log('Fail', argument);
		}
		
	});
};

});


//var getSelect = function(topic, start, end){};

/********** postResults ***********/

//This function posts the results from searching the entire database

//This function posts the results from searching the select publications


/*********** Error ***********/