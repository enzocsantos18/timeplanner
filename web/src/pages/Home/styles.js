import styled from 'styled-components'
export const Container = styled.div`
  display: flex;
  flex-direction: row;
  width: 1200px;
  padding-top: 20px;
  margin: auto;
`;
export const ProjectList = styled.div`
  display: inline-grid;
  grid-auto-rows: 200px;
  grid-template-columns: auto auto auto;
  grid-gap: 16px;
`;

export const SideBar = styled.div`
  background-color: #fff;
  min-width: 250px;
  margin-right: 16px;
  height: 80vh;
  border-radius: 4px
`;