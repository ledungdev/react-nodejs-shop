import { Add, Remove } from "@mui/icons-material";
import styled from "styled-components";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import { mobile } from "../responsive";

const Container = styled.div``;

const Wrapper = styled.div`
    padding: 50px;
    display: flex;
    ${mobile({ flexDirection: "column", padding: '10px' })};
`;

const ImageContainer = styled.div`
    flex: 1;
`;

const Image = styled.img`
    width: 100%;
    height: 80%;
    object-fit: cover;
    ${mobile({ height: "35vh" })};
`;

const InfoContainer = styled.div`
    flex: 1;
    padding: 0 50px;
    ${mobile({ padding: '0 10px'})};
`;

const Title = styled.h1`
    font-weight: 200;
`;

const Desc = styled.p`
    margin: 20px 0;
`;

const Price = styled.span`
    font-size: 40px;
    font-weight: 100;
`;

const FilterContainer = styled.div`
    display: flex;
    justify-content: space-between;
    width: 50%;
    margin: 30px 0;
    ${mobile({ width: "100%"})};
`;

const Filter = styled.div`
    display: flex;
    align-items: center;
`;

const FilterText = styled.span`
    font-size: 20px;
    font-weight: 200;
`;

const FilterColor = styled.div`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: ${(props) => props.color};
    margin: 0 5px;
    cursor: pointer;
`;

const FilterSize = styled.select`
    margin-left: 10px;
    padding: 5px;
`;

const FilterSizeOption = styled.option``;

const AddContainer = styled.div`
    display: flex;
    align-items: center;
    width: 50%;
    justify-content: space-between;
    ${mobile({ width: "100%" })};
`;

const AmountContainer = styled.div`
    display: flex;
    align-items: center;
    font-weight: 700;
`;

const Amount = styled.span`
    width: 30px;
    height: 30px;
    border-radius: 10px;
    border: 1px solid teal;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 5px;
`;

const Button = styled.button`
    background-color: white;
    border: 2px solid teal;
    padding: 15px;
    text-transform: uppercase;
    cursor: pointer;
    &:hover {
        color: white;
        background-color: teal;
    }
`;

const Product = () => {
    return (
        <Container>
            <Navbar />
            <Announcement />
            <Wrapper>
                <ImageContainer>
                    <Image src="https://source.unsplash.com/random/450x800"></Image>
                </ImageContainer>
                <InfoContainer>
                    <Title>Test title</Title>
                    <Desc>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Dolor sed porro quas laborum culpa ea suscipit natus
                        laboriosam, quam eveniet magnam delectus minus dolore
                        soluta impedit accusamus ad ducimus! Harum.
                    </Desc>
                    <Price>$20</Price>
                    <FilterContainer>
                        <Filter>
                            <FilterText>Color:</FilterText>
                            <FilterColor color="black"></FilterColor>
                            <FilterColor color="darkblue"></FilterColor>
                            <FilterColor color="grey"></FilterColor>
                        </Filter>
                        <Filter>
                            <FilterText>Size:</FilterText>
                            <FilterSize>
                                <FilterSizeOption size="xs">
                                    XS
                                </FilterSizeOption>
                                <FilterSizeOption size="s">S</FilterSizeOption>
                                <FilterSizeOption size="m">M</FilterSizeOption>
                                <FilterSizeOption size="l">L</FilterSizeOption>
                                <FilterSizeOption size="xl">
                                    XL
                                </FilterSizeOption>
                            </FilterSize>
                        </Filter>
                    </FilterContainer>
                    <AddContainer>
                        <AmountContainer>
                            <Remove />
                            <Amount>1</Amount>
                            <Add />
                        </AmountContainer>
                        <Button>Add to cart</Button>
                    </AddContainer>
                </InfoContainer>
            </Wrapper>
            <Newsletter />
            <Footer />
        </Container>
    );
};

export default Product;
