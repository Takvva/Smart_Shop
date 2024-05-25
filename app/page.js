'use client'
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
function App() {


  return (
    <div className="backgroundImage" style={{ 
      backgroundImage: "url('/test.png')",
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat'
    }}>
      <div style={{ display: 'flex', flexDirection: 'column', minHeight: '90vh' }}>
        <div style={{ flex: 1 }}>
          <h1 style={{fontWeight: 'bold', fontFamily: 'Segoe Print', fontSize: '36px', textAlign: 'center' }}>Bienvenue</h1>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-around', padding: '20px' }}>
        <Link href="/sign">
          <button style={{backgroundColor: 'black', color: 'white',borderRadius: '50px', border: 'none', cursor: 'pointer',padding: '10px 20px'}}>Connexion</button>
          </Link>
          <Link href="/register">
          <button style={{backgroundColor: 'black', color: 'white',borderRadius: '50px', border: 'none', cursor: 'pointer',padding: '10px 20px'}}>Inscription</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default App;
