import React from 'react'
import Navbar from '../Components/Navbar'
import Profile from './Profile'
import Footer from '../component/Footer/Footer'

//This page contains header, ProfileScreen and Footer
//It contains the default route "/profile"

const ProfilePage = ()  => {
    return (
        <><div>
            <Navbar />
        </div><div>
                <Profile />
            </div><div>
                <Footer />
            </div></>
        
        
    )
}

export default ProfilePage;
