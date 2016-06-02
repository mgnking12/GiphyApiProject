var gifButtons="";
var gifBArray= ["Michael Scott","Dwight Schrute","Jim Halpert","Pam Beesly","Ryan Howard","Andy Bernard","Angela Martin","Kelly Kapoor","Oscar Martinez","Darryl Philbin","Erin Hannon","Toby Flenderson","Kevin Malone","Phyllis Lapin","Stanley Hudson","Meredith Palmer","Creed Bratton","Nellie Bertram"];
var giphyKey = "dc6zaTOxFJmzC";
var gInput = "";



    

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
	var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + searchGifs + "&limit=10" +"&api_key=dc6zaTOxFJmzC";;
	 $.ajax({url: queryURL, method: 'GET'})
	 .done(function(response) {
	 	console.log(response);
	 	var results = response.data;
	 	for(var i=0; i < results.length; i++){
	 	var gifImage = $('<img>');
	 	gifImage.attr('src', results[i].images.fixed_height.url);
	 	$('#gifsAppear').prepend(gifImage);    
	 }
	});
	 ;
});

});





