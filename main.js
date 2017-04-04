//Function to Toggle Navbar on Smaller Screens
function toggleNav() {
    $("#sidebar").toggleClass("aside-hidden");
}


$(document).ready(function(){

    $('.hamburger').click(toggleNav);

});
