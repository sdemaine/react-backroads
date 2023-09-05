import tour1 from './images/tour-1.jpeg';
import tour2 from './images/tour-2.jpeg';
import tour3 from './images/tour-3.jpeg';
import tour4 from './images/tour-4.jpeg';


export const pageLinks = [
    { id: 1, href: '#home', text: 'home' },
    { id: 2, href: '#about', text: 'about' },
    { id: 3, href: '#services', text: 'services' },
    { id: 4, href: '#tours', text: 'tours' },
];

export const socialLinks = [
    { id: 1, href: 'https://www.facebook.com', icon: 'fab fa-facebook' },
    { id: 2, href: 'https://www.twitter.com', icon: 'fab fa-twitter' },
    { id: 3, href: 'https://www.squarespace.com', icon: 'fab fa-squarespace' },
];

export const services = [
    {
        id: 1,
        icon: 'fas fa-wallet fa-fw',
        title: 'saving money',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia.',
    },
    {
        id: 2,
        icon: 'fas fa-tree fa-fw',
        title: 'endless hiking',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia.',
    },
    {
        id: 3,
        icon: 'fas fa-socks fa-fw',
        title: 'amazing comfort',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia.',
    },
    // {
    //     id: 4,
    //     icon: 'fas fa-cocktail fa-fw',
    //     title: 'delicious drinks',
    //     text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia.',
    // },
    // {
    //     id: 5,
    //     icon: 'fas fa-shuttle-van fa-fw',
    //     title: 'free shuttle',
    //     text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia.',
    // },
    // {
    //     id: 6,
    //     icon: 'fas fa-beach-sun fa-fw',
    //     title: 'relaxing beach',
    //     text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia.',
    // },
];

export const tours = [
    {
        id: 1,
        image: tour1,
        date: 'august 26th, 2020',
        title: 'Tibet Adventure',
        in: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.',
        name: 'china',
        duration: '6 days',
        cost: '2100',
    },
    {
        id: 2,
        image: tour2,
        date: 'october 1th, 2020',
        title: 'best of java',
        in: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.',
        name: 'indonesia',
        duration: '11 days',
        cost: '1400',
    },
    {
        id: 3,
        image: tour3,
        date: 'september 15th, 2020',
        title: 'explore hong kong',
        in: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.',
        name: 'hong kong',
        duration: '8 days',
        cost: '5000',
    },
    {
        id: 4,
        image: tour4,
        date: 'december 5th, 2019',
        title: 'kenya highlights',
        in: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.',
        name: 'kenya',
        duration: '20 days',
        cost: '3300',
    },
];


