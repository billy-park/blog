import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Link from 'gatsby-link';
import styled from 'styled-components';
import Img from 'gatsby-image';

const HeaderWrapper = styled.div`
  background: black;
  margin-bottom: 1.45rem;
  overflow: hidden;
  position: relative;
  height: ${({isHome}) => (isHome ? '40vh' : '11vh')};
`;
const HeaderContainer = styled.div`
  margin: 0 auto;
  max-width: 960px;
  padding: 1.45rem 1.0875rem;
  position: relative;
  z-index: 3;
  display: flex;
  justify-content: space-between;
`;
const MainNav = styled.div`
  z-index: 2;
  ul {
    list-style: none;
    display: flex;
    li {
      margin-left: 10px;
      font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
      Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
      a {
        text-decoration: none;
        color: #FFF;
        &:hover {
          border-bottom: 3px solid #FFF;
        }
      }
    }
  }
`;

class Header extends Component {
componentDidUpdate = (prevProps, prevState) => {
  const { location } = this.props;
  if(location.pathname !== prevProps.location.pathname) {
    if(this.props.location.pathname === '/') {
      this.wrapper.animate([{ height: "11vh" }, { height: "40vh" }], {
        duration: 500,
        fill: "forwards",
        easing: "cubic-bezier(0.86, 0, 0.07, 1)",
        iterations: 1
      });
    } else if (prevProps.location.pathname === '/') {
      this.wrapper.animate([{ height: "40vh" }, { height: "11vh" }], {
        duration: 500,
        fill: "forwards",
        easing: "cubic-bezier(0.86, 0, 0.07, 1)",
        iterations: 1
      });
    }
  }
}

  render() {
    const { data, location } = this.props;
    return (
      <HeaderWrapper 
        isHome={location.pathname === "/"}
        ref={(wrapper) => this.wrapper = ReactDOM.findDOMNode(wrapper)}
      >
        <HeaderContainer>
          <h1 style={{ margin: 0 }}>
            <Link
              to="/"
              style={{
                color: '#FFF',
                textDecoration: 'none',
              }}
            >
            <h2
            style={{
              textAlign: 'center'
            }}>Billy's Dev Blog</h2>
              
            </Link>
          </h1>
          <MainNav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
            </ul>
          </MainNav>
        </HeaderContainer>
        <Img style={{
          position: 'absolute',
          left: 0,
          top: 0,
          width: '100%',
          height: '100%',
          opacity: 0.3,
        }} sizes={data.background.sizes} />
      </HeaderWrapper>
    );
  }
}

export default Header

