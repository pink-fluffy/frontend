import React from 'react'
import styled from 'styled-components'
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import { Badge } from '@mui/material';
import MailIcon from '@mui/icons-material/Mail';
import { ShoppingCartOutlined } from '@mui/icons-material';
import logo from '../logo.svg';

const Container = styled.div`
    height: 60px;
    font-family: "Quicksand", sans-serif;
    display: flex;
`
const Wrapper = styled.div`
padding: 10px 20px;
display: flex;
justify-content: space-between;
width:100%;
`;
const Left = styled.div`
flex:2;
display: flex;
align-items: center;
justify-content: flex-start;
flex-direction: row;
`;
const Center = styled.div`
display: flex;
flex-direction: row;
align-items: center;
justify-content: space-evenly;
flex: 2;
`;
const Right = styled.div`
display: flex;
align-items: center;
justify-content: flex-end;
flex-direction: row;
flex:1 ;
`;
const Language = styled.div`
flex:1 ;
`;
const SearchContainer = styled.div`
display: flex;
border-radius: 25px;
border: 1px solid lightgray;
align-items: right;
justify-content: space-between;
padding:0 10px 0px 0;
margin-left: 25px;
flex: 1 ;
`;
const Input = styled.input`
border: none;
border-radius: 25px;
width: 100%;
text-align: center;
`;

const LogoSpash = styled.div`
display: flex;
flex:1 ;
`;
const Logo = styled.h1`
font-weight: 900;
font-size: 2.5em;
`;


const Dropdown = styled.div`
cursor: pointer;
padding: 10px 35px 10px 35px;
`;
const ClickLogo = styled.div`
display: flex;
flex:1 ;
height: 200%;
color: black;
filter: brightness(0);
cursor: pointer;
`;

const MenuItem = styled.div`
font-size: 14px;
cursor: pointer;
margin-left: 25px;
`;



const Navbar = () => {
    return (
      <Container>
          <Wrapper>
              <Left>
                  <Dropdown/>
                  <MenuIcon/>
                  <ClickLogo>
                    <img src={logo} className="Logo" alt="logo"/>
                  </ClickLogo>
              </Left>
              <Center>
              <LogoSpash>
                    <Logo >Pink Fluffy Unicorns.</Logo>
                  </LogoSpash>
                 <SearchContainer>
                    <Input/>
                    <SearchIcon style ={{color:"gray",fontSize:"32px"}}/>
                 </SearchContainer>
              </Center>
              <Right>
                  <MenuItem>SIGN IN</MenuItem>
                  <MenuItem>REGISTER</MenuItem>
                  <MenuItem>
                     <Badge badgeContent={4} color="primary">
                        <ShoppingCartOutlined color="action" />
                     </Badge>
                  </MenuItem>
                  <MenuItem>
                     <Badge badgeContent={4} color="secondary">
                        <MailIcon color="action" />
                     </Badge>
                  </MenuItem>
              </Right>
          </Wrapper>
        </Container>
    )
  }

export default Navbar;