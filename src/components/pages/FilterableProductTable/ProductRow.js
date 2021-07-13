import React from 'react';


export default class ProductRow extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <tr>
        <td style={{ color: this.props.product.stocked ? 'black' : 'red' }}>{this.props.product.name}</td>
        <td>{this.props.product.price}</td>
      </tr>
    );
  }
}