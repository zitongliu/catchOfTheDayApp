import React from 'react';

class StorePicker extends React.Component {
  render() {
    return (
      <form className="store-selector">
        { /*Comments inside return must be like this */}
        <h2>Please Enter A Store</h2>
        <input type="text" required placeholder="Store Name"/>
        <button type="submmit">Visit Store -></button>
      </form>
    )
  }
}

export default StorePicker;
