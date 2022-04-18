import { Badge } from "@material-ui/core";
import { Search, ShoppingCartOutlined } from "@material-ui/icons";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { logout } from "../redux/userRedux";
import { delProduct, delAllProduct } from "../redux/cartRedux";
import { Navigate } from "react-router";
const Container = styled.div`
  height: 60px;
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
`;

const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
`;

const Input = styled.input`
  border: none;
`;

const Center = styled.div`
  flex: 1;
  text-align: center;
`;

const Logo = styled.h1`
  font-weight: bold;
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
`;



const Navbar = () => {
  const quantity = useSelector(state => state.cart.quantity)
  const user = useSelector(state => state.user.currentUser)
  const dispatch = useDispatch()
  const handleClick = (user) => {
    if (user) {
      dispatch(logout())
      dispatch(delAllProduct())
    }

  };

  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>EN</Language>
        </Left>
        <Link to="/" style={{ textDecoration: 'none' }}>
          <Center>
            <Logo>Unicorns.shop</Logo>
          </Center>
        </Link>
        <Right>
          <Link to="/register" style={{ textDecoration: 'none' }}>
            <MenuItem >{user ? `Welcome back, ${user.name}` : "REGISTER"}</MenuItem>
          </Link>
          <Link to="/login" style={{ textDecoration: 'none' }}>
            <MenuItem onClick={() => { handleClick(user) }}>{user ? "SIGN OUT" : "LOG IN"}</MenuItem>
          </Link>
          <Link to="/cart">
            <MenuItem>
              <Badge badgeContent={quantity} color="primary">
                <ShoppingCartOutlined />
              </Badge>
            </MenuItem>
          </Link>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;