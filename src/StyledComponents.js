import styled from "styled-components";


const Main = styled.div`
  margin: 20px auto 0;
  padding: 60px 10px;
  width: 400px;
  height: 330px;
  box-sizing: border-box;
  background: rgb(255,255,255);
background: linear-gradient(0deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 45%, rgba(204,0,102,1) 46%, rgba(255,0,128,1) 60%, rgba(255,0,128,1) 100%);
  border-radius: 8px;
  box-shadow: 2px 2px 5px lightgray, -2px -2px 5px lightgray;
  color: white;
  display: border
`;

const Title = styled.h1`
  font-size: 2em;
  font-family: sans-serif;
  margin: 0 auto;
`;

const InputDiv = styled.div`
  margin: 20px;
  font-size: 1.2em;
`;

const TextInput = styled.input `
  margin: 20px 0;
  font-size: 1em;
  padding: 4px 8px;
  border-radius: 50px;
  width: 260px;
  box-shadow: 1px 1px 3px #b30059, -1px -1px 3px #b30059;
  border: 1px #b30059 solid;
  text-align: center;
`;

const Check = styled.button`
  font-size: 1em;
  padding: 6px;
  background-color: #ff0080;
  font-weight: 700;
  color: white;
  border-radius: 4px;
  border: none;
`;

const Clear = styled.button`
  margin-top: 30px;
  font-size: 1em;
  padding: 6px;
  background-color: #ff0080;
  font-weight: 700;
  color: white;
  border-radius: 4px;
  border: none;
`;



export { Main, Title, InputDiv, TextInput, Check, Clear }