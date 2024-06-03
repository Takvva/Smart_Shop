'use client'
import React, { useState } from 'react'
import axios from 'axios';
import { toast } from 'react-toastify';

const PasswordReset = () => {
    const [numFidelite, setnumFidelite] = useState('');
    const [mail,setMail] = useState("");
    const[message,setMessage] = useState("");
    const [error, setError] = useState('');

    const sendLink = (e) => {

      console.log(numFidelite)
       
       
        e.preventDefault();

        if ( !mail ) {
            setError(`Veuillez remplir le champ d'Email.`);
            return;
          }
          const client = JSON.parse(localStorage.getItem('client'))

          axios.post('/api/profil',{ numFidelite:client.numFidelite }).then(response => {
           
            setMail(response.data.client.mail)

            console.log(response);
      

       

    
          if(response.data.status === 200) { 
            
           setMessage(" Le lien de réinitialisation de votre mot de passe a été envoyé à votre email")
          }
        })
        
        setMail('');
    }


  return (
   
     <div>
      <h1 style={{ fontWeight: 'bold', fontFamily: 'Segoe Print', fontSize: '36px', textAlign: 'center',paddingTop:'100px' }}>Tapez votre Email</h1>
      {error && <p style={{ color: 'red', textAlign: 'center' }}>{error}</p>}
     {message &&<p style={{color:"green",fontWeight:"blod",textAlign: 'center'}}></p>}
      <form onSubmit={sendLink} style={{ maxWidth: '300px', margin: '0 auto', textAlign: 'center'}}>
        <label style={{ display: 'block', marginBottom: '10px', padding:'30px' }}>
         Email
          <input
            type="email"
            value={ mail }
            onChange={(e) => setMail(e.target.value)}
            style={{ width: '100%', padding: '10px', borderRadius: '5px', border: '1px solid #ccc' }}
          />
        </label>
        <button type="submit" style={{backgroundColor: 'black', color: 'white',borderRadius: '50px', border: 'none', cursor: 'pointer',padding: '10px 20px'}}>Continuer </button>
      </form>
      
      </div>
      
        
   
   
  )
}

export default PasswordReset

