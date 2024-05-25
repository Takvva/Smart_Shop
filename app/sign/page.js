'use client'
import React, { useState } from 'react';
import Link from 'next/link';
import {useRouter} from 'next/navigation'
import Image from 'next/image';
import axios from 'axios';


function LoginPage() {
  const [numFidelite, setnumFidelite] = useState('');
  const [motDePasse, setmotDePasse] = useState('');
  const [error, setError] = useState('');
  const router = useRouter()
  const handleLogin = (e) => {
    e.preventDefault();
    // Logique de connexion à implémenter ici
    console.log('Connexion avec le numéro de carte de fidélité:', numFidelite);

    axios.post('/api/sign',{motDePasse,numFidelite} ).then(response=>{
      console.log(response)
      if(response.data.status === 400){
        setError(response.data.message)
      }

      if(response.data.status === 200) { 
        localStorage.setItem('client',JSON.stringify(response.data.client))
        router.push('/profil')
      }
    })

  };


  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '90vh',backgroundColor: 'white' }}>
    <div style={{ flex: 1 }}>
    <h1 style={{ fontWeight: 'bold', fontFamily: 'Segoe Print', fontSize: '36px', textAlign: 'center',paddingTop:'100px' }}>Connexion</h1>
    <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
          <div style={{
            width: '200px',
            height: '200px',
            backgroundColor: 'white',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center', // Centrer verticalement
            borderRadius: '5px'
          }}>

    <Image src="test.png"alt="Smart Shop"style={{ maxWidth: '100%', maxHeight: '100%'}}/>
    </div>
      </div>
      <div>{error}</div>
      <form onSubmit={handleLogin} style={{ maxWidth: '300px', margin: '0 auto', textAlign: 'center'}}>
        <label style={{ display: 'block', marginBottom: '10px' }}>
          N°carte:
          <input
            type="text"
            value={numFidelite}
            onChange={(e) => setnumFidelite(e.target.value)}
            style={{ width: '100%', padding: '10px', borderRadius: '5px', border: '1px solid #ccc' }}
          />
        </label>
        <label style={{ display: 'block', marginBottom: '10px' }}>
          Mot de passe :
          <input
            type="password"
            value={motDePasse}
            onChange={(e) => setmotDePasse(e.target.value)}
            style={{ width: '100%', padding: '8px', borderRadius: '5px', border: '1px solid #ccc' }}
          />
        </label>
        <button type="submit" style={{backgroundColor: 'black', color: 'white',borderRadius: '50px', border: 'none', cursor: 'pointer',padding: '10px 20px'}}>Se connecter</button>
      </form>
      <Link href="#">
      <p style={{ color: 'gray', textDecoration: 'underline', textAlign: 'center', marginTop: '20px' }}>Mot de passe oublié ?</p>
      </Link>
    </div>
    </div>
    
  );
}

export default LoginPage;
