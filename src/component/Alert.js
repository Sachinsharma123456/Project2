import React from 'react'

function Alert(props) {
  return (
    <div>
       <div className="alert alert-warning alert-dismissible fade show" role="alert">
        <strong>{props.alert.type}</strong>{props.alert.msg}
         <strong>warning ?</strong> check your data before entering here.
         <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>
    </div>
  )
}

export default Alert
