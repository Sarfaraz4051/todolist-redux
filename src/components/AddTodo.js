import React from 'react'
import {connect} from 'react-redux';
import{ addTodo} from '../actions'
const AddTodo = (props) => {
    return (
        <div>
            <form onSubmit={(e)=>{
                e.preventDefault();
                let input =e.target.UserInput.value;
                props.dispatch(addTodo(input))
                e.target.UserInput.value='';
            } 
            }>
                <input type="text" name="UserInput" />
                <button> Add</button>
            </form>
        </div>
    )
}

export default connect()(AddTodo);
