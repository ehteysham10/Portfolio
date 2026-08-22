export const projects = [
    {
        id: 1,
        title: "ShopNPay",
        description: "A premium full-stack e-commerce solution featuring secure JWT user authentication, dynamic product catalog management, a seamless shopping cart workflow, and fully integrated Stripe API for secure, real-time payment processing.",
        tech: ["React",
            "Node.js",
            "Express",
            "MongoDB",
            "JWT",
            "Stripe"
        ],
        github: {
            frontend: "https://github.com/ehteysham10/ShopNpay-Frontend-",
            backend: "https://github.com/ehteysham10/ShopNpay-Backend-"
        },
        demo: "https://shopnpay.vercel.app/"
    },
    {
        id: 2,
        title: "PulseTriage",
        description:
            "A premium AI-driven multi-agent support ticket triage system featuring real-time communication via Socket.io, active agent collision prevention, and a high-performance SLA escalation engine powered by Redis & BullMQ.",
        tech: [
            "React",
            "Node.js",
            "Express",
            "MongoDB",
            "Socket.io",
            "Redis",
            "BullMQ"
        ],
        github: {
            frontend: "https://github.com/ehteysham10/PulseTriage-Frontend",
            backend: "https://github.com/ehteysham10/PulseTriage-Backend"
        },
        demo: "https://pulse-triage-blond.vercel.app/"
    },
    {
        id: 3,
        title: "Talk&See",
        description: "A full-stack real-time communication platform featuring peer-to-peer WebRTC video & audio calls, live chat with typing indicators, JWT authentication with email verification, and a premium glassmorphic UI powered by React, Zustand, and Socket.io.",
        tech: [
            "React",
            "TypeScript",
            "Node.js",
            "Express",
            "Socket.io",
            "WebRTC",
            "MongoDB",
            "JWT",
            "Zustand"
        ],
        github: {
            frontend: "https://github.com/ehteysham10/talk-see-Frontend",
            backend: "https://github.com/ehteysham10/talk-see-Backend"
        },
        demo: "https://talkandsee.vercel.app/login",
        inProgress: true
    },
    {
        id: 4,
        title: "E-Learning Platform",
        description:
            "A backend learning platform featuring JWT & Google OAuth authentication, role-based access control, course/quiz management, trackable enrollments, Cloudinary-based file uploads, and automated email notifications.",
        tech: [

            "Node.js",
            "Express",
            "MongoDB",
            "JWT",
            "Google OAuth",
            "Cloudinary",
            "Nodemailer"
        ],
        github: "https://github.com/ehteysham10/E-Learning-Platform"
    }
];