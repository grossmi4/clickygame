import React from 'react'

const Card = props => (
  <div className="col s3" onClick = {()=> {props.handleClick(props.id)}}>
    <div className="card blue-grey darken-1 center-align">
      <h1 className="white-text">{props.number}</h1>
    </div>
  </div>
)

export default Card;