'use client'
import React from 'react'
import Link from 'next/link';
import Image from 'next/image';
function footer() {

    
    return (
      <footer style={{ position: 'fixed', width: '100%', backgroundColor: 'white', padding: '10px' }}>
        <Link href="/">
         <Image
            src="/Design sans titre (1).png"
            alt="Description de l'image"
            style={{ height: '100px', width: '100px', cursor: 'pointer', marginRight: '50px' }}
            
          />
        </Link>
          
      </footer>
    );
  };

export default footer