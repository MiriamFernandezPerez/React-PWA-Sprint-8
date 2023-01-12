import styled from 'styled-components';

const HeaderStyle = styled.header`
  max-height: 20vh;
  display: flex;
  align-items: center;
  text-align:center;
  color: white;
  .logo{
    height: 20rem;
  }
  a{
    text-decoration: none;
    color: #fff;
  }
  a:hover{
    color: #dd4f08;
  }
  div:nth-of-type(1) {
    width: 100%;
  }
  div:nth-of-type(2) {
    position: absolute;
    right: 4rem;
  }
`;
export default HeaderStyle;