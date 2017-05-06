import React from 'react';
import { getFunName } from '../helpers';

class StorePicker extends React.Component {
  // constructor(){
  //   super();
  //   this.gotToStore = this.goToStore.bind(this);
  // }
  goToStore(event){
    event.preventDefault();
    console.log('You Changed the URL');
    // first grab the text from the box
    console.log(this.storeInput);
    const storeId = this.storeInput.value;
    //second we're going to transition from / to /store/:storeId
    this.context.router.transitionTo(`/store/${storeId}`);

  }

  render() {
    // Anywhere else
    return (
      <form className="store-selector" onSubmit={(e)=> this.goToStore(e)}>
        { /* Comment inside return */}
        <h2>Please Enter A Store</h2>
        <input type="text" required placeholder="Store Name" defaultValue={getFunName()} ref={ (input) => { this.storeInput = input} } />
        <button type="submit">Visit Store -></button>
      </form>
    )
  }
}

StorePicker.contextTypes = {
  router: React.PropTypes.object
}

export default StorePicker;
