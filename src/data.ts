import { Plan, Trainer, Testimonial, GalleryItem } from './types';

export const PLANS: Plan[] = [
  {
    id: 'basic',
    name: 'Basic Strength',
    price: '₹1,200',
    period: 'month',
    description: 'Perfect for self-driven individuals who want access to premium strength & cardio equipment.',
    features: [
      'Access to state-of-the-art gym floor',
      'Cardio & Free Weight Area access',
      'Locker room & shower access',
      'Initial orientation session',
      'Flexible workout hours'
    ],
    color: 'white'
  },
  {
    id: 'premium',
    name: 'Premium Recovery',
    price: '₹2,500',
    period: 'month',
    badge: 'Most Popular',
    description: 'Unlock full-spectrum fitness including recovery amenities and guided group exercises.',
    features: [
      'Everything in Basic Strength',
      'Unlimited Steam & Sauna access',
      'Access to Group Yoga & HIIT classes',
      'Monthly body composition analysis (InBody)',
      '1 Complimentary personal training session',
      'Premium towel service'
    ],
    color: 'orange'
  },
  {
    id: 'personal-training',
    name: 'Elite Personal Training',
    price: '₹6,000',
    period: 'month',
    badge: 'Ultimate Results',
    description: 'The complete path to transforming your health. Tailored workouts, rehab, and meal guides.',
    features: [
      'Everything in Premium Recovery',
      '3 Dedicated 1-on-1 sessions per week',
      'Personalized physiotherapy & rehabilitation guidance',
      'Customized nutrition & macro tracking guide',
      'Direct WhatsApp access to your trainer',
      'Progress tracking & weekly review'
    ],
    color: 'red'
  }
];

export const TRAINERS: Trainer[] = [
  {
    id: 'trainer-1',
    name: 'Coach Raghu Raman',
    photoUrl: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&q=80&w=600',
    experience: '12 Years Active',
    certifications: [
      'Gold Medalist - State Bodybuilding Championship',
      'K11 Certified Fitness Coach',
      'ISSA Strength & Conditioning Specialist'
    ],
    specialization: 'Bodybuilding & Elite Hypertrophy',
    bio: 'Raghu has helped hundreds of Rajapalayam residents sculpt their dream physiques. He specializes in mechanical tension training and contest prep.'
  },
  {
    id: 'trainer-2',
    name: 'Dr. Karthik Raj, PT',
    photoUrl: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&q=80&w=600',
    experience: '8 Years Active',
    certifications: [
      'Bachelor of Physiotherapy (BPT)',
      'Certified Sports Rehab Practitioner',
      'Dry Needling & Manual Therapy Certified'
    ],
    specialization: 'Physiotherapy & Athletic Injury Rehab',
    bio: 'Combining medicine with movement, Dr. Karthik is dedicated to guiding athletes and seniors alike back to pain-free performance and full physical strength.'
  },
  {
    id: 'trainer-3',
    name: 'Coach Divya Selvam',
    photoUrl: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=600',
    experience: '6 Years Active',
    certifications: [
      '200-Hour Registered Yoga Teacher (RYT)',
      'Precision Nutrition Level 1 certified',
      'Calisthenics & Bodyweight Coach'
    ],
    specialization: 'Functional Yoga, Weight Loss & Dietetics',
    bio: 'Divya excels at developing custom weight-management programs that combine stress-reducing yoga practices with high-performance metabolic conditioning.'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'story-1',
    name: 'Anand Kumar',
    age: 32,
    role: 'Software Engineer',
    avatarUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=300',
    rating: 5,
    comment: 'Xtreme Body changed my relationship with fitness. Combining heavy lifting with the steam room and Dr. Karthik\'s physio advice helped me cure my chronic lower back pain and drop 18 kgs in 6 months.',
    beforeWeight: '94 kg',
    afterWeight: '76 kg',
    beforePhoto: 'https://images.unsplash.com/photo-1599058917212-d750089bc07e?auto=format&fit=crop&q=80&w=600',
    afterPhoto: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&q=80&w=600',
    duration: '6 Months'
  },
  {
    id: 'story-2',
    name: 'Meera Krishnan',
    age: 28,
    role: 'Teacher',
    avatarUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=300',
    rating: 5,
    comment: 'The group classes and yoga sessions are absolute lifesavers. Coach Divya structured a customized meal plan that matched my busy teaching schedule. I\'ve never felt more energetic or flexible!',
    beforeWeight: '72 kg',
    afterWeight: '61 kg',
    beforePhoto: 'https://images.unsplash.com/photo-1518310383802-640c2de311b2?auto=format&fit=crop&q=80&w=600',
    afterPhoto: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&q=80&w=600',
    duration: '4 Months'
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'g-1',
    title: 'Professional Dumbbell & Free Weights Zone',
    category: 'equipment',
    imageUrl: 'https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'g-2',
    title: 'Intensity Dumbbell Training Sessions',
    category: 'workout',
    imageUrl: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'g-3',
    title: 'Group Functional Circuit & Cardio',
    category: 'group',
    imageUrl: 'https://images.unsplash.com/photo-1571388208497-71bedc66e932?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'g-4',
    title: 'Our Modern Gym Layout & Squat Racks',
    category: 'interior',
    imageUrl: 'https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&q=80&w=800'
  }
];
