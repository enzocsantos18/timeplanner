import styled from 'styled-components'
export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
background-color: #C9C9C9;

`;
export const ElementsContainer = styled.div`
  display: flex;
  width: 80vw;
  height: 80vh;
  background-color: white;
  border-radius: 16px;
`;
export const ImageSection = styled.div`
display: flex;
align-items: center;
justify-content: center;
flex: 1;
img{
  height: 80%;
  width: auto;
}
`;
export const ContainerInput = styled.div`
  background-color: #E6E6E6;
  border-radius: 0px 16px 16px 0px;
  display: flex;
  flex-direction: column;
 justify-content: center;
  width: 500px;
  padding: 50px;
  h2{
    margin-bottom: 16px;
    font-size: 40px;
  }
  p{
    font-size: 18px;
    margin-bottom: 16px;
    color: #3d3d3d;

  }
  form{
    display: flex;
    flex-direction: column;

    input{
      padding: 16px 24px;
      margin: 10px 0px;
      font-size: 18px;
      color: #000;
      background-color: #00000020;
      border: 0;
      border-radius: 4px;
    }
    span{
      padding: 8px 0px ;
      color: #ff5757;
    }
    button{
      padding: 15px;
      margin: 10px 0px;
      background-color: #3F3D56;
      color: white;
      border-radius: 4px;
      font-size: 16px;
      font-weight: bold;
      border: 0;
    }
    label{
      color: black;
    }
    a{
      text-align: right;
      color: #3F3D56;
      text-decoration: none;
    }
  }
`;