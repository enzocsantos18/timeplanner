import styled from 'styled-components'

export const Card = styled.div`

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
  h1{
    color: #3d3d3d;
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

    background-color: white;
    border: 0;
    padding: 10px;
    &:hover{

    }
  }
`;
