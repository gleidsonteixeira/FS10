import React from 'react';
import { useContext } from 'react';
import styled from 'styled-components';
import { LoginContext } from '../../App';
import { useEffect } from 'react';

const Alert = ({ titulo = 'Titulo do alerta', message = 'Mensagem', active = false }) => {

    const { alerta, setAlerta } = useContext(LoginContext);

    useEffect(() => {
        if(alerta.active){
            setTimeout(() => {
                setAlerta({...alerta, active: false});
            }, 3000)
        }
    },[alerta])

    return(
        <>
            <Container className={active ? "active" : ""}>
                <Title>{titulo}</Title>
                <Message>{message}</Message>
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
    opacity: 0;
    visibility: hidden;
    transition-duration: 300ms;
    &.active{
        opacity: 1;
        visibility: visible;
    }
`;

const Title = styled.h5`
    font-size: 16px;
    margin-bottom: 10px;
    font-family: Arial, Helvetica, sans-serif;
`;

const Message = styled.p`
    font-size: 14px;
    color: #999999;
    font-family: Arial, Helvetica, sans-serif;
`;

export default Alert;