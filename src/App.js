
import './App.css';

function App() {
  return (
    <div className="container">
      <h1 style={{textAlign: 'center'}}>ToDo List</h1>
      <div className='todo'>
        <input type="text" placeholder='Todos' className='input'/>
        <div className="">
          <button className='cta'>ADD</button>
        </div>
      </div>

    </div>
  );
}

export default App;
