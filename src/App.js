import CreateTodo from './components/containers/CreateTodo';
import './App.css';
import Table from './components/containers/TableContent';

function App() {
  return (
    <div className="App">
      <h1 className="AppTitle" style={{marginLeft:'20rem'}}>Create Todo App</h1>
      <div className="container" style={{marginTop:'50px'}}>
        <div className="row">
          <div className="col-lg-10 offset-lg-2 col-md-10 col-sm-12 col-xs-12">
            <CreateTodo />
            </div>
            <Table />
        </div>
      </div>
    </div>
  );
}

export default App;
