'use client'
import axios from "axios";
import React, { useState } from 'react';
import Link from 'next/link';

const ChangePassword = () => {
    const [nom, setnom] = useState('');
    const [prenom, setprenom] = useState('');
    const handleChangePassword = (e) => {
    axios.post('/api/',{nom,prenom} )
    .then((response) => {
        console.log('Changement de nom effectué avec succès'); 
        setnom('');
        setprenom('');
    })
    .catch((error) => {
       
        console.error('Erreur lors du changement de nom :', error);
    });
    
  };




return (
    <div style={{ display: 'flex', flexDirection: 'column', backgroundColor: 'white' }}>
      <div style={{ flex: 1 }}>
     
        
        
        </div>
        <header style={{backgroundColor:"#CBC1AE", height:'50px',display:'flex',justifyContent:'space-between'}}>
    <div style={{ display: 'flex', flexDirection: 'row',marginRight: '500px' }}>
    <Link href="/editCompt">
      <button style={{  cursor: 'pointer',padding: '10px 20px'}}>🔙</button>
      </Link>
      <div style={{ width: '300px' }}>
        <h1 style={{ fontWeight: 'bold', fontFamily: 'Segoe Print', fontSize: '20px', textAlign: 'center' }}>Configuration de motDePasse</h1>
      </div>

    </div>
    </header>
    <form onSubmit={handleChangePassword}> 
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '60px' }}>
           
  <label style={{ display: 'block', marginBottom: '10px', borderBottom: '2px solid #CFC2AC' }}>
    <input
      type="text"
      value={prenom}
      onChange={(e) => setprenom(e.target.value)}
      placeholder="Ancien mot de passe"
      style={{ width: '100%', padding: '8px', borderRadius: '5px', border: 'none' }}
    />
  </label>
  <label style={{ display: 'block', marginBottom: '20px', borderBottom: '2px solid #CFC2AC' }}>
    <input
      type="text"
      value={nom}
      onChange={(e) => setnom(e.target.value)}
      placeholder="Nouveau mot de passe"
      style={{ width: '100%', padding: '10px', borderRadius: '5px', border: 'none' }}
    />
  </label>
  <label style={{ display: 'block', marginBottom: '20px', borderBottom: '2px solid #CFC2AC' }}>
    <input
      type="text"
      value={nom}
      onChange={(e) => setnom(e.target.value)}
      placeholder="Confirmer le mot de passe"
      style={{ width: '100%', padding: '10px', borderRadius: '5px', border: 'none' }}
    />
  </label>
  <button
    type="submit"
    style={{ cursor: 'pointer', padding: '10px 20px', border: '2px solid #CFC2AC', borderRadius: '5px', width: '100px' }}>
    Valider
  </button>
  
</div>
</form> 
</div>
        
      );

}

export default ChangePassword