import React from 'react'

const Navigator = props => {
    const goHome = () =>{
        props.history.push('/projects')
    }
    return(
        <header>
            <nav>
                <h1 onClick={goHome}>Home</h1>
            </nav>
        </header>
    )
}

export default Navigator