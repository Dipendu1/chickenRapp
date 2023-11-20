import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import axios from 'axios';

const ToDoList = () => {
  const [todoTitle, setTodoTitle] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [todoArray, setTodoArray] = useState([]);

  useEffect(() => {
    getTodo();
  }, []);

  const getTodo = () => {
    axios
      .get('http://localhost:3001/posts')
      .then((response) => {
        setTodoArray(response.data);
      })
      .catch(() => {
        alert('Cannot display todos.');
      });
  };

  const addTodo = () => {
    const newTodoObj = {
      title: todoTitle,
      imageUrl: imageUrl,
      completed: false,
    };

    axios
      .post('http://localhost:3001/posts', newTodoObj)
      .then(() => {
        getTodo();
        setTodoTitle('');
        setImageUrl('');
      })
      .catch(() => {
        alert('Todo not posted.');
      });
  };

  const deleteTodo = (id) => {
    axios
      .delete(`http://localhost:3001/posts/${id}`)
      .then(() => {
        getTodo();
      })
      .catch(() => {
        alert('Todo not deleted.');
      });
  };

  const updateTodoTitle = (id, updatedTitle) => {
    const updatedTodoObj = {
      title: updatedTitle,
    };

    axios
      .put(`http://localhost:3001/posts/${id}`, updatedTodoObj)
      .then(() => {
        getTodo();
      })
      .catch(() => {
        alert('Todo title not updated.');
      });
  };

  const updateTodoImage = (id, updatedImageUrl) => {
    const updatedTodoObj = {
      imageUrl: updatedImageUrl,
    };

    axios
      .put(`http://localhost:3001/posts/${id}`, updatedTodoObj)
      .then(() => {
        getTodo();
      })
      .catch(() => {
        alert('Todo image not updated.');
      });
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', flexDirection: 'column' }}>
      <div>
        <Box
          component="form"
          sx={{
            '& > :not(style)': { m: 1, width: '25ch' },
          }}
          noValidate
          autoComplete="off"
        >
          <TextField id="outlined-basic" label="Todo Title" variant="outlined" value={todoTitle} onChange={(e) => setTodoTitle(e.target.value)} />
          <TextField id="outlined-basic" label="Image URL" variant="outlined" value={imageUrl} onChange={(e) => setImageUrl(e.target.value)} />
          <Button variant="outlined" onClick={addTodo}>
            Add Todo
          </Button>
        </Box>
      </div>
      <div>
        <ol>
          {todoArray.map((todoItem) => (
            <li key={todoItem.id}>
              <div>
                <p>{todoItem.title}</p>
                {todoItem.imageUrl && (
                  <img src={todoItem.imageUrl} alt="Todo" style={{ maxWidth: '100px', maxHeight: '100px' }} />
                )}
                <Button variant="outlined" onClick={() => deleteTodo(todoItem.id)}>
                  Delete
                </Button>
                <Button
                  variant="outlined"
                  onClick={() => {
                    const updatedTitle = prompt('Enter updated title:', todoItem.title);
                    if (updatedTitle !== null) {
                      updateTodoTitle(todoItem.id, updatedTitle);
                    }
                  }}
                >
                  Update Title
                </Button>
                <Button
                  variant="outlined"
                  onClick={() => {
                    const updatedImageUrl = prompt('Enter updated image URL:', todoItem.imageUrl);
                    if (updatedImageUrl !== null) {
                      updateTodoImage(todoItem.id, updatedImageUrl);
                    }
                  }}
                >
                  Update Image
                </Button>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
};

export default ToDoList;