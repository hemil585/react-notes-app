import React, { useState } from "react";

function AddNote({handleAddNote}) {

    const [noteText,setNoteText] = useState('')
    const characterLength = 200

    const handleChange = (e) => {
      if(characterLength - e.target.value.length >= 0){
        setNoteText(e.target.value)
      }
    }

    const handleSaveClick = (noteText) => {
      if(noteText.trim().length > 0){
        handleAddNote(noteText)
        setNoteText('')
      }
    }

  return (
    <div className="note new">
      <textarea
        rows={8}
        cols={10}
        placeholder="Type to add a note..."
        value={noteText}
        onChange={handleChange}
      ></textarea>
      <div className="note-footer">
        <small>{characterLength - noteText.length} remaining</small>
        <button className="save" onClick={()=>handleSaveClick(noteText)}>Save</button>
      </div>
    </div>
  );
}

export default AddNote;
