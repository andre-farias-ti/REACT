import React, {useEffect, useState} from "react";
import axios from "axios";

export const List = () => {
    const [user, setUsers] = useState([]);
    const [err, setErr] = useState('');

    useEffect(() => {
        axios.get("http://localhost:9090/usuarios")
            .then(({data}) => {
                setUsers(data)
            })
            .catch((e) => {
                setErr("Deu Ruin")
            })
    },[]);

    return (
        <div>{err}
            {user.map(user => (<div>
                <p>Nome: {user.username}</p>
                <p>Senha: {user.password}</p>
            </div>)
            )}
        </div>
    )
}