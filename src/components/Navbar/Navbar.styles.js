import styled from 'styled-components';

const NavbarStyle = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  color: white;
  text-transform: uppercase;
  font-size: 1.6rem;
  margin-bottom: 2rem;
  
  &::before{
    height: 2px;
    background-color: #fff;
    content: "";
    width: 100%;
    margin-bottom: 0.5rem;
  }
  &::after{
    height: 2px;
    background-color: #fff;
    content: "";
    width: 100%;
    margin-top: 0.5rem;
  }
  a{
    text-decoration: none;
    color: #fff;
    padding: 0.5rem;
    border: 2px solid #fff;
  }
  a:hover{
    color: #dd4f08;
  }
`;
export default NavbarStyle;