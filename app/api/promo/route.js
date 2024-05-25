import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';

const prisma = new PrismaClient();

export async function GET(req, res) {
    try {
        const today = new Date();
        today.setHours(0, 0, 0, 0); // Set time to the beginning of the day

        const products = await prisma.product.findMany({
            where: {
                Date: {
                    gte: today,
                    lt: new Date(today.getTime() + 24 * 60 * 60 * 1000) // Less than the beginning of the next day
                }
            }
        });

        console.log(products);

        return NextResponse.json({ status: 200, products });
    } catch (error) {
        console.error('Erreur lors de la connexion à la base de données:', error);
        return NextResponse.json({ status: 400, message: error.message });
    }
}

