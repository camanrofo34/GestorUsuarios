import { useEffect, useState } from "react"
import UserService from "../services/UserService";
import DetallesUsuario from "../components/DetallesUsuario";
import { Link } from "react-router-dom";
import EditarUsuario from "../components/EditarUsuario";
import "./Usuarios.css";

export default function Usuarios() {

    const [users, setUsers] = useState([]);
    const [selectedUser, setSelectedUser] = useState(null);
    const [userDetailsModal, setUserDetailsModal] = useState(false);
    const [userUpdateModal, setUserUpdateModal] = useState(false);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        const userService = new UserService();
        const getUsers = async () => {
            userService.getUsers().then(response => setUsers(response));
        }
        getUsers();
        setLoading(false)
        },
        []
    )

    const userDetails = (user) => {
        setSelectedUser(user);
        setUserDetailsModal(true)
    }

    const closeUserDetails = () => {
        setSelectedUser(null);
        setUserDetailsModal(false)
    }

    const userUpdate = (user)=> {
        setSelectedUser(user);
        setUserUpdateModal(true)
    }
    const closeUserUpdate = ()=> {
        setSelectedUser(null);
        setUserUpdateModal(false)
    }

    return (
        <div>
            <div className="title-div">
                <h1>Usuarios</h1>
            </div>
            <button><Link to='/AgregarUsuario'>Agregar Usuario</Link></button>
            {loading ? 
                (<h2>
                    Cargando
                </h2>):
            (
            <div>
            <ul className="user-list">
                {users.map( 
                    (user) => (
                    <li className="list-item" key={user.id}>
                        <a className="item-text">{user.name}</a>
                        <div className="button-container">
                        <button className="item-button" onClick={() => userDetails(user.id)}>Ver</button>
                        <button className="item-button" onClick={() => userUpdate(user.id)}>Editar</button>
                        </div>
                    </li>
                )
                )}
            </ul>
            {userDetailsModal && <DetallesUsuario 
                id={selectedUser}
                onClose={closeUserDetails}/>
            }
            {userUpdateModal && <EditarUsuario
            id={selectedUser}
            onClose={closeUserUpdate}
        />}
            </div>
        )
        }
        </div>
    )
}