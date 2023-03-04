import React from 'react';

const Footer = () => {
    return (
        <footer className="p-4 bg-white md:p-6 h-24 mt-14 max-w-5xl rounded-full mx-auto border rounded-b-2xl border-x-8 mb-5 text-center font-extralight lg:text-2xl text-xs ">
            <p className='flex justify-center lg:mt-0 mt-5'>
                © 2023<span className="text-black font-semibold mx-2 hover:underline">Shakur's Blog.</span>All Rights Reserved.
            </p>
        </footer>
    );
};

export default Footer;