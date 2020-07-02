import styled from 'styled-components'

export const AddContainer = styled.div`
  position:absolute; 
  display: flex;
  flex-direction: column;
  top:60px; 
  right:50px;
  background-color: white;
  border-radius: 4px;
  padding: 20px;

  form{
    display: flex;
    flex-direction: column;
  }

  input, select{
      padding: 16px 24px;
      margin: 10px 0px;
      font-size: 18px;
      color: #000;
      background-color: #00000020;
      border: 0;
      border-radius: 4px;
    }
  

`;