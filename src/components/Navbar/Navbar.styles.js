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
  
  
  &::after{
    height: 1px;
    background-color: #fff;
    content: "";
    width: 100%;
    margin-top: 0.5rem;
  }
  a{
    text-decoration: none;
    color: #fff;
    padding: 0.5rem;
  }
  a:hover{
    color: #999;
  }
`;
export default NavbarStyle;