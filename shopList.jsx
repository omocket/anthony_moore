import React, { Component } from 'react';

class ShopList extends Component {
    
    state = {
        empty:null,
        value:'',
        list:[],
        title:'Agenda'
    }
    
    handleList = (e) => {
    this.setState({value:e.target.value});
    
    
    }
    
    addList = () => {
        
        const { list } = this.state;
        
        const { value } = this.state;
        
        this.setState({list:[ ...this.state.list, value ]});

        this.setState({value:''});
        
        if (list.length >= 9) {
            
                this.setState({title:'Reached Max'});
                this.setState({list:[null]})
                
        } else {
            this.setState({title:'Agenda'})
        }
        
    }
        
    
    removeList = () => {
      const { list } = this.state;
      const [first, ...rest] = this.state.list;
      
      this.setState({list:[...rest]});
      
      if (list.length <= 10) {
          this.setState({title: 'Agenda'});
      }
        
    }
    
   
    render() {
        const grocList = this.state.list;
        return (
        <div>
            <h1 className="alignText">Daily Agenda</h1>
            <div className="align">
                <div className="border">
                    <h2 className="alignText">{this.state.title}</h2>
                        <div className="input-group">
                            <input className="form-control" value={this.state.value} onChange={this.handleList} type='text' />
                                <div className="input-group-append">
                                    <button className="btn btn-primary" onClick={this.addList}>Submit</button>
                                    <button className="btn btn-danger" onClick={this.removeList}>Delete</button>
                                </div>
                        </div>
                        
                            {
            
                                grocList.map((lists,index)=>{
                                    return(
                                        <div className="bColor" key={index}>
                                            <li>{lists}</li>
                                        </div>
                                    )
                    
                                })
                
                            }
                        
                </div>
        </div>
        </div>
        );
    }
}

export default ShopList;
