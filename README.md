# Front end application

## Highter order overview

So, we have requirements to make a front for a XO game.

Firstly:

- domainTypes
- useCaseList

Second:

- main successfull scenario for each use case
- marcup to use-cases map

Third:

- framework related stuff (concern list)
- concern - to realization map

## Buisiness stuff

### Use case diagram (looks better on board):

Cloud level     :Fun playing
Kite level      :[ Play game, View statistics ]
Sea (user) level:[ [Make move, See result (in case game ended), restart current game, start new game], [ Introduce himself, clear statistics ] ]
Underwater      :[ [Routing to separate, we already have the back-end] ]

### Domain types

CurrentGame {
  players: array[]
  nextMove
  winner?
  board: array[3, 3]: symbol
}

Player {
  name
  symbol
}

Stats {
  games: number
  playerWon
  xWon
  oldGames
}

oldGame {
  winner
  team
}

### Successful scenartios

#### Make move

pre: 
- player on a game screen
- CurrentGame is not ended

1. Player click board

2.1 After loading square is occupied by player's symbol

or

2.2 After loading result page is shown with controlle like restart or start new

#### Introduce himself

pre:
- player on stats page

1. Player enters his name
2. Player clicks OK
3. Statistic reset and name changed

#### Clear statistics

pre:
- player on stats page

1. Player clicks clear statistic button
2. Statistic reset and name changed

### Marcup to Use cases map

I have it in paper. It's ok.

We have
- Game page
- Game result page
- Statistic page

#### Game page:

- shows whose turn now
- has 3*3 field of cells
- has buttons to reset current or start new game
- has button goto statistic

Components: [Title, Board, BoardCell, Button]

#### Game result page:

- shaws a winner
- has buttons to reset current or start new game
- has button goto statistic

Components: [Title, Button]


#### Statistic page:

- has player name input and Ok button
- has statistic for player shown
- has button to reset statistic

Components: [TextInputConfirm, Button, StatisticPage]

## Framework

### Concern list

Above there are a list of concerns in our application. Not all of them different.
Only 

We have:

- Buisiness Logic (Use cases) -- redux-saga
- Buisiness Logic (Map app domain to view) -- react-redux
- Domain Types -- typescript
- API calls -- native typescript
- Model -- redux
- Representation -- react

#### Domain Types:

We will implement our domain types with Typescript. I'd better even deploy them separately to use both on client and server.

We have the list above

#### Buisiness Logic (Use cases)

We'll implement our use cases with redux-saga

We have the list above

Use cases make API calls
Changes the model
Maps API results to Model definitions

#### Buisiness Logic (Map app domain to view)

To spy on our model and update interface each time it changes we'll use react-redux module. It's pretty obvious solution, but it's role in the whole picture is often underestimate.

We make a HOC for each page control.

Maps our app state into pictures.

#### API calls

We'll create a service dedicated to API calls. Also API responce types belong here.
endpoints list: https://documenter.getpostman.com/view/1050162/frontend-testcase/7TFGFKr?version=latest#0029d0d0-1cdc-af82-5298-8de08c9dff6f

#### Model

We'll store CurrentGame, CurrentPlayer, Stats and oldGamesList
We'll implement model using redux.
* Test env - mocha or jest

It stores data.

#### Representation(Components)

We have a list of component in map use cases to marcup section.
We'll create a component out of each of it.

* Test env - storybook

# Application is not finished.

Here we have another concept proof about how we can develop things separately.

In this case:

Components (view parts) are developed in ```storybook``` and ***tested*** by glance.
Model (the thing that ***stores data*** provides us with ***action order*** and ***time travel***) is developed using tdd and covered with ***tests***.

The ***Buisiness logic*** require a pair of programmers (to simultaneously hold ***buisiness logic*** ***scope*** and ***programming language***)
Even in ```Typescript``` writing the ***good*** code alone takes like x5 time
