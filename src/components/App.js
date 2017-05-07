import React from 'react';
import Header from './Header';
import Order from './Order';
import Inventory from './Inventory';

class App extends React.Component {
  constructor() {
    super();

    this.addFish = this.addFish.bind(this);

    // get initial state
    this.state = {
      fishes: {},
      order: {}
    };
  }

  addFish(fish) {
    // update our state
    const fishes = {...this.state.fishes};
    // ... is spread. take every item from our object (fishes) and spread it into this object. This takes a copy of our existing state and put it into the fishes state
    // add in our new fish
    const timestamp = Date.now();
    fishes[`fish-${timestamp}`] = fish;
    // set state
    // this.setState({ fishes: fishes});
    this.setState({ fishes });

  }
  render() {
    return (
      <div className="catch-of-the-day">
        <div className="menu">
          <Header tagline="Fresh Seafood Market"/>
        </div>
        <Order />
        <Inventory addFish={this.addFish}/>
      </div>

    )
  }
}

export default App;
