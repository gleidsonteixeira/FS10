import { Button, ContainerScroll, Header, Row, TextH4, TextInput } from "../../theme";
import 'boxicons';
import { useState } from 'react';
import Title from "../Title";
import Alert from "../Alert";
import { useContext } from "react";
import { LoginContext } from "../../App";


const Lista = () => {

    const [lista, setLista] = useState([]);
    const [item, setItem] = useState('');
    const {alerta, setAlerta} = useContext(LoginContext);

    const inserirItem = () => {
        let empty = item === '';
        let exist = lista.find(cadaItem => cadaItem === item);
        if(empty){
            setAlerta({titulo: "Alerta:", message: "Digite algo para salvar", active: true});
            return;
        }
        if(exist){
            setAlerta({titulo: "Alerta:", message: "Este item já existe!", active: true});
            return;
        }
        setLista([...lista, item]); 
        setItem('');
    }

    const deletarItem = (fruta) => {
        setLista(lista.filter(cadaFruta => cadaFruta != fruta));
    }

    return(
        <>
            <Header>
                <Title titulo="Lista de Compras" />
                <Row>
                    <TextInput 
                        className="w100" 
                        type="text" 
                        value={item}
                        placeholder="Digite o produto" 
                        onChange={(e) => setItem(e.target.value)} />
                    <Button onClick={inserirItem}>
                        <box-icon name="plus-circle" color="white"></box-icon>
                    </Button>
                </Row>  
            </Header>

            <ContainerScroll>
                {
                    lista.map((item, key) => (
                        <Row key={key} className="list-item">
                            <TextH4>{item}</TextH4>
                            <Button onClick={() => deletarItem(item)}>
                                <box-icon name="trash" color="white"></box-icon>
                            </Button>
                        </Row>
                    ))
                }
            </ContainerScroll>

            <Alert 
                titulo={alerta.titulo} 
                message={alerta.message}
                active={alerta.active} />
            
        </>
    )
}

export default Lista;