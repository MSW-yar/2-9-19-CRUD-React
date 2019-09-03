import React, { Component } from 'react';
import CrudContents from './components/crudcontents'
import Header from './components/layout/header'
import AddContent from './components/addcontent'
import uuid from 'uuid'

class App extends Component {
    state = { 
        contents : [
            {
                id : 1,
                Name: 'Shaheryar',
                completed: false
            },
            {
                id : 2,
                Name: 'Usairim',
                completed: false
            },
            {
                id: 3,
                Name: 'Shahmeer',
                completed: false
            }
        ]
     }
     markComplete =(id) => {
        this.setState({
            contents: this.state.contents.map(content=>{
                if(content.id === id){
                    content.completed = !content.completed
                }
                return content
            })
        })
    } 
    deleteContent = (id) => {
        let contents = this.state.contents.filter(content => {
            return content.id !== id
        })
        this.setState({ contents  });
    }
    addContent =(Name)=>{
        const newContent ={
            id:uuid.v4(),
            Name,
            completed:false
        }
        this.setState({ contents: [...this.state.contents, newContent]  });
    }
    render() { 
        return ( 
            <div className = 'App'>
                <div className='container'>
                <Header/>
                <AddContent addContent={this.addContent} />
                <CrudContents contents= {this.state.contents} 
                markComplete={this.markComplete}
                deleteContent={this.deleteContent} />
                </div>
                
                
            </div>
         );
    }
}
 
export default App;