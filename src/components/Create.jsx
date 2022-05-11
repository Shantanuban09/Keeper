import React from "react";
import AddIcon from '@mui/icons-material/Add';
import Zoom from '@mui/material/Zoom';

function Create(props) {  

  const [expanded, setExpanded] = React.useState(false)

  const [currentNote, setCurrentNote] = React.useState({
    title: "",
    content: ""
  });

  function expand(){
    setExpanded(true);
  }

  function handleChange(event){
    const newValue = event.target.value;
    const name = event.target.name;
    setCurrentNote(prevValue => {
        // console.log("title is changed to " + newValue);
        return {
        ...prevValue,
        [name]: newValue
      };
    })
  }

  function submit(event) {
    props.addClick(currentNote);
    setCurrentNote({
      title:"",
      content: ""
    });
    event.preventDefault();
  }

  return (
    <div>
      <form className="create-note">
        {expanded ? <input name="title" placeholder="Title" onChange = {handleChange} value={currentNote.title} /> : null}
        <textarea onClick={expand} name="content" placeholder="Take a note..." rows={expanded ? 3 : 1} onChange = {handleChange} value={currentNote.content} /> 
        <Zoom in={expanded} ><button onClick={submit}><AddIcon/></button></Zoom>
      </form>
    </div>
  );
}

export default Create;