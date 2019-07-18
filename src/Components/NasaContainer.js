import React from 'react'
import NasaHolder from "./NasaHolder";
import Nav from "./Nav";
import NasaHeader from "./NasaHeader";
import { Container } from 'semantic-ui-react'

const NasaContainer = () => (
    <Container textAlign='center'>
      <div className='nasa-navs'>
      <Nav />
      </div>
      <div className="nasa-header">
        <NasaHeader />
      </div>
      <div className="nasa-holder">
        <NasaHolder />
      </div>
    </Container>
)

export default NasaContainer;
