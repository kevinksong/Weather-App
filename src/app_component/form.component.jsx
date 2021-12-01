import React from 'react';
import './form.style.css';

const Form= props =>{
    return(
        <div className="container">
            <div>{props.error ? error() :null}</div>
            <form onSubmit={props.loadweather}>
            <div className="row">
                <div className="col-md-3 offset-md-2">
                    <input type="text" className="form-control" name="city" autoComplete="on" placeholder="City"/>
                </div>
                <div className="col-md-3">
                <input type="text" className="form-control" name="country" autoComplete="on" placeholder="Country"/>
                </div>
                    <button className="weatherbutton"> Search </button>
            </div>
            </form>
        </div>
    )
}

function error(){
    return(
        <div className="alert alert-danger mx-5" role="alert">
            Enter a valid city and/or country
        </div>
    )
}

export default Form;