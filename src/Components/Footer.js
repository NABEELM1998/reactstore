import React from 'react'
import { useAppContext } from '../Hooks/useAppContext'
function Footer() {
  const {state:{siteName}} = useAppContext()
  return (
    <div className="appFooter">
        <p> {siteName} developed with ReactJS  </p>
    </div>
  )
}

export default Footer