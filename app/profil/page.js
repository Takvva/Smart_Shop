"use client"
import React, { useState, useEffect} from 'react';
import axios from 'axios'
import Link from 'next/link'
import Image from 'next/image';


import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import {format} from 'date-fns';


const ProfilePage = () => {
  const [derniereVisite, setderniereVisite] = useState('');
  const [numFidelite, setnumFidelite] = useState('');
  const [nbrePoints, setnbrePoints] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [nom, setnom] = useState('');
  const [prenom, setprenom] = useState('');
  useEffect(() => {
    setderniereVisite(new Date());
  }, []);

  let formattedDate = '';
  if (derniereVisite) {
    formattedDate = format(derniereVisite, 'dd/MM/yyyy');
  }

  console.log(formattedDate);


  const handlePoint = () => {
    console.log(numFidelite)
    console.log(nbrePoints)
    const client = JSON.parse(localStorage.getItem('client'))
    console.log(client)
    axios.post('/api/profil',{ numFidelite:client.numFidelite }).then(response => {
      
      console.log('api/profile',nbrePoints)
      setnbrePoints(response.data.client.nbrePoints)

      if(response.data.status === 200) { 
        setIsOpen(true);
      }

    })

  };
    
    const visit = () => {

      console.log(numFidelite)
      console.log(derniereVisite)
      const client = JSON.parse(localStorage.getItem('client'))
      console.log(client)
      axios.post('/api/profil',{ numFidelite:client.numFidelite }).then(response => {
        
        console.log('api/profile',derniereVisite)
        setderniereVisite(response.data.client.derniereVisite)
  
        if(response.data.status === 200) { 
          setIsOpen(true);
        }
  
      })
  
    };
    

  return (
    <div className="background" style={{backgroundColor:"#F25D78",height:'102vh', display:'flex', justifyContent:'space-between'}}>
           
           <div className="logo"  style={{ overflow: 'hidden',flexDirection:'row',justifyContent:'space-between' }}>
            
            <Image
              src="/test.png" 
              alt="Logo"
              width={150} 
              height={150} 

              sizes='400'
            /> 

                   
  
       
  </div>
  <div>
  <h1 style={{ color: '#5F3671', margin:'55px 20px', fontSize: '25px',fontFamily:'@SimSun-ExtB',fontWeight:'bold'}}>Smart Shop</h1> 
  </div>        <div className='container' style={{ position: 'fixed', width: '100%', backgroundColor: 'white', padding: '10px', height:'100vh',borderRadius:'90px',margin:'100px 0px' }}>
   
   
           <div className="backgroundImage" style={{ 
      backgroundImage: "url('/2.png')",
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      height:'100vh',
      borderRadius:'90px',
      

    }}>
           
           
           <div style={{ display: 'flex', alignItems:'center',justifyContent:'space-between'}}>
  <Dialog>
    <DialogTrigger>
      <p onClick={handlePoint} style={{ cursor: 'pointer', color: '#5F3671', margin: '22vh 4vw', fontWeight: 'bold', fontSize: '0.8rem' }}>
        Les points de fidélité
      </p>
    </DialogTrigger>
    <DialogContent  style={{ border: '4px solid #F25D78', padding: '50px', borderRadius: '10px' }}>
    <p style={{fontSize: '1rem',fontWeight: 'bold', color: '#5F3671'}}>Voici vos points de fidélité :</p> 
      <div style={{ fontSize: '1.3rem',fontWeight: 'bold',margin: '0 6.9vw' }}>{nbrePoints}</div>
    </DialogContent>
  </Dialog>

  <Link href="/promo">
    <p style={{ cursor: 'pointer', color: '#5F3671', fontWeight: 'bold', margin: '40px', fontSize: '0.8rem' }}>
    Les promotions
    </p>
  </Link>
</div>

<div style={{ display: 'flex', alignItems: 'center',justifyContent:'space-between' }}>
  <Link href="/edit">
    <p style={{ cursor: 'pointer', color: '#5F3671', fontWeight: 'bold', fontSize: '0.9rem', margin: '0 15vw', fontSize: '0.8rem' }}>
      Profil
    </p>
  </Link>

  <Dialog>
    <DialogTrigger>
      <p onClick={visit} style={{ cursor: 'pointer', color: '#5F3671', fontWeight: 'bold', fontSize: '0.8rem', margin: '0 20px' }}>
        Les dernière visites
      </p>
    </DialogTrigger>
    <DialogContent style={{ border: '4px solid #F25D78', padding: '30px', borderRadius: '10px' }}>
     <p style={{fontSize: '1rem',fontWeight: 'bold', color: '#5F3671'}}>Votre dernière visite :</p> 
      <div style={{fontWeight: 'bold',margin: '0 5.5vw' }}>{formattedDate}</div>
    </DialogContent>
  </Dialog>
</div>

<Link href="/">
  <p style={{ cursor: 'pointer', color: '#5F3671', fontWeight: 'bold', fontSize: '1rem', margin: '19vh 64vw', fontSize: '0.8rem' }}>
    Logout
  </p>
</Link>
        </div>
        </div>
        </div>
     )

    }
    
    export default ProfilePage