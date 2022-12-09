import React from 'react'
import {Row,Col} from 'react-bootstrap'
const DateCount = ({person}) => {
  return (
    <Row className="justify-content-center my-4">
    <Col sm="8">
        لديك {person.length} مواعيد اليوم
    </Col>
    </Row>
  )
}
export default DateCount