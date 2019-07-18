import React from 'react';
import { Header } from 'semantic-ui-react'


function NasaHeader(){
    return (
        <Header as='h1'>
            Nasa Photo of the Day
            <Header.Subheader>Let's see the World</Header.Subheader>
        </Header>
    )
}

export default NasaHeader;