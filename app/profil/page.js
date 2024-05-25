"use client"
import React, { useState } from 'react';
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import axios from 'axios'
import Image from 'next/image';
import './popup.css'



const ProfilePage = () => {
  const [numFidelite, setnumFidelite] = useState('');
  const [nbrePoints, setnbrePoints] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  
  const handlePoint = (e) => {
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

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

    

    
    const visit = () => {


      console.log("Button clicked"); };
  

  return (
    <div>
      <Header />
     
      {isOpen && (
        <div className="popup">
          <div className="popup-content">
            <button className="close" onClick={togglePopup}>
              &times;
            </button>
            <p>Contenu de la popup ici.</p>
            <div>{nbrePoints}</div>
          </div>
        </div>
      )}
      <div style={{ display: 'flex', flexDirection: 'row', marginRight: '500px' }}>
        <Image
          src="/debit-card_3566306.png"
          alt="Description de l'image"
          style={{ height: '50px', width: '50px', cursor: 'pointer', marginRight: '50px' }}
          onClick={handlePoint}
        />
        
          <Image
            src="/calendar_833634.png"
            alt="Description de l'image"
            style={{ height: '50px', width: '50px', cursor: 'pointer' }}
            onClick={visit}
          />
        </div>
        <button onClick={handlePoint}>Afficher Popup</button>
      
     <Footer/>
    </div>
  
  )

}

export default ProfilePage