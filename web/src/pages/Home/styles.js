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
  span{
    color: #3F3D56;
    padding: 10px;

    &:hover{

      cursor: pointer;
      text-decoration: underline;
    }
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
  grid-auto-rows: 192px;
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

export const Error = styled.div`
    width: 500px;
    text-align: center;
    margin: auto; 
    margin-top: 10%;
    img{
      width: 500px;
      margin-bottom: 16px;
    }
  h3{
    color: #3F3D54;
    font-size: 25px;
  }
 
`;