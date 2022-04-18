import { Add, Remove } from "@material-ui/icons";
import { useSelector } from "react-redux";
import styled from "styled-components";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import StripeCheckout from "react-stripe-checkout";
import { useState } from "react";
import { Link } from "react-router-dom";
import { DeleteOutline } from "@material-ui/icons";
import { useDispatch } from "react-redux"
import { addProduct, decQuantity, delProduct, incQuantity, delAllProduct } from "../redux/cartRedux";
const KEY = process.env.REACT_APP_STRIPE

const Container = styled.div``;

const Wrapper = styled.div`
  padding: 20px;
`;

const Icon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 10px;
    cursor: pointer;
  `;

const Title = styled.h1`
  font-weight: 300;
  text-align: center;
`;

const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`;

const TopButton = styled.button`
  padding: 10px;
  font-weight: 600;
  cursor: pointer;
  border: ${(props) => props.type === "filled" && "none"};
  background-color: ${(props) =>
        props.type === "filled" ? "black" : "transparent"};
  color: ${(props) => props.type === "filled" && "white"};
`;

const TopTexts = styled.div`
`;
const TopText = styled.span`
  text-decoration: underline;
  cursor: pointer;
  margin: 0px 10px;
`;

const TopText2 = styled.span`
  margin: 0px 10px;
  font-weight: 800;
`;

const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Info = styled.div`
  flex: 3;
`;

const Product = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ProductDetail = styled.div`
  flex: 2;
  display: flex;
`;

const Image = styled.img`
  width: 200px;
`;

const Details = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const ProductName = styled.span``;

const ProductId = styled.span``;

const ProductColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
`;

const ProductSize = styled.span``;

const PriceDetail = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ProductAmountContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const ProductAmount = styled.div`
  font-size: 24px;
  margin: 5px;
`;

const ProductPrice = styled.div`
  font-size: 30px;
  font-weight: 200;
`;

const Hr = styled.hr`
  background-color: #eee;
  border: none;
  height: 1px;
`;

const Summary = styled.div`
  flex: 1;
  border: 0.5px solid lightgray;
  border-radius: 10px;
  padding: 20px;
  height: 20vh;
`;

const SummaryTitle = styled.h1`
  font-weight: 200;
`;

const SummaryItem = styled.div`
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  font-weight: ${(props) => props.type === "total" && "500"};
  font-size: ${(props) => props.type === "total" && "24px"};
`;

const SummaryItemText = styled.span``;

const SummaryItemPrice = styled.span``;

const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: black;
  color: white;
  font-weight: 600;
  cursor: pointer;
`;

const OrderConfirmation = () => {
    const cart = useSelector(state => state.cart)
    const quantity = useSelector(state => state.cart.quantity)
    const [stripeToken, setStripeToken] = useState(null)
    const [prodQuantity, setQuantity] = useState(1);
    const dispatch = useDispatch()
    const handleQuantity = (type, quant) => {
        if (type === "dec") {
            quant > 1 && setQuantity(quant - 1)
        } else {
            setQuantity(quant + 1)
        }
    }


    const onToken = (token) => {
        setStripeToken(token)
    }

    const handleResetCart = () => {
        dispatch(delAllProduct())
    }



    const handleChangeQuantity = (cartItem, type) => {
        if (type === "dec") {
            dispatch(decQuantity(cartItem))
        } else {
            dispatch(incQuantity(cartItem))
        }

    }


    /*ADD A USE EFFECT FOR STRIPE API CALL*/

    return (
        <Container>
            <Wrapper>
                <Title>ORDER SUCCESSFUL</Title>
                <Top>
                    <Link to="/products/all">
                        <TopButton onClick={() => { handleResetCart() }}>CONTINUE SHOPPING</TopButton>
                    </Link>
                    <TopText2>
                        <TopText2>Your purchase was successfull, here is your reciept.</TopText2>
                    </TopText2>
                    <TopText2>
                        <TopText2>*******************</TopText2>
                    </TopText2>

                </Top>
                <Bottom>
                    <Info>
                        {cart.products.map(product => (
                            <Product>
                                <ProductDetail>
                                    <Image src={product.image} />
                                    <Details>
                                        <ProductName>
                                            <b></b> {product.name}
                                        </ProductName>
                                        <ProductId>
                                            <b>ID:</b> {product.short_id}
                                        </ProductId>
                                    </Details>
                                </ProductDetail>
                                <PriceDetail>
                                    <ProductPrice>$ {Math.round((product.price * product.quantity * 100)) / 100}</ProductPrice>

                                </PriceDetail>
                            </Product>
                        ))}
                        < Hr />
                    </Info>
                    <Summary>
                        <SummaryTitle>ORDER SUMMARY</SummaryTitle>

                        <SummaryItem type="total">
                            <SummaryItemText>Total:</SummaryItemText>
                            <SummaryItemPrice>$ {Math.round((cart.total * 100)) / 100}</SummaryItemPrice>
                        </SummaryItem>
                    </Summary>
                </Bottom>
            </Wrapper>
        </Container >
    );
};

export default OrderConfirmation;