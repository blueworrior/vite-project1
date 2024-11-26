import React from 'react'

const Alert = (props) => {

    const Captial = (word) => {
        const lower = word.toLowerCase()
       return lower.charAt(0).toUpperCase() + lower.slice(1);
    }
  return (
      props.alert && <div class={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
        <strong> {Captial(props.alert.type)}!</strong> {props.alert.msg}
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Warning"></button>
    </div>
  )
}

export default Alert
