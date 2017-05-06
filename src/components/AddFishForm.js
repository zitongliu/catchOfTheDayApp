import React from 'react';
// import AddFishForm from './AddFishForm';

class AddFishForm extends React.Component {
  render() {
    return (
      <form className="fish-edit">
        <input type="text" placeholder="Fish Name"/>
        <input type="text" placeholder="Fish Price"/>
        <select>
          <option value="available">Frest!</option>
          <option value="unavailable">Sold Out!</option>
        </select>
        <textarea placeholder="Fish Desc"></textarea>
        <input type="text" placeholder="Fish Image"/>
        <button type="submit">+ Add Item</button>

      </form>
    )
  }
}

export default AddFishForm;
