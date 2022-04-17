import Announcement from '../components/Announcement'
import React from 'react'
import styled from "styled-components"
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Products from '../components/Products'
import { useLocation } from 'react-router-dom'
import { useState } from 'react'
const Container = styled.div`
    
`

const FilterContainer = styled.div`
    display: flex;
    justify-content: space-between;
`

const Filter = styled.div`
    margin: 20px;
`

const Title = styled.h1`
    margin: 20px;
`

const FilterText = styled.span`
    font-size: 20px;
    font-weight: 600;
    margin-right: 20px;
`

const Select = styled.select`
    padding: 10px;
    margin-right: 20px;
`

const Option = styled.option``

const ProductList = () => {
    const location = useLocation();
    const cat = location.pathname.split("/")[2]
    const [filters, setFilters] = useState({})
    const [sort, setSort] = useState("asc")

    const handleFilters = (e) => {
        const value = e.target.value;
        setFilters({
            ...filters,
            [e.target.name]: value
        })
    }
    return (
        <Container>
            <Navbar />
            <Announcement />
            <Title> {cat} </Title>
            <FilterContainer>
                <Filter>
                    <FilterText> Filter Products: </FilterText>
                    <Select name="produce" onChange={handleFilters}>
                        <Option>DAIRY</Option>
                        <Option>Deli</Option>
                        <Option>Bread</Option>
                        <Option>Fish</Option>
                    </Select>
                </Filter>
                <Filter>
                    <FilterText> Sort Products: </FilterText>
                    <Select onChange={(e) => setSort(e.target.value)}>
                        <Option value="asc">Price (asc)</Option>
                        <Option value="desc">Price (desc)</Option>

                    </Select>
                </Filter>
            </FilterContainer>
            <Products cat={cat} filters={filters} sort={sort} />
            < Footer />
        </Container>
    )
}

export default ProductList