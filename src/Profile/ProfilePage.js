import React from 'react'
import Navbar from '../components/NavBar/Navbar'
import ProfileScreen from './ProfileScreen'
import Footer from '../components/Footer/Footer'


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
