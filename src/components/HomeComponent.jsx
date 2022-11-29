import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getProdottoList } from '../redux/actions/actions'
import CarouselComponents from './CarouselComponents'

const HomeComponent = () => {
  const prodottoList = useSelector((state) => state.prodotto.prodottoList)
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(getProdottoList)
    console.log(prodottoList);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])
  return (
    <>
    <CarouselComponents />
      
    </>
  )
}

export default HomeComponent
