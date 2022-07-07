import { Main, Title, InputDiv, TextInput, Check, Clear } from "./StyledComponents";
import { useState } from 'react';

function App() {
  const InitialState = {input: ""};

  const [state, setState] = useState(InitialState);
  //palindrome fails
  const [failure, setFailure] = useState(false);
  //palindrome passes
  const [success, setSuccess] = useState(false);

  //handle input change
  const inputHandler = (e) => {
    e.preventDefault();
    setState({...state, input: e.target.value})
  };

  //check input short function
  const palindromeCheck = (e,str) => {
    e.preventDefault();
    //remove spaces
    let normalString = str.toLowerCase().replace(/\s/g, '');
    //could have used a for loop for this, chose the shorter code
    let reverseString = normalString.split("").reverse().join("");
    console.log(normalString, reverseString);
    if(normalString === reverseString){
      setSuccess(true);
    } else {
      setFailure(true);
    }
  }
 
  //clear input on click
  const clearInput = () => {
    setState({...state, input: ""});
    setFailure(false);
    setSuccess(false);
  }

  return (
    <Main>
      <Title>Palindrome Checker</Title>
      
      {failure  ? <><h2>{state.input} isn't a Match!</h2><br></br><Clear onClick={() => clearInput()}>Try Again</Clear></> : ""}
      {success ? <><h2>{state.input} is a Match!</h2><br></br><Clear onClick={() => clearInput()}>Try Again</Clear></> : ""}
      { (failure === true || success === true) ?  "" : 
      (<InputDiv>
        
          <br></br>
          <form onSubmit={(e) => palindromeCheck(e, state.input)}>
          <TextInput 
          type="text" 
          name="input" 
          value={state.input} 
          onChange={(e) => inputHandler(e)} 
          id="input"
          placeholder="Enter a string 2-20 characters"
          minLength="2"
          max-lenth="20"
          required
          />
        <br></br>
        <Check
        type="submit">check</Check >
      </form>
      </InputDiv>)
      
      }
    </Main>
  );
}

export default App;
