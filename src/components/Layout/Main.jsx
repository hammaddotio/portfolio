import React from 'react'
import Footer from './Footer';
import SideBar from './SideBar';
import PageTransition from './Animate';
import SideBarAnimate from './SideBarAnimate';

const Main = ({ children }) => {
    return (

        <div className=''>
            <div className='flex gap-10'>
                <SideBarAnimate>
                    <SideBar />
                </SideBarAnimate>

                <div className='container my-5'>
                    <PageTransition>
                        {children}
                    </PageTransition>
                </div>
            </div>
            {/* <Footer /> */}
        </div>

    )
}

export default Main
