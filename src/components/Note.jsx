import React from "react";
import DeleteRoundedIcon from '@mui/icons-material/DeleteRounded'


function Note(props) {

  function handleDelete() {
    props.clickDelete(props.number);
  }

  return <div className="note">
    <h1>{props.title}</h1>
    <p>{props.content}</p>
    <button number={props.number} onClick = {handleDelete}><DeleteRoundedIcon /></button>
  </div> ;
}

export default Note;
