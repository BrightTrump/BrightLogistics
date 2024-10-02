import React from 'react'

export default function NavUrlProp({pageName, pageUrl}) {

  return (
    <div>
      <Link to={pageUrl}>{pageName}</Link>
      <span>/</span>
    </div>
  )
}
