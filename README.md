# A simple app to showcase power of redux

All credits for content and images to Stephen Grider for beautifully explaining Redux with this example
I just rephrased it to my understanding :)

## Code uses Spotify real data and needs axios package

npm i axios -s
OR
npm install axios

# Also uses https://www.npmjs.com/package/query-string query-string to Parse and stringify URL query strings

## Redux concept

ActionCreator: An ActionCreator (function) creates an Action (JS Object). This Action is made of type (describes data change) and an OPTIONAL payload property (context around change to potentially make). So, the overall action triggers a potential state change.

Dispatch: Dispatch takes in an action - copies that object and passes it to different places (components?) in the application. It hands it off to reducer (a function that takes in an action and some existing data) - it acts on both and returns it to a centralized location --> Central Store for data

Store: You define Store by combining the reducers (capsuling them as an object) and passing it off as you create the store.
Reducers keep updating and consolidating the Store!

### Redux implementation essentially means creating these 1. action creators and 2. reducers.

Dispatchers: You then initialize/create a store with all the reducers (remember these are the ones that talk to the Store)
Anytime any component can pull the state out of the Store and read and make changes to it through Dispatchers !!

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

Made possible through Redux and React-Redux (has helper functions to help to communicate efficiently with React) - we essentially leverage the Provider and connect from it

import { Provider } from "react-redux"; // in the main App.js to wrap the App component
import { connect } from "react-redux"; //inside the component that wants to interact with the store

Remember that the component that uses connect is exported as :
export default connect(mapStateToProps)(Component-Name);
where mapStateToProps is defined with that conventional name that takes the state (as argument) and returns that part of the state that is needed in the component

### In this example it is:

const mapStateToProps = (state) => {
return {
song: state.songs, //refer index.js of reducers to see that the key is the same
};
};

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

###Overall Project Structure
/src
/actions - contains files related to action creators
/index.js - like a root file (webpack looks for it by default)  
 /components - individual components of the song app
/reducers - files related to reducers
index.js - contains both redux and main react sides of the application

### All credits to Stephen Grider for beautifully explaining Redux with this example
