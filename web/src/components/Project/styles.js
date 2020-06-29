import styled from 'styled-components'

export const Card = styled.div`
  background-color: #fff;
  width: 300px;
  border-radius: 4px;
  height: 200px;
  padding: 16px;

  span{
    font-size: 14px;
    color: #7E7E7E;
    font-weight: bold;
  }

  h2{
    font-size: 64px;
  }
`;

export const ActionArea = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  button{
    background-color: #0085FF;
    padding: 8px;
    border: 0;
    outline: 0;
    border-radius: 4px;
    color: white;
    font-weight: bold;

    &:hover{
      background-color: #0085D0;
    }
  }
`;
