import * as React from 'react';
import { Button, ButtonProps } from 'react-bootstrap';
import { ButtonSpinner } from '../Spinners';

interface IButtonSpinnerProps extends Omit<ButtonProps, 'size'> { 
    loading:boolean
    loadingText?:string
  }

export const ButtonLoadingSpinner:React.FC<IButtonSpinnerProps> = (props) => {
    const {loading, loadingText, ...btnProps} = {...props};
    return (
      <>
        <Button {...btnProps} >
            <ButtonSpinner loadingText={props.loadingText} loading={props.loading}>
                {props.children}
            </ButtonSpinner>
        </Button>
      </>
    );
}
