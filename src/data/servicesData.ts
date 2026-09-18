import { ServiceItem } from '../types';

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'prescription-medicines',
    title: 'Prescription Medicines Dispensing',
    shortDesc: '100% genuine allopathic medicines verified directly by licensed pharmacists against registered doctor prescriptions.',
    fullDesc: 'We stock a comprehensive inventory of branded and generic prescription drugs across cardiology, neurology, endocrinology, nephrology, oncology, and general medicine. Every strip is sourced from verified pharmaceutical distributors with cold-chain storage integrity.',
    category: 'Prescription Medicines',
    iconName: 'Pill',
    badge: 'Pharmacist Verified',
    features: [
      'Strict batch and expiry tracking on computerized billing',
      'Cold-chain refrigeration for insulins, vaccines & biologics',
      'Generic and branded substitutes guidance to save costs',
      'WhatsApp prescription order with fast local dispatch'
    ]
  },
  {
    id: 'otc-medicines',
    title: 'Over-The-Counter (OTC) Essentials',
    shortDesc: 'Immediate relief for common ailments including fever, headache, indigestion, cough, colds, and seasonal flu.',
    fullDesc: 'Accessible self-care remedies from leading Indian and multinational pharmaceutical companies. Our experienced counter staff guides customers on safe usage, proper dosages, and potential drug-drug interactions.',
    category: 'OTC Medicines',
    iconName: 'HeartPulse',
    badge: 'Fast Moving',
    features: [
      'Antacids, pain relievers, ORS electrolytes & throat lozenges',
      'Anti-allergic tablets, eye/ear drops & antiseptic gels',
      'Expert advisory on symptom duration & red flags',
      'Affordable combo packs for household first aid'
    ]
  },
  {
    id: 'health-devices',
    title: 'Health & Diagnostic Devices',
    shortDesc: 'Clinically tested digital BP machines, blood glucose meters, pulse oximeters, and nebulizers for home monitoring.',
    fullDesc: 'Manage chronic conditions with precision. We supply certified digital diagnostic apparatus from Omron, Accu-Chek, Dr. Morepen, and Beurer with warranty support and demonstration assistance for elderly patients.',
    category: 'Health Devices',
    iconName: 'Activity',
    badge: 'Warranty Support',
    features: [
      'Digital BP monitors with one-touch cuff operation',
      'Glucometers with readily available refill test strips & lancets',
      'Compact compressor nebulizers for respiratory care',
      'Infrared non-contact thermometers & digital weighing scales'
    ]
  },
  {
    id: 'medical-equipment',
    title: 'Surgical & Medical Supplies',
    shortDesc: 'Hospital-grade surgical cotton, sterile bandages, disposable gloves, cannulas, catheter bags, and IV fluids.',
    fullDesc: 'Supplying local clinics, nursing homes, and post-operative home recovery setups. Sterile, certified consumables conforming to Indian Pharmacopoeia standards at wholesale and retail rates.',
    category: 'Medical Equipment',
    iconName: 'Stethoscope',
    badge: 'Sterile & Certified',
    features: [
      'Sterile gauze swabs, micropore tapes & crepe bandages',
      'Dispovan sterile disposable syringes and needles',
      'Adult diapers, underpads, and bed protection sheets',
      'Walking sticks, orthopaedic belts, cervical collars & knee braces'
    ]
  },
  {
    id: 'baby-care',
    title: 'Infant & Baby Healthcare',
    shortDesc: 'Pediatric drops, pediatric syrups, baby diapers, gentle cleansers, gripe water, and nutrition formulas.',
    fullDesc: 'From trusted infant care brands like Johnson & Johnson, Sebamed, Himalaya Baby, and Nestle. Safe, dermatologically tested, and pharmacist-approved for delicate infant skin and sensitive tummies.',
    category: 'Baby Care',
    iconName: 'Baby',
    badge: 'Gentle & Safe',
    features: [
      'Infant milk formula (Lactogen, Nan Pro, Similac)',
      'Tear-free baby washes, moisturizers, rash creams & massage oils',
      'Baby diapers, wet wipes & gentle feeding accessories',
      'Colic relief drops, Vitamin D3 infant drops & oral rehydration'
    ]
  },
  {
    id: 'supplements',
    title: 'Supplements, Vitamins & Nutrition',
    shortDesc: 'High-potency Multivitamins, Calcium D3, Omega-3 fish oils, protein powders, and immunity boosters.',
    fullDesc: 'Support daily vitality, joint mobility, cognitive focus, and recovery with verified dietary supplements suitable for adults, seniors, pregnant women, and gym enthusiasts.',
    category: 'Supplements',
    iconName: 'Sparkles',
    badge: 'Immunity & Energy',
    features: [
      'Calcium + D3 formulations for bone density and joint health',
      'B-Complex capsules with Zinc & Vitamin C',
      'Whey & diabetic protein supplements (Protinex, Ensure)',
      'Iron, Folic Acid & maternal health nutrition'
    ]
  },
  {
    id: 'home-care',
    title: 'Home Healthcare & Elderly Care',
    shortDesc: 'Comprehensive patient comfort products for chronic illness management, bed-ridden care, and post-discharge support.',
    fullDesc: 'Empowering families with durable home nursing essentials. From silicone catheter tubes to air-mattresses for bedsore prevention, we provide empathetic and discreet guidance.',
    category: 'Home Care',
    iconName: 'ShieldCheck',
    badge: 'Patient Comfort',
    features: [
      'Anti-decubitus air mattresses with automated pump units',
      'Commode chairs, backrests & orthopaedic cushions',
      'Hot water bags, gel packs & heating belts for chronic pain',
      'Antiseptic hospital floor washes and hand sanitizers'
    ]
  },
  {
    id: 'personal-care',
    title: 'Personal Care & Dermatologicals',
    shortDesc: 'Medicated skincare creams, anti-dandruff lotions, oral hygiene washes, and therapeutic cosmetics.',
    fullDesc: 'Pharmacy-grade skincare and hygiene formulations prescribed by leading dermatologists. Treats acne, fungal infections, eczema, and psoriasis effectively with safe pharmaceutical actives.',
    category: 'Personal Care',
    iconName: 'Sparkles',
    badge: 'Derm-Recommended',
    features: [
      'Antifungal powders, clotrimazole creams & ketoconazole shampoos',
      'Sun protection creams (SPF 50+) & non-comedogenic lotions',
      'Therapeutic antiseptic soaps & antibacterial hand cleansers',
      'Oral cavity mouthwashes, dental floss & gum astringents'
    ]
  }
];
