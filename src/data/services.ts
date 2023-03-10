import { faCode } from '@fortawesome/free-solid-svg-icons';

type TService = {
    id: string,
    content: {
        title: string,
        description: string,
        icon: any
    },
    modal_content: {
        title: string,
        description: string,
        bullets: string[]
    }
};

export const newServices: TService[] = [
    {
        id: "1",
        content: {
            title: "Web Development",
            description: `Create fully-responsive, mobile-friendly 
            website designs. With a website that looks
            stunning on any device, from large desktop
            screens to smartphones, your site visitors
            have a great experience when visiting your
            website.`,
            icon: faCode
        },
        modal_content: {
            title: "Web Development",
            description: `Providing the best, most innovative HTML5,CSS,SCSS development and maintaining accessibility throughout the development, I have 
            extensive experience with creating high performing, feature-packed HTML5-based web and mobile experiences.`,
            bullets: [
                "Builds, designs, and maintains all type of websites and software applications.", 
                "Creating website layout/user interfaces by using standard HTML/CSS practices",
                "Web development fundamentals, including HTML5, CSS3, SCSS and JavaScript",
                "Understands UI, cross-browser compatibility, and general web functions and standards.",
                "Develops and validates test routines to ensure the quality of the external and internal interface",
                "Evaluates written code to ensure it meets industry standards and is compatible with all devices",
                "Proficiency in HTML5, CSS3, SASS/SCSS, ReactJS"
            ]
        }
    },
    {
        id: "2",
        content: {
            title: "UI/UX Design",
            description: `Custom web design services can help you build a custom website that reflects your 
            business and brand. With create a site that is easy to navigate, looks professional, and catches our 
            potential customer's attention.`,
            icon: faCode
        },
        modal_content: {
            title: "UI/UX Designer",
            description: `Identifies new opportunities to create better user experience. Aesthetically pleasing branding strategies
            help them effectively reach more customers, and I also ensure that the end-to-end journey with their products or services meets desired outcomes.`,
            bullets: [
                "Gather and evaluate user requirements in collaboration with stakeholder and other teams", 
                "Develop UI mockups and prototypes that clearly illustrate how product function and look like",
                "Good in design ideas using storyboards, process flows, user journey and sitemaps",
                "Optimize existing user interface designs and perform testing for intuitivity and experience",
                "Combine creativity with an awareness of the design elements",
                "Identify and troubleshoot responsiveness, compatibility UX problems",
                "I have strong hands-on experience of using wireframe tools such as Adobe XD, Figma, Illustrator, Miro, Draw.io, etc."
            ]
        }
    },
    {
        id: "3",
        content: {
            title: "App Development",
            description: `Build high-quality native apps for both 
            Android and iOS systems aligned with your business and security requirements. 
            Use latest technologies to build app that will deploy on multiple platforms.`,
            icon: faCode
        },
        modal_content: {
            title: "App Development",
            description: "Web Development",
            bullets: [
                "Designing & developing new features and user interfaces for all kind of mobile application", 
                "Understanding mobile app design guidelines on each platform and being aware of their differences",
                "Ability to develop front-end pages with static features such as navigation, accepting inputs, images carousels, etc.",
                "Troubleshoot and debug to optimize performance",
                "Experience with profiling and debugging mobile applications",
                "Proficiency in React Native, Flutter"
            ]
        }
    }
];