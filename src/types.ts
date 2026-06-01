export interface ServiceItem {
  id: string;
  title: string;
  subtitle?: string;
  description: string;
  iconName: string;
  details?: {
    avgTime: string;
    diagnosticApps: string[];
    priceRange: string;
    warranty: string;
    steps: string[];
  };
}

export interface Appointment {
  id: string;
  name: string;
  email: string;
  service: string;
  message?: string;
  date: string;
  time: string;
  status: 'pending' | 'confirmed' | 'completed';
  plate?: string;
  createdAt: string;
}

export interface Review {
  id: string;
  name: string;
  vehicle: string;
  comment: string;
  rating: number;
  date: string;
}

export interface StaffMember {
  id: string;
  name: string;
  role: string;
  experience: string;
  specialty: string;
}
