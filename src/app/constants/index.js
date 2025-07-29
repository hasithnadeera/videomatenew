// Design tokens and constants
export const COLORS = {
  primary: '#B47DFF',
  primaryLight: '#E2CDFF',
  accent: '#CFADFF',
  white: '#ffffff',
  gray: {
    200: '#e5e7eb',
    300: '#d1d5db'
  }
};

export const GRADIENTS = {
  primary: 'linear-gradient(180deg, #B47DFF 100%, #B47DFF 4%)',
  border: 'linear-gradient(90deg, #CFADFF, #fff)',
  text: 'linear-gradient(to right, #BC8AFF, #D7B9FE)'
};

export const GLASSMORPHISM = {
  background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.05))',
  backdropFilter: 'blur(20px)',
  boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)'
};

// Comparison data
export const COMPARISON_DATA = [
  {
    title: "Hire one in-house editor",
    description: "$60 k+ salary + taxes + benefits + software",
    isHighlighted: false
  },
  {
    title: "Freelancers",
    description: "$300-$500 per video × 200 vids ≈ $60-100 k",
    isHighlighted: false
  },
  {
    title: "Videomate Pro Plan",
    description: "$16,788 / year—all-inclusive, unlimited videos, zero headaches",
    isHighlighted: true
  }
];

// Features data
export const FEATURES_DATA = [
  {
    icon: "/1-Day First Drafts.png",
    title: "1-Day First Drafts", 
    description: "First cut in as little as 24 h Friday fastest"
  },
  {
    icon: "/Unlimited Revisions.png",
    title: "Unlimited Revisions",
    description: "We polish until you love it - no revision caps, ever"
  },
  {
    icon: "/Asia - Based Cost Advanrage.png",
    title: "Asia - Based Cost Advantage",
    description: "Sri Lanka production hub is top-tier talent at 40-50% lower cost and the savings goes straight to you."
  },
  {
    icon: "/Dedicated Editor.png",
    title: "Dedicated Editor",
    description: "Your own editor learns your style, brand, and tone."
  }
];

export const TARGET_GROUPS = [
  "YouTubers & Influencers who need daily or weekly uploads",
  "E-commerce & SaaS brands burning cash on freelancers",
  "Marketing agencies drowning in client deliverables"
];

// Testimonial styles
export const TESTIMONIAL_STYLES = {
  container: "rounded-xl bg-gray-800/50 backdrop-blur-sm overflow-hidden",
  videoContainer: "relative aspect-[9/16] flex items-center justify-center w-full h-full max-w-full mx-auto",
  playButton: "relative z-10 w-16 h-16 bg-purple-500/80 rounded-full flex items-center justify-center hover:bg-purple-600/80 transition-all",
  starIcon: "w-5 h-5 text-purple-400"
};

// Social icons data
export const SOCIAL_ICONS = [
  { name: 'X (Twitter)', icon: '/icons/twitter.svg', url: 'https://twitter.com/videomate' },
  { name: 'LinkedIn', icon: '/icons/linkedin.svg', url: 'https://linkedin.com/company/videomate' },
  { name: 'YouTube', icon: '/icons/youtube.svg', url: 'https://youtube.com/c/videomate' },
  { name: 'Instagram', icon: '/icons/instagram.svg', url: 'https://instagram.com/videomate' },
  { name: 'Facebook', icon: '/icons/facebook.svg', url: 'https://facebook.com/videomate' },
  { name: 'TikTok', icon: '/icons/tiktok.svg', url: 'https://tiktok.com/@videomate' },
  { name: 'WhatsApp', icon: '/icons/whatsapp.svg', url: 'https://wa.me/message/videomate' }
];

// Testimonials data
export const TESTIMONIALS_DATA = [
  {
    id: 1,
    stars: 5,
    quote: '"Videomate chopped my editing workload to zero—and my channel\’s revenue skyrocketed past six figures."',
    name: 'Sarah K.',
    title: '280 k-sub YouTuber',
    avatar: null, // Replace with actual avatar path when available
    videoUrl: 'https://grtomatemedia.b-cdn.net/9.mp4'
  },
  {
    id: 2,
    stars: 5,
    quote: '"Our agency tripled output and cut costs 45 %. Clients think we built an in-house studio overnight."',
    name: 'Jamie T.',
    title: 'Agency Owner',
    avatar: null, // Replace with actual avatar path when available
    videoUrl: 'https://grtomatemedia.b-cdn.net/10.mp4'
  },
  {
    id: 3,
    name: 'Sam K.',
    title: 'CEO, Founder',
    videoUrl: 'https://grtomatemedia.b-cdn.net/10.mp4'
  },
  {
    id: 4,
    name: 'Jupitor',
    title: '280 k-sub YouTuber',
    videoUrl: 'https://grtomatemedia.b-cdn.net/9.mp4'
  }
];