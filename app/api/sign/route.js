 
import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';

const prisma = new PrismaClient();

export async function POST(req, res) {
  const data = await req.json();
  console.log('req--------------',data);
  try {
    
    const client = await prisma.clients.findUnique({
      where:{
        numFidelite:data.numFidelite
      }
    })
    if(!client) return NextResponse.json({status:400, message:'client not found'}); 
    
    if(client.motDePasse !== data.motDePasse) return NextResponse.json({status:400, message:'password incorrect'});


    
    return NextResponse.json({status:200, client});
  } catch (error) {
    console.error('Erreur lors de la connexion à la base de données:', error);
    return NextResponse.json({status:400,message:error.message})
}
}

