import React from 'react'
import './Instructions.css'

const Instructions = () => {
  return (
    <div className='instructions-box'>
        <div className='instruction-title-box'>
            <h3>Instructions</h3>
        </div>

        <div className='instructions-steps-box'>
            <ol>
                <li>Enter inside input field a task</li>
                <li>Click on the Add button</li>
                <li>Task will be added to the list</li>
                <li>Then you can move tasks bettwen different lists</li>
            </ol>
        </div>
      
    </div>
  )
}

export default Instructions
