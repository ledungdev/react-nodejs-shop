import React from "react";
import { categoriesData } from "../data";
import styled from "styled-components";
import CategoryItem from "./CategoryItem";
import { mobile } from "../responsive";

const Container = styled.div`
    display: flex;
    padding: 20px;
    justify-content: space-between;
    ${mobile({ padding: 0, display: "flex", flexDirection: "column"})};
`;

const Categories = () => {
    return (
        <Container>
            {categoriesData.map((item) => (
                <CategoryItem item={item} key={item.id} />
            ))}
        </Container>
    );
};

export default Categories;
