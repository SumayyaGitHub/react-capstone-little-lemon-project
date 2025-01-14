import customer1Image from './assets/customer.jpg';
import customer2Image from './assets/customer2.jpg';
import customer3Image from './assets/customer.jpg';
import customer4Image from './assets/customer4.jpg';
import './Testimonials.css';
import TestimonialCard from './TestimonialCard';

const customers = [
  {
    fullName: 'Joshua Sanchez',
    image: customer1Image,
    rating: [1, 1, 1, 1, 0.5],
    says: `Decadent, delicious dessert - the perfect ending to a fantastic meal.`,
  },
  {
    fullName: 'Robin Antony',
    image: customer2Image,
    rating: [1, 1, 1, 1, 1],
    says: `The pasta dish was flavorful and hearty, and the portion size was generous.`,
  },
  {
    fullName: 'Natasha Jackson',
    image: customer3Image,
    rating: [1, 1, 1, 1, 0.5],
    says: `Decadent, delicious dessert - the perfect ending to a fantastic meal...`,
  },
  {
    fullName: 'Brandon Ming',
    image: customer4Image,
    rating: [1, 1, 1, 1],
    says: `Decadent, delicious dessert - the perfect ending to a fantastic meal...`,
  },
];

const Testimonials = () => {
  return (
    <section className="testimonials">
      <div className="container grid">
        <h2>Valuable Customer Reviews!</h2>
        {customers.map((customer, index) => 
          <TestimonialCard key={index} customer={customer} />
        )}
     </div>
    </section>
  );
};

export default Testimonials;
