import React from 'react';
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';

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
      <div>
        <SearchBar onSearchTextChange={this.handleSearchTextChange} onStockedCheckChange={this.handleStockedCheckChange} />
        <ProductTable />
      </div>
    );
  }
}
