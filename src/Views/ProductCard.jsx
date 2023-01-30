import React from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

export default function ProductCard() {
  const beers = useSelector((state) => state.products.beers)
  const { id } = useParams()

  const beer = beers.find(obj => { return obj.id === id})
  console.log(beer, beers)

  return (
    <div>Test {id}</div>
  )
}
