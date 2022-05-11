import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import Create from "./Create";

function App(){
    const [notes, setNotes] = React.useState([]);

    function handleAddClick(note) {
        setNotes(prevValue => {
            return [...prevValue, note]
        })
    }

    function onDelete(toDelete) {
        // console.log(toDelete);
        setNotes(prevValues => {
            return prevValues.filter((prevValue, index) => {
                return index !== toDelete; 
            })
        });
    }

    return (<div>
    <Header />
    <Create addClick = {handleAddClick} />
    {notes.map((note, index) => {
        return <Note title={note.title} content={note.content} key={index} number ={index} clickDelete={onDelete} />
    })}
    <Footer />
    </div>) ;
}

export default App;