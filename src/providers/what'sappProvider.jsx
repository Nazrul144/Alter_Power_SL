"use client"
import React, { createContext, useContext, useState } from "react";
const WhatsAppContext = createContext();

export const WhatsApp = ( {children}) => {
  const [WhatsAppNumber, setNumber] = useState([])
  
 
  return (
    <WhatsAppContext.Provider value={{WhatsAppNumber, setNumber}}>
        {children}
    </WhatsAppContext.Provider>
  );
};


export const  getWhatsappNumber = () => useContext(WhatsAppContext) ;
