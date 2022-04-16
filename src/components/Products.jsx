import styled from "styled-components"
import { popularProducts } from "../data"
import Product from "./Product"
import {
    useState
} from "react"
import { useEffect } from "react"
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
        const getFilteredProducts = async () => {
            await axios({
                url: `/product/?category=${cat}`, method: 'get', baseURL: 'https://api.shopunicorn.live', headers: { 'Authorization': 'Bearer fluffytestingunicorn' }
            }).then(function (response) {
                console.log(response);
                const res = response
                setProducts(res.data)
            }).catch(function (error) {
                console.log(error);
            });
        }
        getFilteredProducts()
    }, [cat])


    return (
        <Container>
            {popularProducts.map((item) => (
                <Product item={item} key={item.id} />
            ))}
        </Container>
    )
}

export default Products