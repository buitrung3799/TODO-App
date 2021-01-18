import React from 'react';
import {connect} from 'react-redux';
import {addTodo} from '../actions/actionCreator';
import {bindActionCreators} from 'redux'; 

function CreateTodo(props) {
    const [todoText , setTodoText] = React.useState('');
    const onChangeTodoText = event =>{
        setTodoText(event.target.value);
    };
    return(
        <>
            <div className='form-group row'>
                <div className='col-sm-10'>
                    <input onChange={onChangeTodoText} value={todoText} type="text"
                    className="form-control" id="inputEmail3" placeholder="add ToDo here"/>
                    <button type="button" onClick={() => setTodoText('')} 
                    style={{marginTop:"25px", marginRight:"15px"}} className="btn btn-danger">Cancel</button>
                    <button type="button" onClick={() => {props.addTodo(todoText) ; setTodoText('')}} 
                    style={{marginTop:"25px"}} className='btn btn-success'>Add Todo</button>
                </div>
            </div>
        </>
    )
    
}
const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        addTodo
    },dispatch)
};
export default connect(null, mapDispatchToProps)(CreateTodo)
