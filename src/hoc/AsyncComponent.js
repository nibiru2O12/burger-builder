import React, { Component } from 'react';

const AsyncComponent = (importComponent) => {

    return class extends Component {
        
        state={
            component:null
        }

        componentDidMount(){
            importComponent()
            .then((c)=> this.setState({component:c}));
        }
        
        render(){

            const NewComp = this.state.comp;

            return(
                NewComp ? <NewComp {...this.props} /> : null
            )
            
        }
    }

}

export default AsyncComponent