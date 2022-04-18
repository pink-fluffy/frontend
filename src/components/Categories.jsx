import React from 'react'
import styled from 'styled-components'
import { categories } from '../data';
import CategoryItem from './CategoryItem';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import { ArrowLeftOutlined, ArrowRightOutlined } from "@material-ui/icons";

const Container = styled.div`
       //flex-direction: row;
       //display: flex;
       //padding: 20px;
       //justify-content: space-between;

`
const Arrow = styled.div`
  width: 50px;
  height: 50px;
  background-color: #fff7f7;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: ${(props) => props.direction === "left" && "10px"};
  right: ${(props) => props.direction === "right" && "10px"};
  margin: auto;
  cursor: pointer;
  opacity: 0.5;
  z-index: 2;
`;

const Categories = () => {
    let count = 0
    return (
        <Container>
            <CarouselProvider
                orientation="horizontal"
                step={2}
                visibleSlides={3}
                naturalSlideWidth={650}
                naturalSlideHeight={940}
                totalSlides={categories.length}
            >
                <Slider>
                    {categories.map((item, i) => (
                        <Slide key={i} index={i}><CategoryItem item={item} key={item.id} /> </Slide>

                    ))}
                </Slider>
                <ButtonBack><ArrowLeftOutlined /></ButtonBack>
                <ButtonNext><ArrowRightOutlined /></ButtonNext>
            </CarouselProvider>
        </Container>
    )
}

export default Categories