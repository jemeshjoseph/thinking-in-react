import React from 'react';
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';
import './FilterableProductTable.css';

export default class FilterableProductTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: '',
      isStocked: false
    };
  }

  handleSearchTextChange = (value) => {
    console.log('On FilterableProductTable, searchText: ', value);
    this.setState({ searchText: value });
  }

  handleStockedCheckChange = (value) => {
    console.log('On FilterableProductTable, isStocked: ', value);
    this.setState({ isStocked: value });
  }

  render() {
    return (
      <div className="filter-product-container">
        <SearchBar onSearchTextChange={this.handleSearchTextChange} onStockedCheckChange={this.handleStockedCheckChange} />
        <ProductTable searchText={this.state.searchText} isStocked={this.state.isStocked} />
      </div>
    );
  }
}
