import React, { Component } from 'react';
import Aux from '../../hoc/Aux';
import Modal from '../../UI/Modal/Modal';

const withErrorHandler = (WrappedComponent,axios) => {
    return class extends Component {

        state = {
            error:null
        }

        componentWillMount(){
           this.reqInterceptors =  axios.interceptors.request.use(null,error => {
                this.setState({
                    error:error
                });
                return true;
            });
            this.resInterceptors =  axios.interceptors.response.use(null,error => {
                this.setState({
                    error:error
                });
                return true;
            })

        }

        componentWillUnmount(){
            axios.interceptors.request.eject(  this.reqInterceptors );
            axios.interceptors.response.eject(  this.resInterceptors );
        }

        handleCloseModal = () => {
            this.setState({error:false});
        }

        render() {

            let errModal=null;
            if (this.state.error){
               
                errModal = (
                    <Modal show={this.state.error ? true : false}
                            close ={this.handleCloseModal}>
                            {this.state.error.message}
                    </Modal>
                );
            }

            return (

                <Aux>
                    {errModal}
                    <WrappedComponent {...this.props} />
                </Aux>
            )
        }
    }
}


export default withErrorHandler