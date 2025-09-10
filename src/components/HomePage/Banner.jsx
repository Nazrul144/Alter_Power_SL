// 'use client';
// import React, { useRef, useState,  } from 'react';
// import { RadioGroup, RadioGroupItem } from '../ui/radio-group';
// import { Label } from '../ui/label';
// import { FaLongArrowAltRight, FaStar } from 'react-icons/fa';
// import Link from 'next/link';
// import { motion } from 'framer-motion'; // Corrected import
// import Swal from 'sweetalert2';
// import emailjs from '@emailjs/browser';
// import { toast } from 'react-toastify';
// import Image from 'next/image';

// const Banner = () => {
//   const [service, setService] = useState({ id: null, title: '' });
//   const [serviceData, setServiceData] = useState([]);
//   const [isLoading, setIsLoading] = useState(true); // Add loading state

//   const fetchData = async () => {
//     try {
//       setIsLoading(true); // Set loading to true before fetch
//       const res = await fetch('https://alter-power.co.za/api/services/');
//       if (!res.ok) {
//         throw new Error('Failed to fetch services');
//       }
//       const data = await res.json();
//       setServiceData(data);
//     } catch (error) {
//       console.error('Error fetching services:', error);
//     } finally {
//       setIsLoading(false); // Set loading to false after fetch completes
//     }
//   };

//     const form = useRef();

//   const sendEmail = async (e) => {
//     e.preventDefault();

//     if (!service) {
//       Swal.fire({
//         title: "Please select a service!",
//         icon: "warning",
//       });
//       return;
//     }

//     emailjs.init('BFRNhqWPmuA7Jz0cu'); 

//     emailjs
//       .sendForm(
//         'service_lq0ik1m', 
//        'template_bd4i9bj',
//         form.current
//       )
//       .then(
//         () => {
//           Swal.fire({
//             title: "Your request has been sent successfully!",
//             text: "You clicked the button!",
//             icon: "success"
//           });

//           form.current.reset();
//         },
//         (error) => {
//           console.log('FAILED...', error.text);
//         },
//       );

//       //Email js ends here



//     const formElement = e.target;
//     const formData = new FormData(formElement);
//     const payload = {
//       customer_first_name: formData.get('first_name'),
//       customer_last_name: formData.get('last_name'),
//       customer_email: formData.get('from_email'),
//       customer_phone: formData.get('phone'),
//       selected_service: service.id,
//     };

//     try {
//       const response = await fetch('https://alter-power.co.za/api/message/quote-request/', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(payload),
//       });

//       if (!response.ok) {
//         toast.error('Failed to post')
//       } else {
//         await emailjs.sendForm(
//           process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
//           process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
//           formElement
//         );
//         toast.success('Successful');
//         formElement.reset();
//         setService({ id: null, title: '' });
//       }
//     } catch (error) {
//       toast.error('Failed');
//       console.error('Error:', error);
//     }
//   };

//   return (
//     <div className="mt-[95px] md:mt-[75px]">
//       {isLoading ? (
//         <div className="flex justify-center items-center min-h-[90vh]">
//           <span className="loading loading-dots loading-lg text-[#D96F32]"></span>
//         </div>
//       ) : (
//         <div className="carousel w-full rounded-xl rounded-t-none">
//           {slides?.map((slide, index) => (
//             <div
//               key={index}
//               id={`slide${index + 1}`}
//               style={{
//                 backgroundImage: `linear-gradient(45deg, rgba(5, 15, 60, 0.9), rgba(0, 0, 0, 0.8)),url(/${index + 1}.jpeg)`,
//                 backgroundSize: 'cover',
//                 backgroundPosition: 'center',
//                 backgroundRepeat: 'no-repeat',
//               }}
//               className="carousel-item relative w-full h-[90vh] bg-top bg-no-repeat pb-[700px] md:pb-[1000px] lg:pb-5"
//             >
//               <div className="lg:flex lg:gap-44 mx-2 md:mx-0 items-center">
//                 <motion.div
//                   initial={{ x: -150, opacity: 0 }}
//                   animate={{ x: 0, opacity: 1 }}
//                   transition={{
//                     delay: 1,
//                     x: { type: 'spring', stiffness: 60 },
//                     opacity: { duration: 1 },
//                     ease: 'easeIn',
//                     duration: 1,
//                   }}
//                 >
//                   <div className="h-full w-full flex items-center lg:pl-36">
//                     <div className="px-2">
//                       <h1 className="text-center md:text-left mt-5 text-2xl my-3 lg:mt-0 lg:text-4xl font-bold text-[#d96f32]">
//                         What we offer
//                       </h1>
//                       <div className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-3">
//                         {serviceData?.map((data, index) => (
//                           <div
//                             key={index}
//                             className="bg-white/30 dark:bg-black/30 p-3 rounded-lg text-center"
//                           >
//                             <Image
//                               src={
//                                 data?.image
//                                   ? `https://alter-power.co.za/api${data.image}`
//                                   : '/assets/default.jpg'
//                               }
//                               alt={data?.title}
//                               width={150}
//                               height={150}
//                               className="w-full rounded-lg"
//                             />
//                             <p className="mt-2 text-white font-bold">{data?.title}</p>
//                           </div>
//                         ))}
//                       </div>
//                       <div className="mt-5 lg:mt-6">
//                         <Link
//                           href="/services"
//                           className="btn bg-[#D96F32] hover:bg-[#ad6237] text-white"
//                         >
//                           Discover More
//                         </Link>
//                         <Link
//                           href="/contact"
//                           className="btn btn-outline text-white ml-4"
//                         >
//                           Contact Us
//                         </Link>
//                       </div>
//                     </div>
//                   </div>
//                 </motion.div>

//                 <motion.div
//                   initial={{ x: 150, opacity: 0 }}
//                   animate={{ x: 0, opacity: 1 }}
//                   transition={{
//                     delay: 1,
//                     x: { type: 'spring', stiffness: 60 },
//                     opacity: { duration: 1 },
//                     ease: 'easeIn',
//                     duration: 1,
//                   }}
//                 >
//                   <div className="bg-transparent border-[1px] border-sky-200 shadow-xl mx-2 my-4 lg:p-12 p-4 lg:my-12 rounded-lg lg:px-32">
//                     <form ref={form} onSubmit={sendEmail}>
//                       <div className="w-full flex flex-col space-y-4">
//                         <div className="w-full">
//                           <label
//                             htmlFor="first_name"
//                             className="block text-sm font-medium text-white"
//                           >
//                             First Name
//                           </label>
//                           <input
//                             className="px-4 py-2 rounded-lg outline-none w-full lg:w-[400px] mt-1 bg-transparent border-[1px] border-sky-200 text-white"
//                             name="first_name"
//                             id="first_name"
//                             type="text"
//                             placeholder="Your First Name"
//                             required
//                           />
//                         </div>
//                         <div className="w-full">
//                           <label
//                             htmlFor="last_name"
//                             className="block text-sm font-medium text-white"
//                           >
//                             Last Name
//                           </label>
//                           <input
//                             className="px-4 py-2 rounded-lg outline-none w-full lg:w-[400px] mt-1 bg-transparent border-[1px] border-sky-200 text-white"
//                             name="last_name"
//                             id="last_name"
//                             type="text"
//                             placeholder="Your Last Name"
//                             required
//                           />
//                         </div>
//                         <div className="w-full">
//                           <label
//                             htmlFor="email"
//                             className="block text-sm font-medium text-white"
//                           >
//                             Email *
//                           </label>
//                           <input
//                             className="px-4 py-2 rounded-lg outline-none w-full lg:w-[400px] mt-1 bg-transparent border-[1px] border-sky-200 text-white"
//                             name="from_email"
//                             id="email"
//                             type="email"
//                             placeholder="Your Email"
//                             required
//                           />
//                         </div>
//                         <div className="w-full">
//                           <label
//                             htmlFor="phone"
//                             className="block text-sm font-medium text-white"
//                           >
//                             Phone *
//                           </label>
//                           <input
//                             className="px-4 py-2 rounded-lg outline-none w-full lg:w-[400px] mt-1 bg-transparent border-[1px] border-sky-200 text-white"
//                             name="phone"
//                             id="phone"
//                             type="tel"
//                             placeholder="Your Phone Number"
//                             required
//                           />
//                         </div>
//                       </div>

//                       <div className="mt-4">
//                         <h1 className="mb-2 font-semibold text-white">
//                           What service would you like?
//                         </h1>
//                         <RadioGroup
//                           value={service.title}
//                           onValueChange={(title) => {
//                             const selectedService = serviceData.find((s) => s.title === title);
//                             setService({
//                               id: selectedService.id,
//                               title: selectedService.title,
//                             });
//                           }}
//                         >
//                           {serviceData?.map((data) => (
//                             <div key={data?.id} className="flex items-center gap-3 text-white">
//                               <RadioGroupItem
//                                 value={data?.title}
//                                 id={data?.id}
//                                 name="service"
//                                 className="text-[#d96f32] border-[#d96f32] focus:ring-[#d96f32]"
//                               />
//                               <Label htmlFor={data?.id}>{data?.title}</Label>
//                             </div>
//                           ))}
//                         </RadioGroup>
//                         <input type="hidden" name="service" value={service.title} />
//                       </div>

//                       <div className="relative">
//                         <input
//                           className="btn bg-[#D96F32] hover:bg-[#ad6237] text-white w-full mt-6"
//                           type="submit"
//                           value="Get 100% Free Quote Now"
//                         />
//                         <FaLongArrowAltRight className="absolute top-[41px] right-24 text-white" />
//                       </div>
//                     </form>
//                   </div>
//                 </motion.div>
//               </div>
//               <div className="absolute flex bottom-2 right-2 md:bottom-12 md:right-12 space-x-4">
//                 <a
//                   href={slide.prev}
//                   className="btn btn-circle bg-[#D96F32] hover:bg-[#ad6237] outline-none text-white"
//                 >
//                   ❮
//                 </a>
//                 <a
//                   href={slide.next}
//                   className="btn btn-circle bg-[#D96F32] hover:bg-[#ad6237] outline-none text-white"
//                 >
//                   ❯
//                 </a>
//               </div>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// const slides = [
//   {
//     title: 'Looking for a trusted electrician in Cape Town?',
//     description:
//       'Our services include 24/7 emergency electrical call-outs, as well as professional installation of inverters and solar panels.',
//     next: '#slide2',
//     prev: '#slide4',
//   },
//   {
//     title: 'Affordable, Comprehensive Property Solutions',
//     description:
//       'From solar installations to plumbing and electrical support, APS delivers high-quality, cost-effective services to enhance your property.',
//     next: '#slide3',
//     prev: '#slide1',
//   },
//   {
//     title: 'Affordable, Comprehensive Property Solutions',
//     description:
//       'From solar installations to plumbing and electrical support, APS delivers high-quality, cost-effective services to enhance your property.',
//     next: '#slide4',
//     prev: '#slide2',
//   },
//   {
//     title: 'Affordable, Comprehensive Property Solutions',
//     description:
//       'From solar installations to plumbing and electrical support, APS delivers high-quality, cost-effective services to enhance your property.',
//     next: '#slide1',
//     prev: '#slide3',
//   },
// ];

// export default Banner;



'use client';
import React, { useRef, useState, useEffect } from 'react'; // Ensure useEffect is also imported
import { RadioGroup, RadioGroupItem } from '../ui/radio-group';
import { Label } from '../ui/label';
import { FaLongArrowAltRight } from 'react-icons/fa';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Swal from 'sweetalert2';
import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify';
import Image from 'next/image';

const Banner = () => {
  const [service, setService] = useState({ id: null, title: '' });
  const [serviceData, setServiceData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchData = async () => {
    try {
      setIsLoading(true); // Set loading to true before fetch
      const res = await fetch('https://alter-power.co.za/api/services/');
      if (!res.ok) {
        throw new Error('Failed to fetch services');
      }
      const data = await res.json();
      setServiceData(data);
    } catch (error) {
      console.error('Error fetching services:', error);
    } finally {
      setIsLoading(false); // Set loading to false after fetch completes
    }
  };

  useEffect(() => {
    fetchData(); // Call fetchData when the component mounts
  }, []); // Empty dependency array means this runs once when the component is mounted

  const form = useRef();

  // const sendEmail = async (e) => {
  //   e.preventDefault();

  //   if (!service) {
  //     Swal.fire({
  //       title: "Please select a service!",
  //       icon: "warning",
  //     });
  //     return;
  //   }

  //   emailjs.init('BFRNhqWPmuA7Jz0cu'); 

  //   emailjs
  //     .sendForm(
  //       'service_lq0ik1m', 
  //       'template_bd4i9bj',
  //       form.current
  //     )
  //     .then(
  //       () => {
  //         Swal.fire({
  //           title: "Your request has been sent successfully!",
  //           text: "You clicked the button!",
  //           icon: "success"
  //         });

  //         form.current.reset();
  //       },
  //       (error) => {
  //         console.log('FAILED...', error.text);
  //       },
  //     );

  //   const formElement = e.target;
  //   const formData = new FormData(formElement);
  //   const payload = {
  //     customer_first_name: formData.get('first_name'),
  //     customer_last_name: formData.get('last_name'),
  //     customer_email: formData.get('from_email'),
  //     customer_phone: formData.get('phone'),
  //     selected_service: service.id,
  //   };

  //   try {
  //     const response = await fetch('https://alter-power.co.za/api/message/quote-request/', {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //       body: JSON.stringify(payload),
  //     });

  //     if (!response.ok) {
  //       toast.error('Failed to post');
  //     } else {
  //       await emailjs.sendForm(
  //         process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
  //         process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
  //         formElement
  //       );
  //       toast.success('Successful');
  //       formElement.reset();
  //       setService({ id: null, title: '' });
  //     }
  //   } catch (error) {
  //     // toast.error('Failed');
  //     console.error('Error:', error);
  //   }
  // };
















  //Updated:

// ...existing code...


const sendEmail = async (e) => {
  e.preventDefault();

  // Check if a service is selected
  if (!service.title) {
    Swal.fire({
      title: "Please select a service!",
      icon: "warning",
    });
    return;
  }

  emailjs.init('LX9svQrEVuINGePQm');

  try {
    await emailjs.sendForm(
      'service_a5654uh',
      'template_r00e2p3',
      form.current
    );

    Swal.fire({
      title: "Quote Request Sent Successfully!",
      icon: "success"
    });

    form.current.reset();
    setService({ id: null, title: '' }); // Reset service after sending
  } catch (error) {
    console.log('Email send failed...', error.text);
    toast.error('Email sending failed!');
    return;
  }

  const formElement = e.target;
  const formData = new FormData(formElement);
  const payload = {
    customer_first_name: formData.get('first_name'),
    customer_last_name: formData.get('last_name'),
    customer_email: formData.get('from_email'),
    customer_phone: formData.get('phone'),
    selected_service: service.id,
  };

  try {
    const response = await fetch('https://alter-power.co.za/api/message/quote-request/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      toast.error('Failed to post data');
    } else {
      formElement.reset();
      setService({ id: null, title: '' });
    }
  } catch (error) {
    toast.error('Failed to post data');
    console.error('Error posting data:', error);
  }
};
// ...existing code...

  

  return (
    <div className="mt-[95px] md:mt-[75px]">
      {isLoading ? (
        <div className="flex justify-center items-center min-h-[90vh]">
          <span className="loading loading-dots loading-lg text-[#D96F32]"></span>
        </div>
      ) : (
        <div className="carousel w-full rounded-xl rounded-t-none">
          {slides?.map((slide, index) => (
            <div
              key={index}
              id={`slide${index + 1}`}
              style={{
                backgroundImage: `linear-gradient(45deg, rgba(5, 15, 60, 0.9), rgba(0, 0, 0, 0.8)),url(/${index + 1}.jpeg)`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
              }}
              className="carousel-item relative w-full h-[90vh] bg-top bg-no-repeat pb-[700px] md:pb-[1000px] lg:pb-5"
            >
              <div className="lg:flex lg:gap-44 mx-2 md:mx-0 items-center">
                <motion.div
                  initial={{ x: -150, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{
                    delay: 1,
                    x: { type: 'spring', stiffness: 60 },
                    opacity: { duration: 1 },
                    ease: 'easeIn',
                    duration: 1,
                  }}
                >
                  <div className="h-full w-full flex items-center lg:pl-36">
                    <div className="px-2">
                      <h1 className="text-center md:text-left mt-5 text-2xl my-3 lg:mt-0 lg:text-4xl font-bold text-[#d96f32]">
                        What we offer
                      </h1>
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-3">
                        {serviceData?.map((data, index) => (
                          <div
                            key={index}
                            className="bg-white/30 dark:bg-black/30 p-3 rounded-lg text-center"
                          >
                            <Image
                              src={
                                data?.image
                                  ? `https://alter-power.co.za/api${data.image}`
                                  : '/assets/default.jpg'
                              }
                              alt={data?.title}
                              width={150}
                              height={150}
                              className="w-full rounded-lg"
                            />
                            <p className="mt-2 text-white font-bold">{data?.title}</p>
                          </div>
                        ))}
                      </div>
                      <div className="mt-5 lg:mt-6">
                        <Link
                          href="/services"
                          className="btn bg-[#D96F32] hover:bg-[#ad6237] text-white"
                        >
                          Discover More
                        </Link>
                        <Link
                          href="/contact"
                          className="btn btn-outline text-white ml-4"
                        >
                          Contact Us
                        </Link>
                      </div>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ x: 150, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{
                    delay: 1,
                    x: { type: 'spring', stiffness: 60 },
                    opacity: { duration: 1 },
                    ease: 'easeIn',
                    duration: 1,
                  }}
                >
                  <div className="bg-transparent border-[1px] border-sky-200 shadow-xl mx-2 my-4 lg:p-12 p-4 lg:my-12 rounded-lg lg:px-32">
                    <form ref={form} onSubmit={sendEmail}>
                      <div className="w-full flex flex-col space-y-4">
                        <div className="w-full">
                          <label
                            htmlFor="first_name"
                            className="block text-sm font-medium text-white"
                          >
                            First Name
                          </label>
                          <input
                            className="px-4 py-2 rounded-lg outline-none w-full lg:w-[400px] mt-1 bg-transparent border-[1px] border-sky-200 text-white"
                            name="first_name"
                            id="first_name"
                            type="text"
                            placeholder="Your First Name"
                            required
                          />
                        </div>
                        <div className="w-full">
                          <label
                            htmlFor="last_name"
                            className="block text-sm font-medium text-white"
                          >
                            Last Name
                          </label>
                          <input
                            className="px-4 py-2 rounded-lg outline-none w-full lg:w-[400px] mt-1 bg-transparent border-[1px] border-sky-200 text-white"
                            name="last_name"
                            id="last_name"
                            type="text"
                            placeholder="Your Last Name"
                            required
                          />
                        </div>
                        <div className="w-full">
                          <label
                            htmlFor="email"
                            className="block text-sm font-medium text-white"
                          >
                            Email *
                          </label>
                          <input
                            className="px-4 py-2 rounded-lg outline-none w-full lg:w-[400px] mt-1 bg-transparent border-[1px] border-sky-200 text-white"
                            name="from_email"
                            id="email"
                            type="email"
                            placeholder="Your Email"
                            required
                          />
                        </div>
                        <div className="w-full">
                          <label
                            htmlFor="phone"
                            className="block text-sm font-medium text-white"
                          >
                            Phone *
                          </label>
                          <input
                            className="px-4 py-2 rounded-lg outline-none w-full lg:w-[400px] mt-1 bg-transparent border-[1px] border-sky-200 text-white"
                            name="phone"
                            id="phone"
                            type="tel"
                            placeholder="Your Phone Number"
                            required
                          />
                        </div>
                      </div>

                      <div className="mt-4">
                        <h1 className="mb-2 font-semibold text-white">
                          What service would you like?
                        </h1>
                        <RadioGroup
                          value={service.title}
                          onValueChange={(title) => {
                            const selectedService = serviceData.find((s) => s.title === title);
                            setService({
                              id: selectedService.id,
                              title: selectedService.title,
                            });
                          }}
                        >
                          {serviceData?.map((data) => (
                            <div key={data?.id} className="flex items-center gap-3 text-white">
                              <RadioGroupItem
                                value={data?.title}
                                id={data?.id}
                                name="service"
                                className="text-[#d96f32] border-[#d96f32] focus:ring-[#d96f32]"
                              />
                              <Label htmlFor={data?.id}>{data?.title}</Label>
                            </div>
                          ))}
                        </RadioGroup>
                        <input type="hidden" name="service" value={service.title} />
                      </div>

                      <div className="relative">
                        <input
                          className="btn bg-[#D96F32] hover:bg-[#ad6237] text-white w-full mt-6"
                          type="submit"
                          value="Get 100% Free Quote Now"
                        />
                        <FaLongArrowAltRight className="absolute top-[41px] right-24 text-white" />
                      </div>
                    </form>
                  </div>
                </motion.div>
              </div>
              <div className="absolute flex bottom-2 right-2 md:bottom-12 md:right-12 space-x-4">
                <a
                  href={slide.prev}
                  className="btn btn-circle bg-[#D96F32] hover:bg-[#ad6237] outline-none text-white"
                >
                  ❮
                </a>
                <a
                  href={slide.next}
                  className="btn btn-circle bg-[#D96F32] hover:bg-[#ad6237] outline-none text-white"
                >
                  ❯
                </a>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

const slides = [
  {
    title: 'Looking for a trusted electrician in Cape Town?',
    description:
      'Our services include 24/7 emergency electrical call-outs, as well as professional installation of inverters and solar panels.',
    next: '#slide2',
    prev: '#slide4',
  },
  {
    title: 'Affordable, Comprehensive Property Solutions',
    description:
      'From solar installations to plumbing and electrical support, APS delivers high-quality, cost-effective services to enhance your property.',
    next: '#slide3',
    prev: '#slide1',
  },
  {
    title: 'Affordable, Comprehensive Property Solutions',
    description:
      'From solar installations to plumbing and electrical support, APS delivers high-quality, cost-effective services to enhance your property.',
    next: '#slide4',
    prev: '#slide2',
  },
  {
    title: 'Affordable, Comprehensive Property Solutions',
    description:
      'From solar installations to plumbing and electrical support, APS delivers high-quality, cost-effective services to enhance your property.',
    next: '#slide1',
    prev: '#slide3',
  },
];

export default Banner;
