import React from 'react'
import styled from 'styled-components'
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { register } from '../redux/apiCalls';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom';
const Container = styled.div`
    width: 100vw;
    height: 100vh;
    transparency: 30%;
    background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://or9.ca/Unicorn/all-departments.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")
      center;
    background-size: cover;
    display: flex;
    align-items: center;
    justify-content: center;
`

const Wrapper = styled.div`
    width: 40%;
    padding: 20px;
    background-color: white;

`
const Title = styled.h1`
    font-size: 24px;
    font-weight: 300;
`
const Form = styled.form`
    display: flex;
    flex-wrap: wrap;
`
const Input = styled.input`
    flex: 1;
    min-width: 40%;
    margin: 20px 10px 0px 0px;
    padding: 10px;
`
const Agreement = styled.span`
    font-size: 12px;
    margin: 20px 0px;
`
const Button = styled.button`
    width: 40%;
    border: none;
    padding: 15px 20px;
    background-color: teal;
    color: white;
    cursor: pointer;
`
const Links = styled.a`
  margin: 5px 0px;
  font-size: 12px;
  text-decoration: underline;
  cursor: pointer;
`;


const Register = () => {
    const [email, setEmail] = useState("");
    const [first_name, setFirstName] = useState("");
    const [last_name, setLastName] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();
    const { isFetching, error } = useSelector((state) => state.user);
    var i = 0

    //Assign values so that changes are automated across registerDict
    // Provides Requirements to The User
    let name = "name";
    let lname = "last name";
    let mail = "email";
    let pword = "password";
    var inputphDict = {};
    inputphDict[`${name}`] = "Must be minimum of three characters with no numbers or Symbols";
    inputphDict[`${lname}`] = "Must be minimum of three characters with no numbers or Symbols";
    inputphDict[`${mail}`] = "Must Be a valid domain and contain @";
    inputphDict[`${pword}`] = "Must contain one uppercase one lowercase and one symbol";


    const handleClick = (e) => {
        i = i + 1
        let validForm = true;
        var inputs = document.getElementsByTagName('input');
        for (let in_box of inputs) {
            try {
                // The OTHER FUNCTIONS WORK ON EVENTSs
                const doesNothing = new Event('validate');
                in_box.dispatchEvent(doesNothing);
                validForm = validForm && isValid(doesNothing);
            }
            catch (err) {
                alert(err.message);
            }
        }
        e.preventDefault();
        validForm ? register(dispatch, { first_name: first_name, last_name: last_name, email, password }) : console.log("Invalid entry in forum values");

        if (i === 2) {
            toast.success(`Success: Registration successful`, {
                theme: "colored",
                position: "top-left",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
            i = 0
        }

    };

    const intimidateUser = (event) => {
        var needed = event.target.placeholder;

        if (event.target.value.length > 0) {
            event.target.style.background = "#ffe8e7";

            toast.error(`Error: ${needed} is invalid ${inputphDict[needed]}`, {
                theme: "colored",
                position: "top-left",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        } else {
            event.target.style.background = "white";
            toast.clearWaitingQueue();
        }
        //event.target.
        return false;
    };

    const patUser = (event) => {
        event.target.style.background = "#ddfada";
        toast.clearWaitingQueue();
        return true;
    };

    const isValid = (event) => {
        var valid = false;
        var val = event.target.value;
        switch (event.target.placeholder) {
            case `${mail}`:
                valid = emailValid(event);
                valid ? setEmail(val) : console.log(val);
                return valid;
            case `${pword}`:
                valid = pValid(event);
                valid ? setPassword(val) : console.log(val);
                return valid;
            case `${name}`:
                valid = nameValid(event);
                valid ? setFirstName(val) : console.log(val);
                return valid;
            case `${lname}`:
                valid = nameValid(event);
                valid ? setLastName(val) : console.log(val);
                return valid;
            default:
                //WARNING RETURNS TRUE AS DEFAULT
                return true;
        }

    };

    const showPass = (event) => {
        var passbox = document.getElementById("passBox");
        if (passbox.type === "password") {
            passbox.type = "text";
        } else {
            passbox.type = "password";
        }
    };
    const nameValid = (event) => {
        return (/^[a-zA-Z0-9]+$/.test(event.target.value) && event.target.value.length >= 3) ? patUser(event) : intimidateUser(event);
    };

    const emailValid = (event) => {
        return (/^.+@{1}[a-zA-Z0-9]+\.?[a-zA-Z]+\.+[a-zA-Z]+$/.test(event.target.value) ? patUser(event) : intimidateUser(event));
    };
    const pValid = (event) => {
        return (/(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*\W)/.test(event.target.value) ? patUser(event) : intimidateUser(event));
    };

    return (
        <Container>
            <Wrapper>
                <Title>CREATE AN ACCOUNT</Title>

                <Form>
                    <Input placeholder={name} type="text" onChange={nameValid} />
                    <Input placeholder={lname} type="text" onChange={nameValid} />
                    <Input placeholder={mail} type="email" onChange={emailValid} />
                    <Input id="passBox" placeholder={pword} type="password" onChange={pValid} />
                    <Input type="checkbox" onClick={showPass} />
                    <Agreement>
                        By creating an account, I consent to the processing of my personal
                        data in accordance with the <b>PRIVACY POLICY</b>
                    </Agreement>

                    <Button onClick={handleClick} type="submit" >CREATE</Button>

                    <ToastContainer limit={1} />

                </Form>
                <Link to="/">
                    <Links>
                        HOME
                    </Links>
                </Link>
            </Wrapper>
        </Container>
    );
};

export default Register