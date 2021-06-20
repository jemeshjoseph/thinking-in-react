import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import FilterableProductTable from '../components/pages/FilterableProductTable/FilterableProductTable';
import Home from '../components/pages/Home/Home';

export default class PageRouter extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/filter-product">Filterable Product Table</Link>
              </li>
              <li>
                <Link to="/hoc-example">HOC Example</Link>
              </li>
            </ul>
          </nav>

          <Switch>
            <Route path="/filter-product">
              <FilterableProductTable />
            </Route>
            <Route path="/hoc-example">
              <Home />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}
