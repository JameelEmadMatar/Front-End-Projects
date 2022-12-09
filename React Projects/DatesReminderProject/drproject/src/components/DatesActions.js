import React from 'react'
import {Row,Col} from 'react-bootstrap'
const DatesActions = ({deleteData,viewData}) => {
  return (
    <Row className="justify-content-center my-2 text-center d-flex">
        <Col sm="8" className="d-flex justify-content-between">
            <button onClick = {deleteData} className="btn-style py-2 my-2 border-0 text-white">مسح الكل</button>
            <button onClick={viewData} className="btn-style py-2 my-2 border-0 text-white">عرض البيانات</button>
        </Col>
    </Row>
  )
}
export default DatesActions