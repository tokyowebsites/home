import { loadStripe } from '@stripe/stripe-js';

// Initialize Stripe with the provided public key
export const stripePromise = loadStripe('pk_test_51SmCelJJZxlRM0ZERW1XqXoE0nZnXU2AhQIOImG5rCp6nmJMnlyKIBjfHk1KdiqGpqXVafK7ltvJJLgbTZy55sFS000FWf0sFY');

