import React from 'react'

export default function Noteitem(props) {
    const { note } = props;
    return (
        <div className='col-md-3'>
        <div className="card my-2">
                <div className="card-body">
                    <h5 className="card-title">{note.title}</h5>
                    <p className="card-text">{note.description}</p>
                    <div className='d-flex align-items-center justify-content-evenly'>
                    <i class="fa-solid fa-pen-to-square"></i>
                    <i class="fa-solid fa-trash-can"></i>
                    </div>
                </div>
        </div>
        </div>
    )
}
