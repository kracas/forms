
import styles from '../styles/Home.module.css'
import Form from '@rjsf/core'
import api from './api'
import React from 'react'
let schema = api[1].JSONSchema
let uiSchema = api[1].UISchema
const onSubmit = ({formData}, e) => console.log("Data submitted: ",  formData)
function onFocus(formData) {
  console.log('focus '+ formData);
}

export default function Home() {
  return (
    <div className={styles.container}>
      <Form schema={schema} uiSchema={uiSchema} onSubmit={onSubmit} onFocus={onFocus}/>
    </div>    
  )
}
