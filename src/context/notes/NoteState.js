import { useState } from 'react';
import NoteContext from './noteContext';

const NoteState = (props) => {
    const notesInitial = [
        {
            "_id": "62a9bf361e3d2494c47a25de",
            "user": "62a8996e3c06b78fcc5bb2e3",
            "title": "First Note",
            "description": "Good Bye Cruel World",
            "tag": "personal",
            "date": "2022-06-15T11:15:02.098Z",
            "__v": 0
        },
        {
            "_id": "62a9c0701e3d2494c47a25e1",
            "user": "62a8996e3c06b78fcc5bb2e3",
            "title": "Second Note updated",
            "description": "Update ho rhi kya",
            "tag": "personal",
            "date": "2022-06-15T11:20:16.606Z",
            "__v": 0
        },
        {
            "_id": "62a9bf361e3d2494c47a25de",
            "user": "62a8996e3c06b78fcc5bb2e3",
            "title": "First Note",
            "description": "Good Bye Cruel World",
            "tag": "personal",
            "date": "2022-06-15T11:15:02.098Z",
            "__v": 0
        },
        {
            "_id": "62a9c0701e3d2494c47a25e1",
            "user": "62a8996e3c06b78fcc5bb2e3",
            "title": "Second Note updated",
            "description": "Update ho rhi kya",
            "tag": "personal",
            "date": "2022-06-15T11:20:16.606Z",
            "__v": 0
        },
        {
            "_id": "62a9bf361e3d2494c47a25de",
            "user": "62a8996e3c06b78fcc5bb2e3",
            "title": "First Note",
            "description": "Good Bye Cruel World",
            "tag": "personal",
            "date": "2022-06-15T11:15:02.098Z",
            "__v": 0
        },
        {
            "_id": "62a9c0701e3d2494c47a25e1",
            "user": "62a8996e3c06b78fcc5bb2e3",
            "title": "Second Note updated",
            "description": "Update ho rhi kya",
            "tag": "personal",
            "date": "2022-06-15T11:20:16.606Z",
            "__v": 0
        }
    ]

    const [notes, setNotes] = useState(notesInitial)
    return (
        <NoteContext.Provider value={{ notes, setNotes }}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;