import './App.css';

const task = (value) => {
  return (
    <li>{value}</li>
  );
}

const tasksList = [
  'Have dinner',
  'Study React Components',
  'Call mom',
  'Take the garbage out',
  'Make tomorrow\'s lunch',
];

function App() {
  return (
    <div className='MainContainer'>
      <div>
        <h1>To-do Today</h1>
        <ol className = 'TasksList'>
          {tasksList.map((item) =>  task(item))}
          {[<li>Dummy task 1</li>, <li>Dummy task 2</li>]}
        </ol>
      </div>
    </div>
  );
}

export default App;
