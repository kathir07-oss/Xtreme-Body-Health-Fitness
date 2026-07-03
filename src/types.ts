export interface Plan {
  id: string;
  name: string;
  price: string;
  period: string;
  badge?: string;
  description: string;
  features: string[];
  color: 'red' | 'orange' | 'white';
}

export interface Trainer {
  id: string;
  name: string;
  photoUrl: string;
  experience: string;
  certifications: string[];
  specialization: string;
  bio: string;
}

export interface Testimonial {
  id: string;
  name: string;
  age: number;
  role: string;
  avatarUrl: string;
  rating: number;
  comment: string;
  beforeWeight: string;
  afterWeight: string;
  beforePhoto: string;
  afterPhoto: string;
  duration: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'equipment' | 'workout' | 'group' | 'interior';
  imageUrl: string;
}

export interface GymLead {
  id: string;
  name: string;
  phone: string;
  fitnessGoal: string;
  bookingDate: string;
  bookingTime: string;
  selectedPlan: string;
  createdAt: string;
  status: 'pending' | 'contacted' | 'joined' | 'cancelled';
}
