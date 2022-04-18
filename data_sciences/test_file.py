# str1 = '''Achy	Frozen	Raw
# Airy	Full	Rolling
# Alive	Fuzzy	Shaky
# Bloated	Goose Bumpy	Sharp
# Blocked	Gurgling	Shimmering
# Breathless	Hard	Shivery
# Brittle	Heavy	Shudder
# Bubbly	Hot	Silky
# Burning	Icy	Smooth
# Buzzing	Intense	Soft
# Chilled	Itchy	Spacious
# Clammy	Jagged	Spacious Breathing
# Closed	Jittery	Spasming
# Cold	Jumbly	Sticky
# Congested	Jumpy	Still
# Constricted	Knotted	Stretchy
# Constricted Breathing	Light	Stringy
# Contracted	Limp	Strong
# Cool	Loose	Suffocating
# Cozy	Nauseous	Sweaty
# Cramped	Numb	Tender
# Dense	Open	Tense
# Dizzy	Paralyzed	Thick
# Dull	Pounding	Throbbing
# Elastic	Pressure	Tickly
# Electric	Prickly	Tight
# Empty	Puffy	Tightness of skin
# Energized	Pulled	Tingling
# Expanding	Pulsing	Trembling
# Faint	Quaking	Twitchy
# Fluid	Quiet	Vibration
# Flushed	Quivering	Warm'''

list1 = ['-Achy',
'-Frozen',
'-Raw',
'+Airy',
'+Full',
'+Rolling',
'+Alive',
'-Fuzzy',
'-Shaky',
'-Bloated',
'-GooseBumpy',
'-Sharp',
'-Blocked',
'-Gurgling',
'+Shimmering',
'-Breathless',
'-Hard',
'-Shivery',
'-Brittle',
'-Heavy',
'-Shudder',
'-Bubbly',
'-Hot',
'+Silky',
'-Burning',
'-Icy',
'+Smooth',
'+Buzzing',
'-Intense',
'+Soft',
'+Chilled',
'-Itchy',
'+Spacious',
'-Clammy',
'-Jagged',
'+Spacious Breathing',
'-Closed',
'-Jittery',
'-Spasming',
'-Cold',
'-Jumbly',
'-Sticky',
'-Congested',
'-Jumpy',
'+Still',
'-Constricted',
'-Knotted',
'+Stretchy',
'-Constricted Breathing',
'+Light',
'+Stringy',
'-Contracted',
'-Limp',
'+Strong',
'+Cool',
'+Loose',
'-Suffocating',
'+Cozy',
'-Nauseous',
'-Sweaty',
'-Cramped',
'-Numb',
'+Tender',
'-Dense',
'+Open',
'-Tense',
'-Dizzy',
'-Paralyzed',
'-Thick',
'-Dull',
'-Pounding',
'-Throbbing',
'+Elastic',
'-Pressure',
'+Tickly',
'+Electric',
'-Prickly',
'-Tight',
'-Empty',
'-Puffy',
'-Tightness of skin',
'+Energized',
'-Pulled',
'-Tingling',
'+Expanding',
'-Pulsing',
'-Trembling',
'-Faint',
'-Quaking',
'-Twitchy',
'+Fluid',
'+Quiet Vibration',
'-Flushed',
'-Quivering',
'+Warm']


met_list = []

unmet_list = []

for item in list1:
    if item.startswith('-'):
        unmet_list.append(item[1:])
unmet_list.sort()

for item in list1:
    if item.startswith('+'):
        met_list.append(item[1:])
met_list.sort()

for item in unmet_list:
    print(item)

for item in met_list:
    print(item)