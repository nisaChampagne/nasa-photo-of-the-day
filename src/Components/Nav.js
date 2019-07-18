import React from 'react';
import { Button } from 'semantic-ui-react'

function Nav(){
    return(
    
        <div>
            <Button color='teal'className='navs' href='https://www.nasa.gov/'> Home</Button>
            <Button color='blue'className='navs' href='https://www.nasa.gov/'> Space</Button>
            <Button color='teal' className='navs' href='https://www.nasa.gov/'> Science</Button>
            <Button color='blue'className='navs' href='https://www.nasa.gov/'> Stuff</Button>
        </div>
    )
}

export default Nav;