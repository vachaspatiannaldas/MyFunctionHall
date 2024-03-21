import React, { useState, useReducer } from 'react';

function reducer(state, action) {
  switch (action.type) {
    case 'ADD':
      return { ...state, studdetails: [...state.studdetails, action.payload] };

    case 'UPDATE':
      return {
        ...state,studdetails: state.studdetails.map((stud) =>stud.id === action.payload.id ? action.payload : stud),
      };

    case 'DELETE':
      return {
        ...state,studdetails: state.studdetails.filter((stud) => stud.id !== action.payload),
      };

    default:
      return state;
  }
}

function Crud() {
  const [state, dispatch] = useReducer(reducer, {
    studdetails: [],
  });

  const [fname, setName] = useState('');
  const [email, setEmail] = useState('');
  const [editingStudent, setEditingStudent] = useState(null);

  const AddFun = (e) => {
    e.preventDefault();
    const studdetails = { id: state.studdetails.length + 1, fname, email };
    dispatch({
      type: 'ADD',
      payload: studdetails,
    });
    setName('');
    setEmail('');
  };

  const handleUpdateItem = (studdetails) => {
    setEditingStudent(studdetails);
    setName(studdetails.fname);
    setEmail(studdetails.email);
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    dispatch({
      type: 'UPDATE',
      payload: { ...editingStudent, fname, email },
    });
    setEditingStudent(null);
    setName('');
    setEmail('');
  };

  const handleDeleteItem = (id) => {
    dispatch({
      type: 'DELETE',
      payload: id,
    });
  };

  return (
    <div>
      <form onSubmit={AddFun}>
        <input type="text" name="fname" placeholder="Enter Name" value={fname} onChange={(e) => setName(e.target.value)} />
        <br />
        <input type="email" name="email" placeholder="Enter Email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <br />
        {editingStudent ? (
          <div>
            <button onClick={handleUpdate}>Update</button>
            <button onClick={() => setEditingStudent(null)}>Cancel</button>
          </div>
        ) : (
          <input type="submit" name="submit" value="Add" />
        )}
      </form>
      <table border="1" rules="all">
        <tr>
          <th>Id</th>
          <th>Name</th>
          <th>Email</th>
          <th>Update</th>
          <th>Delete</th>
        </tr>
        {state.studdetails.map((d) => (
          <tr key={d.id}>
            <td>{d.id}</td>
            <td>{d.fname}</td>
            <td>{d.email}</td>
            <td>
              {editingStudent && editingStudent.id === d.id ? (
                <button onClick={handleUpdate}>Save</button>
              ) : (
                <button onClick={() => handleUpdateItem(d)}>Update</button>
              )}
            </td>
            <td>
              <button onClick={() => handleDeleteItem(d.id)}>Delete</button>
            </td>
          </tr>
        ))}
      </table>
    </div>
  );
}

export default Crud;