import React from 'react'
import { useState,useEffect } from 'react'
import { BaseUrl } from './baseUrl'
import Loader from './Loader'
import axios from 'axios'
import Header from './Header'
import { Link } from 'react-router-dom'
import './res.css'




const Coins = () => {

  const [loading,setLoading]=useState(true)
  const [coins,setCoins]=useState([])
  const [currency,setCurrency]=useState('inr')
  const [search,setSearch]=useState('')
  const currencySymbol = currency === 'inr'? '₹':'$'
  useEffect(()=>{
    const getCoinsData=async()=>{
      try{

      const res=await axios.get(`${BaseUrl}/coins/markets?vs_currency=${currency}&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=en`)
      //  console.log(res.data);
       setCoins(res.data)
       setLoading(false)
      } catch(error){
            console.log(error)
            setLoading(false)
      }
        
    }

    getCoinsData()

  },[currency])
  return (
    <>
    {
      loading? <Loader/>:<>
      <Header/>
      <div className="search-bar">
        <input type="text" placeholder='Search Your Coins '
          
           onChange={(e)=>setSearch(e.target.value)} />
      </div>
      <div className='btns'>
      <button onClick={()=>setCurrency('inr')}>inr</button>
      <button onClick={()=>setCurrency('usd')}>usd</button>
      </div>
      {
        coins.filter((data)=>{
           if(data===''){
            return data
           }
           else if(data.name.toLowerCase().includes(search.toLowerCase())){
            return data
           }
        
        }).map((item,id)=>{
          return (
            <CoinCard  item={item} id={item.id} currencySymbol={currencySymbol}/>
           
          )
        })
      }


      </>
    }

    </>
  )
}

const CoinCard=({item,id,currencySymbol})=>{
  const profit=item.price_change_percentage_24h>0

  return (
    <Link to={`/coins/${id}`} style={{color:"white", textDecoration:"none"}  }>
    <div className='ex-cards' key={id}>
    <div className='image'>
        <img height={"80px"} src={item.image} alt=''></img>
    </div>

    <div className="name">
       {item.name}
    </div>

    <div className="price">
         {currencySymbol}{item.current_price}
    </div>

    <div style={profit? {color:"green"}: {color:"red"}} className="rank">
         {profit ? "+" + item.price_change_percentage_24h:item.price_change_percentage_24h}
    </div>

  </div>

  </Link>
  )

}

export default Coins