'use client'
import React, { useState ,useEffect } from 'react';
import Link from 'next/link';





const Profile = () => {
const [nom, setnom] = useState('');
const [prenom, setprenom] = useState('');

useEffect(() => {
  const client = JSON.parse(localStorage.getItem('client'));
  if (client) {
    setnom(client.nom);
    setprenom(client.prenom);
  }
}, []);

  return (
    <div className="background" style={{backgroundColor:"#F25D78",height:'102vh', display:'flex', justifyContent:'space-between'}}>
    
    <div style={{ display: 'flex', flexDirection: 'row',marginRight: '500px' }}>
    <Link href="/profil">
      <button style={{ cursor: 'pointer', padding: '30px 10px', fontSize: '1.5rem', borderRadius: '8px', backgroundColor: '#F25D78', color: '#ffffff', border: 'none' }}>🔙</button>
      </Link>
      <div style={{ width: '100px' }}>
        <h1 style={{ fontWeight: 'bold', fontFamily: '@SimSun-ExtB', fontSize: '20px', textAlign: 'center', color: '#5F3671',  paddingTop:'30px' }}>Mon Profil</h1>
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
          <div style={{ display: 'flex', alignItems: 'center', fontWeight: 'bold', fontSize: '18px', margin: '0 90px' }}>
      <div style={{ margin: '0 10px' }}>
        {nom}
      </div>
      <div>
        {prenom}
      </div>
    </div>
    <div>
  <Link href="/edit/passw">
  <button style={{    background:'#F25D78',
    color: 'white',
    border: '2px solid #15006D',
    padding: '10px 20px',
    fontSize: '1em',
    cursor: 'pointer',
    margin: '20px 40px',
    borderRadius: '50px',}}>Changez votre mot de passe</button>
  </Link>
  </div>
</div>
      
    </div>

    </div>
    </div>
    
    
  );
};

export default Profile;
