var matches_won_by_user=0;
var matches_won_by_computer=0;
var available_options=["mouse","cat","elephant"];
var user_random_number = 0;

        

function the_game(a) {
    if (a===1) {
        
    }
    if (a===2) {
        document.querySelector(".user-choice-display").setAttribute("src", "images/img2.png");
    }
    if (a===3) {
        document.querySelector(".user-choice-display").setAttribute("src", "images/img3.png");
    }
}

function the_computer(b) {
    var random_number=Math.floor( Math.random() * 3 ) + 1;
    if (b===1) {
        if (random_number===2) {
            document.querySelector(".user-choice-display").setAttribute("src", "Results/mice_scared_left.png");
            document.querySelector(".computer-choice-display").setAttribute("src", "Results/cat_happy.png");
        }

        if (random_number===3) {
            document.querySelector(".user-choice-display").setAttribute("src", "Results/happy_mice_left.png");
            document.querySelector(".computer-choice-display").setAttribute("src", "Results/new_right.png");
        }

        if (random_number===1) {
            document.querySelector(".user-choice-display").setAttribute("src", "Results/happy_mice_left.png");
            document.querySelector(".computer-choice-display").setAttribute("src", "Results/happy_mice_right.png");
        }
    }
    
    var random_image_obtained = "images/img" + random_number + ".png";
    
}

function cat_respond() {
    user_random_number = 2;
    the_game(user_random_number);
    the_computer(user_random_number);
}

function mouse_respond() {
    user_random_number = 1;
    the_game(user_random_number);
    the_computer(user_random_number);
}

function elephant_respond() {
    user_random_number = 3;
    the_game(user_random_number);
    the_computer(user_random_number);
}













