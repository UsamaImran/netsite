import classNames from 'classnames';
import * as React from 'react';
import { Spinner } from 'react-bootstrap';

interface IBaseSpinner{
    loading:boolean, 
    loadingText?:string
}

interface ICenteredSpinner extends IBaseSpinner{
    size:'lg'|'md'|'sm'|'xs'|'btn', 
    justifyLeft?:boolean
}

const big = "20rem";
const med = "10rem";
const small = "5rem";
const xsmall = "2rem";
const btn = "1rem";

const getStyle = (size:'lg'|'md'|'sm'|'xs'|'btn') => {
    switch(size){
        case 'lg':
         return {width: big, height: big};
        case'md':
         return {width: med, height: med};
        case'sm':
         return {width: small, height: small};
        case'xs':
         return {width: xsmall, height: xsmall};
        case'btn':
         return {width: btn, height:btn};
    }
}

const getSpinnerClassNames = (justifyLeft?:boolean) => {
    return classNames("d-flex", justifyLeft ? "" : "justify-content-center");
}

export const CenteredSpinner:React.FC<ICenteredSpinner> = (props) => {
    const getSpinner = () => {
        return(
            <div className={getSpinnerClassNames(props.justifyLeft)}>
                <Spinner animation="border" role="status" variant="primary" style={getStyle(props.size)} />
                {/* <span> {props.text || "Loading..."}</span> */}
          </div>
        )
    }

    return (
        <>
        {
            props.loading ?
            getSpinner() :
            props.children
        }
        </>
    );
}

export const ButtonSpinner:React.FC<IBaseSpinner> = (props) => {
    const getSpinner = () => {
        return(
            <div className={getSpinnerClassNames(true)}>
                <Spinner animation="border" role="status" variant="primary" style={getStyle('btn')} />
                <span> {props.loadingText || "Loading..."}</span>
          </div>
        )
    }

    return (
        <>
        {
            props.loading ?
            getSpinner() :
            props.children
        }
        </>
    );
}