import styled from "styled-components";
import { Button, TextInput } from "../../theme";
import { useForm } from "react-hook-form";
import Alert from "../Alert";
import { useContext } from "react";
import { LoginContext } from "../../App";

const Login = () => {

    const { register, handleSubmit } = useForm();
    const { setEstaLogado, alerta, setAlerta } = useContext(LoginContext);

    const usuario = {
        email: 'gleidsondeveloper@gmail.com',
        senha: '123456'
    }

    const logar = (dados) => {
        if(dados.email !== usuario.email || dados.senha !== usuario.senha){
            setAlerta({titulo: 'Alerta:', message: 'Usuário ou senha incorreto', active: true});
            return;
        }
        setEstaLogado(true);
        sessionStorage.setItem('estaLogado', 'true');
    }

    return(
        <Container>
            <h1>Login</h1>
            <form onSubmit={handleSubmit(logar)}>
                <Label>Email</Label>
                <TextInput 
                    style={{marginBottom: '16px', width: '100%'}}
                    type="email"
                    placeholder="email@email.com"
                    {...register('email')}
                    required />
                <Label>Senha</Label>
                <TextInput 
                    style={{marginBottom: '16px', width: '100%'}}
                    type="password"
                    placeholder="******"
                    {...register('senha')}
                    required />
                <Button 
                    style={{width: '100%', fontSize: '14px'}}>
                        Entrar
                </Button>
            </form>
            <Alert 
                titulo={alerta.titulo} 
                message={alerta.message}
                active={alerta.active} />
        </Container>
    );
}

const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 16px;
    & form{
        width: 100%;
    }
    & h1{
        font-family: Arial, Helvetica, sans-serif;
        margin-bottom: 26px;
    }
`;

const Label = styled.label`
    width: 100%;
    display: block;
    margin-bottom: 6px;
    font-size: 12px;
    font-weight: bold;
    font-family: Arial, Helvetica, sans-serif;
    text-transform: uppercase;
    letter-spacing: 1px;
`;

export default Login;