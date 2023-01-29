import React from 'react'
import { useParams } from 'react-router-dom'

export default function ProductCard() {
    const { id } = useParams()
  return (
    <div>Test {id}</div>
  )
}
