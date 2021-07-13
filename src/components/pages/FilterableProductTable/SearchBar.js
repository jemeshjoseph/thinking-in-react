import React from 'react';


export default class SearchBar extends React.Component {
  constructor(props) {
    super(props);
  }

  handleOnChangeSearchText = (e) => {
    console.log('On SearchBar component, searchText: ', e.target.value);
    this.props.onSearchTextChange(e.target.value);
  }

  handleCheckboxChange = (e) => {
    console.log('On SearchBar component, checked: ', e.target.checked);
    this.props.onStockedCheckChange(e.target.checked);
  }

  render() {
    return (
      <div>
        <input type="text" id="searchText" placeholder="Search..." onChange={this.handleOnChangeSearchText} />
        <br />
        <input type="checkbox" id="stocked" onChange={this.handleCheckboxChange} />
        <label>Only show products in stock</label>
      </div>
    );
  }
}