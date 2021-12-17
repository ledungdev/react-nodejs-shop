import styled from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100vw;
    height: 100vh;
    background: url("https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80")
        center center;
    background-size: cover;
`;

const Logo = styled.div`
    font-size: 50px;
    font-weight: 500;
    margin-bottom: 50px;
`;

const Wrapper = styled.div`
    width: 40%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: white;
    padding: 20px;
    ${mobile({ width: "80%" })};
`;
const Title = styled.h1`
    font-weight: 200;
    font-size: 24px;
    text-transform: uppercase;
`;
const Form = styled.form`
    width: 100%;
    display: flex;
    flex-direction: column;
`;
const Input = styled.input`
    min-width: 40%;
    width: 100%;
    margin: 5px 0;
    padding: 10px;
    &::placeholder {
        color: rgba(0, 0, 0, 0.5);
    }
    &:focus {
        outline: none;
    }
`;

const Button = styled.button`
    width: 100%;
    height: 50px;
    border: 1px solid teal;
    padding: 10px;
    background-color: white;
    margin: 20px 0;
    &:hover {
        background-color: teal;
        color: white;
        cursor: pointer;
    }
`;

const Link = styled.a`
    margin: 5px 0px;
    font-size: 12px;
    text-decoration: underline;
    cursor: pointer;
`;

const Login = () => {
    return (
        <Container>
            <Wrapper>
                <Logo>LEDUNG.</Logo>
                <Title>Sign in</Title>
                <Form method="POST">
                    <Input placeholder="email" type="email" />
                    <Input placeholder="password" type="password" />
                    <Button>Login</Button>
                    <Link>Forgeten password?</Link>
                    <Link>Create a new account</Link>
                </Form>
            </Wrapper>
        </Container>
    );
};

export default Login;
