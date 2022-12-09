import React from 'react'
import {Row,Col} from 'react-bootstrap'
const DatesList = ({person}) => {
  return (
    <Row className="justify-content-center">
        <Col sm="8">
            <div className="rectangle p-2">
                {person.length ? (person.map((item)=>{
                    return(
                            <div key={item.id} className="d-flex border-bottom my-1 mx-2">
                                <img className='img-avatar' src={item.img} alt="person"/>
                                <div className='pe-3'>
                                    <p className="d-inline fs-5 fw-bold">{item.name}</p>
                                    <p className='fs-6'>{item.date}</p>
                                </div>
                            </div>
                    )
                })) : <h2 className="p-5 text-center">لا يوجد مواعيد اليوم </h2>}
            </div>
        </Col>
    </Row>
  )
}
export default DatesList