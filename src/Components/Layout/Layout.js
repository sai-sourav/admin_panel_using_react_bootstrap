import React from 'react'
import Footer from './Footer'
import Header from './Header'

export default function Layout(props) {
  return (
    <>
    <Header />
    <div style={{minHeight : "84.2vh"}}>
    {props.children}
    </div>
    <Footer />
    </>
  )
}
