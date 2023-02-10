import '../App.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CardShip from '../components/CardShip/CardShip';
import { Link, useParams } from "react-router-dom";
import BotonInicio from '../components/BotonInicio/BotonInicio';
import ReactPaginate from 'react-paginate';


const ListShips = () => {

    const [starShips, setStarShips] = useState([]);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState([]);
    let limit = 10;

    //Llamada a la API
    useEffect(() => {
        const ApiCall = async () => {
            axios.get(`https://swapi.dev/api/starships/`)
                .then(res => {
                    setStarShips(res.data.results);
                    //console.log(res)

                    //Cuento el total de items que devuelve la API (36)
                    const total = res.data.count;
                    //console.log(total);

                    //Calculo el máximo de páginas a las que puedo acceder
                    //si hay 36 naves y puedo ver 10 por página hago la división
                    //Y lo aproximo al numero superior
                    setTotalPages(Math.ceil(total / limit));
                    //console.log(totalPages)
                })
        };
        ApiCall();
    }, [limit]);
    console.log(starShips);


    const fetchPage = async (page) => {
        axios.get(`https://swapi.dev/api/starships/?page=${page}`)
            .then(res => {
                setStarShips(res.data.results);
                console.log(res)
            })
    };

    // Funcion menu Paginación
    const handlePageClick = async (data) => {
        let currentPage = data.selected + 1;

        const changePage = await fetchPage(currentPage);
        setPage(changePage);
    }


    return (
        <div className="App">
            {starShips.map((starShip) => {
                const idShip = starShip.url.split("/")[5];
                //console.log(idShip);
                //console.log(starShip.url);
                //console.log(idShip);
                return <Link to={`/ListShips/${idShip}`} key={starShip.url}><CardShip name={starShip.name} model={starShip.model}></CardShip></Link>
            })}
            <div className="container mt-5 ">
                <div className="row">
                    <div className="col-md-12">
                        <ReactPaginate
                            previousLabel={'previous'}
                            nextLabel={'next'}
                            pageCount={totalPages}
                            marginPagesDisplayed={3}
                            pageRangeDisplayed={3}
                            onPageChange={handlePageClick}
                            containerClassName={'pagination justify-content-center'}
                            pageClassName={'page-item'}
                            pageLinkClassName={'page-link'}
                            previousClassName={'page-item'}
                            previousLinkClassName={'page-link'}
                            nextClassName={'page-item'}
                            nextLinkClassName={'page-link'}
                            activeClassName={'active'}
                        />
                    </div>
                </div>

            </div>
        </div>
    );
}

export default ListShips;