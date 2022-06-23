import React, {useContext} from 'react'
import noteContext from '../context/notes/noteContext'

export default function Noteitem(props) {
    const { note } = props;

    const context = useContext(noteContext);
    const { deleteNote } = context;

    return (
        <div className='col-md-3'>
        <div className="card my-2">
                <div className="card-body">
                    <h5 className="card-title">{note.title}</h5>
                    <p className="card-text">{note.description}</p>
                    <p className="card-text">{note.tag}</p>
                    <p className="card-text">{note.date}</p>
                    <div className='d-flex align-items-center justify-content-evenly'>
                    <i className="fa-solid fa-pen-to-square"></i>
                    <i className="fa-solid fa-trash-can" onClick={() => {deleteNote(note._id)}}></i>
                    </div>
                </div>
        </div>
        </div>
    )
}
