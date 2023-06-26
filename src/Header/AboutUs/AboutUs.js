import './AboutUs.css'
export default function AboutUs() {
    return (
        <div className="aboutus">
            <h1 style={{textAlign:'center'}}>About Us</h1>

            <div className='rowaboutus'>
                <div className='col'>
                    <div className='handle_aboutus'>
                        <h4>Company</h4>
                        <p style={{ margin: '10px 0px' }}>Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do eiusmod tempor incididun.
                            Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do eiusmod tempor incididunt
                            ut labore et dolore magna aliqua. Ut enim ad minim veniam. Lorem ipsum dolor sit amet conse
                            ctetur adipisicing elit.</p>
                        <ul>
                            <li>Top quality products</li>
                            <li>Best customer service</li>
                            <li>30-days money back guarantee</li>
                        </ul>
                    </div>
                </div >
                <div className='col'>
                    <div className='handle_aboutus'>
                        <h4>Our Team</h4>
                        <img src='https://img.thuthuat123.com/uploads/2019/07/16/hinh-nen-cong-nghe-cho-laptop_100523537.jpg'></img>
                        <b>Lorem set sint occaecat cupidatat non</b>
                        <p style={{ marginTop: '10px' }}>Eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.</p>
                    </div>
                </div >
                <div className='col'>
                    <div className='handle_aboutus'>
                        <h4>Testimonials</h4>
                        <p style={{ margin: '10px 0px' }}>“Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do eiusmod tempor
                            incididunt ut labore et dolore magna aliqua. Ut enim ad minim.”.</p>
                        <b>Lorem ipsum dolor sit</b>
                        <p>“Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
                            mollit anim id est laborum. Lorem ipsum dolor sit amet conse ctetur adipisicing elit.
                            Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do eiusmod.”</p>
                        <b>Ipsum dolor sit</b>
                    </div>
                </div >
            </div >
        </div>
    )
}