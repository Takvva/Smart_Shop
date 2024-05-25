import React from 'react';
import Image from 'next/image';
import Link from 'next/link';


function header() {
  
  return (
<header style={{backgroundColor:"#CBC1AE", height:'50px',display:'flex',justifyContent:'space-between'}}>
<div className="logo">
       
            <Image
              src="/test.png" 
              alt="Logo"
              width={65} 
              height={65} 
              sizes='400'
            />     
       
  </div>
  <div style={{ display: 'flex', alignItems: 'center' }}>
  
  
  <Link href="editCompt">
         <Image src="/Design sans titre.png" alt="Bouton" style={{ width: '30px', height: '30px' }} />
        </Link>
  
  </div>
</header>

  )
}

export default header