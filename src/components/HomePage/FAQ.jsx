'use client'
import React from 'react'
import { Button } from '../ui/button'
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent, } from '../ui/accordion'
import { motion } from "motion/react"

const FAQ = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 150 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ amount: 0.0 }}
            className='container mx-auto mt-20'>
            <h1 className="border-t-2 border-b-2 border-cyan-700 text-center font-extrabold w-80 text-2xl mx-auto mt-2 mb-16 text-[#D96F32]">Frequently Asked Questions</h1>
            <div className='dark:text-neutral-400 mx-5 md:mx-0'>
                <Accordion
                    type="single"
                    collapsible
                    className="w-full"
                    defaultValue="item-1"
                >
                    <AccordionItem value="item-1">
                        <AccordionTrigger>What services do you offer?</AccordionTrigger>
                        <AccordionContent className="flex flex-col gap-4 text-balance">
                            <p>We offer a wide range of services, including electrical installations, solar energy solutions, battery backup systems, <br />
                                waterproofing, roof repair, and plumbing services. Our services are available for residential, commercial, and <br /> industrial properties.</p>
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2">
                        <AccordionTrigger>How can I get a quote for your services?</AccordionTrigger>
                        <AccordionContent className="flex flex-col gap-4 text-balance">
                            <p>
                                You can easily get a quote by contacting us through our contact form on the website, or by giving us a call. <br />
                                We’ll assess your needs and provide you with a competitive and transparent estimate for the services <br /> you require.
                            </p>

                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-3">
                        <AccordionTrigger className="text-left">Do you provide solar energy solutions for homes and businesses?</AccordionTrigger>
                        <AccordionContent className="flex flex-col gap-4 text-balance">
                            <p>
                                Yes! We specialize in solar panel installations and solar-powered backup solutions for both residential <br />
                                and commercial properties. Our goal is to help you reduce energy costs and switch to a more <br /> sustainable and eco-friendly energy source.
                            </p>
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-4">
                        <AccordionTrigger>What makes your plumbing services different?</AccordionTrigger>
                        <AccordionContent className="flex flex-col gap-4 text-balance">
                            <p>
                                Our plumbing services cover everything from installations to emergency repairs and maintenance. <br />
                                We pride ourselves on offering high-quality, efficient solutions that ensure your plumbing system <br /> is working
                                smoothly, while providing excellent customer service with quick response times.
                            </p>
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </div>
        </motion.div >
    )
}

export default FAQ