import { Main, Title, InputDiv, TextInput, Check, Clear } from "./StyledComponents";
import { useState } from 'react';

function App() {
  const InitialState = {input: ""};

  const [state, setState] = useState(InitialState);
  const [failure, setFailure] = useState(false);
  const [success, setSuccess] = useState(false);

  const inputHandler = (e) => {
    e.preventDefault();
    console.log(e.target.value);
    setState({...state, input: e.target.value})
  };

  const palindromeCheck = (str) => {
    let reverseString = str.split("").reverse().join("");
    if(str === reverseString){
      setSuccess(true);
    } else {
      setFailure(true);
    }
  }

  const clearInput = () => {
    setState({...state, input: ""});
    setFailure(false);
    setSuccess(false);
  }


  return (
    <Main>
      <Title>Palindrome Checker</Title>
      
      {failure  ? <><h2>It's not a match</h2><br></br><Clear onClick={() => clearInput()}>Try Again</Clear></> : ""}
      {success ? <><h2>It's a match</h2><br></br><Clear onClick={() => clearInput()}>Try Again</Clear></> : ""}
      { (failure === true || success === true) ?  "" : 
      (<InputDiv>
        <label htmlFor="input">
          Enter a string
          <br></br>
          <TextInput 
          type="text" 
          name="input" 
          value={state.input} 
          onChange={(e) => inputHandler(e)} 
          id="input"/>
        </label>
        <br></br>
        <Check name="check" 
        onClick={() => palindromeCheck(state.input)} >check</Check >
      </InputDiv>)
      }
    </Main>
  );
}

export default App;
