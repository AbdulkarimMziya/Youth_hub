import img1 from '../../../assets/img1.jpg';
import bannerImage from '../../../assets/banner.jpg';

export const upcomingEvents = [
  {
    id: 1,
    title: "Youth Leadership Summit",
    date: "September 15, 2025",
    time: "9:00 AM - 5:00 PM",
    location: "Community Center Hall",
    description: "Join us for a full day of leadership workshops, networking, and skill-building activities designed specifically for young leaders. This summit will feature keynote speakers, breakout sessions, and networking opportunities.",
    category: "Leadership",
    featured: true,
    image: bannerImage
  },
  {
    id: 2,
    title: "Digital Skills Workshop",
    date: "September 22, 2025",
    time: "2:00 PM - 6:00 PM",
    location: "Tech Hub Building",
    description: "Learn essential digital skills including coding basics, digital marketing, and online collaboration tools. Perfect for beginners and those looking to enhance their tech skills.",
    category: "Technology",
    image: img1
  },
  {
    id: 3,
    title: "Community Service Day",
    date: "October 5, 2025",
    time: "8:00 AM - 4:00 PM",
    location: "Various Locations",
    description: "Make a difference in our community through various volunteer activities and service projects. Activities include park cleanup, food bank assistance, and elderly care support.",
    category: "Community",
    image: bannerImage
  },
  {
    id: 4,
    title: "Career Development Workshop",
    date: "October 12, 2025",
    time: "10:00 AM - 3:00 PM",
    location: "Business Center",
    description: "Enhance your career prospects with resume writing, interview skills, and networking strategies. Industry professionals will share insights and provide one-on-one guidance.",
    category: "Career",
    image: img1
  },
  {
    id: 5,
    title: "Mental Health Awareness Week",
    date: "October 20-26, 2025",
    time: "Various Times",
    location: "Youth Hub Center",
    description: "A week-long series of events focused on mental health awareness, including workshops, support groups, and wellness activities for youth and families.",
    category: "Wellness",
    image: bannerImage
  },
  {
    id: 6,
    title: "Environmental Action Workshop",
    date: "November 3, 2025",
    time: "1:00 PM - 5:00 PM",
    location: "Green Space Park",
    description: "Learn about environmental conservation and participate in hands-on activities like tree planting, recycling projects, and sustainable living practices.",
    category: "Environment",
    image: img1
  }
];

export const pastEvents = [
  {
    id: 7,
    title: "Summer Youth Festival",
    date: "August 10, 2025",
    time: "12:00 PM - 8:00 PM",
    location: "Central Park",
    description: "A celebration of youth culture featuring performances, art exhibitions, food trucks, and community activities.",
    category: "Culture",
    attendees: 450,
    image: bannerImage
  },
  {
    id: 8,
    title: "Entrepreneurship Bootcamp",
    date: "July 25-27, 2025",
    time: "9:00 AM - 5:00 PM",
    location: "Innovation Center",
    description: "Three-day intensive program covering business fundamentals, pitch development, and startup strategies.",
    category: "Business",
    attendees: 85,
    image: img1
  },
  {
    id: 9,
    title: "Sports & Wellness Day",
    date: "July 15, 2025",
    time: "8:00 AM - 6:00 PM",
    location: "Sports Complex",
    description: "A fun-filled day of sports activities, fitness workshops, and wellness education for all ages.",
    category: "Sports",
    attendees: 320,
    image: bannerImage
  }
];

export const categories = ['all', 'Leadership', 'Technology', 'Community', 'Career', 'Wellness', 'Environment', 'Culture', 'Business', 'Sports'];
