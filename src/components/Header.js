import React from 'react';
import styled from 'styled-components';
function Header() {
let sources = [
  {
  img : 'images/home-icon.svg',
  title : 'Home'
},
  {
  img : 'images/watchlist-icon.svg',
  title : 'Watchlist'
},
  {
  img : "images/original-icon.svg",
  title : 'Original'
},
  {
  img : "images/movie-icon.svg",
  title : 'Movie'
},
  {
  img : "images/series-icon.svg",
  title : 'Series'
},
  {
  img : "images/search-icon.svg",
  title : 'Search'
},
]
    
  return (
    <NAV>
      <Logo src="/images/logo.svg" />
      <NavMenu>

      { 
        sources.map(item => <a>
          <img src={item.img}></img>
          <span>{item.title}</span>
        </a> 
        )}
        
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
  overflow-X:hidden;
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
