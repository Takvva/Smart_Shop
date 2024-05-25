'use client'
import React,{useState,useEffect} from 'react';
import axios from 'axios';
import Image from 'next/image';

function PromoPage() {
      const [productList,setProductList] = useState([])

      useEffect(()=>{
        axios.get('/api/promo').then(res=>{
          console.log(res)
          setProductList(res.data.products)
        })
      },[])

      return (
        <table>
          <thead>
            <tr>
              <th>Product</th>
              <th>Price</th>
              <th>Date</th>
              <th>Image</th>
            </tr>
          </thead>
          <tbody>
            {
              productList.map((product, index) => {
                return (
                  <tr key={product.id || index}>
                    <td style={{ padding: '2px 8px', border: '1px solid black' }}>{product.produit}</td>
                    <td style={{ padding: '2px 8px', border: '1px solid black' }}>{product.prix}</td>
                    <td style={{ padding: '2px 8px', border: '1px solid black' }}>{product.Date}</td>
                    <td style={{ padding: '2px 8px', border: '1px solid black' }}>
                      <Image width={256} height={256} src={product.imageUrl} alt={product.produit} />
                    </td>
                  </tr>
                );
              })
            }
          </tbody>
        </table>
      );
      
    }


export default PromoPage;