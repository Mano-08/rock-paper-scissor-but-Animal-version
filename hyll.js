var matches_won_by_user=0;
var matches_won_by_computer=0;
var available_options=["mouse","cat","elephant"];
var user_random_number = 0;

function buttonAnimation1() {
 
    document.querySelector(".user-choice-display").classList.add("pressed1");
  
    setTimeout(function() {
        document.querySelector(".user-choice-display").classList.remove("pressed1");
    }, 2000);
    
  
  }

  function buttonAnimation2() {
 
    document.querySelector(".computer-choice-display").classList.add("pressed2");
  
    setTimeout(function() {
        document.querySelector(".computer-choice-display").classList.remove("pressed2");
    }, 2500);
    
  
  }

  function colorAnimation_draw() {
    document.querySelector(".container_main_bottom").classList.add("draw_background");
  
    setTimeout(function() {
        document.querySelector(".container_main_bottom").classList.remove("draw_background");
    }, 3000);
  }

  function colorAnimation_lose() {
    document.querySelector(".container_main_bottom").classList.add("lose_background");
  
    setTimeout(function() {
        document.querySelector(".container_main_bottom").classList.remove("lose_background");
    }, 3000);
}

function colorAnimation_win() {
    document.querySelector(".container_main_bottom").classList.add("win_background");
  
    setTimeout(function() {
        document.querySelector(".container_main_bottom").classList.remove("win_background");
    }, 3000);
}

function the_computer(b) {
    var random_number=Math.floor( Math.random() * 3 ) + 1;
    if (b===1) {
        if (random_number===2) {
            
            document.querySelector(".user-choice-display").setAttribute("src", "results/mice_scared_left.png");
            document.querySelector(".computer-choice-display").setAttribute("src", "results/cat_happy.png");
            colorAnimation_lose()
            buttonAnimation1()
            buttonAnimation2()
            
            
        }

        if (random_number===3) {
            document.querySelector(".user-choice-display").setAttribute("src", "results/happy_mice_left.png");
            document.querySelector(".computer-choice-display").setAttribute("src", "results/new_right.png");
            colorAnimation_win()
            buttonAnimation1()
            buttonAnimation2()
        }

        if (random_number===1) {
            document.querySelector(".user-choice-display").setAttribute("src", "results/happy_mice_left.png");
            document.querySelector(".computer-choice-display").setAttribute("src", "results/happy_mice_right.png");
            colorAnimation_draw()
            buttonAnimation1()
            buttonAnimation2()
        }
    }
    
    if (b===2) {
        if (random_number===2) {
            document.querySelector(".user-choice-display").setAttribute("src", "results/cat_happy_left.png");
            document.querySelector(".computer-choice-display").setAttribute("src", "results/cat_happy.png");
            colorAnimation_draw()
            buttonAnimation1()
            buttonAnimation2()
        }

        if (random_number===3) {
            document.querySelector(".user-choice-display").setAttribute("src", "results/cat_left.png");
            document.querySelector(".computer-choice-display").setAttribute("src", "results/elephant_right.png");
            colorAnimation_lose()
            buttonAnimation1()
            buttonAnimation2()
        }

        if (random_number===1) {
            document.querySelector(".user-choice-display").setAttribute("src", "results/cat_happy_left.png");
            document.querySelector(".computer-choice-display").setAttribute("src", "results/mice_scared_right.png");
            colorAnimation_win()
            buttonAnimation1()
            buttonAnimation2()
        }
    }
    
    if (b===3) {
        if (random_number===2) {
            document.querySelector(".user-choice-display").setAttribute("src", "results/elephant_left.png");
            document.querySelector(".computer-choice-display").setAttribute("src", "results/cat_right.png");
            colorAnimation_win()
            buttonAnimation1()
            buttonAnimation2()
        }

        if (random_number===3) {
            document.querySelector(".user-choice-display").setAttribute("src", "results/elephant_left.png");
            document.querySelector(".computer-choice-display").setAttribute("src", "results/elephant_right.png");
            colorAnimation_draw()
            buttonAnimation1()
            buttonAnimation2()
        }

        if (random_number===1) {
            document.querySelector(".user-choice-display").setAttribute("src", "results/new_left.png");
            document.querySelector(".computer-choice-display").setAttribute("src", "results/happy_mice_right.png");
            colorAnimation_lose()
            buttonAnimation1()
            buttonAnimation2()
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












