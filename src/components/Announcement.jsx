import styled from "styled-components"

const Container = styled.div`
    height: 30px;
    background-color: pink;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 500;
`
const Announcement = () => {
    return (
        <div>
            <Container>
                Annoucement
            </Container>

        </div>
    )
}

export default Announcement