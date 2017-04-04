//Function to Toggle Navbar on Smaller Screens
function toggleNav() {
    $("#sidebar").toggleClass("aside-hidden");
}


$(document).ready(function(){

    //Hamburger Button Listener
    $('.hamburger').click(toggleNav);

    //Fetch Button Listener
    $('#submit').click(function(e) {

        //Prevent the browser from refreshing
        e.preventDefault();

        //Get the input values
        var article = $('#article-input').val();
        var language = $('#language-input').val();

        //If the user has left the title blank, inform and return
        if (article == '') {
            $('.article-text').html("You haven't entered a search term! Please do so and try again.");
            return;
        }

        //Construct the query URL
        var api_endpoint = "https://" + language + ".wikipedia.org/api/rest_v1/page/summary/";
        var request_url = api_endpoint + article;

        //Issue the GET Request. If page not found, let the user know
        $.get( request_url, function( data ) {
            $('.article-text').html(data['extract']);
        }).fail(function() {
            $('.article-text').html("Oops! Looks like the page you've searched for doesn't exist.");
        });
        
    });
});
