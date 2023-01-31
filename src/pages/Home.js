import React from "react";
import { Link } from "react-router-dom";
import BotonInicio from '../components/BotonInicio/BotonInicio';
import '../App.css';

const Home = () => {
    return <div>

        <div className="container mt-5">
            <div className="row text-center">
                <div className="col-md-12 my-5">
                    <h3 className="text-white my-5">Wellcome to StarWars Page</h3>
                    <h3 className="text-white my-5">Enjoy it and have fun</h3>
                    <Link to='/ListShips'>
                        <BotonInicio textBtnInicio="Start" className="btn-submit" type="button" ></BotonInicio>
                    </Link>
                </div>
            </div>

        </div>

    </div>;
};

export default Home;