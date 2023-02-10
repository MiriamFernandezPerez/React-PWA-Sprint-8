import React from "react";
import BotonInicio from '../components/BotonInicio/BotonInicio';
import '../App.css';
import { useState, useEffect } from "react";
import Input from "../components/Input/Input";

const Login = () => {

    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    let users = [];
    let ok = document.getElementById('ok');
    let error = document.getElementById('error');
    let response;

    const handleSubmit = (event) => {
        event.preventDefault();
        const newUser = {
            username: username,
            email: email,
            password: password
        };
        verifyUser(newUser);
    }

    const verifyUser = (newUser) => {
        if (localStorage.length === 0) {
            localStorage.setItem("registered", JSON.stringify([...users, newUser]));
            response = 'ok';
            showAlert(response);
        } else {
            let usersLocal = localStorage.getItem("registered");
            let usersReg = JSON.parse(usersLocal);

            let result = usersReg.find(user => user.username == newUser.username || user.email == newUser.email);
            if (result) {
                response = 'error';
                showAlert(response);
            } else {
                localStorage.setItem("registered", JSON.stringify([...usersReg, newUser]));
                console.log('El usuario registrado es: ' + newUser.username + ' ' + newUser.password);
                response = 'ok';
                showAlert(response);
            }
        }
    }

    const showAlert = (response) => {
        if (response === "ok") {
            //Redirijo al Login con un delay de 5 segundos para mostrar aviso de registro correcto
            ok.classList.add("mostrar");
            setTimeout('window.location = "./Login"', 3000);
        } else {
            //Muestro mensaje de error de usuario ya registrado
            error.classList.add("mostrar");
            setTimeout('error.classList.remove("mostrar") ', 3000);
        }
    }

    return <div>
        <div className="container mt-3">
            <div className="row text-center">
                <div className="col-md-12 my-3">
                    <h2 className="form-label text-white text-decoration-underline">Sign Up</h2>
                    <div className="alert alert-success w-50 text-center mb-3 ocultar mx-auto" id="ok" role="alert">Signup approved!</div>
                    <div className="alert alert-success w-50 text-center mb-3 ocultar mx-auto" id="error" role="alert">The user already exist</div>
                    <form onSubmit={handleSubmit}>
                        <div className="col-md-12">
                            <h4><label className="form-label text-white mt-4">Username</label></h4>
                            <Input type="text" placeholder="Entry username" onChange={(event) => setUsername(event.target.value)} value={username}>
                            </Input>
                        </div>
                        <div className="col-md-12">
                            <h4><label className="form-label text-white mt-4">E-mail</label></h4>
                            <Input type="email" placeholder="Entry your e-mail" onChange={(event) => setEmail(event.target.value)} value={email}>
                            </Input>
                        </div>
                        <div className="col-md-12">
                            <h4><label className="form-label text-white mt-4">Password</label></h4>
                            <Input type="password" placeholder="Entry password" onChange={(event) => setPassword(event.target.value)} value={password}>
                            </Input>
                        </div>
                        <div className="col-md-12 mt-5">
                            <BotonInicio textBtnInicio="Create Account" className="btn-submit" type="button" ></BotonInicio>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>;
};

export default Login;