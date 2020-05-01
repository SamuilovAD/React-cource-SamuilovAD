import React,{Component} from "react";
import './ItemAddForm.css';

class ItemAddForm extends Component
{
    state = {
      label:''
    };

    onLabelChange = (e) => {
        this.setState({
            label: e.target.value
        });
    };

    onSubmit = (e) => {
        e.preventDefault();
        this.props.onItemAdded(this.state.label);
        this.setState({label: ''});
    };

    render(){
       return <form id="add-item-form" className="item-add-form d-flex" onSubmit={this.onSubmit}>
           <input type="text" className="form-control" onChange={this.onLabelChange} value={this.state.label}/>
       <button
           className="btn btn-outline-secondary"
       >Add&nbsp;item</button>
       </form>;
    }
}

export default ItemAddForm;
