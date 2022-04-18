import Announcement from '../components/Announcement'
import React from 'react'
import styled from "styled-components"
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Products from '../components/Products'
import { useLocation } from 'react-router-dom'
import { useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
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

    let navigate = useNavigate();

    function handleChange(value) {
        navigate(`/products/${value}`);
    }

    const handleFilters = (e) => {
        const value = e.target.value;
        if (value !== "All") {
            setFilters({
                ...filters,
                [e.target.name]: value
            })
        } else {
            setFilters({})
        }
    }
    return (
        <Container>
            <Navbar />
            <Announcement />
            <Title> Browse Products </Title>
            <FilterContainer>
                <Filter>
                    <FilterText> Filter Products: </FilterText>
                    <Select onChange={(e) => handleChange(e.target.value)}>
                        <Option value="all">All</Option>
                        <Option value="Automotive Parts %26 Accessories">Automotive Parts & Accessories</Option>
                        <Option value="Office Products">Office Products</Option>
                        <Option value="Industrial %26 Scientific">Industrial & Scientific</Option>
                        <Option value="Health, Household %26 Baby Care">Health, Household & Baby Care</Option>
                        <Option value="Home %26 Kitchen">Home & Kitchen</Option>
                        <Option value="Electronics">Electronics</Option>
                        <Option value="Amazon Devices">Amazon Devices</Option>
                        <Option value="Tools %26 Home Improvement">Tools & Home Improvement</Option>
                        <Option value="Appliances">Appliances</Option>
                        <Option value="Baby">Baby</Option>
                    </Select>
                    <Select name="brand" onChange={handleFilters}>
                        <Option disabled selected>
                            Brand
                        </Option>
                        <Option>All</Option>
                        <Option>A-SUB</Option>
                        <Option>AGLUCKY</Option>
                        <Option>ARRIS</Option>
                        <Option>Amazon</Option>
                        <Option>Amazon Basics</Option>
                        <Option>Anker</Option>
                        <Option>Apple</Option>
                        <Option>BERLINZO</Option>
                        <Option>BLACK+DECKER</Option>
                        <Option>Blink Home Security</Option>
                        <Option>Blurams</Option>
                        <Option>Broan-NuTone</Option>
                        <Option>CHEAP! CHEAP! MOVING BOXES</Option>
                        <Option>COMSOON</Option>
                        <Option>COSMO</Option>
                        <Option>COSTWAY</Option>
                        <Option>CROWNFUL</Option>
                        <Option>Chalk City</Option>
                        <Option>Danisse</Option>
                        <Option>Dell</Option>
                        <Option>E EUHOMY</Option>
                        <Option>EXPO</Option>
                        <Option>Essential Values</Option>
                        <Option>Everlasting Comfort</Option>
                        <Option>ExcelMark</Option>
                        <Option>FREE VILLAGE</Option>
                        <Option>FRIGIDAIRE</Option>
                        <Option>Farberware</Option>
                        <Option>Ferilinso</Option>
                        <Option>FresherAcc</Option>
                        <Option>Fujifilm</Option>
                        <Option>GE</Option>
                        <Option>GE home electrical</Option>
                        <Option>Galanz</Option>
                        <Option>Generic</Option>
                        <Option>Gevi Household</Option>
                        <Option>Giantex</Option>
                        <Option>HANYCONY</Option>
                        <Option>HP</Option>
                        <Option>Hammermill</Option>
                        <Option>Havit</Option>
                        <Option>IFEART</Option>
                        <Option>Igloo</Option>
                        <Option>Ixcv</Option>
                        <Option>KABCON</Option>
                        <Option>KAPAS</Option>
                        <Option>KINGSWERE</Option>
                        <Option>KTRIO</Option>
                        <Option>Kismile</Option>
                        <Option>Lenovo</Option>
                        <Option>MOKiN</Option>
                        <Option>Midea</Option>
                        <Option>Mifaso</Option>
                        <Option>Motorola</Option>
                        <Option>NETGEAR</Option>
                        <Option>OHill</Option>
                        <Option>OtRainbow</Option>
                        <Option>PAPERAGE</Option>
                        <Option>PILOT</Option>
                        <Option>Panaromia</Option>
                        <Option>Paper Mate</Option>
                        <Option>Pendaflex</Option>
                        <Option>Proctor Silex</Option>
                        <Option>Ring</Option>
                        <Option>Roku</Option>
                        <Option>SABRENT</Option>
                        <Option>SPACEKEEPER</Option>
                        <Option>SUPER DEAL</Option>
                        <Option>Sceptre</Option>
                        <Option>Scotch</Option>
                        <Option>Silonn</Option>
                        <Option>TP-Link</Option>
                        <Option>Tops</Option>
                        <Option>Upstreman</Option>
                        <Option>VELCRO</Option>
                        <Option>VIVOHOME</Option>
                        <Option>WYZE</Option>
                        <Option>YI</Option>
                        <Option>YaimhSound</Option>
                        <Option>Yintar</Option>
                        <Option>eero</Option>
                        <Option>livho</Option>
                        <Option>musbus</Option>
                    </Select>
                </Filter>
                <Filter>
                    <FilterText> Sort Products: </FilterText>
                    <Select onChange={(e) => setSort(e.target.value)}>
                        <Option value="newest" disabled selected>Newest</Option>
                        <Option value="asc">Price (asc)</Option>
                        <Option value="desc">Price (desc)</Option>

                    </Select>
                </Filter>
            </FilterContainer>
            <Products cat={cat} filters={filters} sort={sort} />
            < Footer />
        </Container >
    )
}

export default ProductList