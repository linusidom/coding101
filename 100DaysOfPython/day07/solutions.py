'''

Build out Rock paper scissors

Create a computer game that takes user input and compares it against computer selection
Rock beats Scissors
Paper beats Rock
Scissors beats Paper


Use the Random Library
Keep the game going with a while loop
Use Lists
Use Conditionals to check who won (if/elif/else)

'''

# 0 - Rock
# 1 - Paper
# 2 - Scissors


# Use the Random Library
import random

# Use Lists
rock_paper_scissors = [0,1,2]
rock_paper_scissors_words = ['Rock','Paper','Scissors']
game_is_running = True
# Keep the game going with a while loop

while game_is_running:
    user = input('Please choose Rock, Paper, or Scissors (0,1,2): ')
    computer = random.choice(rock_paper_scissors)

    # One of the downsides of converting to an int without checking first
    # print(int(user)) # this will generate an error

    # Is digit will use what is called a 'try/except' block
    # The order of these if statement DOES Matter
    if not user.isdigit():
        print('This is not a number')
    elif int(user) not in rock_paper_scissors:
        print('Hey that is an invalid selection')
    
    # print('Selections', user, computer)

    # print(type(user), type(computer))

    else:
        user = int(user)
        # Use Conditionals to check who won (if/elif/else)

        # Rock beats scissors
        if user == 0 and computer == 2:
            print(f'You win! You played {rock_paper_scissors_words[user]} and the computer played {rock_paper_scissors_words[computer]}')
        
        # Paper beats Rock
        elif user == 1 and computer == 0:
            print(f'You win! You played {rock_paper_scissors_words[user]} and the computer played {rock_paper_scissors_words[computer]}')
        
        # Scissors beats paper
        elif user == 2 and computer == 1:
            print(f'You win! You played {rock_paper_scissors_words[user]} and the computer played {rock_paper_scissors_words[computer]}')
        
        # Tie
        elif user == computer:
            print(f"It's a Tie! You played {rock_paper_scissors_words[user]} and the computer played {rock_paper_scissors_words[computer]}")
        
        # Or else the computer wins
        else:
            print(f'Sorry you lost.  You played {rock_paper_scissors_words[user]} and the computer played {rock_paper_scissors_words[computer]}')

        keep_playing = input("Would you like to play again? 'yes' or 'no' ")
        if keep_playing == 'no':
            game_is_running = False
            print('Thank you for playing, have a nice day :)')

