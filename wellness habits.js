
function freetime()
{
    prefences = input("To recharge what do you prefer to do; exercise, socialise or relaxing : ");
    duration = input("How much work load do you have today; heavy, meduim, light : ");
    if (prefences == "exercise")
    {
        exercise(duration);
    }
    else if (prefences == "socialise")
    {
        socialise(duration);
    }
    else if (prefences == "relaxing")
    {
        relaxing(duration);
    }
    else
    {
        <p>"error"</p>;
        <p>"please type in one of the options given"</p>;
        freetime();
    }
}       
function exercise(duration)
{
    if (duration == "heavy")
    {
        <p>"Take 20 minutes to do yoga, a 15 minute run"</p>;
        <p>"Dont forget to take at least 15 minutes to do exercise you enjoy"</p>;
        exit();
    }
    else if (duration == "medium")
    {
        <p>"Take 40 mins to stretch and ride a bike"</p>;
        <p>"Dont forget to take at least 30 minutes to do an exercise you enjoy"</p>;
        exit();
    }
    else if (duration == "light");
    {
        <p>"Take an hour walk around the city, take an hour zumba class"</p>;
        <p>"Dont forget to take at least 45 minutes to exercise"</p>;
        exit();
    }
    else
    {
        <p>"error"</p>;
        <p>"please type in one of the option given"</p>;
        freetime();
    }
}
function socialise(duration)
{
    if (duration == "heavy")
    {
        <p>"Take 20 minutes to go grab a coffee ,tea etc with a friend or call a friend"</p>;
        <p>"Dont forget to take at least 15 minutes to take a break and refresh your mind"</p>;
        exit();
    }
    else if (duration == "medium")
    {
        <p>"Take 40 mins to go to a park with a friend and talk or video call a friend"</p>.;
        <p>"Dont forget to take at least 30 minutes to take a break and refresh your mind"</p>;
        exit();
    }
    elif (duration == "light")
    {
        <p>"Take an hour walk with a friend around the city, or take an hour to eat with a friend"</p>;
        <p>"Dont forget to take at least 45 minutes to take a break and refresh your mind"</p>;
        exit();
    }
    else
    {
        <p>"error"</p>;
        <p>"please type in one of the option given"</p>;
        freetime();
    }
}
function relaxing(duration)
{
    if (duration == "heavy")
    {
        <p>"Take 20 read a book, a 15 meditation session"</p>;
        <p>"Dont forget to take at least 15 minutes to give your eyes a break from looking at the screen"</p>;
        exit();
    }
    else if (duration == "medium")
    {
        <p>"Take 40 mins to cook some food or 35 minutes drawing"</p>;
        <p>"Dont forget to take at least 30 minutes to give your eyes a break from looking at the screen"</p>;
        exit();
    }
    else if (duration == "light")
    {
        <p>"Take an hour to paint, take an hour to solve puzzles e.g sudoku"</p>;
        <p>"Dont forget to take at least 45 minutes to give your eyes a break from looking at the screen"</p>;
        exit();
    }
    else
    {
        <p>"error"</p>;
        <p>"please type in one of the option given"</p>;
        freetime();
    }
}
freetime()

