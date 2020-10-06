# A simple app to showcase power of redux

## Redux concept

An ActionCreator (function) creates an Action (JS Object). This Action is made of type (describes data change) and an OPTIONAL payload property (context around change to potentially make) --> so overall action triggers a potential state change
Dispatch takes in an action - copies that object and passes it to different places (components?) in the application. It hands it off to reducer (a function that takes in an action and some existing data) - it acts on both and returns it to a centralized location --> Central Store for data
You define Store by combining the reducers (capsuling them as an object) and passing it off as you create the store. Reducers keep updating and consolidating the Store.

Redux implementation means creating 1. action creators and 2. reducers.
You then initialize/create a store with all the reducers (remember these are the ones that talk to the Store)
Anytime any component can pull the state out of the Store and read and make changes to it through dispatchers !!

Remember: Application's state need not be entire in the store. It is up to us to determine what parts of state are stored in redux store and which parts can remain in a React component state.

## Components

Two components:
Songlist displays list of songs and
SongDetail shows a little more detail of each

## Without Redux, the App would have been like

![Without Redux- The App would look like](/public/withoutRedux.png)

## With Redux, the App would have been like

![With Redux- The App would look like](/public/withRedux.png)

## React and Redux

Made possible through Redux and React-Redux (has helper functions to help to communicate efficiently with React)

### The react-redux package : https://react-redux.js.org/introduction/quick-start

npm install react-redux
OR
yarn add react-redux

![React-Redux implementation](/public/react-redux-implementation.png)
Provider and Connect are two additional components we create. Provider talks to the store (eternal reference to the central store) and wraps the App component.
Connect communicates to the Provider (the top most parent) - and does it NOT through the PROP system BUT through the CONTEXT system! Context allows parent to talk to child irrespective of the hierarchy in between.

Also note, the traditional Redux Action Creators now communciate through the Connect Component. We do that by telling connect function (functional component) that we want to call the SelectSong from our SongList. The connect sends down the SelectSong to the SongList component as a prop

### With the above in mind here is what the communication looks like

![React Redux detail use case](/public/react-redux-implementation-detail.png)
As seen above, we configure connect function by telling parts of the state we want and what different actioncreators we wanna wire up. This is what enables the SongList component to have State and action creators as props!

### All credits to Stephen Grider for beautifully explaining Redux with this example
