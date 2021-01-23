def freetime():
    prefences = input("To recharge what do you prefer to do; exercise, socialise or relaxing : ")
    duration = input("How much work load do you have today; heavy, meduim, light : ")
    if prefences == "exercise":
        exercise(duration)
    elif prefences == "socialise":
        socialise(duration)
    elif prefences == "relaxing":
        relaxing(duration)
    else:
        print("error")
        print("please type in one of the options given")
        freetime()
        
def exercise(duration):
    if duration == "heavy":
        print("Take 20 minutes to do yoga, a 15 minute run")
        print("Dont forget to take at least 15 minutes to do exercise you enjoy")
        exit()
    elif duration == "medium":
        print("Take 40 mins to stretch and ride a bike")
        print("Dont forget to take at least 30 minutes to do an exercise you enjoy")
        exit()
    elif duration == "light":
        print("Take an hour walk around the city, take an hour zumba class")
        print("Dont forget to take at least 45 minutes to exercise")
        exit()
    else:
        print("error")
        print("please type in one of the option given")
        freetime()
def socialise(duration):
    if duration == "heavy":
        print("Take 20 minutes to go grab a coffee ,tea etc with a friend or call a friend")
        print("Dont forget to take at least 15 minutes to take a break and refresh your mind")
        exit()
    elif duration == "medium":
        print("Take 40 mins to go to a park with a friend and talk or video call a friend")
        print("Dont forget to take at least 30 minutes to take a break and refresh your mind")
        exit()
    elif duration == "light":
        print("Take an hour walk with a friend around the city, or take an hour to eat with a friend")
        print("Dont forget to take at least 45 minutes to take a break and refresh your mind")
        exit()
    else:
        print("error")
        print("please type in one of the option given")
        freetime()
def relaxing(duration):
    if duration == "heavy":
        print("Take 20 read a book, a 15 meditation session")
        print("Dont forget to take at least 15 minutes to give your eyes a break from looking at the screen")
        exit()
    elif duration == "medium":
        print("Take 40 mins to cook some food or 35 minutes drawing")
        print("Dont forget to take at least 30 minutes to give your eyes a break from looking at the screen")
        exit()
    elif duration == "light":
        print("Take an hour to paint, take an hour to solve puzzles e.g sudoku")
        print("Dont forget to take at least 45 minutes to give your eyes a break from looking at the screen")
        exit()
    else:
        print("error")
        print("please type in one of the option given")
        freetime()
freetime()