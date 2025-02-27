import Link from 'next/link';
import styled from 'styled-components';
import NProgress from 'nprogress';
import Router from 'next/router';
import Nav from './Nav.component';
// import Cart from './Cart.component';
import Search from './Search.component';

Router.onRouteChangeStart = () => {
  NProgress.start();
};
Router.onRouteChangeComplete = () => {
  NProgress.done();
};

Router.onRouteChangeError = () => {
  NProgress.done();
};

const Logo = styled.h1`
  font-size: 4rem;
  margin-left: 2rem;
  margin-top: 15px;
  margin-bottom: 15px;
  position: relative;
  z-index: 2;
  transform: skew(-7deg);

  a {
    padding: 0.5rem 1rem;
    background: ${(props) => props.theme.red};
    color: white;
    text-transform: uppercase;
    text-decoration: none;
  }
  @media (max-width: 1300px) {
    margin: 0;
    text-align: center;
  }
`;

const StyledHeader = styled.header`
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 1;
  background-color: ${(props) => props.theme.white};
  .bar {
    border-bottom: 5px solid ${(props) => props.theme.black};
    display: grid;
    grid-template-columns: auto 1fr;
    justify-content: space-between;
    align-items: stretch;
    @media (max-width: 1300px) {
      grid-template-columns: 1fr;
      justify-content: center;
    }
  }
  .sub-bar {
    display: grid;
    grid-template-columns: 1fr auto;
    border-bottom: 1px solid ${(props) => props.theme.lightgrey};
  }
`;

const Header = () => (
  <StyledHeader>
    <div className="bar">
      <Logo>
        <Link href="/">
          <a>Tada Ecommerce</a>
        </Link>
      </Logo>
      <Nav />
    </div>
    <div className="sub-bar">
      <Search />
    </div>

    {/* <Cart /> */}
  </StyledHeader>
);

export default Header;
