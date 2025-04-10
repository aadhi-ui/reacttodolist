import React from 'react'

const Flooter = () => {
  const year=new Date()
    return (
    <flooter>
      <p>&copy;{year.getFullYear()}</p>
    </flooter>
  )
}

export default Flooter
