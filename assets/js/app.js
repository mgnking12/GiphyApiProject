var gifButtons="";
var gifBArray= ["Michael Scott","Dwight Schrute","Jim Halpert","Pam Beesly","Ryan Howard","Andy Bernard","Angela Martin","Kelly Kapoor","Oscar Martinez","Darryl Philbin","Erin Hannon","Toby Flenderson","Kevin Malone","Phyllis Lapin","Stanley Hudson","Meredith Palmer","Creed Bratton","Nellie Bertram"];
var giphyKey = "dc6zaTOxFJmzC";
var gInput = "";
var rating = "";
function renderButtons(){
	for (var i = 0; i < gifBArray.length; i++) {
		gifButtons += "<button class='btn gButtonStyle gif-buttons' id='arrayButton' data-name='" + gifBArray[i] +"'>" + gifBArray[i] + "</button>";
		$("#buttons").html(gifButtons);
		console.log(gifButtons)
	}
}

$(document).ready(function(){
	renderButtons();



$('#addButton').on('click', function(event){

     event.preventDefault();
     gInput = $('#buttonInput').val();
     newButton = "<button class='btn gButtonStyle gif-buttons' data-name=" + gInput + ">" + gInput + "</button>";
     $('#buttons').append(newButton);
});



$('body').on('click', '.gif-buttons', function(event){
	$("#gifsAppear").empty();
	searchGifs = $(this).attr('data-name');
	console.log(searchGifs);
	var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + searchGifs + "&limit=10" +"&api_key=dc6zaTOxFJmzC";;
	 $.ajax({url: queryURL, method: 'GET'})
	 .done(function(response) {
	 	console.log(response);
	 	var results = response.data;
	 	for (var i = 0; i < response.length; i++){
	 	var rating = $('<p>').text("Rating: " + response[i].rating);
	 }

	 	for(var i=0; i < results.length; i++){
	 		console.log(rating);
	 	var gifImage = $('<img src=' + results[i].images.fixed_height_still.url + ' data-still=' +
                	results[i].images.fixed_height_still.url + ' data-animate=' +
                	results[i].images.fixed_height.url + ' data-state="still" class="gifImage">' + rating);
	 	$('#gifsAppear').prepend(gifImage);   

	 }
	});
	 ;
});
$('body').on('click', '.gifImage', function(event){


     var imgState = $(this).attr('data-state');
	    if(imgState == 'still') {
            $(this).attr('src', $(this).data('animate'));
            $(this).attr('data-state', 'animate');
        }
        else {
            $(this).attr('src', $(this).data('still'));
            $(this).attr('data-state', 'still');
        }
});
	
});





