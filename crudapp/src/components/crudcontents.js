import React, { Component } from 'react';
import CrudItems from './crudItems'
 
class CrudContents extends Component{ 
     
    render() {       
        return (
            this.props.contents.map((content)=>{
                return (
                    <CrudItems content= {content} 
                    key = {content.id}
                    markComplete={this.props.markComplete}
                    deleteContent = {this.props.deleteContent} />
                )
            })
        )       
    }
}
 
export default CrudContents;