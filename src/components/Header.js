import React from 'react';

class Header extends React.Component {
  render() {
    return (
      <header className="top">
        <h1>Catch of the Day</h1>
        <h3 age="5000" cool={true} className="tagline">{this.props.tagline}</h3>
      </header>
    )
  }
}

export default Header;
