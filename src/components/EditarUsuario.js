import { useState, useEffect } from "react";
import UserService from "../services/UserService";
import "./EditarUsuario.css"

export default function EditarUsuario({id, onClose}){

    const userService = new UserService();

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

    const controlChange = (e)  =>  {
        const {name, value}  = e.target;

        if (name.includes('address.'))  {
            const place = name.split('.')[1];
            setUser(prev => (
                {
                    ...prev,
                    address: {...prev.address, [place]: value}
                }
            ))
        }
        else if(name.includes('company.')) {
            const place = name.split('.')[1];
            setUser(prev => (
                {
                    ...prev,
                    company: {...prev.company, [place]: value}
                }
            ))
        }else{
            setUser(prev => (
                {
                    ...prev,
                    [name]: value
                }
            ))
        }
    }

    const updateUser = (e) => {
        e.preventDefault();
        userService.updateUser(user).catch((error) => console.error(error));
    }

    return  (
        <div className="modal-overlay">
            {loading || !user ?
            (
                <div>
                    <h2>Cargando</h2>
                    </div>
            ):
            (
        <form className="modal-content" onSubmit={updateUser}>
            <h2>Editar  Usuario</h2>
            <h4>Informacion Basica</h4>
            <label>Nombre:  </label><input name="name" placeholder="name" value={user.name} onChange={controlChange}></input>
            <label>Nombre de Usuario:  </label><input name="username" placeholder="username" value={user.username} onChange={controlChange}></input>
            <label>Email</label><input name="email" placeholder="email" value={user.email} onChange={controlChange}></input>
            <label>Telefono</label><input name="phone" placeholder="phone" value={user.phone} onChange={controlChange}></input>
            <label>SitioWeb</label><input name="website" placeholder="website" value={user.website} onChange={controlChange}></input>
            <h4>Direccion</h4>
            <label>Calle</label><input name="address.street" placeholder="Street" value={user.address.street} onChange={controlChange}></input>
            <label>Casa</label><input name="address.suite" placeholder="Apto" value={user.address.suite} onChange={controlChange}></input>
            <label>Ciudad</label><input name="address.city" placeholder="City" value={user.address.city} onChange={controlChange}></input>
            <label>Codigo Postal</label><input name="address.zipcode" placeholder="Zipcode" value={user.address.zipcode} onChange={controlChange}></input>
            <h4>Compañía</h4>
            <label>Nombre</label><input name="company.name" placeholder="Name" value={user.company.name} onChange={controlChange}></input>
            <label>BS</label><input name="company.bs" placeholder="Bs" value={user.company.bs} onChange={controlChange}></input>
            <label>Lema</label><input name="company.catchPhrase" placeholder="catchPhrase" value={user.company.catchPhrase} onChange={controlChange}></input>
            <h4>Opciones</h4>
            <button type="submit">Editar Usuario</button>
            <button onClick={onClose}>Cerrar</button>
        </form>
            )
}
        </div>
    )

}