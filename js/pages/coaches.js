/* ═══════════════════════════════════════════════════════════════════
   DATA — Extended coach roster (12 coaches, bodybuilding-heavy)
═══════════════════════════════════════════════════════════════════ */
const COACHES = [
  /* ── BODYBUILDING (5) ─────────────────────────────────────────── */
  {
    id: "coach-leo",
    name: "Leo Dantes",
    gender: "male",
    specialty: "Bodybuilding",
    category: "bodybuilding",
    image: "../../assets/images/leo-dantes.png",
    emoji: "💪",
    tagline: "IFBB Pro. Symmetry-first coaching.",
    bio: "Former IFBB Pro competitor with 14 years of competitive bodybuilding. Specializes in muscle hypertrophy, aesthetic symmetry, and contest prep. Science-driven programming with meticulous attention to progressive overload and diet periodization.",
    experience: 14,
    rating: 4.9,
    reviewCount: 218,
    sessions: 1340,
    price: 95,
    sessionDuration: 60,
    online: true,
    home: false,
    onsite: true,
    level: ["intermediate", "advanced"],
    sessionType: ["1on1"],
    tags: ["Hypertrophy", "Contest Prep", "Nutrition", "Physique"],
    certifications: [
      "ISSA Bodybuilding Specialist",
      "Precision Nutrition L1",
      "NASM-CPT",
    ],
    languages: ["English", "Spanish"],
    nutrition: true,
    followUp: true,
    transformation: true,
    nextSlot: "Tomorrow, 9 AM",
    availability: "available",
    philosophy:
      "I believe every body is capable of extraordinary change. The secret is progressive overload, disciplined nutrition, and smart recovery — not more hours in the gym.",
    packages: [
      { sessions: 1, price: 95, label: "Single" },
      { sessions: 8, price: 680, label: "Popular", save: "Save $80" },
      {
        sessions: 20,
        price: 1600,
        label: "Transformation",
        save: "Save $300",
      },
    ],
    reviews: [
      {
        name: "James K.",
        stars: 5,
        date: "Mar 2026",
        text: "Leo completely transformed my physique in 16 weeks. Best investment I've made in myself.",
      },
      {
        name: "Priya M.",
        stars: 5,
        date: "Feb 2026",
        text: "The nutrition guidance alone was worth every penny. He explains the science, not just gives orders.",
      },
    ],
    slots: [
      "Mon 8AM",
      "Mon 11AM",
      "Tue 9AM",
      "Wed 7AM",
      "Thu 10AM",
      "Fri 8AM",
      "Sat 9AM",
      "Sat 2PM",
      "Sun 10AM",
    ],
  },
  {
    id: "coach-nina",
    name: "Nina Cruz",
    gender: "female",
    specialty: "Women's Physique",
    category: "bodybuilding",
    image: "../../assets/images/nina-cruz.png",
    emoji: "✨",
    tagline: "Women's physique & wellness. Science-first.",
    bio: "Specializing in women's physique transformation, bikini and figure competition prep. Nina combines advanced training methods with sustainable nutrition, hormone-aware programming, and strong mental coaching to help women feel powerful in their bodies.",
    experience: 9,
    rating: 4.95,
    reviewCount: 189,
    sessions: 920,
    price: 85,
    sessionDuration: 60,
    online: true,
    home: true,
    onsite: true,
    level: ["beginner", "intermediate", "advanced"],
    sessionType: ["1on1"],
    tags: ["Women's Physique", "Bikini Prep", "Wellness", "Hormone Health"],
    certifications: [
      "ACE CPT",
      "ISSN Sports Nutrition",
      "Pre/Post Natal Fitness",
    ],
    languages: ["English", "French"],
    nutrition: true,
    followUp: true,
    transformation: true,
    nextSlot: "Today, 3 PM",
    availability: "available",
    philosophy:
      "Fitness is not about punishment — it is about building strength you carry everywhere. Every session should leave you feeling more capable, not broken.",
    packages: [
      { sessions: 1, price: 85, label: "Single" },
      { sessions: 8, price: 600, label: "Popular", save: "Save $80" },
      {
        sessions: 20,
        price: 1400,
        label: "Transformation",
        save: "Save $300",
      },
    ],
    reviews: [
      {
        name: "Layla S.",
        stars: 5,
        date: "Mar 2026",
        text: "Nina understood my body goals better than I did. My confidence is at an all-time high.",
      },
      {
        name: "Chloe T.",
        stars: 5,
        date: "Jan 2026",
        text: "Online coaching with Nina is incredibly effective. Detailed check-ins every single week.",
      },
    ],
    slots: [
      "Today 3PM",
      "Mon 10AM",
      "Tue 8AM",
      "Wed 6PM",
      "Thu 9AM",
      "Fri 11AM",
      "Sat 10AM",
    ],
  },
  {
    id: "coach-marcus",
    name: "Marcus Reid",
    gender: "male",
    specialty: "Mass & Strength",
    category: "bodybuilding",
    image: "../../assets/images/marcus-reid.png",
    emoji: "💥",
    tagline: "Extreme mass building. No shortcuts.",
    bio: 'Marcus has helped over 300 clients gain serious lean muscle mass with his signature "Progressive Overload Protocol". Former powerlifter who transitioned to bodybuilding, combining raw strength with aesthetic muscle development.',
    experience: 11,
    rating: 4.8,
    reviewCount: 143,
    sessions: 1100,
    price: 80,
    sessionDuration: 75,
    online: true,
    home: false,
    onsite: true,
    level: ["intermediate", "advanced"],
    sessionType: ["1on1", "group"],
    tags: ["Mass Building", "Strength", "Powerbuilding", "Bulking"],
    certifications: ["NSCA-CSCS", "Poliquin BioSignature", "IPF Coach"],
    languages: ["English"],
    nutrition: true,
    followUp: true,
    transformation: true,
    nextSlot: "Wed, 7 AM",
    availability: "available",
    philosophy:
      "Strength is the foundation of everything. Build it right and the aesthetics follow naturally.",
    packages: [
      { sessions: 1, price: 80, label: "Single" },
      { sessions: 8, price: 560, label: "Popular", save: "Save $80" },
      { sessions: 20, price: 1300, label: "Elite", save: "Save $300" },
    ],
    reviews: [
      {
        name: "Tyler B.",
        stars: 5,
        date: "Feb 2026",
        text: "Gained 8kg of lean mass in 4 months. Marcus knows his stuff cold.",
      },
      {
        name: "Sam W.",
        stars: 4,
        date: "Jan 2026",
        text: "Intense but extremely effective. Not for the faint-hearted.",
      },
    ],
    slots: ["Wed 7AM", "Thu 6AM", "Fri 7AM", "Sat 8AM", "Mon 9AM", "Tue 7AM"],
  },
  {
    id: "coach-rachel",
    name: "Rachel Storm",
    gender: "female",
    specialty: "Body Recomposition",
    category: "bodybuilding",
    image: "../../assets/images/rachel-storm.png",
    emoji: "⚡",
    tagline: "Lose fat, gain muscle simultaneously.",
    bio: "Rachel specializes in body recomposition — the science of losing fat and building muscle at the same time. Her data-driven approach using DEXA scans, caloric cycling, and periodized training has produced remarkable transformations.",
    experience: 7,
    rating: 4.85,
    reviewCount: 97,
    sessions: 560,
    price: 75,
    sessionDuration: 60,
    online: true,
    home: true,
    onsite: false,
    level: ["beginner", "intermediate"],
    sessionType: ["1on1"],
    tags: ["Body Recomp", "Fat Loss", "Muscle Gain", "Nutrition"],
    certifications: ["NASM-CPT", "ISSN CISSN", "Menno Henselmans PT"],
    languages: ["English", "Dutch"],
    nutrition: true,
    followUp: true,
    transformation: true,
    nextSlot: "Thu, 11 AM",
    availability: "available",
    philosophy:
      "The scale is just one data point. True transformation is measured in body composition, energy levels, and how you feel walking into a room.",
    packages: [
      { sessions: 1, price: 75, label: "Single" },
      { sessions: 8, price: 520, label: "Popular", save: "Save $80" },
      {
        sessions: 20,
        price: 1200,
        label: "Full Recomp",
        save: "Save $300",
      },
    ],
    reviews: [
      {
        name: "Anna L.",
        stars: 5,
        date: "Mar 2026",
        text: "Lost 12kg of fat and visibly gained muscle. Impossible? Rachel made it real.",
      },
      {
        name: "David K.",
        stars: 5,
        date: "Feb 2026",
        text: "Her online coaching is as good as in-person. Detailed, responsive, results-driven.",
      },
    ],
    slots: [
      "Thu 11AM",
      "Fri 10AM",
      "Mon 12PM",
      "Tue 11AM",
      "Wed 10AM",
      "Sat 11AM",
    ],
  },
  {
    id: "coach-omar",
    name: "Omar Nasser",
    gender: "male",
    specialty: "Natural Bodybuilding",
    category: "bodybuilding",
    image: "../../assets/images/omar-nasser.png",
    emoji: "🌿",
    tagline: "Drug-free transformation. Maximum potential.",
    bio: "INBA Natural Pro and advocate for clean competitive bodybuilding. Omar proves that extraordinary physiques are achievable without performance-enhancing drugs. His coaching philosophy focuses on maximizing natural testosterone, sleep quality, and long-term muscle development.",
    experience: 8,
    rating: 4.88,
    reviewCount: 112,
    sessions: 680,
    price: 70,
    sessionDuration: 60,
    online: true,
    home: false,
    onsite: true,
    level: ["beginner", "intermediate", "advanced"],
    sessionType: ["1on1", "group"],
    tags: ["Natural BB", "Drug-Free", "Testosterone Optimization", "Lifestyle"],
    certifications: [
      "INBA Certified Coach",
      "Precision Nutrition L2",
      "NASM-CPT",
    ],
    languages: ["English", "Arabic"],
    nutrition: true,
    followUp: true,
    transformation: true,
    nextSlot: "Mon, 6 AM",
    availability: "available",
    philosophy:
      "Natural bodybuilding is not a limitation — it is a superpower. You build something real, sustainable, and yours forever.",
    packages: [
      { sessions: 1, price: 70, label: "Single" },
      { sessions: 8, price: 490, label: "Popular", save: "Save $70" },
      {
        sessions: 20,
        price: 1100,
        label: "Natural Elite",
        save: "Save $300",
      },
    ],
    reviews: [
      {
        name: "Khalid R.",
        stars: 5,
        date: "Mar 2026",
        text: "Omar is the real deal. Completely natural approach with phenomenal results.",
      },
      {
        name: "Ben O.",
        stars: 5,
        date: "Jan 2026",
        text: "My testosterone levels, energy, and physique improved together. Holistic coaching at its best.",
      },
    ],
    slots: ["Mon 6AM", "Tue 6AM", "Wed 8AM", "Thu 7AM", "Fri 6AM"],
  },

  /* ── WEIGHTLIFTING (2) ────────────────────────────────────────── */
  {
    id: "coach-alex",
    name: "Alex Stone",
    gender: "male",
    specialty: "Olympic Weightlifting",
    category: "weightlifting",
    image: "../../assets/images/alex-stone.png",
    emoji: "🏋️",
    tagline: "Former national champion. Form is everything.",
    bio: "Former national Olympic weightlifting champion with 12 years of coaching experience. Specializes in the snatch, clean & jerk, and explosive strength development. His technical precision coaching has produced multiple national-level athletes.",
    experience: 12,
    rating: 4.92,
    reviewCount: 176,
    sessions: 1050,
    price: 90,
    sessionDuration: 75,
    online: false,
    home: false,
    onsite: true,
    level: ["beginner", "intermediate", "advanced"],
    sessionType: ["1on1"],
    tags: ["Olympic Lifts", "Snatch", "Clean & Jerk", "Explosive Power"],
    certifications: ["USAW Level 2", "NSCA-CSCS", "CrossFit Level 2"],
    languages: ["English", "German"],
    nutrition: false,
    followUp: true,
    transformation: true,
    nextSlot: "Tue, 8 AM",
    availability: "available",
    philosophy:
      "The snatch is the most technically beautiful movement in all of sport. My goal is to give every athlete that feeling of a perfect rep.",
    packages: [
      { sessions: 1, price: 90, label: "Single" },
      { sessions: 8, price: 640, label: "Popular", save: "Save $80" },
      { sessions: 20, price: 1500, label: "Champion", save: "Save $300" },
    ],
    reviews: [
      {
        name: "Michael P.",
        stars: 5,
        date: "Mar 2026",
        text: "My snatch went from 60kg to 95kg in 6 months. Alex is a technical genius.",
      },
      {
        name: "Emma R.",
        stars: 5,
        date: "Feb 2026",
        text: "Never thought I could Olympic lift. Alex makes it accessible and addictive.",
      },
    ],
    slots: ["Tue 8AM", "Wed 9AM", "Thu 8AM", "Fri 9AM", "Sat 8AM", "Sun 9AM"],
  },
  {
    id: "coach-sara",
    name: "Sara Vega",
    gender: "female",
    specialty: "Barbell Training",
    category: "weightlifting",
    image: "../../assets/images/sara-vega.png",
    emoji: "💪",
    tagline: "Beginner-friendly. Form-obsessed.",
    bio: "Passionate about making barbell training accessible to everyone. Sara built her reputation by taking complete beginners to confident intermediate lifters with her patient, technique-focused methodology. Specializes in squat, bench, deadlift mechanics.",
    experience: 6,
    rating: 4.87,
    reviewCount: 134,
    sessions: 720,
    price: 65,
    sessionDuration: 60,
    online: true,
    home: true,
    onsite: true,
    level: ["beginner", "intermediate"],
    sessionType: ["1on1", "group"],
    tags: ["Powerlifting", "Form Correction", "Beginner Friendly", "Mobility"],
    certifications: ["NSCA-CPT", "StrongFirst SFB", "USAW Level 1"],
    languages: ["English", "Spanish"],
    nutrition: false,
    followUp: true,
    transformation: false,
    nextSlot: "Today, 5 PM",
    availability: "available",
    philosophy:
      "Nobody should be afraid of a barbell. My job is to make the weight room the place you look forward to most.",
    packages: [
      { sessions: 1, price: 65, label: "Single" },
      { sessions: 8, price: 450, label: "Popular", save: "Save $70" },
      {
        sessions: 20,
        price: 1050,
        label: "Foundation",
        save: "Save $250",
      },
    ],
    reviews: [
      {
        name: "Grace L.",
        stars: 5,
        date: "Mar 2026",
        text: "Sara took me from terrified of the weight room to squatting 80kg. She is incredible.",
      },
      {
        name: "Tom H.",
        stars: 5,
        date: "Feb 2026",
        text: "Best beginner coach in the city. Incredibly patient and knowledgeable.",
      },
    ],
    slots: [
      "Today 5PM",
      "Mon 4PM",
      "Tue 5PM",
      "Wed 4PM",
      "Thu 5PM",
      "Fri 4PM",
      "Sat 11AM",
    ],
  },

  /* ── MARTIAL ARTS (2) ─────────────────────────────────────────── */
  {
    id: "coach-marc",
    name: "Marc Liang",
    gender: "male",
    specialty: "MMA & Combat Conditioning",
    category: "martial-arts",
    image: "../../assets/images/marc-liang.png",
    emoji: "🥊",
    tagline: "Pro fighter. Full-spectrum combat athlete.",
    bio: "Active professional MMA fighter and certified S&C coach. Marc trains everything from amateur fighters to executives who want to get fight-ready. His conditioning methods are drawn directly from elite fight camp preparation — brutal, efficient, and transformative.",
    experience: 10,
    rating: 4.88,
    reviewCount: 156,
    sessions: 890,
    price: 85,
    sessionDuration: 60,
    online: false,
    home: false,
    onsite: true,
    level: ["beginner", "intermediate", "advanced"],
    sessionType: ["1on1", "group"],
    tags: ["MMA", "Striking", "Grappling", "BJJ", "Fight Conditioning"],
    certifications: ["CSCS", "BJJ Brown Belt", "Muay Thai Kru Level 2"],
    languages: ["English", "Mandarin"],
    nutrition: true,
    followUp: true,
    transformation: true,
    nextSlot: "Wed, 6 PM",
    availability: "soon",
    philosophy:
      "You do not need to fight professionally to train like a fighter. Combat training builds the most complete athlete — mental and physical.",
    packages: [
      { sessions: 1, price: 85, label: "Single" },
      { sessions: 8, price: 600, label: "Popular", save: "Save $80" },
      {
        sessions: 20,
        price: 1500,
        label: "Fight Camp",
        save: "Save $200",
      },
    ],
    reviews: [
      {
        name: "Jordan F.",
        stars: 5,
        date: "Mar 2026",
        text: "Marc transformed my conditioning in 8 weeks. I felt like a completely different athlete.",
      },
      {
        name: "Kenji W.",
        stars: 5,
        date: "Feb 2026",
        text: "The MMA fundamentals Marc teaches are world-class. Incredibly knowledgeable coach.",
      },
    ],
    slots: ["Wed 6PM", "Thu 7PM", "Fri 6PM", "Sat 10AM", "Sun 11AM"],
  },
  {
    id: "coach-erin",
    name: "Erin Blaze",
    gender: "female",
    specialty: "Kickboxing & Muay Thai",
    category: "martial-arts",
    image: "../../assets/images/erin-blaze.png",
    emoji: "🦵",
    tagline: "Champion fighter. Makes striking addictive.",
    bio: "WKF World Kickboxing champion with 14 professional fights. Erin is known for making Muay Thai and kickboxing genuinely fun while building real technical skill. Perfect for beginners wanting to learn to fight and athletes looking to add striking to their arsenal.",
    experience: 8,
    rating: 4.91,
    reviewCount: 122,
    sessions: 740,
    price: 75,
    sessionDuration: 60,
    online: false,
    home: true,
    onsite: true,
    level: ["beginner", "intermediate", "advanced"],
    sessionType: ["1on1", "group"],
    tags: [
      "Muay Thai",
      "Kickboxing",
      "Self-Defence",
      "Pad Work",
      "Conditioning",
    ],
    certifications: [
      "WKF Certified Coach",
      "First Aid/CPR",
      "Sports Psychology Cert",
    ],
    languages: ["English", "Thai"],
    nutrition: false,
    followUp: true,
    transformation: false,
    nextSlot: "Fri, 4 PM",
    availability: "available",
    philosophy:
      "Striking is 80% footwork and 20% technique. Master the basics until they become unconscious, then nothing can stop you.",
    packages: [
      { sessions: 1, price: 75, label: "Single" },
      { sessions: 8, price: 520, label: "Popular", save: "Save $80" },
      {
        sessions: 20,
        price: 1250,
        label: "Champion Path",
        save: "Save $250",
      },
    ],
    reviews: [
      {
        name: "Maria C.",
        stars: 5,
        date: "Mar 2026",
        text: "Erin makes every session feel like a highlight. I have never enjoyed training this much.",
      },
      {
        name: "Ryan M.",
        stars: 5,
        date: "Jan 2026",
        text: "My striking improved dramatically in just one month. Her technical eye is elite.",
      },
    ],
    slots: ["Fri 4PM", "Sat 2PM", "Sun 12PM", "Mon 5PM", "Tue 6PM"],
  },

  /* ── GYMNASTICS / MOBILITY (2) ────────────────────────────────── */
  {
    id: "coach-julia",
    name: "Julia Park",
    gender: "female",
    specialty: "Gymnastics & Flexibility",
    category: "gymnastics",
    image: "../../assets/images/julia-park.png",
    emoji: "🤸",
    tagline: "Former gymnast. Movement is art.",
    bio: "Former national-level gymnast turned movement coach. Julia bridges the gap between gymnastics fundamentals and modern functional fitness. Her clients achieve handstands, splits, and ring skills they never thought possible — regardless of starting point.",
    experience: 9,
    rating: 4.93,
    reviewCount: 108,
    sessions: 640,
    price: 80,
    sessionDuration: 60,
    online: true,
    home: false,
    onsite: true,
    level: ["beginner", "intermediate", "advanced"],
    sessionType: ["1on1"],
    tags: [
      "Handstands",
      "Flexibility",
      "Splits",
      "Calisthenics",
      "Ring Skills",
    ],
    certifications: [
      "USA Gymnastics Safety",
      "FIG Level 3",
      "NASM Corrective Exercise",
    ],
    languages: ["English", "Korean"],
    nutrition: false,
    followUp: true,
    transformation: false,
    nextSlot: "Mon, 10 AM",
    availability: "available",
    philosophy:
      "Every human body is designed to move beautifully. Gymnastics coaching is about removing the barriers — tension, fear, imbalance — that stop you.",
    packages: [
      { sessions: 1, price: 80, label: "Single" },
      { sessions: 8, price: 560, label: "Popular", save: "Save $80" },
      {
        sessions: 20,
        price: 1350,
        label: "Movement Mastery",
        save: "Save $250",
      },
    ],
    reviews: [
      {
        name: "Sophie A.",
        stars: 5,
        date: "Mar 2026",
        text: "I got my first handstand hold at 34 years old. Julia believed before I did.",
      },
      {
        name: "Chris N.",
        stars: 5,
        date: "Feb 2026",
        text: "Flexibility gains are unreal. I can now do full splits after 4 months.",
      },
    ],
    slots: [
      "Mon 10AM",
      "Tue 11AM",
      "Wed 10AM",
      "Thu 11AM",
      "Fri 12PM",
      "Sat 9AM",
    ],
  },
  {
    id: "coach-kai",
    name: "Kai Solano",
    gender: "male",
    specialty: "Mobility & Movement",
    category: "gymnastics",
    image: "../../assets/images/kai-solano.png",
    emoji: "🧘",
    tagline: "Pain-free movement for athletes of all ages.",
    bio: "Movement specialist focusing on mobility restoration, injury prevention, and body control. Kai works with desk workers, aging athletes, and post-injury clients to rebuild pain-free, functional movement patterns. His FRC and mobility protocols are deeply evidence-based.",
    experience: 7,
    rating: 4.85,
    reviewCount: 88,
    sessions: 510,
    price: 70,
    sessionDuration: 60,
    online: true,
    home: true,
    onsite: true,
    level: ["beginner", "intermediate"],
    sessionType: ["1on1"],
    tags: [
      "FRC Mobility",
      "Injury Prevention",
      "Body Control",
      "Yoga Flow",
      "Breathing",
    ],
    certifications: [
      "FRC Mobility Specialist",
      "Kinstretch Certified",
      "YogaAlliance RYT-200",
    ],
    languages: ["English", "Portuguese"],
    nutrition: false,
    followUp: true,
    transformation: false,
    nextSlot: "Thu, 9 AM",
    availability: "available",
    philosophy:
      "You cannot out-train a body that cannot move freely. Mobility is the foundation that makes every other training better and safer.",
    packages: [
      { sessions: 1, price: 70, label: "Single" },
      { sessions: 8, price: 490, label: "Popular", save: "Save $70" },
      {
        sessions: 20,
        price: 1100,
        label: "Movement Reset",
        save: "Save $300",
      },
    ],
    reviews: [
      {
        name: "Helen W.",
        stars: 5,
        date: "Mar 2026",
        text: "Chronic back pain gone after 6 weeks. Kai is a miracle worker with movement.",
      },
      {
        name: "Pete D.",
        stars: 5,
        date: "Feb 2026",
        text: "Online mobility sessions are excellent. Clear instructions, fast improvement.",
      },
    ],
    slots: ["Thu 9AM", "Fri 10AM", "Mon 8AM", "Tue 9AM", "Wed 8AM", "Sat 10AM"],
  },

  /* ── CARDIO / HIIT (1) ────────────────────────────────────────── */
  {
    id: "coach-drew",
    name: "Drew Ashford",
    gender: "male",
    specialty: "Cardio & HIIT",
    category: "cardio",
    image: "../../assets/images/drew-ashford.png",
    emoji: "🏃",
    tagline: "Marathon runner. Fat loss machine.",
    bio: "Boston Marathon finisher and HIIT conditioning specialist. Drew has helped over 200 clients achieve dramatic fat loss and cardiovascular transformation through science-backed interval training and zone 2 cardio programming. High energy, data-driven, results-guaranteed.",
    experience: 8,
    rating: 4.82,
    reviewCount: 99,
    sessions: 610,
    price: 60,
    sessionDuration: 45,
    online: true,
    home: false,
    onsite: true,
    level: ["beginner", "intermediate"],
    sessionType: ["1on1", "group"],
    tags: ["HIIT", "Zone 2 Cardio", "Fat Loss", "Endurance", "VO2 Max"],
    certifications: ["ACSM CPT", "Running Coach Cert", "USATF Level 1"],
    languages: ["English"],
    nutrition: true,
    followUp: false,
    transformation: true,
    nextSlot: "Sat, 7 AM",
    availability: "busy",
    philosophy:
      "Cardio is not punishment — it is medicine. The right dose at the right intensity creates the most powerful body transformation available.",
    packages: [
      { sessions: 1, price: 60, label: "Single" },
      { sessions: 8, price: 420, label: "Popular", save: "Save $60" },
      {
        sessions: 20,
        price: 1000,
        label: "Endurance Build",
        save: "Save $200",
      },
    ],
    reviews: [
      {
        name: "Lisa P.",
        stars: 5,
        date: "Feb 2026",
        text: "Lost 15kg in 12 weeks with Drew's HIIT programming. Genuinely life-changing.",
      },
      {
        name: "Carlos M.",
        stars: 4,
        date: "Jan 2026",
        text: "Drew brings crazy energy every session. The conditioning improvements speak for themselves.",
      },
    ],
    slots: ["Sat 7AM", "Sun 8AM", "Mon 7AM"],
  },
];

/* ═══════════════════════════════════════════════════════════════════
   FILTER STATE
═══════════════════════════════════════════════════════════════════ */
const state = {
  spec: "all",
  service: null, // 'online' | 'home' | 'onsite'
  level: "all",
  session: "all",
  gender: "all",
  price: "all",
};

/* ═══════════════════════════════════════════════════════════════════
   RENDER HELPERS
═══════════════════════════════════════════════════════════════════ */
function stars(n) {
  const full = Math.floor(n);
  const half = n % 1 >= 0.5;
  let s = "";
  for (let i = 0; i < full; i++) s += "★";
  if (half) s += "½";
  while (s.replace("½", "x").length < 5) s += "☆";
  return s;
}

function servicesBadges(c) {
  let b = "";
  if (c.online) b += `<span class="service-badge online">🌐 Online</span>`;
  if (c.home) b += `<span class="service-badge home">🏠 Home</span>`;
  if (c.onsite) b += `<span class="service-badge onsite">🏟️ On-site</span>`;
  return b;
}

function availDot(c) {
  const cls =
    c.availability === "available"
      ? "available"
      : c.availability === "soon"
        ? "soon"
        : "busy";
  return `<div class="avail-dot ${cls}" title="${cls === "available" ? "Available now" : cls === "soon" ? "Available soon" : "Fully booked this week"}"></div>`;
}

function rankBadge(c) {
  if (c.rating >= 4.9 && c.sessions > 900)
    return `<div class="rank-badge top">⭐ Top Coach</div>`;
  if (c.experience >= 10) return `<div class="rank-badge">Veteran</div>`;
  return "";
}

/* ═══════════════════════════════════════════════════════════════════
   BUILD CARD HTML
═══════════════════════════════════════════════════════════════════ */
function buildCard(c, idx) {
  const delay = (idx % 8) * 0.06;
  return `
  <article class="coach-card" data-id="${c.id}" style="animation-delay:${delay}s" role="button" tabindex="0" aria-label="View profile of ${c.name}">
    <div class="card-photo">
      <div class="card-photo-inner"><img src="${c.image}" alt="${c.name}" /></div>
      ${rankBadge(c)}
      ${availDot(c)}
      <div class="card-badges">${servicesBadges(c)}</div>
    </div>

    <div class="card-body">
      <div class="card-header">
        <div>
          <div class="card-name">${c.name}</div>
          <div class="card-specialty">${c.specialty}</div>
        </div>
        <div class="card-rating">
          <span class="stars">${stars(c.rating)}</span>
          <span class="rating-val">${c.rating}</span>
          <span class="rating-cnt">(${c.reviewCount})</span>
        </div>
      </div>

      <p class="card-bio">${c.tagline}</p>

      <div class="card-stats">
        <div class="card-stat">
          <span class="card-stat-val">${c.experience}y</span>
          <span class="card-stat-lbl">Experience</span>
        </div>
        <div class="card-stat">
          <span class="card-stat-val">${c.sessions.toLocaleString()}</span>
          <span class="card-stat-lbl">Sessions</span>
        </div>
        <div class="card-stat">
          <span class="card-stat-val">${c.sessionDuration}m</span>
          <span class="card-stat-lbl">Duration</span>
        </div>
      </div>

      <div class="card-tags">
        ${c.tags
          .slice(0, 3)
          .map((t) => `<span class="card-tag">${t}</span>`)
          .join("")}
      </div>

      <div class="card-langs">
        <span class="lang-label">Speaks:</span>
        ${c.languages.map((l) => `<span class="lang-chip">${l}</span>`).join("")}
      </div>

      <div class="card-footer">
        <div class="card-price-wrap">
          <div class="card-price">$${c.price}<span> / session</span></div>
          <div class="card-next">Next: <strong>${c.nextSlot}</strong></div>
        </div>
        <div class="card-actions">
          <button class="btn-profile" title="View full profile" data-id="${c.id}" aria-label="View profile">👤</button>
          <button class="btn-book" data-id="${c.id}" aria-label="Book session with ${c.name}">Book Session</button>
        </div>
      </div>
    </div>
  </article>`;
}

/* ═══════════════════════════════════════════════════════════════════
   FILTERING LOGIC
═══════════════════════════════════════════════════════════════════ */
function applyFilters() {
  return COACHES.filter((c) => {
    if (state.spec !== "all" && c.category !== state.spec) return false;
    if (state.service === "online" && !c.online) return false;
    if (state.service === "home" && !c.home) return false;
    if (state.service === "onsite" && !c.onsite) return false;
    if (state.level !== "all" && !c.level.includes(state.level)) return false;
    if (state.session !== "all" && !c.sessionType.includes(state.session))
      return false;
    if (state.gender !== "all" && c.gender !== state.gender) return false;
    if (state.price !== "all") {
      if (state.price === "budget" && c.price > 50) return false;
      if (state.price === "mid" && (c.price <= 50 || c.price > 90))
        return false;
      if (state.price === "premium" && c.price <= 90) return false;
    }
    return true;
  });
}

function renderGrid() {
  const grid = document.getElementById("coachesGrid");
  const filtered = applyFilters();
  const countEl = document.getElementById("resultsCount");

  countEl.innerHTML = `Showing <strong>${filtered.length}</strong> coach${filtered.length !== 1 ? "es" : ""}`;

  if (!filtered.length) {
    grid.innerHTML = `
      <div class="no-results">
        <div style="font-size:3rem">🔍</div>
        <p>No coaches match your current filters.</p>
      </div>`;
    return;
  }
  grid.innerHTML = filtered.map((c, i) => buildCard(c, i)).join("");

  // Attach card click events
  grid.querySelectorAll(".coach-card").forEach((card) => {
    const id = card.dataset.id;
    card.addEventListener("click", (e) => {
      if (e.target.closest(".btn-book")) {
        bookSession(id);
        return;
      }
      openModal(id);
    });
    card.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        openModal(id);
      }
    });
  });
  grid.querySelectorAll(".btn-book").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      bookSession(btn.dataset.id);
    });
  });
}

/* ═══════════════════════════════════════════════════════════════════
   MODAL
═══════════════════════════════════════════════════════════════════ */
function buildModal(c) {
  const extraServices = [
    c.nutrition
      ? {
          icon: "🥗",
          name: "Nutrition Guidance",
          desc: "Custom meal plans and macro targets aligned with your training.",
        }
      : null,
    c.followUp
      ? {
          icon: "📱",
          name: "Weekly Check-ins",
          desc: "Ongoing support via messages with progress tracking every 7 days.",
        }
      : null,
    c.transformation
      ? {
          icon: "📸",
          name: "Transformation Tracking",
          desc: "Before/after progress photos and body composition analysis.",
        }
      : null,
    c.online
      ? {
          icon: "🌐",
          name: "Online Coaching Available",
          desc: "Full remote coaching via video call — same quality, any location.",
        }
      : null,
    c.home
      ? {
          icon: "🏠",
          name: "Home Visits Available",
          desc: "Coach travels to you — no gym required for your sessions.",
        }
      : null,
  ].filter(Boolean);

  return `
  <!-- Modal hero -->
  <div class="modal-hero">
    <div class="modal-hero-bg"></div>
    <div class="modal-hero-emoji">${c.emoji}</div>
    <div class="modal-hero-content">
      <div class="modal-avatar"><img src="${c.image}" alt="${c.name}" /></div>

      <div class="modal-info">
        <div class="modal-name" id="modalName">${c.name}</div>
        <div class="modal-specialty">${c.specialty}</div>
        <div class="modal-meta">
          <span class="modal-meta-item">
            <svg viewBox="0 0 16 16" fill="currentColor"><circle cx="8" cy="8" r="7" fill="none" stroke="currentColor" stroke-width="1.5"/><path d="M8 5v3.5l2 2" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>
            ${c.experience} years experience
          </span>
          <span class="modal-meta-item">
            <svg viewBox="0 0 16 16" fill="currentColor"><path d="M8 1l1.8 3.6L14 5.3l-3 2.9.7 4.1L8 10.3l-3.7 1.9.7-4.1-3-2.9 4.2-.7z" fill="none" stroke="currentColor" stroke-width="1.5"/></svg>
            ${c.rating} (${c.reviewCount} reviews)
          </span>
          <span class="modal-meta-item">
            <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="2" y="3" width="12" height="11" rx="1.5"/><path d="M5 3V1M11 3V1M2 7h12"/></svg>
            ${c.sessions.toLocaleString()} sessions completed
          </span>
          <span class="modal-meta-item">
            <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="8" cy="8" r="6.5"/><path d="M8 4v4l3 3" stroke-linecap="round"/></svg>
            ${c.sessionDuration} min sessions
          </span>
        </div>
      </div>
    </div>
    <button class="modal-close" id="modalClose" aria-label="Close">✕</button>
  </div>

  <!-- Modal body grid -->
  <div class="modal-body">
    <!-- LEFT COL -->
    <div>
      <div class="modal-section">
        <div class="modal-section-title">About</div>
        <p class="modal-about">${c.bio}</p>
      </div>

      <div class="modal-section">
        <div class="modal-section-title">Philosophy</div>
        <p class="modal-about" style="font-style:italic;color:var(--accent)">"${c.philosophy}"</p>
      </div>

      <div class="modal-section">
        <div class="modal-section-title">Specialties</div>
        <div class="spec-pills">${c.tags.map((t) => `<span class="spec-pill">${t}</span>`).join("")}</div>
      </div>

      <div class="modal-section">
        <div class="modal-section-title">Certifications</div>
        <div class="cert-list">
          ${c.certifications.map((cert) => `<div class="cert-item">${cert}</div>`).join("")}
        </div>
      </div>

      <div class="modal-section">
        <div class="modal-section-title">What's Included</div>
        <div class="session-options">
          ${extraServices
            .map(
              (s) => `
          <div class="session-option">
            <div class="session-option-icon">${s.icon}</div>
            <div>
              <div class="session-option-name">${s.name}</div>
              <div class="session-option-desc">${s.desc}</div>
            </div>
          </div>`,
            )
            .join("")}
        </div>
      </div>
    </div>

    <!-- RIGHT COL -->
    <div>
      <div class="modal-section">
        <div class="modal-section-title">Session Packages</div>
        <div class="packages-grid">
          ${c.packages
            .map(
              (pkg, i) => `
          <div class="package-card ${i === 1 ? "popular" : ""}">
            <div class="pkg-label ${i === 1 ? "pop" : ""}">${i === 1 ? "★ Most Popular" : pkg.label}</div>
            <div class="pkg-sessions">${pkg.sessions}</div>
            <div class="pkg-unit">session${pkg.sessions > 1 ? "s" : ""}</div>
            <div class="pkg-price">$${pkg.price}</div>
            ${pkg.save ? `<div class="pkg-save">${pkg.save}</div>` : ""}
          </div>`,
            )
            .join("")}
        </div>
      </div>

      <div class="modal-section">
        <div class="modal-section-title">Available Slots</div>
        <div class="slots-grid">
          ${c.slots
            .map(
              (s, i) => `
          <div class="slot ${i === 2 || i === 5 ? "taken" : ""}" data-slot="${s}">
            <div class="slot-day">${s.split(" ")[0]}</div>
            ${s.split(" ").slice(1).join(" ")}
          </div>`,
            )
            .join("")}
        </div>
      </div>

      <div class="modal-section">
        <div class="modal-section-title">Client Reviews</div>
        <div class="reviews-list">
          ${c.reviews
            .map(
              (r) => `
          <div class="review-item">
            <div class="review-top">
              <span class="review-name">${r.name}</span>
              <span class="review-date">${r.date}</span>
            </div>
            <div class="review-stars">${"★".repeat(r.stars)}</div>
            <p class="review-text">"${r.text}"</p>
          </div>`,
            )
            .join("")}
        </div>
      </div>
    </div>
  </div>

  <!-- Modal footer -->
  <div class="modal-footer">
    <div class="modal-price-display">
      <div class="mprice-val">$${c.price}<span> / session</span></div>
      <div class="mprice-sub">Next available: <strong style="color:var(--success)">${c.nextSlot}</strong></div>
    </div>
    <div class="modal-actions">
      <button class="btn-msg">💬 Message</button>
      <button class="btn-book-lg" data-id="${c.id}">Book Session Now →</button>
    </div>
  </div>`;
}

function openModal(id) {
  const coach = COACHES.find((c) => c.id === id);
  if (!coach) return;
  const panel = document.getElementById("modalPanel");
  const overlay = document.getElementById("coachModal");
  panel.innerHTML = buildModal(coach);

  // slot selection
  panel.querySelectorAll(".slot:not(.taken)").forEach((s) => {
    s.addEventListener("click", () => {
      panel
        .querySelectorAll(".slot")
        .forEach((x) => x.classList.remove("selected"));
      s.classList.add("selected");
    });
  });

  // close
  panel.querySelector("#modalClose").addEventListener("click", closeModal);
  panel.querySelector(".btn-book-lg").addEventListener("click", () => {
    closeModal();
    bookSession(id);
  });

  overlay.classList.add("open");
  document.body.style.overflow = "hidden";
  // focus trap
  setTimeout(() => panel.querySelector("#modalClose").focus(), 100);
}

function closeModal() {
  const overlay = document.getElementById("coachModal");
  overlay.classList.remove("open");
  document.body.style.overflow = "";
}

document.getElementById("coachModal").addEventListener("click", (e) => {
  if (e.target === e.currentTarget) closeModal();
});
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeModal();
});

/* ═══════════════════════════════════════════════════════════════════
   BOOKING TOAST
═══════════════════════════════════════════════════════════════════ */
function bookSession(id) {
  const coach = COACHES.find((c) => c.id === id);
  if (!coach) return;
  const toast = document.getElementById("bookingToast");
  const body = document.getElementById("toastBody");
  body.textContent = `${coach.name} will confirm your session within 2 hours.`;
  toast.classList.add("show");
  setTimeout(() => toast.classList.remove("show"), 4200);
}

/* ═══════════════════════════════════════════════════════════════════
   FILTER BINDINGS
═══════════════════════════════════════════════════════════════════ */
// Spec tabs
document.getElementById("specTabs").addEventListener("click", (e) => {
  const tab = e.target.closest(".spec-tab");
  if (!tab) return;
  document
    .querySelectorAll(".spec-tab")
    .forEach((t) => t.classList.remove("active"));
  tab.classList.add("active");
  state.spec = tab.dataset.spec;
  renderGrid();
});

// Service toggles (single active at a time, click again to deselect)
document.querySelectorAll(".adv-toggle").forEach((btn) => {
  btn.addEventListener("click", () => {
    const f = btn.dataset.filter;
    if (state.service === f) {
      state.service = null;
      btn.classList.remove("on");
    } else {
      document
        .querySelectorAll(".adv-toggle")
        .forEach((b) => b.classList.remove("on"));
      btn.classList.add("on");
      state.service = f;
    }
    renderGrid();
  });
});

// Select filters
document.getElementById("levelFilter").addEventListener("change", (e) => {
  state.level = e.target.value;
  renderGrid();
});
document.getElementById("sessionFilter").addEventListener("change", (e) => {
  state.session = e.target.value;
  renderGrid();
});
document.getElementById("genderFilter").addEventListener("change", (e) => {
  state.gender = e.target.value;
  renderGrid();
});
document.getElementById("priceFilter").addEventListener("change", (e) => {
  state.price = e.target.value;
  renderGrid();
});

/* ═══════════════════════════════════════════════════════════════════
   NAVBAR SCROLL
═══════════════════════════════════════════════════════════════════ */
window.addEventListener(
  "scroll",
  () => {
    document
      .getElementById("navbar")
      .classList.toggle("scrolled", window.scrollY > 20);
  },
  { passive: true },
);

/* ═══════════════════════════════════════════════════════════════════
   INIT
═══════════════════════════════════════════════════════════════════ */
renderGrid();
