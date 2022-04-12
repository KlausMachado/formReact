import styled from "styled-components";

export const Text = () => {
    return (
        <>
            <Div>
                <H1>Learn to code by watching others</H1>
                <p>See how experienced developers solve problems in real-time. Watching scripted tutorials is great, bet understanding how developers think is invaluable.</p>
            </Div>
        </>
    )
}

const Div = styled.div`
    display: block;
    align-itens: center;
    justify-content: center;
    flex-direction: column;
    padding-top: 25%;
    margin-right: 2rem;
    color: #fff;
    `
const H1 = styled.h1`
    font-size: 42px;
`