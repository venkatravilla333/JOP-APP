import React from 'react'

function Child() {
  console.log('child render')
  return (
    <div>
      <h3>Child</h3>
    </div>
  )
}

export default React.memo(Child)