import React from 'react';
import ReactDOM  from 'react-dom';
import Card from './Card';
import Button from './Button';
import classes from './ErrorModal.module.css';

const  Backdrop = (props)=>{
  return (<div className={classes.backdrop} onClick={props.onC} />)
}

const ModalOverlay = (props)=>{
  console.log(props.onC);
  return (<Card className={classes.modal}>
        <header className={classes.header}>
          <h2>{props.title}</h2>
        </header>
        <div className={classes.content}>
          <p>{props.message}</p>
        </div>
        <footer className={classes.actions}>
          <Button onClick={props.onC}>Okay</Button>
        </footer>
      </Card>)
}
const ErrorModal = (props) => {
  return (
    <React.Fragment>
     {ReactDOM.createPortal(<Backdrop onC={props.onConfirm}/>,document.getElementById('background-root') )}
    {ReactDOM.createPortal(<ModalOverlay title={props.title} message={props.message}   onC={props.onConfirm}/>,document.getElementById('overlay-root'))}
    </React.Fragment>
  );
};

export default ErrorModal;
