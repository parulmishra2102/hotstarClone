import React from 'react';
import styled from 'styled-components';
function Header() {
  return (
    <NAV>
      <Logo src="/images/logo.svg" />
      <NavMenu>
        <a>
          <img src="images/home-icon.svg"></img>
          <span>Home</span>
        </a>
        <a>
          <img src="images/search-icon.svg"></img>
          <span>Search</span>
        </a>
        <a>
          <img src="images/watchlist-icon.svg"></img>
          <span>Watchlist</span>
        </a>
        <a>
          <img src="images/original-icon.svg"></img>
          <span>Orignals</span>
        </a>
        <a>
          <img src="images/movie-icon.svg"></img>
          <span>Movies</span>
        </a>
        <a>
          <img src="images/series-icon.svg"></img>
          <span>Series</span>
        </a>
      </NavMenu>
      <UserImg src="images/Passport size photo.jpeg"/>
    </NAV>
  );
}

export default Header;
const NAV = styled.nav`
  height: 70px;
  background: #090b13;
  display: flex;
  align-items: center;
  padding: 0 36px;
`;

const Logo = styled.img`
  width: 80px;
`;
const NavMenu = styled.div`
  display: flex;
  flex: 1;
  margin-left: 25px;
  align-items: center;
  a {
    display: flex;
    align-items: center;
    padding: 0 12px;
    cursor: pointer;

    img {
      height: 20px;
    }
    span {
      font-size: 13px;
      letter-spacing: 1.42px;
      position: relative;

      &:after{
          content: '';
          height: 2px;
          background: white;
          position: absolute;
    
          left:0;
          right :0;
          bottom:-6px;
          opacity: 0;
          transform-origin: left center;
          transition: 1000ms;
          transform: scaleX(0);
      }
    }
    &:hover {
        span:after {
            transform : scaleX(1);
            opacity: 1;
        }

    }
  }
`
const UserImg = styled.img`
width; 48px;
height: 48px;
border-radius:50%;
cursor: pointer;

`
