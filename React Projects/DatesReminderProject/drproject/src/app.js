import {Container} from 'react-bootstrap';
import React, { useState } from 'react';
import {person} from './data.js';
import DateCount from './components/DateCount.js'
import DatesList from './components/DatesList.js'
import DatesActions from './components/DatesActions.js'
const App = () => {
    const [personData,setPersonData] = useState(person)
    const onDelete=()=>{
        setPersonData([])
    }
    const onViewData = ()=>{
        setPersonData(person)
    }
  return (
    <div className='font fs-4 color-body'>
      <Container className="py-5">
        <DateCount person={personData}/>
        <DatesList person={personData}/>
        <DatesActions deleteData={onDelete} viewData={onViewData}/>
      </Container>
    </div>
  )
}

export default App;
