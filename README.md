# We're creating pokemon memory game
# Game instructions
## Game set up
* There's a list of cards. Each one is clickable
* A successful click increases your score by 1
* A successful click includes if you haven't clicked on it before
* There's a score called best score which tracks your best score 
* When clicking a card it randomizes the order
### Notes
- We don't deal with local storage
* It also doesn't say when you click on all elements. 

# Specs
-start with 3 images
### Getting the images
-https://pokeapi.co/api/v2/pokemon/[pokemon]/sprites/other/official-artwork/front_default
-then provides you a key value pair
-fyi you might get away with random pokemon such as "https://pokeapi.co/api/v2/pokemon/3/" so it can 
be only gen 1 pokemon
## Needed components
#### Card
- Has an img with url of api passed as prop, as well as a name
- onClick prop
#### Score
-High score and current score prop, it's a state managed by root cuz you need to access
both to see if one has beaten the high score
## Needed functions
- On click function that you're passing as a prop(cuz you're sharing info at the parent level)
    - On click, send info to a state containing that it's been clicked.
    - if already clicked, incorrect(). else correct(). Then randomize()
-Randomize function?
    -map for item in pokemon list. When randomzie we randomize a list of pokemon names
    -This works cuz we can shuffle an array. Here's a medium article on how to do
    [link](https://coureywong.medium.com/how-to-shuffle-an-array-of-items-in-javascript-39b9efe4b567)
    -possible issue, does randomziing the array cause a new objecr reference?
    -it should cuz we're setting a new object, but if it doesn't we need to review rendering
-Correct()
    -get prop=name and based on AddList state passed as a prop. We add it to the list of already clicked
    -send notification. this is a seperate function that we can pass as an import function to clean up data
-Incorrect. Reset AlreadyClicked list state. Call upon notificion in jsx file, or that's a css thing

-Notificaiton()=> change css for an object of the notification

## SetEffects
-Dependecy is score. If score>personal best, set personal best === score. 
-do we need dependecy? Yes cuz it deals with display right?
Clean up
- Clean up the api request when componenet is unmounted=> does this lead to memory leak? yes cuz you randomize the items
    -maybe for animation

# Finishings Specs
- css, src, and styles. Background image
- I want to play with animations on this one, i.e. a correct! and an "incorrect" animation via css
- Deploy

## Steps
1. load pokemon and it's iamge with states
2. random shuffle every time when click
3. set up correct and incorrect functions(without notifications)
4. set effects and scoring