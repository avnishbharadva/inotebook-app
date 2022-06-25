import React, { useContext, useEffect, useRef, useState} from 'react'
import noteContext from '../context/notes/noteContext'
import AddNote from './AddNote';
import Noteitem from './Noteitem';

export default function Notes() {
    const context = useContext(noteContext);
    const { notes, getNotes, editNote } = context;
    const [note , setNote] = useState({id: "",etitle : "",edescription: "",etag : ""})
    const ref = useRef(null);
    const refClose = useRef(null);

    useEffect(() => {
        getNotes();
        // eslint-disable-next-line
    }, [])

    const handleClick = (e) => {
        // console.log("Update Note");
        editNote(note.id, note.etitle, note.edescription, note.etag);
        refClose.current.click();
    }

    const onChange = (e) => {
        setNote({...note, [e.target.name]: e.target.value})
    }

    const updateNote = (currentNote) => {
        ref.current.click();
        setNote({id: currentNote._id,etitle: currentNote.title,edescription: currentNote.description, etag: currentNote.tag});
    }

    return (
        <>
            <AddNote />
            <button type="button" ref={ref} className="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target="#exampleModal">
                Launch demo modal
            </button>

            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Edit Note</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form>
                                <div className="mb-3">
                                    <label htmlFor="noteTitle" className="form-label">Title</label>
                                    <input type="text" className="form-control" id="etitle" name='etitle' value={note.etitle} onChange={onChange} aria-describedby="emailHelp" required minLength={5}/>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="noteDescription" className="form-label">Description</label>
                                    <input type="text" className="form-control" onChange={onChange} id="edescription" value={note.edescription} name='edescription' required minLength={5}/>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="noteTag" className="form-label">Tag</label>
                                    <input type="text" className="form-control" onChange={onChange} id="etag" name='etag' value={note.etag} required />
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button type="button" ref={refClose} className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button disabled={note.etitle.length<5 || note.edescription.length<5} onClick={handleClick} type="button" className="btn btn-primary">Update Note</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className='container my-3 row'>
                <h2>Your Notes</h2>
                <div className='container'>
                {notes.length===0 && 'No Notes To Display'}
                </div>
                {notes.map((note) => {
                    return <Noteitem key={note._id} note={note} updateNote={updateNote}/>
                })}
            </div>
        </>
    )
}
