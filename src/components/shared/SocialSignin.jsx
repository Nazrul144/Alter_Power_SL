'use client'
import { signIn, useSession } from 'next-auth/react';
import { useSearchParams } from 'next/navigation';

import React from 'react';
import { FaGoogle } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
const SocialSignin = () => {
 
  const searchParams = useSearchParams()
  const path = searchParams.get('redirect')
  const session = useSession()
    const handleSocialSignIn = async(provider)=>{
        const resp = await signIn(provider, {
          redirect: true,
          callbackUrl: path ? path : '/'
        })
        
    }
    return (
        <div className="flex gap-4 justify-center mt-4">
        <button onClick={()=>handleSocialSignIn('google')}>
          <FaGoogle className="text-xl" />
        </button>
        <button>
          <FaFacebook className="text-xl" />
        </button>
        <button>
          <FaGithub className="text-xl" />
        </button>
        <button>
          <FaLinkedinIn className="text-xl" />
        </button>
      </div>
    );
}

export default SocialSignin;
