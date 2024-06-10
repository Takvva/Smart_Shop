 
import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';

const prisma = new PrismaClient();

export async function POST(req, res) {
  const data = await req.json();
  const { numFidelite, newPassword } = data;

    if (!numFidelite || !newPassword) {
        return NextResponse.json({ status: 400, message: 'Données manquantes' });
    }

  console.log('req--------------',data);

 
    


  try {

    const client = await prisma.clients.update({
      
      where:{
        numFidelite:numFidelite,
      },
      data:{
        motDePasse: newPassword
      }
    })
    
    return NextResponse.json({status:200, client});
  } catch (error) {
    console.log('Erreur lors de la connexion à la base de données:', error);
    return NextResponse.json({status:400,message:error.message})
}
}

