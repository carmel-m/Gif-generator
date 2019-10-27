
// In this assignment, you'll use the GIPHY API to make a dynamic web page that populates with gifs of your choice. To finish this task, you must call the GIPHY API and use JavaScript and jQuery to change the HTML of your site.

// create an array of strings related to one topic
// save to a variable called 'topics'

// create buttons of the items/strings in the array in HTML 
// use a loop that appends a button for each string in the array

// when user clicks one of the buttons, page will get and load 10 static gif images from Giphy API
// when image is clicked, gif should animate
// when clicked again, go back to still

// display rating under each gif

// add form to page that takes a value from user input box and adds it to the 'topics' array (push)
// make function to call each topic in array and remake the buttons on the page (to include user's buttons)

// important GIPHY parameters
// 'q' (search query term), 'limit' (max number of records to return), 'rating' (filter results by rating)


// GIPHY API key = qAE3KGzdAFsmPr0NI3dcRyj3Cuzim6Xs





//javascript, jQuery
// var xhr = $.get("https://api.giphy.com/v1/gifs/search?q=ryan+gosling&api_key=YOUR_API_KEY&limit=5");
// xhr.done(function(data) { console.log("success got data", data); });




// VARIABLES ============================================================


var animalsArray = ["kangaroo", "wombat", "cockatoo", "emu", "snake", "koala", "shark", "echidna", "platypus", "spider", "quokka", "quoll", "dingo", "wallaby", "crocodile"]



// FUNCTIONS ============================================================


function displayAnimals() {


}


// display buttons
function renderButtons() {

    $("#buttons-display").empty();
    for (var i = 0; i < animalsArray.length; i++) {

        var button = $("<button>");
        button.addClass("animal");
        button.attr("data-name", animalsArray[i]);
        button.text(animalsArray[i]);
        $("#buttons-display").append(button);
    }
}

// function for 'go/add animal' button
$("#add-animal").on("click", function (event) {
    event.preventDefault();

    var newAnimal = $("#animal-input").val().trim();

    animalsArray.push(newAnimal);

})

renderButtons();