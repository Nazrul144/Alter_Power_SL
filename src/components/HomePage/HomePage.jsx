import React from 'react';
import Banner from './Banner';
import About from './About';
import Services from './Services';
import Address from './Address';
import OurTeam from '@/app/team/page';
import WhyChooseUs from './WhyChooseUs';
import TestimonialPage from '@/app/testimonial/page';
import FAQ from './FAQ';
import CustomerReviews from './CustomerReviews ';

const HomePage = () => {
    return (
        <div>
            <Banner/>
            <About/>
            <Services/>
            <Address/>
            <OurTeam/>
            <WhyChooseUs/>
            <CustomerReviews/>
            <FAQ/>
            <TestimonialPage/>
        </div>
    );
}

export default HomePage;
