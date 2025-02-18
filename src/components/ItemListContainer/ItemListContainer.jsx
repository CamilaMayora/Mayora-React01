import { colors } from '@mui/material'
import React from 'react'

const ItemListContainer = ({mensaje}) => {
    const containerStyle={
         backgroundColor: '#312110'
        }
        const greetingStyle = {
            fontSize: "45px",
            color: "white",
            margin: '10px'
        }
  return (
    <div style={containerStyle}>
        <p style={greetingStyle}>{mensaje}</p>
        
    </div>
  )
}

export default ItemListContainer