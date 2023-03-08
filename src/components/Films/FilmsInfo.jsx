import React from 'react';
import FilmsInfoStyle from './FilmsInfo.styles';

const FilmsInfo = (props) => {

    return (
        <FilmsInfoStyle>
    {/* https://starwars-visualguide.com/#/starships/9 */}
            <div className="container text-uppercase">
                <div className="row text-center mb-3 card">
                    <div className="col-sm-12 card-body">
                        <h5>{props.name}</h5>
                        <img className="img my-4" src={props.url} alt="Film photo" />
                    </div>
                </div>
            </div>
        </FilmsInfoStyle>
    )
}

export default FilmsInfo;
