import './App.css';
import React from 'react';
import Header from './components/Header/Header';
import PageRouter from './routes/PageRouter';
class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header />
        <main>
          <PageRouter></PageRouter>
        </main>
      </div>
    );
  }
}

export default App;
