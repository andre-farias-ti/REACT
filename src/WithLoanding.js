import React from 'react';

export const withLoading = (Componente) => {
    const WintLoading = (props) => {
        if(props.carregando === true){
            return "carregando..."
        }
        return <Componente {...props}/>
    }

    return WintLoading;
}