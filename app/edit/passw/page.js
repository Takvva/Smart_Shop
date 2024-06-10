'use client'
import axios from "axios";
import React, { useState } from 'react';
import Link from 'next/link';


const ChangePassword = () => {
 
    const [motDePasse, setmotDePasse] = useState('');
    const [numFidelite, setnumFidelite] = useState('');
    const [newPassword, setnewPassword] = useState('');
    const [confirmmotDePasse, setConfirmmotDePasse] = useState('');
    const [error, setError] = useState('');
    const [success,setsuccess] = useState('');
    
    const handleChangePassword = (e) => {
        e.preventDefault();
        
        
        const client = JSON.parse(localStorage.getItem('client'))
        if (!client) {
          setError('Client non trouvé');
          return;
      }
       console.log(client)
        
       if (newPassword !== confirmmotDePasse) {
          setError('Les mots de passe ne correspondent pas');
          return;
        }
        axios.post('/api/updateProfile', {
          numFidelite: client.numFidelite,
          newPassword: newPassword
      })  
        .then((response) => {
          setsuccess('Changement de mot de passe effectué avec succès');
        console.log(response);
        setmotDePasse('');
        setnewPassword('');
        setConfirmmotDePasse('');
    })
    .catch((error) => {
       
        console.error('Erreur lors du changement de mot de passe :', error);
        setsuccess('');
    
      });
    
  };




return (
  <div className="background" style={{backgroundColor:"#F25D78",height:'102vh', display:'flex', justifyContent:'space-between'}}>
    
    <div style={{ display: 'flex', flexDirection: 'row',marginRight: '500px' }}>
    <Link href="/profil">
      <button style={{ cursor: 'pointer', padding: '30px 10px', fontSize: '1.5rem', borderRadius: '8px', backgroundColor: '#F25D78', color: '#ffffff', border: 'none' }}>🔙</button>
      </Link>
      <div style={{ width: '300px' }}>
        <h1 style={{fontWeight: 'bold', fontFamily: '', fontSize: '20px', textAlign: 'center', color: '#5F3671',  paddingTop:'30px' }}>Configuration de motDePasse</h1>
      </div>

    </div>
    
    <div className='container' style={{ position: 'fixed', width: '100%', backgroundColor: 'white', padding: '10px', height:'100vh',borderRadius:'90px',margin:'100px 0px' }}>
   
   
           <div className="backgroundImage" style={{ 
      backgroundImage: "url('Blue and White Simple IU UX Design App (2).png')",
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      height:'100vh',
      borderRadius:'90px',
      

    }}>

<div style={{ flex: 1 }}>
        {error && <p style={{ color: 'red', textAlign: 'center' }}>{error}</p>}
        {success && <p style={{color: 'green',margin:'20px'}}>{success}</p>}
        <div style={{ display: 'flex', justifyContent: 'center', margin:'5px' }}>
          <div style={{
            width: '900px',
            height: '300px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center', // Centrer verticalement
       
          }}>
      
          </div>
          </div>
        
  
    
    <form onSubmit={handleChangePassword}style={{ maxWidth: '400px', margin: '0px 20px', textAlign: 'center' }}>
        <div style={{display: 'block'}}>
    
    
           
  <label>
    <input
      type="password"
      value={newPassword}
      onChange={(e) => setnewPassword(e.target.value)}
      placeholder="Nouveau mot de passe"
      style={{ width: '70%', padding: '9px', borderRadius: '50px', border:  '1px solid #15006D' }}
    />
  </label>
  <label>
    <input
      type="password"
      value={confirmmotDePasse}
      onChange={(e) => setConfirmmotDePasse(e.target.value)}
      placeholder="Confirmer le mot de passe"
      style={{ width: '70%', padding: '9px', borderRadius: '50px', border:  '1px solid #15006D',margin:'20px 0px' }}
    />
  </label>
  <button
    type="submit"
    style={{ 
      width: '120px',
      background:'#F25D78',
      color: 'white',
      borderRadius: '50px', 
      border: '2px solid #15006D', 
      cursor: 'pointer',
      margin: '20px 50px',
      padding: '10px',
    }}>
    Valider
  </button>
  
</div>
</form> 
</div> 
</div>
</div> 
</div> 

        
      );

}

export default ChangePassword