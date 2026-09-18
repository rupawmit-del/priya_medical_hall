import { HealthTipItem } from '../types';

export const HEALTH_TIPS_DATA: HealthTipItem[] = [
  {
    id: 'tip-1',
    title: 'Safe Storage of Everyday Medicines at Home',
    category: 'Home Safety',
    readTime: '3 min read',
    date: 'March 2026',
    summary: 'Keep medicines in a cool, dry place away from direct sunlight and bathroom humidity. Always keep out of reach of young children.',
    content: 'Storing medicines in the bathroom cabinet exposes them to heat and moisture, which accelerates pill degradation. Store them in a dedicated high cabinet between 15°C and 25°C. Insulins and reconstituted antibiotic suspensions must be stored in the refrigerator main compartment (not the freezer door).',
    imageUrl: 'https://images.unsplash.com/photo-1471864190281-a93a3070b6de?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'tip-2',
    title: 'Why Completing Your Antibiotic Course is Essential',
    category: 'Pharmacist Advisory',
    readTime: '4 min read',
    date: 'February 2026',
    summary: 'Stopping antibiotics early because you feel better can leave resistant bacteria behind, causing severe rebound infections.',
    content: 'Antibiotics kill the most vulnerable bacteria first. If you discontinue your medicine early, resilient bacteria survive, multiply, and develop resistance. Always take the full course prescribed by your physician, at regular time intervals.',
    imageUrl: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'tip-3',
    title: 'Managing Blood Pressure: Routine Home Monitoring Tips',
    category: 'Heart Health',
    readTime: '4 min read',
    date: 'January 2026',
    summary: 'Learn the proper technique for taking blood pressure readings at home to avoid inaccurate high readings.',
    content: 'Rest quietly for 5 minutes before taking a reading. Avoid caffeine, exercise, and smoking 30 minutes beforehand. Sit with your feet flat on the floor, support your arm on a table at heart level, and do not speak during measurement.',
    imageUrl: 'https://images.unsplash.com/photo-1576602976047-174e57a47881?auto=format&fit=crop&w=600&q=80'
  }
];
