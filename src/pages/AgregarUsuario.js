import { useState } from "react";
import UserService from "../services/UserService";
import "./AgregarUsuario.css"

export default function AgregarUsuario(){

    const userService = new UserService();

    const [newUser, setNewUser] = useState(
        {
  name: "",
  username: "",
  email: "",
  address: {
    street: '',
    suite: "",
    city: "",
    zipcode: "",
    geo: {
      lat: "",
      lng: ""
    }
  },
  phone: "",
  website: "",
  company: {
    name: "",
    catchPhrase: "",
    bs: ""
  }
        }
    )

    const controlChange = (e)  =>  {
        const {name, value}  = e.target;

        if (name.includes('address.'))  {
            const place = name.split('.')[1];
            setNewUser(prev => (
                {
                    ...prev,
                    address: {...prev.address, [place]: value}
                }
            ))
        }
        else if(name.includes('company.')) {
            const place = name.split('.')[1];
            setNewUser(prev => (
                {
                    ...prev,
                    company: {...prev.company, [place]: value}
                }
            ))
        }else{
            setNewUser(prev => (
                {
                    ...prev,
                    [name]: value
                }
            ))
        }
    }

    const addUser = (e) => {
        e.preventDefault();
        userService.createUser(newUser).catch((error) => console.error(error));
    }

    return  (
        <div className="div-form">
        <form className="form-content" onSubmit={addUser}>
            <h2>Agregar  Usuario</h2>
            <h4>Informacion Basica</h4>
            <input name="name" placeholder="name" value={newUser.name} onChange={controlChange}></input>
            <input name="username" placeholder="username" value={newUser.username} onChange={controlChange}></input>
            <input name="email" placeholder="email" value={newUser.email} onChange={controlChange}></input>
            <input name="phone" placeholder="phone" value={newUser.phone} onChange={controlChange}></input>
            <input name="website" placeholder="website" value={newUser.website} onChange={controlChange}></input>
            <h4>Direccion</h4>
            <input name="address.street" placeholder="Street" value={newUser.address.street} onChange={controlChange}></input>
            <input name="address.suite" placeholder="Apto" value={newUser.address.suite} onChange={controlChange}></input>
            <input name="address.city" placeholder="City" value={newUser.address.city} onChange={controlChange}></input>
            <input name="address.zipcode" placeholder="Zipcode" value={newUser.address.zipcode} onChange={controlChange}></input>
            <h4>Compañía</h4>
            <input name="company.name" placeholder="Name" value={newUser.company.name} onChange={controlChange}></input>
            <input name="company.bs" placeholder="Bs" value={newUser.company.bs} onChange={controlChange}></input>
            <input name="company.catchPhrase" placeholder="catchPhrase" value={newUser.company.catchPhrase} onChange={controlChange}></input>
            <button type="submit">Agregar Usuario</button>
        </form>
        </div>
    )

}