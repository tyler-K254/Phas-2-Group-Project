import React from 'react';


function Welcome(){
    return (
        <>       
        <div className='Welcome-div'>
        <div>
            <h1 className='Header1'>WELCOME</h1>
            <p className='p-line'>This is a product app that focuses on smartphones and computers.</p>
            <p className='p-line'>It includes items from the following manufacturers:</p>
            <div className='logo-div'>
                <img className='samsung-logo' src='/Images/samsung-logo-on-transparent-background-free-vector-removebg-preview.png' alt='samsung-logo' />
                <img className='apple-logo' src='/Images/iphone-logo-17-removebg-preview.png' alt='apple-logo' />
                <img className='oppo-logo' src='/Images/png-clipart-oppo-logo-phone-identity-removebg-preview.png' alt='oppo-logo' />
                <img className='huawei-logo' src='/Images/huawei-logo-png-hd-0.png' alt='huawei-logo' />
                <img className='infinix-logo' src='/Images/589-5894144_infinix-infinix-mobile-logo-hd-png-download-removebg-preview.png' alt='infinix-logo' />
            </div>
            <h3 className='footer1'>The app allows users to view, edit, delete and update products.</h3>
        </div>
        </div>
       
        </>
    )
}

export default Welcome