import React from 'react';
import {
    Button ,
    Dialog ,
    DialogActions ,
    DialogContent ,
    DialogContentText ,
    DialogTitle ,
    Slide
} from "@mui/material";
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProdottoOrdineCard from './ProdottoOrdineCard';


const Transition = React.forwardRef ( function Transition(props , ref) {
    return <Slide direction="up" ref={ ref } { ...props } />;
} );

const ModalQuantityComponent = (props) => {

    return (
        <Dialog
            open={ props.dialogFlag }
            onClose={props.handleClose}
            maxWidth={ 'xs' }
            TransitionComponent={ Transition }
            keepMounted
            aria-describedby="alert-dialog-slide-description"
        >
            <DialogContent>
                <DialogTitle className='text-center'>Prodotti Acquistati</DialogTitle>
                    {
                        props.prodotto.cartItems.map((elemento, i) => {
                           return <ProdottoOrdineCard elemento={elemento} key={i} />
                        })
                    }
            </DialogContent>
            <DialogActions>
                <Button
                    variant={ "outlined" }
                    color={ "error" }
                    onClick={props.handleClose}
                >Chiudi</Button>
            </DialogActions>
        </Dialog>
    );
};

export default ModalQuantityComponent;