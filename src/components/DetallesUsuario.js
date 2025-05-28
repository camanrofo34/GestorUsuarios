import { useEffect, useState } from "react"
import UserService from "../services/UserService";

export default function DetallesUsuario({id, onClose}) {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        const userService = new UserService();
        const getUser = async () => {
            userService.getUserById(id).then((response) => setUser(response));
        }
        getUser();
        setLoading(false);
        },
        [id]
    )

    return (
        <div className="modal-overlay">
            {loading || !user ? (
            <h2>
                Cargando
            </h2>
            ):
            (
            <div className="modal-content">
                <h2><strong>Usuario: {user.name}</strong></h2>
                <p><strong>Id: {user.id}</strong></p>
                <p>Nombre de Usuario: {user.username}</p>
                <p>Email: {user.email}</p>
                <p>Telefono: {user.phone}</p>
                <p>Direccion Sitio Web: {user.website}</p>
                <h3><strong>Detalles Direccion:</strong> </h3>
                <p>Calle: {user.address.street}</p>
                <p>Apartamento: {user.address.suite}</p>
                <p>Ciudad: {user.address.city}</p>
                <p>Codigo Postal: {user.address.zipcode}</p>
                <h3><strong>Compañía</strong></h3>
                <p>Nombre: {user.address.city}</p>
                <p>Lema: {user.company.catchPhrase}</p>
                <p>Bs: {user.company.bs}</p>
                <button onClick={onClose}>
                    Cerrar
                </button>
            </div>
            )
}
        </div>
    )
}