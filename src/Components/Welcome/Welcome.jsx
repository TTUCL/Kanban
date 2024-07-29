import React from 'react'
import './Welcome.css'

function Welcome() {
  return (
    <div className='welcome-box'>
        <div className='welcome-start-information-box'>
            <div className='welcome-title-box'>
                <h3>Welcome to the sample Kanban board!</h3>
            </div>

            <div className='welcome-description-box'>
                <p>
                    This is a simple Kanban board that you can use to organize your tasks.
                    You can create new tasks, move them between columns, and delete them.
                </p>
            </div>

            <div className='welcome-author-box'>
                <p>Created by: Karol Leszczyński</p>
            </div>
        </div>
    </div>
  )
}

export default Welcome
