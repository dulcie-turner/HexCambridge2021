def name():
    first_name = input("what is your first name? ")
    last_name = input("what is your last name? ")
    email_check()
def email_check():
    email = input("what is your email adress? ")
    confirm_email = input("please re-enter your email to confirm ")
    if email.lower == confirm_email.lower():
        age_sleep()
    else:
        print("please enter your email again, both are not the same ")
        email_check()
def age_sleep():
    age = input("how old are you? ")
    if 0<=age<12:
        sleep = 10
        print("Recommened sleep for your age is :", sleep, "hours")
        general_occupation()
    elif 12<=age<18:
        min_sleep = 8
        max_sleep = 10
        print("Recommened sleep for your age is between ", min_sleep," to", max_sleep," hours")
        general_occupation()
    elif 18<=age<=64:
        min_sleep = 7
        max_sleep = 9
        print("Recommened sleep for your age is between ", min_sleep," to", max_sleep," hours")
        general_occupation()
    elif 64<age<=125:
        min_sleep = 7
        max_sleep = 8
        print("Recommened sleep for your age is between ", min_sleep," to", max_sleep," hours")
        general_occupation()
    else:
        print("you have entered an invalid input, please try again")
        age_sleep()
def general_occupation():
    goal = input("On average many hours a week do you want to do work or does it vary")
    occupation = input("what is your current occupation; student, umemployment, employed")
    if occupation == "student":
        education(gen_list=[])
    elif occupation == "umemployment":
        umemployment(gen_list =[])
    elif occupation == "employment":
        employment(gen_list = [])
    else:
        print("invalid input, please try again")
        general_occupation()
def unemployment(gen_list):
    gen_goal = input("Type in 1 of general long term goals")
    gen_list.appeal(gen_goal)
    more_un(gen_list)
def more_un(gen_list):
    more_goals = input("Do you have anymore general goals? yes or no ")
    if more_goals == "yes":
        umemployment(gen_list)
    elif more_goals == "no":
        exit()
    else:
        print("invalid input , please re-enter")
        more_un()
def employment(gen_list):
    sector = input("what sector do you work in?")
    job_hours = input("How long do you work everyday on average? ")
    role = input("what role do you have at work? ")
    outside = input("how many hours do you work outside of work hours everyday on average?")
    gen_goal = input("Type in 1 of general long term goals")
    gen_list.appeal(gen_goal)
    more_em(gen_list)
def more_em(gen_list):
    more_goals = input("Do you have anymore general goals? yes or no ")
    if more_goals == "yes":
        employment(gen_list)
    elif more_goals == "no":
        exit()
    else:
        print("invalid input , please re-enter")
        more_em()
def education():
    study = input("Are you in ; primary school, secondary school, sixth form, college, undergraduate, postgraduate")
    if study == "primary school":
        primary_school()
    elif study == "secondary school":
        secondary_school()
    elif study == "sixth form":
        sixth_form()
    elif study == "college":
        college()
    elif study == "undergraduate":
        undergraduate()
    elif study == "postgraduate":
        postgraduate()
    else:
        print("invalid input, please re-enter")
        education()
def primary_school():
    year = input("what year are you in? ")
    if 0<year<=6 or year == "nursey" or year == "reception":
        more(gen_list=[])
    else:
        print("please enter a valid year group")
        primary_school()
def secondary_school():
    year = input("what year are you in? ")
    if 7<=year<=11:
        more(gen_list=[])
    else:
        print("please enter a valid year group")
        secondary_school()
def sixth_form(): 
    year = input("what year are you in? ")
    if 12<=year<=14:
        subject = input("what subjects do you study? ")
        more(gen_list=[])
    else:
        print("please enter a valid year group")
        sixth_form()
def college():
    year = input("what year of college are you in? (1, 2, 3 etc)")
    if 1<=year<=10:
        subject = input("what subjects do you study? ")
        more(gen_list=[])
    else:
        print("please enter a valid year")
        college()
def undergraduate():
    year = input("what year of university are you in? (1, 2, 3 etc)")
    if 1<=year<=7:
        subject = input("what subjects do you study? ")
        work_load = input("how many hours do you usually spend doing university work?")
        more(gen_list=[])
    else:
        print("please enter a valid year")
        undergraduate()
def postgraduate():
    subject = input("what subjects do you study? ")
    work_load = input("how many hours do you usually spend doing university work?")
    more(gen_list=[]) 
def more(gen_list):  
    gen_goal = input("Type in 1 of general long term goals")
    gen_list.appeal(gen_goal)
    more_ed(gen_list=[])
def more_ed(gen_list):
    more_goals = input("Do you have anymore general goals? yes or no ")
    if more_goals == "yes":
        more(gen_list)
    elif more_goals == "no":
        exit()
    else:
        print("invalid input , please re-enter")
        more_ed()

   

name()
gen_list = []