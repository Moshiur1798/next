export interface Testimonial {
    id: number;
    name: string;
    role: string;
    company: string;
    image: string;
    rating: number;
    text: string;
}

export const testimonials: Testimonial[] = [
    {
        id: 1,
        name: "Sarah Johnson",
        role: "CEO",
        company: "TechCorp Solutions",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
        rating: 5,
        text: "Working with MyWebsite has been an absolute game-changer for our business. Their attention to detail and commitment to excellence is unmatched. The results exceeded our expectations!"
    },
    {
        id: 2,
        name: "Michael Chen",
        role: "CTO",
        company: "Innovation Labs",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
        rating: 5,
        text: "The team's expertise and professionalism are outstanding. They delivered a solution that perfectly aligned with our vision. I highly recommend their services to anyone looking for quality."
    },
    {
        id: 3,
        name: "Emily Rodriguez",
        role: "Marketing Director",
        company: "Global Ventures",
        image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop",
        rating: 5,
        text: "Exceptional service from start to finish! The quality of work and dedication to customer satisfaction is truly impressive. Our partnership has been incredibly valuable."
    },
    {
        id: 4,
        name: "David Thompson",
        role: "Founder",
        company: "StartUp Hub",
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop",
        rating: 5,
        text: "MyWebsite transformed our digital presence completely. Their innovative approach and technical expertise helped us achieve results we never thought possible. Truly outstanding!"
    },
    {
        id: 5,
        name: "Lisa Anderson",
        role: "Operations Manager",
        company: "Enterprise Systems",
        image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400&h=400&fit=crop",
        rating: 5,
        text: "The level of professionalism and quality is remarkable. They understood our needs perfectly and delivered beyond expectations. A fantastic partner for any business."
    },
    {
        id: 6,
        name: "James Wilson",
        role: "Product Manager",
        company: "Digital Dynamics",
        image: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=400&h=400&fit=crop",
        rating: 5,
        text: "Outstanding results and exceptional support throughout the entire process. The team's dedication to excellence is evident in every aspect of their work. Highly recommended!"
    },
    {
        id: 7,
        name: "Rachel Kim",
        role: "VP of Technology",
        company: "Future Tech Inc",
        image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&fit=crop",
        rating: 5,
        text: "A truly professional experience from beginning to end. The quality of their work and commitment to client success sets them apart. We couldn't be happier with the results!"
    },
    {
        id: 8,
        name: "Robert Martinez",
        role: "Business Development",
        company: "Growth Partners",
        image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop",
        rating: 5,
        text: "MyWebsite has been instrumental in our success. Their expertise, reliability, and dedication to quality make them an invaluable partner. I can't recommend them enough!"
    }
];
