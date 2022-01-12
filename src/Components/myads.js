import React from 'react'
import Navbar from './Navbar'
import Recommend from './recommend'
import Footer from './Footer'

//This page contains header ,'Reccomend.js' and footer
//This page is used to display the contents of 'Myads.js' in the profile Dashboard
//It contains the default route of '/myads'

const Myads = () => {
    return (
        <><div>
            <Navbar />
        </div><div>
                <Recommend />
            </div><div>
                <Footer />
            </div></>
    )
}

export default Myads;
