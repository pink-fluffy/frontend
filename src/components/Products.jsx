import styled from "styled-components"
import { popularProducts } from "../data"
import Product from "./Product"
import { useEffect, useState } from "react"
import axios from "axios"


const Container = styled.div`
    display: flex;
    padding: 20px;
    justify-content: space-between;
    flex-wrap: wrap;
    justify-content: space-between;
`
const Products = ({ cat, filters, sort }) => {
    const [products, setProducts] = useState([])
    const [filteredProducts, setFilteredProducts] = useState([])
    /*Every time we change the category
       execture the useEffect() function
    */
    useEffect(() => {
        const getProducts = async () => {
            await axios(
                cat ? {
                    url: `/product/?category=${cat}`, method: 'get', baseURL: 'https://api.shopunicorn.live', headers: { 'Authorization': 'Bearer fluffytestingunicorn' }
                } : { url: `/product/getAll`, method: 'get', baseURL: 'https://api.shopunicorn.live', headers: { 'Authorization': 'Bearer fluffytestingunicorn' } }
            ).then(function (response) {
                setProducts(response.data.data)
            }).catch(function (error) {
                console.log(error);
            });
        }
        getProducts()
    }, [cat]);

    useEffect(() => {
        console.log(products)
        cat &&
            setFilteredProducts(
                products.filter((item) =>
                    Object.entries(filters).every(([key, value]) =>
                        item[key].includes(value)
                    )
                )
            );
    }, [products, cat, filters]);
    useEffect(() => {
        if (sort === "asc") {
            setFilteredProducts((prev) =>
                [...prev].sort((a, b) => a.price - b.price)
            );
        } else {
            setFilteredProducts((prev) =>
                [...prev].sort((a, b) => b.price - a.price)
            );
        }
    }, [sort]);

    return (
        <Container>
            {cat
                ? filteredProducts.map((item) => <Product item={item} key={item.id} />)
                : products
                    .slice(0, 8)
                    .map((item) => <Product item={item} key={item.id} />)}
        </Container>
    )
}

export default Products