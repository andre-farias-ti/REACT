import React, {useCallback, useEffect, useState} from "react";
import axios from "axios";

export const Salvar = () => {
    const [user, setUsers] = useState([]);
    const [err, setErr] = useState('');
    const [username, setUsername] = useState('');
    const [password, setUPassword] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [address, setAddress] = useState('');

    const SalvarUser = () => {
        const data = new Object({
            username: username,
            password: password,
            phoneNumber: phoneNumber,
            address: address
        });
        console.log(data);
            axios.post("http://localhost:9090/usuarios/salvar", data)
                .then(() => {
                    alert("Salvo com Sucesso");
                })
                .catch((e) => {
                    setErr("Deu Ruin")
                });

    };

    return (
        <div>{err}
            <form>
                Nome: <input type="text" onInput={(e)=>
                setUsername(e.target.value)}/><br/>
                Password: <input type="text" onInput={(e)=>
                setUPassword(e.target.value)}/><br/>
                Número: <input type="text" onInput={(e)=>
                setPhoneNumber(e.target.value)}/><br/>
                Endereço: <input type="text" onInput={(e)=>
                setAddress(e.target.value)}/>
                <button type="button" onClick={SalvarUser} >salvar</button>
            </form>
            <div>{err}
                {user.length != 0? <div>
                    <p>Nome: {user.username}</p>
                    <p>Senha: {user.password}</p>
                    <p>Número: {user.phoneNumber}</p>
                    <p>Endereço: {user.address}</p>
                </div> : <div></div>}
            </div>
        </div>
    )
}