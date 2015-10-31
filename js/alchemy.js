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
		return: 'enriched.url.title,enriched.url.url,enriched.url.author',
		/*
		return: 'enriched.url.title,enriched.url.author,original.url',
		*/

	},
	
		type: "GET",
		success: function(data) {
			//console.log(data);

			$.each(data.result.docs, function(i, item){
				//console.log(item);
				var article = showDatabase(item);
			})
			
			//showDatabase(data);
		},
		failure: function(error) {
			console.log('Fail', argument);
		}
		
	});
};

/********** postResults ***********/

//This function posts the results from searching the entire database

var showDatabase = function(article){ //changed from data
	//console.log(article);


	
	var result = $('.templatesHidden .hits').clone();
	console.log(result);

	var title = result.find('.titleArticle');
	title.text(article.source.enriched.url.title);

	var author = result.find('.authorArticle');
	author.text(article.source.enriched.url.author);

	var url = result.find('.urlArticle');
	url.text(article.source.enriched.url.url);

	//console.log(article.source.enriched.url.title);
	//console.log(article.source.enriched.url.author);
	//console.log(article.source.enriched.url.url);
	return result;
};




});

//for loop for iterating over data object
/*
for(data.result.docs[0]; data.result.docs[9]; data.result.docs++){

				console.log(data.result.docs);
		}
*/
//var getSelect = function(topic, start, end){};



//This function posts the results from searching the select publications


/*********** Error ***********/