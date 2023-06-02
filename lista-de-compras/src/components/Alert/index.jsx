import React from 'react';
import styled from 'styled-components';

const Alert = () => {
    return(
        <>
            <Container>
                alerta
            </Container>
        </>
    );
}

const Container = styled.div`
    width: calc(100% - 32px);
    background-color: white;
    padding: 16px;
    position: absolute;
    bottom: 16px;
    left: 16px;
    border-radius: 5px;
    box-shadow: 0 5px 15px #00000015;
`;

export default Alert;