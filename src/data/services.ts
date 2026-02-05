export interface Service {
  id: string;
  name: string;
  shortName: string;
  price: string;
  description: string;
  features: string[];
  popular?: boolean;
}

export const services: Service[] = [
  {
    id: 'refresh',
    name: 'Refresh Clean',
    shortName: 'Refresh',
    price: '149',
    description: 'Basic maintenance cleaning perfect for regular upkeep of your artificial turf.',
    features: [
      'Debris & leaf removal',
      'Surface brushing',
      'Weed removal',
      'Visual inspection',
      'Turf decompacting',
    ],
  },
  {
    id: 'restore',
    name: 'Restore Clean',
    shortName: 'Restore',
    price: '249',
    description: 'Deep cleaning with odor treatment. Ideal for pet owners and high-traffic areas.',
    features: [
      'Everything in Refresh',
      'Pet waste removal',
      'Odor elimination treatment',
      'Sanitizing application',
      'Infill redistribution',
      'Power brushing',
    ],
    popular: true,
  },
  {
    id: 'deep',
    name: 'Deep Clean',
    shortName: 'Deep',
    price: '399',
    description: 'Complete restoration for neglected turf. Brings your lawn back to like-new condition.',
    features: [
      'Everything in Restore',
      'Pressure washing',
      'Stain removal treatment',
      'Urine extraction',
      'Full infill replenishment',
      'Drainage optimization',
      'Edge repair inspection',
    ],
  },
];

export const serviceAreas = [
  { name: 'Las Vegas', slug: 'las-vegas', zip: '89101-89199' },
  { name: 'Henderson', slug: 'henderson', zip: '89002, 89011-89015, 89044, 89052, 89074' },
  { name: 'North Las Vegas', slug: 'north-las-vegas', zip: '89030-89032, 89081, 89084-89086' },
  { name: 'Summerlin', slug: 'summerlin', zip: '89128, 89134, 89135, 89138, 89144, 89145' },
  { name: 'Spring Valley', slug: 'spring-valley', zip: '89102, 89103, 89113, 89117, 89146, 89147' },
  { name: 'Paradise', slug: 'paradise', zip: '89109, 89119, 89120, 89121, 89169' },
  { name: 'Enterprise', slug: 'enterprise', zip: '89113, 89118, 89139, 89141, 89148, 89178, 89179' },
  { name: 'Green Valley', slug: 'green-valley', zip: '89012, 89014, 89052, 89074' },
  { name: 'Centennial Hills', slug: 'centennial-hills', zip: '89130, 89131, 89143, 89149, 89166' },
  { name: 'Mountains Edge', slug: 'mountains-edge', zip: '89141, 89148, 89178' },
  { name: 'Aliante', slug: 'aliante', zip: '89084, 89085' },
  { name: 'Southern Highlands', slug: 'southern-highlands', zip: '89141, 89148, 89178, 89179' },
];

export const PHONE_NUMBER = '(702) 555-TURF';
export const PHONE_HREF = 'tel:+17025558873';
export const EMAIL = 'info@turfcleaninglasvegas.com';
