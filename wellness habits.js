function answerQuiz() {
    

    var prefList = document.getElementsByName("pref");
    var durList = document.getElementsByName("work");
    var pref = 0;
    var dur = 0;

    for (var i = 0; i < prefList.length; i++) {
        if (prefList[i].checked) {
            pref = prefList[i].value;
        }
        if (durList[i].checked) {
            dur = durList[i].value;
        }
    }
    var message;
    if (pref == "exercise" || pref == "social" || pref == "relax") {
        if (dur == "light" || dur == "medium" || dur == "heavy") {
            document.getElementById("quiz").style.display = "none";
            message = freetime(pref, dur);
            document.getElementById("reset").style.display = "block";
        } else {
            message = "You must select a duration";
        }
    } else {
        message = "You must select a preference";
    }
   document.getElementById("result").innerHTML = message;

   
}

function resetQuiz() {
    document.getElementById("quiz").style.display = "block";  
    document.getElementById("quiz").reset();
    document.getElementById("reset").style.display = "none";
    
    var message = "";
    document.getElementById("result").innerHTML = message;

}

function freetime(prefences, duration){
    if (prefences == "exercise")
    {
        return exercise(duration)
    }
    else if (prefences == "social")
    {
        return socialise(duration)
    }
    else if (prefences == "relax")
    {
        return relaxing(duration)
    }
    else
    {
        return "error"
    }
}       


function exercise(duration)
{
    if (duration == "heavy")
    {
        return "Don't forget to take at least 15 minutes to do exercise you enjoy<br> What about a quick run or doing 20 minutes of yoga?"
    }
    else if (duration == "medium")
    {
        return "Don't forget to take at least 30 minutes to do exercise you enjoy<br> How about taking 40 minutes to do some stretches and go on a bike ride?"        
    }
    else if (duration == "light")
    {
        return "Don't forget to take at least 45 minutes to do exercise you enjoy<br> Maybe take an hour long walk or do an exercise class?"        
    }
    else
    {
        return "error2"
    }
}

function socialise(duration)
{
    if (duration == "heavy")
    {
        return "Don't forget to take at least 15 minutes to take a break and refresh your mind<br> Why don't you take 20 minutes to call a friend or go grab a coffee with them?";
        
    }
    else if (duration == "medium")
    {
        return "Don't forget to take at least 30 minutes to take a break and refresh your mind<br> You could catch up with a friend - what about going for a walk around the park or doing a video call?"
        
    }
    else if (duration == "light")
    {
        return "Don't forget to take at least 45 minutes to take a break and refresh your mind <br> Maybe take a long walk or have a meal with someone?";
        
    }
    else
    {
        return "error 3"
    }
}
function relaxing(duration)
{
    if (duration == "heavy")
    {
        return "Don't forget to take at least 15 minutes to give your eyes a break from screens <br> What about reading a book for a bit or doing some meditation?";
        
    }
    else if (duration == "medium")
    {
        return "Don't forget to take at least 30 minutes to give your eyes a break from screens <br> Try cooking a nice meal or doing some art for a bit";
        
    }
    else if (duration == "light")
    {
        return "Don't forget to take at least 45 minutes to give your eyes a break from screens <br> Maybe spend a while painting or drawing, or how about solving some puzzles?";
        
    }
    else
    {
        return "error4";
    }
}

