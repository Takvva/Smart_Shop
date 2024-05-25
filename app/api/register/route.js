
import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';

const prisma = new PrismaClient();

export async function POST(req, res) {
  const data = await req.json();
  console.log('req--------------',data);
 
  try {
    const newClient = await prisma.clients.create({
      data: {
        nom:data.nom,
        prenom:data.prenom,
        numFidelite:data.numFidelite,
        mail:data.mail,
        motDePasse:data.motDePasse
      }
    })

    

    console.log(newClient)
    
    return NextResponse.json({status:200, message:'client created successfully',client:newClient});
  } catch (error) {
    console.error('Erreur lors de la connexion à la base de données:', error);
    return NextResponse.json({status:500,message:error.message})
}
}

