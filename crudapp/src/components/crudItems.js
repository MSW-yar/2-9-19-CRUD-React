import React, { Component } from 'react';

class CrudItems extends Component {
    getStyle = () => {
        return {
            background: '#f4f4f4',
            padding: '10px',
            borderBottom : '1px #ccc dotted',
            textDecoration: this.props.content.completed ? 'line-through' : 'none'
        }
    }
    render() { 
        const {Name, id} = this.props.content
        return ( 
            <div className='items' style={this.getStyle()}>
            <h3> <input type='checkbox' onChange={this.props.markComplete.bind(this, id)} /> {' '}{Name} </h3>
            <button className='del-btn' style={stylebtn} onClick={this.props.deleteContent.bind(this, id)}> x </button>
            </div>
            
         );
    }
}

const stylebtn = {
    background : '#ff0000',
    color: '#fff',
    border: 'none',
    borderRadius: '50%',
    padding: '5px 10px',
    cursor: 'pointer'
}
 
export default CrudItems;