import React from 'react'
import './App.css'
import ContentArea from "./components/ContentArea/ContentArea"

function App(props) {
    return (
        <div className="App">
            <ContentArea state={props.state}/>
        </div>
    )
}

export default App