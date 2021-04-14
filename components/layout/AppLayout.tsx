import FooterLight from '../kit/components/navigation/footer/FooterLight';
import Meta from '../site/Meta';
import AppHeader from '../site/header/AppHeader';

const footerLink = [
    {
        label: 'Configuration',
        link: '/started',
    },
    {
        label: 'Github',
        link: 'https://github.com/Charlie85270/tail-kit',
    },
    {
        label: 'LinkedIn',
        link: 'https://www.linkedin.com/in/crabiller/',
    },
];

export const menuEntry = [
    {
        label: 'Elements',
        desc: 'Buttons, Avatars, Badges, Alerts, Progress bar....',
        link: '/components#elements',
    },
    {
        label: 'Forms',
        desc: 'Input text, Select, Textarea, Login pages, Signin templates ...',
        link: '/components#forms',
    },
    {
        label: 'Commerce',
        desc: 'Pricing cards, Shopping cards, Basket layouts...',
        link: '/components#commerce',
    },
    {
        label: 'Navigation',
        desc: 'Headers, Footers, Sidebar ...',
        link: '/components#navigation',
    },
    {
        label: 'Sections',
        desc: 'Features, CTA, testimonial, Team sections ...',
        link: '/components#pagesection',
    },
    {
        label: 'List',
        desc: 'List, Tables, Todo list, Description List, Actions list...',
        link: '/components#list',
    },
];

export const menuTemplates = [
    {
        label: 'Dashboard',
        desc: 'Dashboard templates page, Admin templates....',
        link: '/templates#dashboard',
    },
    {
        label: 'Landing page',
        desc: 'Template like sport site, product home page, Ecommerce',
        link: '/templates#home',
    },
    {
        label: 'Errors page',
        desc: '404 templates page, Internal error templates....',
        link: '/templates#errors',
    },
];

interface Props {
    title: string;
    desc: string;
    children: React.ReactNode;
}

const AppLayout = ({ title, desc, children }: Props) => {
    return (
        <div className="relative bg-gray-700 ">
            <Meta pageTitle={title} description={desc} />
            
            <div className="h-full mx-auto" style={{ minHeight: 85 + 'vh' }}>
                <div className="relative z-10 h-full pb-8 bg-gray-700 sm:pb-16 md:pb-20 lg:w-full lg:pb-28 xl:pb-32">
                    <div className="dark">
                        <AppHeader />
                    </div>

                    <main className="h-full px-4 mx-auto mt-8 max-w-7xl sm:px-6 dark lg:px-8">{children}</main>
                </div>
            </div>
            <div className="dark">
                <FooterLight links={footerLink} />
            </div>
        </div>
        
    );
};

export default AppLayout;
