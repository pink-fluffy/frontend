import {
    Facebook,
    Instagram,
    MailOutline,
    Phone,
    Pinterest,
    Room,
    Twitter,
} from '@material-ui/icons'
import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom';
const Container = styled.div`
  display: flex;
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const Logo = styled.h1``;

const Desc = styled.p`
  margin: 20px 0px;
`;

const SocialContainer = styled.div`
  display: flex;
`;

const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  background-color: #${(props) => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
`;

const Center = styled.div`
  flex: 1;
  padding: 20px;
`;

const Title = styled.h3`
  margin-bottom: 30px;
`;

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;

const ListItem = styled.li`
  width: 300px;
  margin-bottom: 10px;

`;

const Right = styled.div`
  flex: 1;
  padding: 20px;
`;

const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`;

const Payment = styled.img`
    width: 50%;
`;

const Footer = () => {
    return (
        <Container>
            <Left>
                <Logo>Unicorn.shop</Logo>
                <Desc>
                    Your favourite convenience store with the best selling items in
                    the world today! Developed and curated by Alborz, Siddarth, Ben &
                    Orion.
                </Desc>
                <SocialContainer>
                    <SocialIcon>
                        <Link to={{ pathname: "https://wiki.sidharth.me/eecs4413" }}>
                            <Facebook />
                        </Link>
                    </SocialIcon>
                </SocialContainer>
            </Left>
            <Center>
                <Title>Useful Links</Title>
                <List>
                    <Link to='/' style={{ textDecoration: 'none' }}>
                        <ListItem>Home</ListItem>
                    </Link>
                    <Link to='/cart' style={{ textDecoration: 'none' }}>
                        <ListItem>Cart</ListItem>
                    </Link>
                    <Link to='/products/all' style={{ textDecoration: 'none' }}>
                        <ListItem>Shop All</ListItem>
                    </Link>
                    <Link to='/login' style={{ textDecoration: 'none' }}>
                        <ListItem>Log In</ListItem>
                    </Link>
                    <Link to='/register' style={{ textDecoration: 'none' }}>
                        <ListItem>Register</ListItem>
                    </Link>
                </List>
            </Center>
            <Right>
                <Title>Contact</Title>
                <ContactItem>
                    <Room style={{ marginRight: "10px" }} /> York University, Lassonde School of Engineering
                </ContactItem>
                <ContactItem>
                    <MailOutline style={{ marginRight: "10px" }} /> alborz@my.yorku.ca
                </ContactItem>
                <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
            </Right>
        </Container>
    );
};

export default Footer;