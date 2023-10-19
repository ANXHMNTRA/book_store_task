import './App.css';
import Display from './components/Display';

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <div className="topnav">
          <div className="header">
            {/* <h1> Table Data Visualization</h1> */}
          </div>
        </div>
      </header>
      <div style={{ margin: "10px", display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <Display />
      </div>


    </div>
  );
}

export default App;
