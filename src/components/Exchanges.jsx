import React, { useEffect,useState } from 'react'
import Header from './Header'
import axios from "axios"
import { BaseUrl } from './baseUrl'
import Loader from './Loader'
import coin from '../coin.png'
import '../components/Exchanges.css'

const Exchanges = () => {
    const [loading,setLoading]=useState(true)
    const [exchanges,setExchanges]=useState([])
    
    useEffect(()=>{
     const getExchangesData=async()=>{
        const res=await axios.get(`${BaseUrl}/exchanges`)
        // console.log(res.data);
        setExchanges(res.data)
        setLoading(false)
     }
     getExchangesData();
    },[])
  return (
    <>
      {
        loading? <Loader/>:<>
        <Header/>
        <div>
         {
          exchanges.map((item,id)=>{
            return(
              
              <div className='ex-cards' key={id}>
          <div className='image'>
              <img height={"80px"} src={item.image} alt=''></img>
          </div>

          <div className="name">
             {item.name}
          </div>

          <div className="price">
               {item.trade_volume_24h_btc.toFixed(0)}
          </div>

          <div className="rank">
               {item.trust_score_rank}
          </div>

        </div>
            )
          })
        
         }
        </div>
        </>
      }

    </>
  )
}

export default Exchanges