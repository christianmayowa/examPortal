// GET STARTED PAGE
var getStartedBox = document.querySelector(".getstarted");


// GETTING THE WHOLE FORM
var form = document.querySelector("form");

// GETTING THE LOGIN BUTTON
var getStarted = document.querySelector(".getstarted button");
getStarted.addEventListener("click", function(){
    getStartedBox.style.display = "none"
    form.style.display = "block"
})




// GETTING THE SUBMIT BUTTON IN MY FORM
var submit = document.querySelector("[type='submit']");

// GETTING THE INPUT ELEMENTS
var fName = document.getElementById("fname")
var lName = document.getElementById("lname")
var regNo = document.getElementById("regNo")


// CLASSIC EXAM INSTRUCTIONS
// GETTING THE PARENT DIV
var parent = document.getElementsByClassName("parent")[0];

// GETTING THE START BUTTON PRESENT IN THE DIV
var startButton = document.getElementById("startButton");

// CATCHING THE TIMER DIV OR H1'
var timer = document.querySelector(".timer");


// GETTING THE FIRST QUESTION DIV
var question = document.getElementsByClassName("fq");

// GETTING THE FIRST QUESTION DIV
// var Q2 = document.getElementsByClassName("fq")[1];

// GETTING THE NEXT BUTTON PRESENT IN QUESTION 1
var nextButton = document.getElementsByClassName("next");

// GETTING THE PREVIOUS BUTTON THAT ACTUALLY TAKE YOU BACK
var prevButton = document.getElementsByClassName("previous");

// GETTING THE FINAL SUBMIT BUTTON
var finalSubmitButton = document.getElementsByClassName("submit");

// GETTING THE RESULT DIV
var resultDiv = document.getElementsByClassName("result");


// GETTING THE TEXT IN THE CHECK YOUR RESULT DIV
var fullnameCog = document.getElementsByClassName("fullnameCog")[0];

// GETTING THE TEXT IN THE CHECK YOUR second RESULT DIV
var fullname = document.getElementsByClassName("fullname")[0];

// GETTING THE TEXT IN (FOR THE REG NUMBER) THE CHECK YOUR second RESULT DIV
var regNoText = document.querySelector(".regnumber");

// GETTING THE TEXT IN (CONGRATULATORY MESSAGE OR FAILURE MESSAGE) THE CHECK YOUR second RESULT DIV
var congText = document.querySelector("#finalresult");

// GETTING THE TEXT IN (FINAL SCORE) THE CHECK YOUR second RESULT DIV
var finalScoreText = document.querySelector(".score");

// GETTING THE TEXT IN (PERCENTAGE) THE CHECK YOUR second RESULT DIV
var percentageScoreText = document.querySelector(".totalscore");

// ADDING EVENTLISTENER TO SUBMIT BUTTON IN FORM
submit.addEventListener("click", function(e){
    e.preventDefault();
    e.preventDefault();
    if (fName.value == "") {
        fName.style.border = "3px solid red";
        fName.focus();
        return false
    } else if(lName.value == ""){
        lName.style.border = "3px solid red";
        lName.focus();
        return false
    } else if(regNo.value == ""){
        regNo.style.border = "3px solid red";
        regNo.focus();
        return false
    }

    e.preventDefault();
    form.style.display = "none"
    parent.style.display = "block"

})

// GETTING CHECK RESULT BUTTON
var checkResult = document.querySelector("#checkResult");

checkResult.addEventListener("click", function(e){
    e.preventDefault;
    resultDiv[0].style.display = "none"
    resultDiv[1].style.display = "block"

})




// CURRENT NUMBER OF PAGE
var currentPage = 0;

// START BUTTON IN THE EXAM INSTRUCTIONS

startButton.addEventListener("click", function(e){
    e.preventDefault();
    parent.style.display = "none";
    question[0].style.display = "block";
    timer.style.display = "block";

    min = 19; 
    sec = 59;
    
    var time = setInterval(function(){
        timer.innerHTML = min + ":" + sec;
        sec--;
        if (sec == 0) {
            sec = 59;
            min--;
        } else if(sec < 10) {
            sec = "0" + sec;
        }
    }, 1000)

    var timeUp = setTimeout(function(){
        clearInterval(time);
        timer.remove();
        question[currentPage].style.display = "none"
        resultDiv[0].style.display = "block"
        resultDiv[0].style.background = "red"
        fullnameCog.innerHTML = "Your Time Is Up " + fName.value + " " + lName.value + " you completed this exam";




        if (correctAnswer[0].checked == true) {
            totalScore++;
        }
        if (correctAnswer[1].checked == true) {
            totalScore++;
        }
        if (correctAnswer[2].checked == true) {
            totalScore++;
        }
        if (correctAnswer[3].checked == true) {
            totalScore++;
        }
        if (correctAnswer[4].checked == true) {
            totalScore++;
        }
        if (correctAnswer[5].checked == true) {
            totalScore++;
        }
        if (correctAnswer[6].checked == true) {
            totalScore++;
        }
        if (correctAnswer[7].checked == true) {
            totalScore++;
        }
        if (correctAnswer[8].checked == true) {
            totalScore++;
        }
        if (correctAnswer[9].checked == true) {
            totalScore++;
        }
        if (correctAnswer[10].checked == true) {
            totalScore++;
        }
        if (correctAnswer[11].checked == true) {
            totalScore++;
        }
        if (correctAnswer[12].checked == true) {
            totalScore++;
        }
        if (correctAnswer[13].checked == true) {
            totalScore++;
        }
        if (correctAnswer[14].checked == true) {
            totalScore++;
        }
        if (correctAnswer[15].checked == true) {
            totalScore++;
        }
        if (correctAnswer[16].checked == true) {
            totalScore++;
        }
        if (correctAnswer[17].checked == true) {
            totalScore++;
        }
        if (correctAnswer[18].checked == true) {
            totalScore++;
        }
        if (correctAnswer[19].checked == true) {
            totalScore++;
        }
        if (correctAnswer[20].checked == true) {
            totalScore++;
        }
        if (correctAnswer[21].checked == true) {
            totalScore++;
        }
        if (correctAnswer[22].checked == true) {
            totalScore++;
        }
        if (correctAnswer[23].checked == true) {
            totalScore++;
        }
        if (correctAnswer[24].checked == true) {
            totalScore++;
        }
        if (correctAnswer[25].checked == true) {
            totalScore++;
        }
        if (correctAnswer[26].checked == true) {
            totalScore++;
        }
        if (correctAnswer[27].checked == true) {
            totalScore++;
        }
        if (correctAnswer[28].checked == true) {
            totalScore++;
        }
        if (correctAnswer[29].checked == true) {
            totalScore++;
        }
        if (correctAnswer[30].checked == true) {
            totalScore++;
        }
        if (correctAnswer[31].checked == true) {
            totalScore++;
        }
        if (correctAnswer[32].checked == true) {
            totalScore++;
        }
        if (correctAnswer[33].checked == true) {
            totalScore++;
        }
        if (correctAnswer[34].checked == true) {
            totalScore++;
        }
        if (correctAnswer[35].checked == true) {
            totalScore++;
        }
        if (correctAnswer[36].checked == true) {
            totalScore++;
        }
        if (correctAnswer[37].checked == true) {
            totalScore++;
        }
        if (correctAnswer[38].checked == true) {
            totalScore++;
        }
        if (correctAnswer[39].checked == true) {
            totalScore++;
        }
        if (correctAnswer[40].checked == true) {
            totalScore++;
        }
        if (correctAnswer[41].checked == true) {
            totalScore++;
        }
        if (correctAnswer[42].checked == true) {
            totalScore++;
        }
        if (correctAnswer[43].checked == true) {
            totalScore++;
        }
        if (correctAnswer[44].checked == true) {
            totalScore++;
        }
        if (correctAnswer[45].checked == true) {
            totalScore++;
        }
        if (correctAnswer[46].checked == true) {
            totalScore++;
        }
        if (correctAnswer[47].checked == true) {
            totalScore++;
        }
        if (correctAnswer[48].checked == true) {
            totalScore++;
        }
        if (correctAnswer[49].checked == true) {
            totalScore++;
        }
    
    
        // CALCULATING THE FINAL RESULT BEGINS
        var total = totalScore/50 * 100 + "%";
        console.log(total);
        // CALCULATING THE FINAL RESULT ENDS

        // fullnameCog.innerHTML = "Congratulations " + fName.value + " " + lName.value + " you completed this exam";

        fullname.innerHTML = "Full Name: " +  fName.value + " " + lName.value;

        regNoText.innerHTML = "Registration Number: " + regNo.value;


        // CHECKING THE RESULT WHETHER FAIL OF PASS 
        if (totalScore >= 50) {
            congText.innerHTML = "Congratulations You Passed The Exam";
            congText.style.color = "green";

            finalScoreText.innerHTML ="Your total Score: "+  totalScore + " / 50";
            finalScoreText.style.color = "green";

            percentageScoreText.innerHTML ="Your Percentage: "+ total;
            percentageScoreText.style.color = "green";

        } else {
            resultDiv[1].style.border = "red";
            resultDiv[1].style.background = "rgba(255, 0, 0, 0.407)";

            congText.innerHTML = "Congratulations You Failed The Exam";
            congText.style.color = "red";
            
            finalScoreText.innerHTML ="Your total Score: "+  totalScore + " / 50";
            finalScoreText.style.color = "red";

            percentageScoreText.innerHTML ="Your Percentage: "+  total;
            percentageScoreText.style.color = "red";
        }


    }, 1200000)
})

// 1200000


// NEXT BUTTON 
for (i = 0; i < nextButton.length; i++) {
    nextButton[i].addEventListener("click", function() {
        nextFn(currentPage);
        currentPage++;
    })
}

function nextFn(a){
    question[a].style.display = "none";
    question[a + 1].style.display = "block";
}


// THE PREVIOUS BUTTON

// THE NUMBER OF THE CURRENT PAGE
// LOOP FOR THE PREVIOUS BUTTON
for (i = 0; i < prevButton.length; i++) {
    prevButton[i].addEventListener("click", function(){
        prevFn(currentPage);
        currentPage--;
    })
}


// ONCLICK FUNCTION
function prevFn(a){
    question[a].style.display = "none";
    question[a - 1].style.display = "block";
}

// PREVENTING THE FIRST PREVIOUS BUTTON FRONM FUNCTIONING
prevButton[0].addEventListener("click", function(e){
    e.preventDefault();
    question[0].style.display = "block";

})


// PREVENTING THE LAST NEXT BUTTON FRONM FUNCTIONING
nextButton[49].addEventListener("click", function(e){
    e.preventDefault();
    question[49].style.display = "block"
})
// GETTING ALL THE CORRECT ANSWER
var correctAnswer = document.getElementsByClassName("correct");

var totalScore = 0;

// SUBMIT BUTTON
for(i = 0; i < finalSubmitButton.length; i++){
    finalSubmitButton[i].addEventListener("click", function(){
        submitFn(currentPage);
    })
}
function submitFn(a){
    question[a].style.display = "none";
    resultDiv[0].style.display = "block";
    timer.style.display = "none";

    if (correctAnswer[0].checked == true) {
        totalScore++;
    }
    if (correctAnswer[1].checked == true) {
        totalScore++;
    }
    if (correctAnswer[2].checked == true) {
        totalScore++;
    }
    if (correctAnswer[3].checked == true) {
        totalScore++;
    }
    if (correctAnswer[4].checked == true) {
        totalScore++;
    }
    if (correctAnswer[5].checked == true) {
        totalScore++;
    }
    if (correctAnswer[6].checked == true) {
        totalScore++;
    }
    if (correctAnswer[7].checked == true) {
        totalScore++;
    }
    if (correctAnswer[8].checked == true) {
        totalScore++;
    }
    if (correctAnswer[9].checked == true) {
        totalScore++;
    }
    if (correctAnswer[10].checked == true) {
        totalScore++;
    }
    if (correctAnswer[11].checked == true) {
        totalScore++;
    }
    if (correctAnswer[12].checked == true) {
        totalScore++;
    }
    if (correctAnswer[13].checked == true) {
        totalScore++;
    }
    if (correctAnswer[14].checked == true) {
        totalScore++;
    }
    if (correctAnswer[15].checked == true) {
        totalScore++;
    }
    if (correctAnswer[16].checked == true) {
        totalScore++;
    }
    if (correctAnswer[17].checked == true) {
        totalScore++;
    }
    if (correctAnswer[18].checked == true) {
        totalScore++;
    }
    if (correctAnswer[19].checked == true) {
        totalScore++;
    }
    if (correctAnswer[20].checked == true) {
        totalScore++;
    }
    if (correctAnswer[21].checked == true) {
        totalScore++;
    }
    if (correctAnswer[22].checked == true) {
        totalScore++;
    }
    if (correctAnswer[23].checked == true) {
        totalScore++;
    }
    if (correctAnswer[24].checked == true) {
        totalScore++;
    }
    if (correctAnswer[25].checked == true) {
        totalScore++;
    }
    if (correctAnswer[26].checked == true) {
        totalScore++;
    }
    if (correctAnswer[27].checked == true) {
        totalScore++;
    }
    if (correctAnswer[28].checked == true) {
        totalScore++;
    }
    if (correctAnswer[29].checked == true) {
        totalScore++;
    }
    if (correctAnswer[30].checked == true) {
        totalScore++;
    }
    if (correctAnswer[31].checked == true) {
        totalScore++;
    }
    if (correctAnswer[32].checked == true) {
        totalScore++;
    }
    if (correctAnswer[33].checked == true) {
        totalScore++;
    }
    if (correctAnswer[34].checked == true) {
        totalScore++;
    }
    if (correctAnswer[35].checked == true) {
        totalScore++;
    }
    if (correctAnswer[36].checked == true) {
        totalScore++;
    }
    if (correctAnswer[37].checked == true) {
        totalScore++;
    }
    if (correctAnswer[38].checked == true) {
        totalScore++;
    }
    if (correctAnswer[39].checked == true) {
        totalScore++;
    }
    if (correctAnswer[40].checked == true) {
        totalScore++;
    }
    if (correctAnswer[41].checked == true) {
        totalScore++;
    }
    if (correctAnswer[42].checked == true) {
        totalScore++;
    }
    if (correctAnswer[43].checked == true) {
        totalScore++;
    }
    if (correctAnswer[44].checked == true) {
        totalScore++;
    }
    if (correctAnswer[45].checked == true) {
        totalScore++;
    }
    if (correctAnswer[46].checked == true) {
        totalScore++;
    }
    if (correctAnswer[47].checked == true) {
        totalScore++;
    }
    if (correctAnswer[48].checked == true) {
        totalScore++;
    }
    if (correctAnswer[49].checked == true) {
        totalScore++;
    }



    // CALCULATING THE FINAL RESULT BEGINS
    var total = totalScore/50 * 100 + "%";
    console.log(total);
    // CALCULATING THE FINAL RESULT ENDS

    fullnameCog.innerHTML = "Congratulations " + fName.value + " " + lName.value + " you completed this exam";

    fullname.innerHTML = "Full Name: " +  fName.value + " " + lName.value;

    regNoText.innerHTML = "Registration Number: " + regNo.value;


    // CHECKING THE RESULT WHETHER FAIL OF PASS 
    if (totalScore >= 25) {
        congText.innerHTML = "Congratulations You Passed The Exam";
        congText.style.color = "green";

        finalScoreText.innerHTML ="Your total Score: "+  totalScore + " / 50";
        finalScoreText.style.color = "green";

        percentageScoreText.innerHTML ="Your Percentage: "+ total;
        percentageScoreText.style.color = "green";

    } else {
        resultDiv[1].style.border = "red";
        resultDiv[1].style.background = "rgba(255, 0, 0, 0.407)";

        congText.innerHTML = "You Failed The Exam you are welcome to try again next year";
        congText.style.color = "red";
        
        finalScoreText.innerHTML ="Your total Score: "+  totalScore + " / 50";
        finalScoreText.style.color = "red";

        percentageScoreText.innerHTML ="Your Percentage: "+  total;
        percentageScoreText.style.color = "red";
    }
}


// GETTING THE RESTART BUTTON
var restart = document.getElementById("restart");

restart.addEventListener("click", function(e){
    e.preventDefault();
    // resultDiv[1].style.display = "none";
    // form.style.display = "block"
    window.location.reload();
})


// CHECKING IF AN SOMETHING WAS ADDED TO THE INPUT
// CHECKING FOR FIRSTNAME IF AN SOMETHING WAS ADDED TO THE INPUT
fName.addEventListener("keyup", function(){
    if (fName.value != "") {
        fName.style.border = "3px solid green";
    }
});

// CHECKING FOR LASTNAME IF AN SOMETHING WAS ADDED TO THE INPUT
lName.addEventListener("keyup", function(){
    if (lName.value != "") {
        lName.style.border = "3px solid green";
    }
})

// CHECKING FOR REGNO IF AN SOMETHING WAS ADDED TO THE INPUT
regNo.addEventListener("keyup", function(){
    if (regNo.value != "") {
        regNo.style.border = "3px solid green";
    }
})