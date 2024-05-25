'use client'
import React, { useState } from 'react';
import axios from 'axios';
import {useRouter} from 'next/navigation'
import Image from 'next/image';

function RegistrationPage() {
  const [nom, setnom] = useState('');
  const [prenom, setprenom] = useState('');
  const [numFidelite , setnumFidelite ] = useState('');
  const [mail, setMail] = useState('');
  const [motDePasse, setmotDePasse] = useState('');
  const [confirmmotDePasse, setConfirmmotDePasse] = useState('');
  const [error, setError] = useState('');
  const router = useRouter()

  const handleRegistration = (e) => {
    e.preventDefault(); // Empêcher le rechargement de la page après la soumission du formulaire

    const  register={
      nom,
      prenom,
      numFidelite ,
      mail,
      motDePasse,
      confirmmotDePasse,
      error
    }
    
    console.log(register);
    

    // Vérifier que tous les champs sont remplis
    if (!nom || !prenom  || !numFidelite|| !mail || !motDePasse || !confirmmotDePasse) {
      setError('Veuillez remplir tous les champs.');
      return;
    }

    // Vérifier si les mots de passe correspondent
    if (motDePasse !== confirmmotDePasse) {
      setError('Les mots de passe ne correspondent pas.');
      return;
    }

    axios.post('/api/register',{nom,prenom,numFidelite,mail,motDePasse} ).then(response=>{
      router.push('/sign')
    })

    setnom('');
    setprenom('');
    setnumFidelite('');
    setMail('');
    setmotDePasse('');
    setConfirmmotDePasse('');
    setError('');
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '90vh', backgroundColor: 'white' }}>
      <div style={{ flex: 1 }}>
        <h2 style={{ fontWeight: 'bold', fontFamily: 'Segoe Print', fontSize: '36px', textAlign: 'center', paddingTop: '30px' }}>Inscription</h2>
        {error && <p style={{ color: 'red', textAlign: 'center' }}>{error}</p>}
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '5px' }}>
          <div style={{
            width: '200px',
            height: '200px',
            backgroundColor: 'white',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center', // Centrer verticalement
            borderRadius: '5px'
          }}>
            < Image 
            src="/test.png"
             alt="Smart Shop" width={800} 
             height={600}
             style={{ maxWidth: '100%', maxHeight: '100%' }} 
             />
          </div>
        </div>
        <form onSubmit={handleRegistration} style={{ maxWidth: '300px', margin: '0 auto', textAlign: 'center',paddingTop: '0px' }}>
          <label style={{ display: 'block', marginBottom: '10px' }}>
            Prénom:
            <input type="text" value={nom} onChange={(e) => setnom(e.target.value)}
             style={{ width: '100%', padding: '8px', borderRadius: '5px', border: '1px solid #ccc' }} />
          </label>
          <label style={{ display: 'block', marginBottom: '10px' }}>
            Nom:
            <input type="text" value={prenom} onChange={(e) => setprenom(e.target.value)} 
             style={{ width: '100%', padding: '8px', borderRadius: '5px', border: '1px solid #ccc' }}/>
          </label>
          <label style={{ display: 'block', marginBottom: '10px' }}>
            N° de la carte de fidèlité:
            <input type="text" value={numFidelite} onChange={(e) => setnumFidelite(e.target.value)} 
             style={{ width: '100%', padding: '8px', borderRadius: '5px', border: '1px solid #ccc' }}/>
          </label>
          <label style={{ display: 'block', marginBottom: '10px' }}>
            Email:
            <input type="email" value={mail} onChange={(e) => setMail(e.target.value)}
             style={{ width: '100%', padding: '8px', borderRadius: '5px', border: '1px solid #ccc' }} />
          </label>
          <label style={{ display: 'block', marginBottom: '10px' }}>
            Mot de passe:
            <input type="password" value={motDePasse} onChange={(e) => setmotDePasse(e.target.value)}
              style={{ width: '100%', padding: '8px', borderRadius: '5px', border: '1px solid #ccc' }} />
          </label>
          <label style={{ display: 'block', marginBottom: '10px' }}>
            Confirmer le mot de passe:
            <input type="password" value={confirmmotDePasse} onChange={(e) => setConfirmmotDePasse(e.target.value)}
              style={{ width: '100%', padding: '8px', borderRadius: '5px', border: '1px solid #ccc' }} />
          </label>
          <button type="submit" style={{ backgroundColor: 'black', color: 'white', borderRadius: '50px', border: 'none', cursor: 'pointer', padding: '10px 20px' }}>S&apos;inscrire</button>
        </form>
      </div>
    </div>
  );
}

export default RegistrationPage;