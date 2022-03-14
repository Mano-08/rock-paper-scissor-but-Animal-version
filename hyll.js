var matches_won_by_user=0;
var matches_won_by_computer=0;
var available_options=["mouse","cat","elephant"];
var user_random_number = 0;

        


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
    
    if (b===2) {
        if (random_number===2) {
            document.querySelector(".user-choice-display").setAttribute("src", "Results/cat_happy_left.png");
            document.querySelector(".computer-choice-display").setAttribute("src", "Results/cat_happy.png");
        }

        if (random_number===3) {
            document.querySelector(".user-choice-display").setAttribute("src", "Results/cat_left.png");
            document.querySelector(".computer-choice-display").setAttribute("src", "Results/elephant_right.png");
        }

        if (random_number===1) {
            document.querySelector(".user-choice-display").setAttribute("src", "Results/cat_happy_left.png");
            document.querySelector(".computer-choice-display").setAttribute("src", "Results/mice_scared_right.png");
        }
    }
    
    if (b===3) {
        if (random_number===2) {
            document.querySelector(".user-choice-display").setAttribute("src", "Results/elephant_left.png");
            document.querySelector(".computer-choice-display").setAttribute("src", "Results/cat_right.png");
        }

        if (random_number===3) {
            document.querySelector(".user-choice-display").setAttribute("src", "Results/elephant_left.png");
            document.querySelector(".computer-choice-display").setAttribute("src", "Results/elephant_right.png");
        }

        if (random_number===1) {
            document.querySelector(".user-choice-display").setAttribute("src", "Results/elephant_left.png");
            document.querySelector(".computer-choice-display").setAttribute("src", "Results/mice_scared_right.png");
        }
    }
    
}

function cat_respond() {
    user_random_number = 2;
    the_computer(user_random_number);
}

function mouse_respond() {
    user_random_number = 1;
    the_computer(user_random_number);
}

function elephant_respond() {
    user_random_number = 3;
    the_computer(user_random_number);
}













