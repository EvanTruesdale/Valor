// import './App.css';
import TextField from '@mui/material/TextField';
import { useState } from 'react';
import { Button } from '@mui/material';

function App() {

  const [content, setContent] = useState("");

  const apiUrl = "http://localhost:8090/";
  const sendRequest = (host) => {
    fetch(host)
    .then(res => res.json())
    .then((result) => {
      setContent(JSON.stringify(result));
    })
    .catch(error => {
      console.log(error);
    })
  }

  const [request, setRequest] = useState("");
  const handleRequestChange = (event) => {
    setRequest(event.target.value);
  }
  const handleRequestSubmit = () => {
    console.log(apiUrl+request);
    sendRequest(apiUrl+request);
  };

  return (
    <div className="App">
      UI Pending<br/>
      <TextField
        id="requestField"
        label="Request"
        value={request}
        onChange={handleRequestChange}
      />
      <br/>
      <Button onClick={handleRequestSubmit}>Submit</Button>
      <br/>
      {content}
    </div>
  );
}

export default App;
