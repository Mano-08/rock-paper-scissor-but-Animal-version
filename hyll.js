var matches_won_by_user=0;
var matches_won_by_computer=0;
var available_options=["mouse","cat","elephant"];
var user_random_number = 0;


function the_game(a) {
    if (a===1) {
        document.querySelector(".user-choice-display").setAttribute("src", "images/img1.png");
    }
    if (a===2) {
        document.querySelector(".user-choice-display").setAttribute("src", "images/img2.png");
    }
    if (a===3) {
        document.querySelector(".user-choice-display").setAttribute("src", "images/img3.png");
    }
}

function the_computer() {
    var random_number=Math.floor( Math.random() * 3 ) + 1;
    var random_image_obtained = "images/img" + random_number + ".png";
    document.querySelector(".computer-choice-display").setAttribute("src", random_image_obtained);
}

function cat_respond() {
    user_random_number = 2;
    the_game(user_random_number);
    the_computer();
}

function mouse_respond() {
    user_random_number = 1;
    the_game(user_random_number);
    the_computer();
}

function elephant_respond() {
    user_random_number = 3;
    the_game(user_random_number);
    the_computer();
}













