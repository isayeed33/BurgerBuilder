import React, { Component } from 'react'
import classes from './Modal.module.css'
import Aux from '../../../hoc/Auxiliary/Auxiliary'
import Backdrop from '../Backdrop/Backdrop'

export default class Modal extends Component {

    shouldComponentUpdate(nextProps, nextState){
        return nextProps.show !== this.props.show || nextProps.children!==this.props.children;     //return true if nextProps.show !== this.props.show
    }
    componentDidUpdate(){
        console.log('[Modal.js] componentdidupdate')
    }

    render() {
        return (
            <Aux>
                <Backdrop show={this.props.show} clicked={this.props.modalClosed}></Backdrop>
                <div className={classes.Modal} style={{tranform: this.props.show ? 'translateY(0)' : 'translateY(-100vh)', opacity: this.props.show ? '1' : '0'}}>
                {this.props.children}
                </div>
            </Aux>
        )
    }
}