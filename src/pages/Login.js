import React from "react";
import BotonInicio from '../components/BotonInicio/BotonInicio';
import '../App.css';
import { useState } from "react";
import Input from "../components/Input/Input";

const Login = () => {
    //Rescato los usuarios registrados en LocalStorage
    let usersLocal = localStorage.getItem("registered");
    let usersReg = JSON.parse(usersLocal);

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    let ok = document.getElementById('ok');
    let error = document.getElementById('error');
    let response;
    const [isLogged, setIsLogged] = useState(false);
    console.log('¿Hay algún usuario logueado? ' + isLogged);

    const handleSubmit = (event) => {
        event.preventDefault();
        let result = usersReg.find(user => user.username == username && user.password == password);
        if (result == undefined) {
            response = 'error';
            showAlert(response);
        } else {
            localStorage.setItem("isLogged", JSON.stringify([result]));
            console.log('El usuario logueado y su contraseña es: ' + result.username + ' ' + result.password)
            setIsLogged(true);
            //Creo un token para dar acceso al usuario en localstorage
            localStorage.setItem("token", "true");
            response = 'ok';
            showAlert(response);
        }
    }

    const showAlert = (response) => {
        if (response === "ok") {
            //Redirijo al ListShips como usuario logueado correctamente
            ok.classList.add("mostrar");
            setTimeout('window.location = "./ListShips"', 3000);
        } else {
            //Muestro mensaje de error de que el usuario no existe en LocalStorage
            error.classList.add("mostrar");
            setTimeout('error.classList.remove("mostrar") ', 3000);
        }
    }

    return <div>
        <div className="container mt-3">
            <div className="row text-center">
                <div className="col-md-12 my-3">
                    <h2 className="form-label text-white text-decoration-underline">Login</h2>
                    <div className="alert alert-success w-50 text-center mb-3 ocultar mx-auto" id="ok" role="alert">Login approved!</div>
                    <div className="alert alert-success w-50 text-center mb-3 ocultar mx-auto" id="error" role="alert">The user doesn't exist</div>
                    <form onSubmit={handleSubmit}>
                        <div className="col-md-12">
                            <h4><label className="form-label text-white mt-4">Username</label></h4>
                            <Input type="text" placeholder="Entry username or e-mail" onChange={(event) => setUsername(event.target.value)} value={username}>
                            </Input>
                        </div>
                        <div className="col-md-12">
                            <h4><label className="form-label text-white mt-4">Password</label></h4>
                            <Input type="password" placeholder="Entry password" onChange={(event) => setPassword(event.target.value)} value={password}>
                            </Input>
                        </div>
                        <div className="col-md-12 mt-5">
                            <BotonInicio textBtnInicio="Login" className="btn-submit" type="button" ></BotonInicio>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>;
};

export default Login;