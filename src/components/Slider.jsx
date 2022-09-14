import styled from 'styled-components'
import ArrowBackIosNewOutlinedIcon from '@mui/icons-material/ArrowBackIosNewOutlined';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
import { useState } from 'react';
import { sliderItems } from '../data';


const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    position: relative;
    overflow: hidden;
`

const NavArrow = styled.div`
    width: 50px;
    height: 50px;
    background-color: #f3f3f3;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    bottom: 0;
    left: ${props=> props.direction === "left" && "10px"};
    right: ${props=> props.direction === "right" && "10px"};
    margin: auto;
    cursor: pointer;
    opacity: 0.5;
    z-index: 2;
`
const ImgWrapper = styled.div`
    height: 100%;
    display: flex;
    transform: translateX(${props => props.slideIndex * -100}vw);
`
const ProductSlide = styled.div`
    width: 10vw;
    height: 100vh;
    display: flex;
    align-items: center;
`

const ProductImageContainer = styled.div`
    height: 100%;
    flex: 1;
`
const Image = styled.img`
    height: 80%;
`

const ProductInfoContainer = styled.div`
    flex: 1;
    padding: 50px;
`

const Title = styled.h1`
    font-size: 70px;
`
const Description = styled.p`
    margin: 50px 0px;
    font-size: 20px;
    font-weight: 500;
    letter-spacing: 4px;
`
const Button = styled.button`
    padding: 10px;
    font-size: 20px;
    border-color: transparent;
    cursor: pointer;
`

const Slider = () => {
    const [slideIndex, setSlideIndex] = useState(0)
    const handleClick = (direction) => {

        if(direction === "left"){
            setSlideIndex(slideIndex > 0 ? slideIndex -1 : 2)
        } else {
            setSlideIndex(slideIndex < 2 ? slideIndex +1 : 0)
        }

    }

  return (
    <Container>
      <NavArrow direction="left" onClick={()=> handleClick("left")}>
        <ArrowBackIosNewOutlinedIcon/>
      </NavArrow>
        <ImgWrapper slideIndex={slideIndex}>
            {sliderItems.map(item =>(   
            <ProductSlide>
                <ProductImageContainer>
                    <Image src={item.img}/>
                </ProductImageContainer>

                <ProductInfoContainer>
                    <Title>{item.title}</Title>
                    <Description>{item.desc}</Description>
                    <Button>BUY NOW</Button>
                </ProductInfoContainer>
            </ProductSlide>
            ))}
        </ImgWrapper>
      <NavArrow direction="right" onClick={()=> handleClick("right")}>
      <ArrowForwardIosOutlinedIcon/>
      </NavArrow>
    </Container>
  )
}

export default Slider
