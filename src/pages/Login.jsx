import React from 'react'
import styled from 'styled-components'
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { cart, login } from '../redux/apiCalls';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://images.pexels.com/photos/6984650/pexels-photo-6984650.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 25%;
  padding: 20px;
  background-color: white;

`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 10px 0;
  padding: 10px;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
  margin-bottom: 10px;
  &:disabled{
      color: green;
      cursor: not-allowed;
  }
`;

const Links = styled.a`
  margin: 5px 0px;
  font-size: 12px;
  text-decoration: underline;
  cursor: pointer;
`;
const Error = styled.span`
    color: red;
`
const Login = () => {


  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const { isFetching, error } = useSelector((state) => state.user);

  const handleClick = async (e) => {
    e.preventDefault();
    await login(dispatch, { email, password });
  };



  return (

    <Container>
      <Wrapper>
        <Title>LOG IN</Title>
        <Form>
          <Input placehold type="email" er="email" onChange={(e) => setEmail(e.target.value)} />
          <Input placeholder="password" type="password" onChange={(e) => setPassword(e.target.value)} />
          <Button onClick={handleClick} >LOG IN</Button>
          {error && <Error> Something went wrong... </Error>}
          <Link to="/register">
            <Links>
              CREATE A NEW ACCOUNT
            </Links>
          </Link>
          <Link to="/">
            <Links>
              HOME
            </Links>
          </Link>

        </Form>
      </Wrapper>
    </Container>
  )
}

export default Login