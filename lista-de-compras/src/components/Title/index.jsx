import styled from "styled-components";

const Title = (props) => {

    return(
        <>
            <TitleH1>
                {props.titulo}
            </TitleH1>
        </>
    );
}

const TitleH1 = styled.h1`
    font-family: Arial, Helvetica, sans-serif;
    color: white;
    margin-bottom: 10px;
    font-size: 24px;
`;

export default Title;