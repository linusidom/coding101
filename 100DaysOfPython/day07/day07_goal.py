import random

values = ['Rock', 'Paper', 'Scissors']
choices = [0,1,2]

game_is_running = True

while game_is_running:
    user = input("Please choose Rock, Paper, or Scissors (0,1,2): ")

    if not user.isdigit():
        print('Please try again')
    
    elif int(user) not in choices:
        print('Please try again')
    
    else:
        user = int(user)
        
        computer = random.choice(choices)

        if user == 0 and computer == 2:
            print(f'\nYou win! You played {values[user]} and the computer played {values[computer]}')
        elif user == 1 and computer == 3:
            print(f'\nYou win! You played {values[user]} and the computer played {values[computer]}')
        elif user == 2 and computer == 1:
            print(f'\nYou win! You played {values[user]} and the computer played {values[computer]}')
        elif user == computer:
            print(f"\nIt's a Tie! You played {values[user]} and the computer played {values[computer]}")
        else:
            print(f'\nSorry but you lost! You played {values[user]} and the computer played {values[computer]}')
        
        play_again = input("Would you like to play again? 'yes' or 'no' ")
        if play_again == 'no':
            print("Thank you for playing :)")
            game_is_running = False