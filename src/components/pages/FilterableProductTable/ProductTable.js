import React from 'react';
import { getProducts } from '../../../services/ProductsService';
import ProductCategoryRow from './ProductCategoryRow';
import ProductRow from './ProductRow';

export default class ProductTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      productsList: []
    };
  }

  componentDidMount() {
    getProducts().then(data => {
      console.log(data);
      this.setState({ productsList: data });
    })
  }

  render() {
    if (!this.state.productsList.length) {
      return <div>No products to show</div>
    }

    let rows = [];
    let categories = [];
    this.state.productsList.forEach((product, index) => {
      if (product.name.indexOf(this.props.searchText) === -1) {
        return;
      }

      if (this.props.isStocked && !product.stocked) {
        return;
      }

      if (categories.indexOf(product.category) === -1) {
        categories.push(product.category);
        rows.push(<ProductCategoryRow key={product.category} category={product.category} />);
      }
      rows.push(<ProductRow key={index} product={product} />);
    });

    return (
      <div>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {rows}
          </tbody>
        </table>
      </div>
    );
  }
}