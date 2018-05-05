import React, { Fragment } from 'react';

import classes from './Dropdown.css'

import Backdrop from '../Backdrop/Backdrop';

const dropdown = props => {

  const activeClasses = [
    classes.Dropdown,
    props.show ? null : classes.Hide 
  ]

  return (
    <Fragment>
      <Backdrop show={props.show} clicked={props.closeDropdown}/>
      <section className={activeClasses.join(' ')}>
        {props.children}
      </section>
    </Fragment>
  )
}
 
export default dropdown;