export const companyInfo = {
    name: 'Acme',
    legalName: 'Acme, Inc.',
    description: 'Acme is a leading brand in the fake space.',
    url: 'acme.com',
    logo: '/logo.svg',
    alternateLogo: '/logo-invert.svg',
    contact: {
        phone: '123-456-7890',
        email: 'contact@acme.com',
        address: {
            street: '1234 Acme St',
            city: 'Los Angeles',
            state: 'CA',
            zip: '90029'
        }
    },
    theme: {
        colors: {
            primary: '#7D21D4',
            secondary: '#A594F9',
            light: '#FFFFFF',
            dark: '#000000'
        },
    },
    headerNavigationItems: [
        { name: 'Services', path: '/services' },
        { name: 'Testimonials', path: '/testimonials' },
        { name: 'About', path: '/about' },
        { name: 'Contact', path: '/contact' },
    ],
    footerNavigationItems: [
        { name: 'Home', path: '/' },
        { name: 'Services', path: '/services' },
        { name: 'Testimonials', path: '/testimonials' },
        { name: 'About', path: '/about' },
        { name: 'Contact', path: '/contact' },
    ]
}
