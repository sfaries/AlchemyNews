$(document).ready(function(){

/**********		Event Listeners		**********/

	$('.entire-database').submit(function(event){
		//code for entire database
		$('.container-results').html('');

		var topic = $(this).find("input[name='topic']").val();
		var start = $('.start').val();
		var end = $('.end').val();
		
		console.log(start, end);
		//getDatabase(topic, start, end);
		//call function and pass 'topic' -> function that gets all results
		//pass 'start' and 'end' to parameters for call
	})

	$('.select-news').submit(function(event){
		//code for select news
		$('.container-results').html('');

		var topic = $(this).find("input[name='select']").val();
		var start = $('.start').val();
		var end = $('.end').val();

		getSelect(topic, start, end);
		//call function and pass topic ->function that gets select news orgs
		//pass 'start' and 'end' to parameters for call
	})

/*********** getRequests **********/

//This function searches the entire database for news

var getDatabase = function(topic, start, end){


	//the params we need to pass
	var request = {
					apikey: "87feff35dfd60ac08ba524f5f739f5e6d961011d", //change to 'apikey'?
					start: start,
					end: end, 
					outputMode: "json"
					//title: topic,
	}

	var result = $.ajax({
		url: "https://gateway-a.watsonplatform.net/calls/data/GetNews", 
		data: request,
		dataType: "jsonp", // change to 'outputMode'? or dataType
		type: "GET",
	})

}

//This function searches the database for select news publications

var getSelect = function(topic, start, end){



}

/********** postResults ***********/

//This function posts the results from searching the entire database

//This function posts the results from searching the select publications


/*********** Error ***********/


})

/* API Key

87feff35dfd60ac08ba524f5f739f5e6d961011d

*/


