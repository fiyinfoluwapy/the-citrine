export interface Event {
  id: string;
  slug: string;
  title: string;
  date: string;
  location: string;
  image: string;
  description: string;
  venue: {
    name: string;
    address: string;
    city: string;
  };
  featured?: boolean;
}
export const events: Event[] = [{
  id: '1',
  slug: 'national-science-fair-2023',
  title: 'National Science Fair 2023',
  date: 'October 15, 2023',
  location: 'Science Center, New York',
  image: 'https://images.unsplash.com/photo-1446776858070-70c3d5ed6758?q=80&w=1172&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  description: "Join us for the annual National Science Fair where students from across the country showcase their innovative projects. This year's theme focuses on sustainable technology and environmental solutions. Participants will have the opportunity to present their work to industry experts and compete for scholarships and grants.",
  venue: {
    name: 'National Science Center',
    address: '123 Innovation Avenue',
    city: 'New York, NY 10001'
  },
  featured: true
}, {
  id: '2',
  slug: 'coding-bootcamp-for-teens',
  title: 'Coding Bootcamp for Teens',
  date: 'November 5-7, 2023',
  location: 'Tech Hub, San Francisco',
  image: 'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
  description: 'A three-day intensive coding bootcamp designed specifically for teenagers interested in computer science. Participants will learn the fundamentals of programming, web development, and app creation through hands-on projects and mentorship from industry professionals.',
  venue: {
    name: 'Tech Hub SF',
    address: '456 Coding Lane',
    city: 'San Francisco, CA 94105'
  }
}, {
  id: '3',
  slug: 'young-entrepreneurs-summit',
  title: 'Young Entrepreneurs Summit',
  date: 'December 10, 2023',
  location: 'Business Center, Chicago',
  image: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80',
  description: 'The Young Entrepreneurs Summit brings together aspiring business leaders to develop their entrepreneurial skills. Through workshops, keynote speeches, and networking opportunities, students will learn about business planning, marketing, and finance from successful entrepreneurs and business experts.',
  venue: {
    name: 'Chicago Business Center',
    address: '789 Enterprise Street',
    city: 'Chicago, IL 60601'
  }
}, {
  id: '4',
  slug: 'creative-writing-workshop',
  title: 'Creative Writing Workshop',
  date: 'January 20, 2024',
  location: 'Literary Arts Center, Boston',
  image: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1073&q=80',
  description: 'Develop your storytelling abilities in this immersive creative writing workshop. Led by published authors and writing instructors, students will explore various genres and writing techniques while receiving constructive feedback on their work. All skill levels are welcome.',
  venue: {
    name: 'Boston Literary Arts Center',
    address: "101 Writer's Way",
    city: 'Boston, MA 02108'
  }
}, {
  id: '5',
  slug: 'stem-careers-expo',
  title: 'STEM Careers Expo',
  date: 'February 15, 2024',
  location: 'Convention Center, Seattle',
  image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
  description: 'Explore career opportunities in Science, Technology, Engineering, and Mathematics at the annual STEM Careers Expo. Meet representatives from top companies and universities, attend career development workshops, and learn about internship and scholarship opportunities in STEM fields.',
  venue: {
    name: 'Seattle Convention Center',
    address: '202 Innovation Boulevard',
    city: 'Seattle, WA 98101'
  },
  featured: true
}, {
  id: '6',
  slug: 'debate-championship',
  title: 'National High School Debate Championship',
  date: 'March 8-10, 2024',
  location: 'University Campus, Austin',
  image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
  description: 'The premier debate competition for high school students across the nation. Teams will engage in structured debates on current social, political, and ethical issues, developing critical thinking, research, and public speaking skills while competing for national recognition and awards.',
  venue: {
    name: 'Austin University Conference Center',
    address: '303 Academic Drive',
    city: 'Austin, TX 78712'
  }
}];