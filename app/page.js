'use client'
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
function App() {


  return (
    <div className="backgroundImage" style={{ 
      backgroundImage: "url('/bg (2).png')",
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      height:'102vh',
     
    }}>
      <div style={{ display: 'flex', flexDirection: 'column', justifyContent:'center',alignItems:'center'}}>
      <div >
          <Image
              src="/logo.png" 
              alt="Logo"
              width={900} 
              height={900} 
              style={{marginTop:'10px'}}
            />  
            </div>
           
            <div style={{color:'#15006D', fontSize: '25px',  textAlign: 'center',fontFamily:'@SimSun-ExtB', marginBottom: '20px', marginTop: '0',fontStyle:'italic' }}>
<h1 >Bienvenue</h1>
</div>
  <di>
  <Link href="/sign">
    <button style={{ 
      width: '200px',
      background:'#F25D78',
      color: 'white',
      borderRadius: '50px', 
      border: '2px solid #15006D', 
      cursor: 'pointer',
      margin: '40px 130px',
      padding: '10px'
      
    }}>
      Connexion
    </button>
  </Link>
  <Link href="/register">
    <button style={{ 
      width: '200px',
      background:'#F25D78',
      color: 'white',
      borderRadius: '50px', 
      border: '2px solid #15006D', 
      cursor: 'pointer',
      margin: '40px 130px',
      padding: '10px',
      
    }}>
      Inscription
    </button>
  </Link>
  </di>
</div>
</div>

      
    
   
    
  );
}

export default App;
