import React from 'react';
import Navbar from '../Components/Navbar';
import ProfileScreen from '../Profile/ProfileScreen';
import Footer from '../component/Footer/Footer';

export default function ViewProfile() {
  return (
    <><div>
        <Navbar />
    </div><div>
            <ProfileScreen />
        </div><div>
            <Footer />
        </div></>
    
    
);
}
