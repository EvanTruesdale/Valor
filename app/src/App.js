import './App.css';

function App() {

  let host = "http://localhost:8090/weapons/iklwa";
  fetch(host)
    .then(res => res.json())
    .then((result) => {
      console.log(result.thrust)
    })


  return (
    <div className="App">
      UI Pending
    </div>
  );
}

export default App;
