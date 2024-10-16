import React, { useState } from "react";
import "./App.css";
import writtenLogo from './assets/croppedwritten-removebg-preview.png'; 
import HeaderLogo from './assets/Logo.png'; 
// import CalendarComponent from "./components/CalendarComponent.jsx"; 

const App = () => {
  const [notes, setNotes] = useState([]);
  const [newNote, setNewNote] = useState('');
  const [editIndex, setEditIndex] = useState(null);
  const [editedNote, setEditedNote] = useState('');

  const handleAddNote = () => {
    if (newNote.trim() !== '') {
      const currentDate = new Date().toLocaleString();
      const newNoteWithDate = `${newNote} - ${currentDate}`;
      setNotes([...notes, newNoteWithDate]);
      setNewNote('');
    }
  };

  const handleDeleteNote = (index) => {
    const updatedNotes = [...notes];
    updatedNotes.splice(index, 1);
    setNotes(updatedNotes);
  };

  const handleEditNote = (index) => {
    setEditIndex(index);
    setEditedNote(notes[index]);
  };

  const handleSaveEdit = (index) => {
    const updatedNotes = [...notes];
    updatedNotes[index] = editedNote;
    setNotes(updatedNotes);
    setEditIndex(null);
    setEditedNote('');
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleAddNote();
    }
  };

  return (
    <div className="grid">
      <div className="headerwidth">
        <header>
          <img className="writtenlogo" src={writtenLogo} alt="written logo" />
          <img className="headerlogo" src={HeaderLogo} alt="App Logo" />
          <div className="input">
            <input 
              type="text"
              value={newNote}
              onChange={(e) => setNewNote(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Enter your note"
            />
            <button className="addbtn" onClick={handleAddNote}>Add Note</button>
          </div>
        </header>
      </div>

      <div className="nav">
        <nav>
          <div className="calendar">
            {/* <CalendarComponent />  */}
     

          </div>
          <div className="reminder">
            <p>Upcoming: <br />
            <br />
            01.06.2024 <br />
            Max Birthday
            </p>
          </div>
        </nav>
      </div>

      <div className="upcoming"> 
        {notes.map((note, index) => (
          <div key={index} className={`note ${index % 3 === 0 ? 'mark' : index % 3 === 1 ? 'task' : 'note'}`}>
            {editIndex === index ? (
              <>
                <input 
                  type="text"
                  value={editedNote}
                  onChange={(e) => setEditedNote(e.target.value)}
                />
                <button className="savebtn" onClick={() => handleSaveEdit(index)}>Save</button>
              </>
            ) : (
              <>
                {note}
                <button className="deletebtn" onClick={() => handleDeleteNote(index)}>Delete</button>
                <button className="editbtn" onClick={() => handleEditNote(index)}>Edit</button>
              </>
            )}
          </div>
        ))}
      </div>

      <footer>Juneau 2024 &#169;</footer> 
    </div>
  );
};

export default App;
