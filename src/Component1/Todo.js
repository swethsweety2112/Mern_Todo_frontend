import React, { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import axios from 'axios';
import '../Css1/Todo.css'

const Todo = () => {
    const [todo, setTodo] = useState('');
    const [age, setAge] = useState('');
    const [gender, setGender] = useState('');
    const [todos, setTodos] = useState([]);
    const [id, setId] = useState('');
    const [obj, setObj] = useState({});

    function create() {
        axios.post('http://localhost:5000/posting', { todo, age, gender })
            .then((response) => {
                console.log('Response after posting:', response.data);
                setTodos([...todos, response.data]); // Add the new todo to the existing list
                alert('Data has been posted successfully');
                setTodo('');
                setAge('');
                setGender('');
            })
            .catch((error) => {
                console.error('Error while posting data:', error);
                alert('Failed to post data');
            });
    }
    
    function getData() {
        axios.get('http://localhost:5000/posting')
            .then((response) => {
                console.log('Response data:', response.data);
                setTodos(response.data);
            })
            .catch(() => {
                alert('Failed to retrieve data');
            });
    }

    function getExactData(id) {
        axios.get('http://localhost:5000/posting/${id}')
            .then((resp) => {
                setObj(resp.data);
                alert('Data retrieved successfully');
            })
            .catch(() => {
                alert('Failed to retrieve specific data');
            });
    }

    function updateTodo(id, updatedTodo) {
        axios.put(`http://localhost:5000/posting/${id}`, updatedTodo)
            .then(() => {
                getData();
            })
            .catch(() => {
                alert("Failed to update data");
            });
    }
    
    function deleteTodo(id) {
        axios.delete(`http://localhost:5000/posting/${id}`)
            .then(() => {
                getData();
            })
            .catch(() => {
                alert("Failed to delete data");
            });
    }

    return (
      
        <div className='Back'>
           <h1 className='text' align='center'>Get your Todo List</h1>
            <div style={{ display: 'flex', marginBottom: '10px' }}>
                <TextField id="todo" label="Todo" variant='outlined' value={todo} onChange={(e) => setTodo(e.target.value)} InputLabelProps={{
        style: { color: 'black' } // Set label color to white
      }} InputProps={{
        style: { 
          borderColor: 'white',
          backgroundColor: 'white', // Set background color to black
        }
      }}/>
                <TextField id="age" label="Day" variant="outlined" value={age} onChange={(e) => setAge(e.target.value)} style={{ marginLeft: '10px',color: 'white'  }} InputLabelProps={{
        style: { color: 'black' } // Set label color to white
      }} InputProps={{
        style: { 
          borderColor: 'white',
          backgroundColor: 'white', // Set background color to black
        }
      }}/>
                <TextField id="gender" label="List" variant="outlined" value={gender} onChange={(e) => setGender(e.target.value)} style={{ marginLeft: '10px' }} fullWidth='30' InputLabelProps={{
        style: { color: 'black' } // Set label color to white
      }} InputProps={{
        style: { 
          borderColor: 'white',
          backgroundColor: 'white', // Set background color to black
        }
      }}/>
                <TextField id="id" label="ID" variant="outlined" value={id} onChange={(e) => setId(e.target.value)} style={{ marginLeft: '10px' }} InputLabelProps={{
        style: { color: 'black' } // Set label color to white
      }} InputProps={{
        style: { 
          borderColor: 'white',
          backgroundColor: 'white', // Set background color to black
        }
      }}/>
                <Button variant="outlined" onClick={create} style={{ marginLeft: '10px' , backgroundColor: 'green', color: 'black' }} >Post</Button>
                <Button variant="outlined" onClick={getData} style={{ marginLeft: '10px', backgroundColor: 'green', color: 'black'}}>Get All</Button>
                <Button variant="outlined" onClick={() => getExactData(id)} style={{ marginLeft: '10px', backgroundColor: 'green', color: 'black' }}>Exact Data</Button>
            </div>

            <ol>
                {todos.map((item) => (
                    <li key={item._id}>
                        <span style={{ color: 'white' }}>ID: {item._id}</span> <br/>
                        <span style={{ color: 'white' }}> Todo: {item.todo}</span><br/>
                        <span style={{ color: 'white' }}> Day: {item.age}</span> <br/>
                        <span style={{ color: 'white' }}> Task: {item.gender}</span><br/>
                        <Button onClick={() => {
    const newTodo = prompt("Enter the new todo");
    const newAge = prompt("Enter the new age");
    const newGender = prompt("Enter the new gender");
    if (newTodo !== null && newAge !== null && newGender !== null) {
        const updatedTodo = { todo: newTodo, age: newAge, gender: newGender };
        updateTodo(item._id, updatedTodo);
    } else {
        alert("Please enter all fields");
    }
}}>Edit</Button>
                        <Button onClick={() => deleteTodo(item._id)}>Delete</Button>
                    </li>
                ))}
            </ol>

            {obj.id && (
                <div>
                    <h3>Exact Data</h3>
                    <p style={{ color: 'white !important'  }}>ID: {obj._id}</p>
                    <p style={{ color: 'white' }}>Todo: {obj.todo}</p>
                    <p style={{ color: 'white' }}>Day: {obj.age}</p>
                    <p style={{ color: 'white' }}>Task: {obj.gender}</p>
                </div>
            )}
        </div>
    );
};

export default Todo;