import React, {useContext} from 'react'
import { useState } from 'react';
import noteContext from '../context/notes/noteContext'


export default function AddNote() {
    const context = useContext(noteContext);
    const { addNote } = context;

    const [note , setNote] = useState({title : "",description: "",tag : "default"})
    const handleClick = (e) => {
        e.preventDefault();
        addNote(note.title,note.description,note.tag);
    }

    const onChange = (e) => {
        setNote({...note, [e.target.name]: e.target.value})
    }

  return (
    <div className='container'>
      <h1 className="my-3">Add a Note</h1>
      <form>
        <div className="mb-3">
          <label htmlFor="noteTitle" className="form-label">Title</label>
          <input type="text" className="form-control" id="title" name='title' onChange={onChange} aria-describedby="emailHelp" />
        </div>
        <div className="mb-3">
          <label htmlFor="noteDescription" className="form-label">Description</label>
          <input type="text" className="form-control" onChange={onChange} id="description" name='description' />
        </div>
        <div className="mb-3">
          <label htmlFor="noteTag" className="form-label">Tag</label>
          <input type="text" className="form-control" onChange={onChange} id="tag" name='tag' />
        </div>
        <div className="mb-3 form-check">
          <input type="checkbox" className="form-check-input" id="exampleCheck1" />
          <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
        </div>
        <button type="submit" className="btn btn-primary" onClick={handleClick}>Add Note</button>
      </form>
    </div>
  )
}
