import React, {useCallback, useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';

import AppForm from "./AppForm";
import {List} from "./List";
import {Consultar} from "./Consultar";
import {BrowserRouter, Link, Route} from "react-router-dom"
import {Salvar} from "./Salvar";

export default () => {
    const color = "red"
    const tamanhodafonte = 18
    const [isLoading, setIsLoading] = useState(false);
    const load = useCallback(() => {
        setIsLoading(true)
        setTimeout(() => {
            setIsLoading(false)
        }, 2000)
    }, [setIsLoading]);

    useEffect(() => {
        return () => {
        }
    }, []);

    useEffect(() => {
        console.log(isLoading)
    }, [isLoading])

    return <div className="App">
        <BrowserRouter>
            <Link to={"/"}>
                home
            </Link>
            <Link to={"/list"}>
                List
            </Link>
            <Link to={"Consultar"}>
                Consultar
            </Link>
          <Link to={"Salvar"}>
            Salvar
          </Link>
          <Route path={"/list"} >
            <List/>
          </Route>
            <Route path={"/"} exact>
                <AppForm carregando={isLoading}>
                    <h2>ESPERA</h2>
                </AppForm>
                <button type="button" onClick={load}>Recarregar</button>
            </Route>
            <Route path={"/Consultar"} >
              <Consultar/>
            </Route>
          <Route path={"/Salvar"} >
            <Salvar/>
          </Route>
        </BrowserRouter>
    </div>
}
