import styled from 'styled-components'

const Container = styled.div`
    height: 30px;
    background-color: teal;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 24px;
    font-weight: 400;
`

const TopTextField = () => {
  return (
    <Container>
        Best deals! Buy stuff! Now!
    </Container>
  )
}

export default TopTextField
