# berlinminigamejam_jan2016
Berlin Mini Game Jam January 2016

Play here: http://frostney.github.io/berlinminigamejam_jan2016/

# Populous-like
Don't directly control people. Plant trees, water, etc, people interact with it all.
In the dark ages.

Player Actions:
- Plant trees
- Plant crops
- Lightning

Resources:
- Wood
- Food
- People

Gameplay loop:
- Plant trees
- People collect wood for houses
- Plant food
- People collect food for repopulation
- People build more houses, grow more people
- Can only plant time limited number of trees+food, based on PrayerPoints
- Zap houses if overpopulation occurs

People AI:
If hungry:
  If has food:
    Eat food
  Else If food available:
    Get food
  else:
    Starve
Else if homeless:
  If has wood:
    Build house
  Else if wood available:
    Get wood
  Else:
    Freeze
Else:
  Pray
