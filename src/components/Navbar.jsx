import React from 'react'
import styled from 'styled-components'
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import Badge from '@mui/material/Badge';


const Container = styled.div`
    height: 60px;
`

const Wrapper = styled.div`
    padding: 10px 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`

const Left = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
`
const Languages = styled.span`
    font-size: 14px;
    cursor: pointer;
`

const SearchContainer = styled.div`
    border: 1px solid lightgrey;
    display: flex;
    align-items: center;
    margin-left: 25px;
    padding: 5px;
`

const Input = styled.input`
    border: none;
`

const Center = styled.div`
    flex: 1;
    text-align: center;
`
const Logo = styled.h1`
    font-weight: bold;
`

const Right = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
`

const MenuLinks = styled.div`
    font-style: 14px;
    cursor: pointer;
    margin-left: 25px;
`

function navbar() {
  return (
    <Container>
      <Wrapper>
        <Left>
            <Languages>EN</Languages>
            <SearchContainer>
                <Input/>
                <SearchIcon />
            </SearchContainer>
        </Left>
        <Center>
            <Logo>NAME.</Logo>
        </Center>
        <Right>
            <MenuLinks>REGISTER</MenuLinks>
            <MenuLinks>SIGN IN</MenuLinks>
            <MenuLinks>
                    <Badge badgeContent={1} color="primary">
                        <ShoppingCartOutlinedIcon color="action" />
                      </Badge>
            </MenuLinks>
        </Right>
      </Wrapper>
    </Container>
  )
}

export default navbar
