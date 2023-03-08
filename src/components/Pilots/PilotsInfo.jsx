import React from 'react';
import PilotsInfoStyle from './PilotsInfo.styles';

const PilotsInfo = (props) => {

    return (
        <PilotsInfoStyle>
    {/* https://starwars-visualguide.com/#/starships/9 */}
            <div className="container text-uppercase">
                <div className="row text-center mb-3">
                    <div className="col-sm-12 text-center">
                        <h5>{props.name}</h5>
                        <img className="img my-4" src={props.url} alt="Pilot photo" />
                    </div>
                </div>
            </div>
        </PilotsInfoStyle>
    )
}

export default PilotsInfo;

