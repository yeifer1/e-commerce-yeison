import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import CheckoutForm from './CheckoutForm';

// Usa tu propia publishableKey de prueba de Stripe
const stripePromise = loadStripe('pk_test_XXXXXXXXXXXXX');

const Pagos = () => {
  return (
    <div className="pagos">
      <Elements stripe={stripePromise}>
        <CheckoutForm />
      </Elements>
    </div>
  );
}

export default Pagos;