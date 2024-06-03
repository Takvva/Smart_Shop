'use client'
import React,{useState,useEffect} from 'react';
import axios from 'axios';
import Image from 'next/image';
import Link from 'next/link';
import {format} from 'date-fns';
function PromoPage() {
      const [productList,setProductList] = useState([])
     

      useEffect(()=>{
        axios.get('/api/promo').then(res=>{
          console.log(res)
          setProductList(res.data.products)
        })
      },[])
    
      return (

        <div className="background" style={{backgroundColor:"#F25D78",height:'102vh', display:'flex', justifyContent:'space-between'}}>
    
    <div style={{ display: 'flex', flexDirection: 'row',marginRight: '500px' }}>
    <Link href="/profil">
      <button style={{ cursor: 'pointer', padding: '30px 10px', fontSize: '1.5rem', borderRadius: '8px', backgroundColor: '#F25D78', color: '#ffffff', border: 'none' }}>🔙</button>
      </Link>
      <div style={{ width: '100px' }}>
        <h1 style={{ fontWeight: 'bold', fontFamily: '@SimSun-ExtB', fontSize: '17px', textAlign: 'center', color: '#5F3671',  paddingTop:'30px' }}>Les promos</h1>
      </div>

        </div>
        <div className='container' style={{ position: 'fixed', width: '100%', backgroundColor: 'white', padding: '10px', height:'100vh',borderRadius:'90px',margin:'100px 0px' }}>
   <div className="backgroundImage" style={{ 
backgroundImage: "url('Blue and White Simple IU UX Design App (1).png')",
backgroundSize: 'cover',
backgroundPosition: 'center',
backgroundRepeat: 'no-repeat',
height:'100vh',
borderRadius:'90px',


}}>
        
   <div style={{ flex: 1 }}>
   <div style={{ display: 'flex', justifyContent: 'center', margin:'5px' }}>
         
      
          </div>
          </div>
        <table style={{margin:'90px 0px'}}>
          <thead style={{color: '#5F3671', fontSize: '15px',fontFamily:'@SimSun-ExtB',fontWeight:'bold'}}>
            <tr>
              <th>Produit</th>
              <th>Prix</th>
              <th>Date</th>
              <th>Image</th>
            </tr>
          </thead>
          <tbody>
            {
              productList.map((product, index) => {
                return (
                  
                  <tr key={product.id || index}>
                    <td style={{ padding: '20px 10px', border: '1px solid black' }}>{product.produit}</td>
                    <td style={{ padding: '20px 10px', border: '1px solid black' }}>{product.prix}</td>
                    <td style={{ padding: '20px 10px', border: '1px solid black' }}>{format(new Date(product.Date), 'dd/MM/yyyy')}</td>
                    <td style={{ padding: '20px 10px', border: '1px solid black' }}>
                    <div style={{ width: '80px', height: '80px', position: 'relative' }}>
                <Image src={product.imageUrl} alt={product.produit} layout="fill" objectFit="contain" />
              </div>
                    </td>
                  </tr>
                );
              })
            }
          </tbody>
        </table>
        </div>
        </div>
        </div>
        
      );
      
    }


export default PromoPage;