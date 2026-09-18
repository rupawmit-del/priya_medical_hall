export type StockStatus = 'Available' | 'Limited Stock' | 'Out of Stock';

export interface MedicineItem {
  id: string;
  name: string;
  brand: string;
  genericName: string;
  category: string;
  mrp: number;
  discountedPrice?: number;
  availableQuantity: number;
  expiry: string;
  batchNo: string;
  status: StockStatus;
  dosageForm: 'Tablet' | 'Capsule' | 'Syrup' | 'Ointment' | 'Inhaler' | 'Injection' | 'Device' | 'Drops';
  requiresPrescription: boolean;
  packSize: string;
  description: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  category: string;
  iconName: string;
  badge?: string;
  features: string[];
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'Store' | 'Shelves' | 'Products' | 'Equipment' | 'Counter';
  imageUrl: string;
  caption: string;
}

export interface ReviewItem {
  id: string;
  name: string;
  location: string;
  rating: number;
  date: string;
  comment: string;
  verified: boolean;
}

export interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

export interface HealthTipItem {
  id: string;
  title: string;
  category: string;
  readTime: string;
  date: string;
  summary: string;
  content: string;
  imageUrl: string;
}

export interface WhatsAppOrderFormData {
  customerName: string;
  mobileNumber: string;
  email: string;
  address: string;
  medicineName: string;
  prescriptionAvailable: 'Yes' | 'No';
  prescriptionFileName?: string;
  preferredDeliveryTime: string;
  message: string;
}
