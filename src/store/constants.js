export const RING = {
  id: 23542,
  price: 0.000002,
  timestamp: Date.now(),
  materials: [
    {
      material: 0,
      madeup: 0.8,
    },
    {
      material: 1,
      madeup: 0.2,
    },
  ],
  forger: 0,
  transaction_type: 0,
  rarity: 'High',
  reforge_count: 0,
  note: 'with love from Russia',
  from: 'The One',
  to: 'Me',
}
export const MATERIAL = ['Diamond', 'Gold', 'Silver', 'Bronze', 'Copper']
export const FORGER = ['God', 'Master', 'Expert', 'Worker', 'Apprentice']
export const TRANSACTION_TYPE = ['Purchased', 'Pairing Sent', 'Paired', 'Inheritance Requested', 'Inherited', 'Reforge']
