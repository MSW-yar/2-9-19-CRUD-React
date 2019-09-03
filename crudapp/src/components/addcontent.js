import React, { Component } from 'react';

class AddContent extends Component {
    state = { 
        Name: ''
     }
     handleChange =(e)=> {
         this.setState({ 
             Name: e.target.value });
     }
     handleSubmit = (e)=> {
         e.preventDefault()
        this.props.addContent(this.state.Name);
        this.setState({ Name:''});
     }
    render() { 
        return ( 
            <form>
                <input type='text'
                 name='title' 
                 placeholder='Add here...'
                 style={{flex: 10, padding:'5px' }}
                 value= {this.state.Name}
                 onChange={this.handleChange}
                />
                <input type='submit'
                value ='Submit'
                className='sub-btn'
                style={{flex: 1}}
                onClick={this.handleSubmit}/>
            </form>
         );
    }
}
 
export default AddContent;