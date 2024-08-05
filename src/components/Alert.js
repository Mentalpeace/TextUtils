import React from 'react'

export default function Alert(props) {
  return (
   
     props.Alert && <div className={`alert alert-success alert-dismissible fade show`} role="alert">
  <strong>{props.Alert.type}</strong>:{props.Alert.msg} 
  
</div>
    
  )
}
