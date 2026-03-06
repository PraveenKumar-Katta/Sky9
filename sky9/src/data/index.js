// ─── NAVIGATION ───────────────────────────────────────────────
export const NAV_ITEMS = [
  { label: "Programs", key: "programs" },
  { label: "Pricing",  key: "pricing"  },
  { label: "Schedule", key: "schedule" },
  { label: "Trainers", key: "trainers" },
  { label: "Location", key: "location" },
];

// ─── HERO STATS ───────────────────────────────────────────────
export const HERO_STATS = [
  { num: "500+", label: "Active Members"  },
  { num: "15+",  label: "Expert Trainers" },
  { num: "20+",  label: "Programs"        },
];

// ─── WHY US FEATURES ──────────────────────────────────────────
export const WHY_FEATURES = [
  {
    icon: "🏅",
    title: "Elite Equipment",
    desc:  "State-of-the-art machines, free weights, and functional training zones — everything you need to crush your goals.",
  },
  {
    icon: "👨‍🏫",
    title: "Certified Expert Trainers",
    desc:  "Our nationally certified coaches personalize every program to your body, goals, and schedule.",
  },
  {
    icon: "🔥",
    title: "Community That Pushes You",
    desc:  "Join a motivated squad of 500+ members in Siddipet's most energetic fitness community.",
  },
];

// ─── PROGRAMS ─────────────────────────────────────────────────
export const PROGRAMS = [
  { emoji: "🏋️", tag: "Strength",   name: "Weight Training",  desc: "Build raw power and sculpt muscle with progressive overload protocols and expert guidance." },
  { emoji: "🔥", tag: "Fat Burn",   name: "HIIT & Cardio",    desc: "High-intensity interval training designed to torch calories and boost your metabolism for hours." },
  { emoji: "🥊", tag: "Combat",     name: "Boxing & MMA",     desc: "Master striking techniques, agility, and conditioning through high-energy combat sessions." },
  { emoji: "🧘", tag: "Mind & Body",name: "Yoga & Mobility",  desc: "Restore flexibility, balance stress, and build a resilient mind-body connection." },
  { emoji: "🚴", tag: "Endurance",  name: "Cycling Zone",     desc: "Dedicated indoor cycling area with guided interval sessions and performance tracking." },
  { emoji: "⚡", tag: "Personal",   name: "1-on-1 Coaching",  desc: "Fully customized programs built around your unique body, goals, and lifestyle needs." },
];

// ─── PRICING PLANS ────────────────────────────────────────────
export const PLANS = [
  {
    tier: "Starter", name: "Basic", price: "799", popular: false, btn: "Get Started",
    features: [
      { text: "Full Gym Access",           on: true  },
      { text: "Locker Room & Showers",     on: true  },
      { text: "Free WiFi",                 on: true  },
      { text: "Group Classes",             on: false },
      { text: "Personal Trainer Sessions", on: false },
      { text: "Nutrition Consultation",    on: false },
    ],
  },
  {
    tier: "Most Value", name: "Pro", price: "1499", popular: true, btn: "Join Now",
    features: [
      { text: "Full Gym Access",           on: true  },
      { text: "Locker Room & Showers",     on: true  },
      { text: "Free WiFi",                 on: true  },
      { text: "Unlimited Group Classes",   on: true  },
      { text: "2 PT Sessions / month",     on: true  },
      { text: "Nutrition Consultation",    on: false },
    ],
  },
  {
    tier: "All Inclusive", name: "Elite", price: "2499", popular: false, btn: "Get Started",
    features: [
      { text: "Full Gym Access",           on: true },
      { text: "Locker Room & Showers",     on: true },
      { text: "Free WiFi",                 on: true },
      { text: "Unlimited Group Classes",   on: true },
      { text: "Unlimited PT Sessions",     on: true },
      { text: "Monthly Nutrition Plan",    on: true },
    ],
  },
];

// ─── CLASS SCHEDULE ───────────────────────────────────────────
export const SCHEDULE_DAYS   = ["TIME","MONDAY","TUESDAY","WEDNESDAY","THURSDAY","FRIDAY","SATURDAY","SUNDAY"];
export const SCHEDULE_KEYS   = ["time","mon","tue","wed","thu","fri","sat","sun"];
export const SCHEDULE_ROWS   = [
  { time:"5:00 AM", mon:"HIIT Blast",      tue:"Weight Training", wed:"HIIT Blast",       thu:"Weight Training", fri:"HIIT Blast",      sat:"HIIT Blast",   sun:"—"        },
  { time:"7:00 AM", mon:"Yoga",            tue:"Cardio Burn",     wed:"Yoga",             thu:"Cardio Burn",     fri:"Yoga",            sat:"Open Gym",     sun:"Yoga"     },
  { time:"9:00 AM", mon:"Boxing",          tue:"Zumba",           wed:"Boxing",           thu:"Cycling",         fri:"Boxing",          sat:"MMA Circuit",  sun:"Open Gym" },
  { time:"6:00 PM", mon:"Weight Training", tue:"HIIT Blast",      wed:"Strength & Cond.", thu:"HIIT Blast",      fri:"Weight Training", sat:"Boxing",       sun:"—"        },
  { time:"8:00 PM", mon:"Cycling",         tue:"Yoga",            wed:"Cardio Burn",      thu:"Yoga",            fri:"Cycling",         sat:"—",            sun:"—"        },
];
export const GOLD_CLASSES = ["hiit","boxing","mma","cardio burn"];

// ─── TRAINERS ─────────────────────────────────────────────────
export const TRAINERS = [
  {
    num: "01", emoji: "🏋️",
    name: "Rajesh Kumar", role: "Head Coach — Strength & Conditioning",
    bio:  "10+ years building champions. Nationally certified with expertise in powerlifting, functional movement, and body recomposition.",
  },
  {
    num: "02", emoji: "🥊",
    name: "Priya Sharma", role: "Combat Fitness Coach",
    bio:  "Former state-level boxer turned elite coach. Brings intensity, technique, and heart to every session.",
  },
  {
    num: "03", emoji: "🧘",
    name: "Ananya Reddy", role: "Yoga & Wellness Coach",
    bio:  "Certified in Hatha and Vinyasa yoga with a background in sports psychology and mindfulness coaching.",
  },
];

// ─── TESTIMONIALS ─────────────────────────────────────────────
export const REVIEWS = [
  {
    text:     "SKY9 completely transformed my body in 3 months. The trainers genuinely care about your progress. Best gym in Siddipet, period.",
    name:     "Vikram Kothari",
    since:    "Member since 2023",
    initials: "VK",
  },
  {
    text:     "I lost 12kg in 4 months with the HIIT and nutrition plan. The community keeps you motivated even on the days you don't feel like showing up.",
    name:     "Sunita Patel",
    since:    "Member since 2024",
    initials: "SP",
  },
  {
    text:     "As a complete beginner I was nervous, but the trainers made me feel so comfortable. The environment is incredibly supportive. Highly recommend!",
    name:     "Arjun Reddy",
    since:    "Member since 2024",
    initials: "AR",
  },
];

// ─── LOCATION ─────────────────────────────────────────────────
export const LOCATION = {
  address: "SKY9 Fitness Studio, Main Road,\nSiddipet, Telangana — 502103",
  phone:   "+91 98765 43210",
  hours: [
    { day: "Mon – Fri", time: "5 AM – 10 PM" },
    { day: "Saturday",  time: "6 AM – 9 PM"  },
    { day: "Sunday",    time: "6 AM – 1 PM"  },
  ],
  mapsUrl: "https://maps.google.com/?q=Siddipet+Telangana",
};

// ─── FOOTER LINKS ─────────────────────────────────────────────
export const FOOTER_COLUMNS = [
  {
    title: "Programs",
    links: [
      { label: "Weight Training",  key: "programs" },
      { label: "HIIT & Cardio",    key: "programs" },
      { label: "Boxing & MMA",     key: "programs" },
      { label: "Yoga & Mobility",  key: "programs" },
      { label: "1-on-1 Coaching",  key: "programs" },
    ],
  },
  {
    title: "Membership",
    links: [
      { label: "Basic Plan",  key: "pricing" },
      { label: "Pro Plan",    key: "pricing" },
      { label: "Elite Plan",  key: "pricing" },
      { label: "Free Trial",  key: "pricing" },
    ],
  },
  {
    title: "Studio",
    links: [
      { label: "About Us",  key: null       },
      { label: "Trainers",  key: "trainers" },
      { label: "Schedule",  key: "schedule" },
      { label: "Location",  key: "location" },
    ],
  },
];