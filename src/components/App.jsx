import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import notes from "../notes";


function App(){
    return <div>
    <Header />
    {notes.map( a_note => (<Note key = {a_note.key} title = {a_note.title} content = {a_note.content} />))}
    <Footer />
    </div> ;
}

export default App;