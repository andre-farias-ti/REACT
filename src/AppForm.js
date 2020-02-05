import React, {Component, useEffect, useState} from "react";
import  logo from './logo.svg';
import styled, {css} from "styled-components";
import {withLoading} from "./WithLoanding";

const StyleButton = styled.button`
background-color: red;
font-size: 18px;
${props=> props.active && css`
    background-color:green`
}
`;

export default withLoading((props) =>{

const [active, setActive] = useState(false);
    return (
        <fragment>
            <h1>Formulario</h1>
            <form action="">
                Login: <input type="text"/>
                <br/>
                Senha: <input type="password"/>
            </form>
            <StyleButton onMouseLeave={()=>{
                setActive(false);
            }}
             onMouseOver={()=>{
                 setActive(true);
             }}
            active={active}>
                Entre</StyleButton>
            {props.children}
        </fragment>
    )
})