import React, {useCallback, useEffect, useState} from "react";
import axios from "axios";

export const Consultar = () => {
    const [user, setUsers] = useState([]);
    const [err, setErr] = useState('');
    const [id, setId] = useState([]);

    const ConsultarUser = () => {
        if (id?.length > 0) {
            axios.get(`http://localhost:9090/usuarios/${id}`)
                .then(({data}) => {
                    setUsers(data);
                })
                .catch((e) => {
                    setErr("Deu Ruin")
                });
        }
    };

    return (
        <div>{err}
            <form>
                ID: <input type="text" onInput={(e)=>
                setId(e.target.value)}/>
                <button type="button" onClick={ConsultarUser} >Consultar</button>
            </form>

            <div>{err}
                {user.length != 0? <div>
                    <p>Nome: {user.username}</p>
                    <p>Senha: {user.password}</p>
                </div> : <div></div>}
            </div>
        </div>
    )
}