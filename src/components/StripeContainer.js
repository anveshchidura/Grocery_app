import { Elements } from "@stripe/react-stripe-js"
import { loadStripe } from "@stripe/stripe-js"
import React from "react"
import { stripe_public_key } from "../config"
import PaymentForm from "./PaymentForm"


const stripeTestPromise = loadStripe(stripe_public_key)

export default function StripeContainer() {
	return (
		<Elements stripe={stripeTestPromise}>
			<PaymentForm />
		</Elements>
	)
}