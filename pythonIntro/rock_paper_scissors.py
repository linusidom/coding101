# เป่ายิ้งฉุบ - Rock Paper Scissors

import random


# Player vs Computer

# Minimum of 3 rounds

'''

Using For Loops and if/else

'''



# choices = ['rock', 'paper', 'scissors']

# # print(random.choice(choices))

# scores = {
# 	'player': 0,
# 	'computer':0
# }

# for i in range(3):
# 	player_choice = input('\nEnter your choice: ')

# 	player_choice.lower()
# 	computer_choice = random.choice(choices)

# 	if player_choice in choices:

# 		# print(player_choice)

# 		print(player_choice, computer_choice)
# 		if (
# 			(player_choice == 'rock' and computer_choice == 'scissors')
# 			or (player_choice == 'paper' and computer_choice == 'rock')
# 			or (player_choice == 'scissors' and computer_choice == 'paper')):
# 			print(f'You won! {player_choice} beats {computer_choice}')
			
# 			scores['player']  += 1

# 		elif (
# 			(computer_choice == 'rock' and player_choice == 'scissors')
# 			or (computer_choice == 'paper' and player_choice == 'rock')
# 			or (computer_choice == 'scissors' and player_choice == 'paper')):
# 			print(f'Computer won! {computer_choice} beats {player_choice}')

# 			scores['computer'] += 1

# 		elif player_choice == computer_choice:
# 			print(f'Round Tied {player_choice} - {computer_choice}')
# 		else:
# 			print('Should not print this')

# 	else:
# 		print('illegal choice')
# 		continue


# print(scores)






'''

Change / Re-Factor to Functions

'''


def inputs():
	choices = ['rock', 'paper', 'scissors']
	player_choice = input('\nEnter your choice: ')

	player_choice.lower()
	computer_choice = random.choice(choices)
	if player_choice in choices:
		return player_choice, computer_choice
	else:
		print('illegal choice')
		return inputs()


def rps_check(player_choice, computer_choice, scores):
	if (
		(player_choice == 'rock' and computer_choice == 'scissors')
		or (player_choice == 'paper' and computer_choice == 'rock')
		or (player_choice == 'scissors' and computer_choice == 'paper')):
		output = f'You won! {player_choice} beats {computer_choice}'
		
		scores['player']  += 1

	elif (
		(computer_choice == 'rock' and player_choice == 'scissors')
		or (computer_choice == 'paper' and player_choice == 'rock')
		or (computer_choice == 'scissors' and player_choice == 'paper')):
		output = f'Computer won! {computer_choice} beats {player_choice}'

		scores['computer'] += 1

	elif player_choice == computer_choice:
		output = f'Round Tied {player_choice} - {computer_choice}'
	else:
		output = 'Should not print this'


	print(output)
	return scores



def rock_paper_scissors():

	# print(random.choice(choices))
	scores = {
		'player': 0,
		'computer':0
	}

	for i in range(3):


		player_choice, computer_choice = inputs()

		scores = rps_check(player_choice, computer_choice, scores)

	print(scores)

# rock_paper_scissors()









'''

Change / Re-Factor to Classes

'''



class RPS:

	def __init__(self, rounds=3):
		self.scores = {
			'player': 0,
			'computer':0
		}
		self.rounds = rounds

	def inputs(self):
		choices = ['rock', 'paper', 'scissors']
		player_choice = input('\nEnter your choice: ')

		player_choice.lower()
		computer_choice = random.choice(choices)
		if player_choice in choices:
			return player_choice, computer_choice
		else:
			print('illegal choice')
			return inputs()


	def rps_check(self,player_choice, computer_choice, scores):
		if (
			(player_choice == 'rock' and computer_choice == 'scissors')
			or (player_choice == 'paper' and computer_choice == 'rock')
			or (player_choice == 'scissors' and computer_choice == 'paper')):
			output = f'You won! {player_choice} beats {computer_choice}'
			
			self.scores['player']  += 1

		elif (
			(computer_choice == 'rock' and player_choice == 'scissors')
			or (computer_choice == 'paper' and player_choice == 'rock')
			or (computer_choice == 'scissors' and player_choice == 'paper')):
			output = f'Computer won! {computer_choice} beats {player_choice}'

			self.scores['computer'] += 1

		elif player_choice == computer_choice:
			output = f'Round Tied {player_choice} - {computer_choice}'
		else:
			output = 'Should not print this'


		print(output)
		return self.scores



	def rock_paper_scissors(self):
		for i in range(self.rounds):
			player_choice, computer_choice = inputs()
			self.scores = rps_check(player_choice, computer_choice, self.scores)

		# print(self.scores)

	def check_score(self):
		# print(self.scores['player'])
		if self.scores['player'] > self.scores['computer']:
			return f"You Won! {self.scores['player']} to {self.scores['computer']}"
		elif self.scores['player'] < self.scores['computer']:
			return f"You Lost! {self.scores['computer']} to {self.scores['player']}"
		elif self.scores['player'] == self.scores['computer']:
			return f'Tie Game!!'

game = RPS(rounds=3)
game.rock_paper_scissors()
print(game.check_score())
# print(dir(game))
# print(type(game))




























