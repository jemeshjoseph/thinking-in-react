import React from 'react';
import { getProducts } from '../../../services/ProductsService';

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
    return (
      <div>asdsad</div>
    );
  }
}