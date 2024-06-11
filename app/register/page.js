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
    <div className="backgroundImage" style={{ 
      backgroundImage: "url('/bg (3).png')",
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      height:'120vh'
    }}>
      <div style={{ flex: 1 }}>
        {error && <p style={{ color: 'red', textAlign: 'center' }}>{error}</p>}
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <div style={{
            width: '200px',
            height: '200px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center', // Centrer verticalement
       
          }}>
            < Image 
            src="/logo.png"
             alt="Smart Shop" 
             width={1600} 
             height={600}
             style={{ maxWidth: '100%', maxHeight: '100%' }} 
             />
          </div>
          
        </div>
        <h2 style={{color:'#15006D', fontSize: '25px',fontFamily:'@SimSun-ExtB', margin:' 0px 110px',fontStyle:'italic' }}>Inscription</h2>
       
        <form onSubmit={handleRegistration} style={{ maxWidth: '300px', margin: '50px 50px', textAlign: 'center',paddingTop: '0px' }}>
    
          <div style={{display: 'block', margin: '10px 40px'}}>
          <label >
          Prénom:
            <input type="text" value={nom} onChange={(e) => setnom(e.target.value)}
             style={{ width: '100%', padding: '9px', borderRadius: '50px', border:  '1px solid #15006D' }} />
          </label>
          <label >
            Nom:
            <input type="text" value={prenom} onChange={(e) => setprenom(e.target.value)} 
             style={{ width: '100%', padding: '9px', borderRadius: '50px', border:  '1px solid #15006D' }}/>
          </label>
          <label>
           N° de la carte de fidèlité:
            <input type="text" value={numFidelite} onChange={(e) => setnumFidelite(e.target.value)} 
             style={{ width: '100%', padding: '9px', borderRadius: '50px', border:  '1px solid #15006D' }}/>
          </label>
          <label>
            Email:
            <input type="email" value={mail} onChange={(e) => setMail(e.target.value)}
             style={{ width: '100%', padding: '9px', borderRadius: '50px', border:  '1px solid #15006D' }} />
          </label>
          <label>
            Mot de passe:
            <input type="password" value={motDePasse} onChange={(e) => setmotDePasse(e.target.value)}
              style={{ width: '100%',  padding: '9px', borderRadius: '50px', border:  '1px solid #15006D' }} />
          </label>
          <label>
            Confirmer le mot de passe:
            <input type="password" value={confirmmotDePasse} onChange={(e) => setConfirmmotDePasse(e.target.value)}
              style={{ width: '100%', padding: '9px', borderRadius: '50px', border:  '1px solid #15006D'}} />
          </label>
          <button style={{ 
      width: '120px',
      background:'#F25D78',
      color: 'white',
      borderRadius: '50px', 
      border: '2px solid #15006D', 
      cursor: 'pointer',
      margin: '20px 10px',
      padding: '10px',
      
    }}>S&apos;inscrire</button>
          </div>

        </form>
      </div>
    </div>
  );
}

export default RegistrationPage;