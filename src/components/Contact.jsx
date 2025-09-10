import React from 'react';
import Banner from './contact/Banner';
import ContactForm from './contact/ContactForm';
import CoverageMap from './ui/functional-components/CoverageMap';
import WhatsAppButton from './ui/functional-components/WhatsAppButton';
import LocationUpdate from './contact/LocationUpdate';


const Contact = () => {
    return (
        <div>
            <Banner/>
            <LocationUpdate/>
            <CoverageMap/>
            <ContactForm/>
            <WhatsAppButton/>
        </div>
    );
}

export default Contact;
