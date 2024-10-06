import { NextRequest, NextResponse } from 'next/server'
import Stripe from 'stripe'

export async function POST(req) {

    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
        apiVersion: '2024-06-20'
    })
    try {
        // const origin = "http://localhost:3000"
        const origin = req.headers.get('origin') || ''
        // console.log("-===------------------>", origin)
        const session = await stripe.checkout.sessions.create({
            payment_method_types: ['card'],
            mode: 'payment',
            line_items: [
                {
                    price: 'price_1Q5j8L2MLJvVwcRPdSCj2eva', // Replace with your price ID
                    quantity: 1
                }
            ],
            success_url: `${origin}/success?session_id={CHECKOUT_SESSION_ID}`,
            cancel_url: `${origin}/cancel`
        })

        return new NextResponse(JSON.stringify({ id: session.id }), { status: 201 })
    } catch (err) {
        return new NextResponse(
            JSON.stringify({
                message: 'An error occurred while creating the checkout session.',
                error: err
            }),
            { status: 400 }
        );
    }
}