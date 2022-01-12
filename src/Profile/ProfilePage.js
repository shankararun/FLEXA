import React from 'react'
import Navbar from '../Components/Navbar'
import ProfileScreen from './ProfileScreen'
import Footer from '../Components/Footer'

//This page contains header, ProfileScreen and Footer
//It contains the default route "/profile"

const ProfilePage = ()  => {
    return (
        <><div>
            <Navbar />
        </div><div>
                <ProfileScreen />
            </div><div>
                <Footer />
            </div></>
        
        
    )
}

export default ProfilePage;
