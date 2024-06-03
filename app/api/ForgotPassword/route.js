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
    
    
   
    
    if(client.mail !== data.mail) return NextResponse.json({status:400, message:'Invalide compte '});


    
    return NextResponse.json({status:200, client});
  } catch (error) {
    console.error('Erreur lors de la connexion à la base de données:', error);
    return NextResponse.json({status:400,message:error.message})
}
}

