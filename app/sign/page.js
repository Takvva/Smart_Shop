'use client'
import React, { useState } from 'react';
import {useRouter} from 'next/navigation'
import Image from 'next/image';
import axios from 'axios';
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog"


function LoginPage() {
  const [numFidelite, setnumFidelite] = useState('');
  const [motDePasse, setmotDePasse] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();
  const handleLogin = (e) => {
    e.preventDefault();
    // Logique de connexion à implémenter ici
    
    
    if (  !numFidelite || !motDePasse  ) {
      setError(`Veuillez remplir le champ d'Email.`);
      return;
    }

    
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
    <div className="backgroundImage" style={{ 
      backgroundImage: "url('/bg (3).png')",
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      height:'102vh'
    }}>

<div style={{ flex: 1 }}>
        {error && <p style={{ color: 'red', textAlign: 'center' }}>{error}</p>}
        <div style={{ display: 'flex', justifyContent: 'center'}}>
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
             width={600} 
             height={600}
             style={{ maxWidth: '100%', maxHeight: '100%' }} 
             />
          </div>
          </div>
    <h1 style={{color:'#15006D', fontSize: '25px',  textAlign: 'center',fontFamily:'@SimSun-ExtB', fontFamily:'bold',fontStyle: 'italic'  }}>Connexion</h1>
         
      
      <form onSubmit={handleLogin}  style={{ maxWidth: '300px', margin: '10px 100px', textAlign: 'center',paddingTop: '0px' }}>
      <div style={{display: 'block', margin: '80px 0px'}}>
        <label>

          N°carte:
          <input
            type="text"
            value={numFidelite}
            onChange={(e) => setnumFidelite(e.target.value)}
            style={{ width: '100%', padding: '9px', borderRadius: '50px', border:  '1px solid #15006D' }} 
          />
        </label>
        <label  >
          Mot de passe :
          <input
            type="password"
            value={motDePasse}
            onChange={(e) => setmotDePasse(e.target.value)}
            style={{ width: '100%', padding: '9px', borderRadius: '50px', border:  '1px solid #15006D' }}
          />
        </label>
        <button type='submit' style={{ 
      width: '120px',
      background:'#F25D78',
      color: 'white',
      borderRadius: '50px', 
      border: '2px solid #15006D', 
      cursor: 'pointer',
      margin: '20px 20px',
      padding: '10px',
      
    }}>connecter</button>
    </div>
      </form>
      </div>
      <Dialog>
       <DialogTrigger>
       <p style={{ color: 'gray', textDecoration: 'underline', textAlign: 'center', margin: '0px 90px' }}>Mot de passe oublié ?</p>
       </DialogTrigger>
       <DialogContent  style={{ border: '4px solid #F25D78', padding: '50px', borderRadius: '10px' }}>
       <p style={{fontSize: '1.2rem',fontWeight: 'bold', color: '#5F3671'}}>Veuillez contacter notre équipe de support !</p> 
        
       </DialogContent>
     </Dialog>
    </div>
    
    
    
  );
}

export default LoginPage;
