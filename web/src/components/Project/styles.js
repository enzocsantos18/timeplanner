import styled from 'styled-components'

export const Card = styled.div`

  button{
    cursor: pointer;
    background-color: transparent;
    border: 0;
    padding: 10px;
  }

  background-color: white;
  width: 280px;
  border-radius: 4px;
  padding: 20px;
 
  h1{
    font-size: 20px;
  }
  span{
    color: #9e9e9e;

  }
  div{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

  }
  h1{
    color: #3d3d3d;
  &:hover{
    color: #8884D8;
    cursor: pointer;
  }
  }

  h2{
    margin: 0;
  }

`;

export const ActionArea = styled.div`
  padding: 16px 0px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  
  h2{
    color: #3F3D56;
  }
  button{

    &:hover{

    }
  }
`;
