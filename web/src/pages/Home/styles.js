import styled from 'styled-components'
export const Header = styled.div`
  background-color: #E6E6E6;
  display: flex;
  align-items: center;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
  height: 50px;
  padding: 20px;

  button{
    color: white;
    background-color: #3F3D56;
    width: 100px;
    padding: 10px;
    border-radius: 4px;
    border: 0;
  }
  a{
    text-decoration: none;
    padding: 10px;
  }
`;


export const Container = styled.div`
  width: 1200px;
  margin: auto;
  h2{
    font-size: 48px;
    margin: 16px 0px;
    color: #3F3D54;
  }
`;
export const ProjectList = styled.div`
  display: inline-grid;
  grid-auto-rows: 172px;
  grid-template-columns: auto auto auto auto;
  grid-gap: 16px;
`;

export const InfoList = styled.div`
  display: inline-grid;
  grid-auto-rows: 122px;
  grid-template-columns: auto auto auto auto;
  grid-gap: 16px;
  padding: 16px;
  border-radius: 4px;
  background: white;
`;

