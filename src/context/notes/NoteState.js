import { useState } from 'react';
import NoteContext from './noteContext';

const NoteState = (props) => {
    const host = "http://localhost:5000"
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

    // get all Note
    const getNotes = async () => {
        // TODO API Call
        const response = await fetch(`${host}/api/notes/fetchallnotes`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjJhODk5NmUzYzA2Yjc4ZmNjNWJiMmUzIn0sImlhdCI6MTY1NTI4ODMwN30.s_KoOu8WpC8Ued-bxJ87BXi7YOlVXsP1ZkpYCx5AfHg'
            }
        });

        const json = await response.json();
        // console.log(json);
        setNotes(json)
    }

    // Add a Note
    const addNote = async (title, description, tag) => {
        console.log("Adding a New Note");
        // TODO API Call
        const response = await fetch(`${host}/api/notes/addnote`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjJhODk5NmUzYzA2Yjc4ZmNjNWJiMmUzIn0sImlhdCI6MTY1NTI4ODMwN30.s_KoOu8WpC8Ued-bxJ87BXi7YOlVXsP1ZkpYCx5AfHg'
            },
            body: JSON.stringify({title,description,tag})
        });

        const note = {
            "_id": "62a9c0701e3d2494c47a25e1",
            "user": "62a8996e3c06b78fcc5bb2e3",
            "title": title,
            "description": description,
            "tag": tag,
            "date": "2022-06-15T11:20:16.606Z",
            "__v": 0
        };
        setNotes(notes.concat(note))
    }
    // Delete a Note
    const deleteNote = (id) => {
        // TODO API Call
        console.log("deleting a note" + id);
        const newNotes = notes.filter((note) => { return note._id !== id })
        setNotes(newNotes);
    }
    // Edit a Note
    const editNote = async (id, title, description, tag) => {
        // API Call

        const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjJhODk5NmUzYzA2Yjc4ZmNjNWJiMmUzIn0sImlhdCI6MTY1NTI4ODMwN30.s_KoOu8WpC8Ued-bxJ87BXi7YOlVXsP1ZkpYCx5AfHg'
            },
            body: JSON.stringify({title,description,tag})
        });
        const json = response.json();

        // Logic to edit in client
        for (let index = 0; index < notes.length; index++) {
            const element = notes[index];
            if (element._id === id) {
                element.title = title;
                element.description = description;
                element.tag = tag;
            }
        }
    }
    return (
        <NoteContext.Provider value={{ notes, setNotes, getNotes, addNote, deleteNote, editNote }}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;