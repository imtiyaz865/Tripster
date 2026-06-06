export const tripMeta = {
  title: 'Mission ReactNexus Trip',
  subtitle: 'July 2026 — Friends Getaway',
  dates: '1 July – 4 July 2026',
  people: 5,
  destination: 'Bengaluru (SBC)',
  origin: 'Hyderabad',
  maxBudgetPerPerson: 7000,
  airbnbUrl:
    'https://www.airbnb.co.in/rooms/1116327230290312702?adults=5&check_in=2026-07-01&check_out=2026-07-04',
  airbnbCheckIn: '1 July 2026',
  airbnbCheckOut: '4 July 2026',
};

export const accommodation = {
  type: '2 BHK Flat',
  location: 'Near JP Nagar Metro',
  distanceFromMetro: '≈ 1 km walk from JP Nagar Metro',
  totalCost: 6800,
  perPerson: 1400,
  perPersonExact: 1360,
  nights: 3,
};

export const trains = [
  {
    id: 'outbound',
    trainNo: '12976',
    date: '1 July 2026',
    day: 'Day 1 — Arrival',
    from: 'Kacheguda (HYB)',
    to: 'Bengaluru City (SBC)',
    departure: '00:05 AM',
    arrival: '12:30 PM',
    class: '3AC',
    costPerPerson: 1100,
    note: 'Overnight train — reach Bangalore by afternoon',
  },
  {
    id: 'return',
    trainNo: '20704',
    date: '4 July 2026',
    day: 'Day 4 — Departure',
    from: 'Yeshwantpur (YPR)',
    to: 'Kacheguda (HYB)',
    departure: '2:45 PM',
    arrival: '11:00 PM',
    class: 'Chair Car (CC) — Vande Bharat Express',
    costPerPerson: 1600,
    note: 'Checkout Airbnb before heading to station',
  },
];

export const localTransport = {
  stationToAirbnb: {
    mode: 'Uber XL',
    totalCost: 1000,
    perPerson: 200,
    note: 'Station → Airbnb (going + return split among 5)',
  },
  dailyUber: {
    mode: 'Uber',
    totalCostPerDay: 1000,
    perPersonPerDay: 200,
    days: ['1 July', '2 July'],
    note: 'Going + return each day, split among 5',
  },
  metro: {
    route: 'JP Nagar → Lalbagh',
    stationsInBetween: 3,
    fareOneWay: 30,
    venueDistance: 'Lalbagh Metro → Venue ≈ 3 km',
    note: 'Metro for short hops; Uber for longer distances',
  },
};

export const days = [
  {
    date: '1 July 2026',
    label: 'Day 1',
    title: 'Arrival & Check-in',
    emoji: '🚂',
    timeline: [
      {
        time: '00:05 AM',
        title: 'Board Train 12976',
        detail: 'Kacheguda → Bengaluru City (SBC) · 3AC · ₹1,100/person',
        type: 'train',
      },
      {
        time: '12:30 PM',
        title: 'Reach Bangalore',
        detail: 'Arrive at SBC station',
        type: 'arrival',
      },
      {
        time: 'Afternoon',
        title: 'Uber XL to Airbnb',
        detail: 'Station → 2BHK near JP Nagar Metro · ₹200/person',
        type: 'cab',
      },
      {
        time: 'Evening',
        title: 'Check-in & Settle',
        detail: '2BHK flat · 1 km from JP Nagar Metro',
        type: 'stay',
      },
      {
        time: 'Night',
        title: 'Dinner at Airbnb area',
        detail: 'Relax after overnight train journey',
        type: 'food',
      },
    ],
  },
  {
    date: '2 July 2026',
    label: 'Day 2',
    title: 'Event Day 1',
    emoji: '🎉',
    timeline: [
      {
        time: 'Morning',
        title: 'Breakfast',
        detail: 'Included in event / local breakfast',
        type: 'food',
      },
      {
        time: 'Morning',
        title: 'Travel to Venue',
        detail:
          'JP Nagar Metro → Lalbagh (3 stations, ₹30) · Venue 3 km from Lalbagh · Uber ₹200/person',
        type: 'travel',
      },
      {
        time: 'Full Day',
        title: 'Event',
        detail: 'Full day event with food & activities',
        type: 'event',
      },
      {
        time: 'Evening',
        title: 'Return to Airbnb',
        detail: 'Uber going + return · ₹200/person',
        type: 'cab',
      },
      {
        time: 'Night',
        title: 'Dinner at Airbnb',
        detail: 'Dinner back at stay',
        type: 'food',
      },
    ],
  },
  {
    date: '3 July 2026',
    label: 'Day 3',
    title: 'Event Day 2',
    emoji: '🎊',
    timeline: [
      {
        time: 'Morning',
        title: 'Breakfast',
        detail: 'Start the day at Airbnb',
        type: 'food',
      },
      {
        time: 'Morning',
        title: 'Same Route to Venue',
        detail: 'Airbnb → JP Nagar Metro → Lalbagh → Venue',
        type: 'travel',
      },
      {
        time: 'Full Day',
        title: 'Event Day 2',
        detail: 'Same venue · Full day with food',
        type: 'event',
      },
      {
        time: 'Evening',
        title: 'Return to Airbnb',
        detail: 'Uber going + return · ₹200/person',
        type: 'cab',
      },
      {
        time: 'Night',
        title: 'Dinner',
        detail: 'Dinner at Airbnb area',
        type: 'food',
      },
    ],
  },
  {
    date: '4 July 2026',
    label: 'Day 4',
    title: 'Checkout & Return',
    emoji: '🏠',
    timeline: [
      {
        time: 'Morning',
        title: 'Checkout Airbnb',
        detail: 'Pack up and leave the 2BHK',
        type: 'stay',
      },
      {
        time: '2:45 PM',
        title: 'Board Train 20704',
        detail: 'Yeshwantpur → Kacheguda · Vande Bharat CC · ₹1,600/person',
        type: 'train',
      },
      {
        time: '11:00 PM',
        title: 'Reach Hyderabad',
        detail: 'Back home!',
        type: 'arrival',
      },
    ],
  },
];

export const budget = {
  core: [
    { item: 'Outbound Train (12976, 3AC)', amount: 1100 },
    { item: 'Airbnb Stay (3 nights)', amount: 1400 },
    { item: 'Food (all days)', amount: 2000 },
    { item: 'Return Train (20704, CC Vande Bharat)', amount: 1600 },
  ],
  additional: [
    { item: 'Station → Airbnb Uber XL', amount: 200 },
    { item: 'Day 1 Uber (going + return)', amount: 200 },
    { item: 'Day 2 Uber (going + return)', amount: 200 },
  ],
  get coreTotal() {
    return this.core.reduce((sum, i) => sum + i.amount, 0);
  },
  get additionalTotal() {
    return this.additional.reduce((sum, i) => sum + i.amount, 0);
  },
  get grandTotal() {
    return this.coreTotal + this.additionalTotal;
  },
};

export const quickFacts = [
  { label: 'Group Size', value: '5 Friends' },
  { label: 'Duration', value: '4 Days / 3 Nights' },
  { label: 'Stay', value: '2BHK · JP Nagar' },
  { label: 'Max Budget', value: '₹7,000 / person' },
];
