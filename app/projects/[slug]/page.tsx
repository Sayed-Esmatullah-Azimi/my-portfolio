import { notFound } from "next/navigation"
import type { Metadata } from "next"
import { CaseStudyContent } from "@/components/case-study-content"

const projects = {
  "bamyan-entertainment": {
    title: "Bamyan Entertainment",
    subtitle: "A Comprehensive Entertainment Platform",
    description:
      "• Developed and maintained an online entertainment platform focused on promoting live events, concerts, sports, and cultural experiences. • Designed a user-friendly interface to showcase upcoming events with detailed information such as dates, locations, and ticket availability. • Integrated external ticketing links to enable seamless event booking and user redirection. • Implemented a subscription system allowing users to receive event updates, presale offers, and announcements via email. • Built dedicated pages for About, Contact, and Event Listings to enhance user engagement and accessibility. • Ensured responsive design and cross-device compatibility for optimal user experience on desktop and mobile devices. • Focused on performance, accessibility, and clean UI to deliver a smooth browsing experience. • Supported cultural and community-driven events by providing a centralized platform for entertainment discovery.",
    heroImage: "/bamyanentertianment.png",
    role: "Full Stack Web Developer",
    timeline: "2 months",
    team: "1 developers, 1 designer",
    technologies: ["React", "Next.js", "Laravel", "MySQL", "Tailwind CSS", "Radix UI"],
    liveUrl: "https://bamyanentertainment.de",
    overview: `Bamyan Entertainment is a digital platform dedicated to showcasing the rich cultural heritage of Bamyan province in Afghanistan. The platform serves as a hub for local artists, musicians, and content creators to share their work with a global audience.

The project was born from the need to preserve and promote Afghan cultural content in a modern, accessible format. Working closely with local artists and community leaders, we developed a platform that respects cultural values while embracing modern technology.`,
    challenge: `The main challenges included:
- Building a scalable video streaming infrastructure with limited resources
- Ensuring fast content delivery in regions with poor internet connectivity
- Creating an intuitive interface for users with varying technical literacy
- Implementing content moderation while respecting cultural sensitivities`,
    solution: `We implemented several innovative solutions:
- Adaptive bitrate streaming to handle varying network conditions
- Progressive web app (PWA) capabilities for offline access
- CDN integration for global content delivery
- Multi-language support (Dari, Deutsch, English)
- Community-driven content moderation system`,
    features: [
      { title: "Video Streaming", description: "Adaptive HLS streaming with multiple quality options" },
      { title: "Music Library", description: "Curated collection of traditional and modern Afghan music" },
      { title: "Artist Profiles", description: "Dedicated pages for artists to showcase their work" },
      { title: "Community Features", description: "Comments, likes, and sharing capabilities" },
      { title: "Offline Mode", description: "Download content for offline viewing" },
      { title: "Multi-language", description: "Full support for Dari, Deutsch, and English" },
    ],
    architecture: `The platform is built on a modern JAMstack architecture:

**Frontend:** Next.js with React for server-side rendering and optimal SEO. Tailwind CSS for styling with a custom design system.

**Backend:** Laravel API with Express, handling authentication, content management, and streaming orchestration.

**Database:** MySQL for flexible document storage, optimized for content-heavy queries.

**Media Storage:** AWS S3 for media storage with CloudFront CDN for global distribution.

**Streaming:** HLS (HTTP Live Streaming) with automatic transcoding pipeline.`,
    results: [
      { metric: "10,000+", label: "Monthly Active Users" },
      { metric: "500+", label: "Content Pieces" },
      { metric: "99.5%", label: "Uptime" },
      { metric: "< 2s", label: "Average Load Time" },
    ],
    testimonial: {
      quote:
        "This platform has given our local artists a voice on the global stage. It's more than just a website—it's a bridge between cultures.",
      author: "Ahmad Hussaini",
      role: "Local Artist & Community Leader",
    },
    learnings: `This project taught me valuable lessons about:
- Building for diverse audiences with varying technical capabilities
- Optimizing media delivery in challenging network environments
- The importance of cultural sensitivity in design decisions
- Balancing feature richness with performance`,
    screenshots: [{ src: "/bamyanentertianment.png", alt: "Homepage hero section" }],
  },
  "job-portal": {
    title: "Job Portal",
    subtitle: "Connecting Talent with Opportunities",
    description:
      "A modern job listing and application platform connecting employers with talented job seekers in Afghanistan, featuring advanced filtering and real-time notifications.",
    heroImage: "/insightdeed.png",
    role: "Full Stack Web Developer",
    timeline: "4 months",
    team: "2 developers",
    technologies: ["Laravel", "React.js", "MySQL", "Ant Design", "Bootstrap 5", "Socket.IO"],
    liveUrl: "https://insightdeed.com",
    overview: `The Job Portal project was initiated to address the gap between skilled professionals and employment opportunities in Afghanistan. Traditional job searching methods were inefficient, and there was a clear need for a modern, digital-first approach.

The platform serves both job seekers looking for opportunities and employers seeking qualified candidates. It includes features like resume building, job matching algorithms, and real-time application tracking.`,
    challenge: `Key challenges we faced:
- Creating an effective job matching algorithm
- Building a scalable search infrastructure for thousands of listings
- Implementing real-time notifications for job alerts
- Designing for users with different levels of digital literacy
- Ensuring data privacy and security for sensitive information`,
    solution: `Our approach included:
- Elasticsearch integration for powerful full-text search capabilities
- Machine learning-based job recommendations
- Real-time WebSocket notifications
- Progressive disclosure in UI for complex features
- End-to-end encryption for sensitive data`,
    features: [
      { title: "Smart Search", description: "Elasticsearch-powered search with filters and suggestions" },
      { title: "Job Matching", description: "AI-based matching algorithm connecting candidates with relevant jobs" },
      { title: "Resume Builder", description: "Step-by-step resume creation with templates" },
      { title: "Application Tracking", description: "Real-time status updates for applications" },
      { title: "Employer Dashboard", description: "Comprehensive tools for posting and managing jobs" },
      { title: "Notifications", description: "Real-time alerts for new matching jobs" },
    ],
    architecture: `The platform uses a robust full-stack architecture:

**Frontend:** React.js SPA with Zustant for state management. Ant Design and Bootstrap 5 for a responsive, modern design.

**Backend:** Laravel PHP framework with RESTful API design. Queued jobs for heavy processing tasks.

**Database:** MySQL for relational data with Redis caching layer for performance.

**Search:** Elasticsearch cluster for powerful full-text search and filtering.

**Real-time:** Socket.io for live notifications and updates.`,
    results: [
      { metric: "5,000+", label: "Registered Users" },
      { metric: "1,200+", label: "Jobs Posted" },
      { metric: "3,500+", label: "Applications" },
      { metric: "85%", label: "User Satisfaction" },
    ],
    testimonial: {
      quote:
        "The job portal transformed how we hire. We found qualified candidates faster and with less effort than traditional methods.",
      author: "Fatima Ahmadi",
      role: "HR Manager, Tech Company",
    },
    learnings: `Key takeaways from this project:
- The complexity of building effective search and matching systems
- Importance of user research in designing job seeker experiences
- Balancing feature completeness with simplicity
- Real-time features significantly improve user engagement`,
    screenshots: [{ src: "/insightdeed.png", alt: "Job listings page" }],
  },
  "gold-kingdom-forex": {
    title: "Gold Kingdom Forex Academy",
    subtitle: "Education Platform for Traders",
    description:
      "An educational platform teaching forex trading with comprehensive courses, live trading sessions, and interactive learning materials.",
    heroImage: "/goldkingdom.png",
    role: "Lead Developer",
    timeline: "2 months",
    team: "2 developers, 1 designer, content team",
    technologies: ["React.js", "Laravel", "Ant Design", "MySQL", "HTML", "CSS"],
    liveUrl: "https://goldkingdom.trade",
    overview: `Gold Kingdom Forex Academy is a comprehensive e-learning platform designed to teach forex trading from beginner to advanced levels. The platform combines video courses, live webinars, and interactive trading simulations.

The project was developed in partnership with experienced forex traders who wanted to share their knowledge with aspiring traders in the region. The platform needed to handle video content, real-time sessions, and payment processing.`,
    challenge: `The main challenges included:
- Building a robust video delivery system for course content
- Implementing real-time features for live trading sessions
- Creating an intuitive learning path for complex financial concepts
- Setting up secure payment processing for subscriptions
- Integrating with trading APIs for live market data`,
    solution: `We developed several key solutions:
- Custom video player with progress tracking
- WebRTC-based live streaming for trading sessions
- Gamified learning progression system
- Stripe integration with regional payment methods
- Real-time market data visualization`,
    features: [
      { title: "Video Courses", description: "Structured learning paths with HD video content" },
      { title: "Live Sessions", description: "Real-time trading webinars with Q&A" },
      { title: "Trading Simulator", description: "Practice trading with virtual currency" },
      { title: "Progress Tracking", description: "Certificates and achievement system" },
      { title: "Community Forum", description: "Discussion boards for students" },
      { title: "Subscription Management", description: "Multiple tiers with Stripe billing" },
    ],
    architecture: `The platform is built for scalability and performance:

**Frontend:** React.js with Ant Design for type safety. Custom video player component with HLS support.

**Backend:** Laravel API route Model Binding. Background jobs for video processing.

**Database:** MySQL for relational data. Redis for caching and session management.

**Payments:** Stripe for subscriptions and one-time payments with webhook handling.

**Infrastructure:** AWS with CloudFront CDN, S3 for media, EC2 for compute.`,
    results: [
      { metric: "2,500+", label: "Students Enrolled" },
      { metric: "150+", label: "Video Lessons" },
      { metric: "$50K+", label: "Revenue Generated" },
      { metric: "4.8/5", label: "Course Rating" },
    ],
    testimonial: {
      quote:
        "The platform made learning forex accessible and engaging. The live sessions with real market analysis were invaluable.",
      author: "Mohammad Karimi",
      role: "Student & Trader",
    },
    learnings: `This project provided insights into:
- Building e-learning platforms with complex content requirements
- Payment integration in developing markets
- Real-time features for educational content
- User engagement strategies for online learning`,
    screenshots: [{ src: "/goldkingdom.png", alt: "Course dashboard" }],
  },
}

type Props = {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return Object.keys(projects).map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const project = projects[slug as keyof typeof projects]

  if (!project) {
    return { title: "Project Not Found" }
  }

  return {
    title: `${project.title} | Case Study | Abdulmutalib Hasani`,
    description: project.description,
    openGraph: {
      title: project.title,
      description: project.description,
      images: [project.heroImage],
    },
  }
}

export default async function CaseStudyPage({ params }: Props) {
  const { slug } = await params
  const project = projects[slug as keyof typeof projects]

  if (!project) {
    notFound()
  }

  return <CaseStudyContent project={project} />
}
