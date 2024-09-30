
import { NavLink } from "react-router-dom/cjs/react-router-dom";
import { Icon } from 'react-icons-kit'
import { home, phone, location, mail3 } from 'react-icons-kit/icomoon'
export const Footer = () => {
    return (



        < div className='main-color' >
            <footer className='container d-flex flex-wrap 
                justify-content-between align-items-center py-5 main-color'>
                <div className="container p-4 pb-0">

                    <section className="">

                        <div className="row">

                            <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
                                <h4 className="text-white" >
                                     opGTFSMonitor
                                </h4>

                            </div>


                            <hr className="w-100 clearfix d-md-none" />


                            <div className="col-md-10 col-lg-10 col-xl-10 mx-auto mt-3">

                                <div className="row">
                                <div className="col">
                                <p className="text-white">
                                    <NavLink className='nav-link' to='/home'>
                                        <p className="text-white">Start</p>
                                    </NavLink>
                                </p>
                                </div>

                                <div className="col">
                                <p className="text-white">
                                    <NavLink className='nav-link' to='/impressum'>
                                        <p className="text-white">Impressum</p>
                                    </NavLink>
                                </p>
                                </div>
                                <div className="col">
                                <p className="text-white">
                                    <NavLink className='nav-link' to='/datenschutz'>
                                        <p className="text-white">Datenschutz</p>
                                    </NavLink>
                                </p>
                                </div>



                                </div>

                                
                            
                              {/*   <p className="text-white">
                                    <NavLink className='nav-link' to='/impressum'>
                                        <p className="text-white">Impressum</p>
                                    </NavLink>
                                </p>
                                <p className="text-white">
                                    <NavLink className='nav-link' to='/datenschutz'>
                                        <p className="text-white">Datenschutz</p>
                                    </NavLink>
                                </p> */}

                            </div>


                            <hr className="w-100 clearfix d-md-none" />


                            {/* <div className="col-md-5 col-lg-3 col-xl-3 mx-auto mt-3">

                                <p> <Icon icon={location} size={24} style={{ color: 'white' }} />
                                    &nbsp;&nbsp;&nbsp;<a className="text-white">Sample Str. Aachen 97865</a>
                                </p>
                                <p> <Icon icon={mail3} size={24} style={{ color: 'white' }} />
                                    &nbsp;&nbsp;&nbsp;<a className="text-white">info@gmail.com</a>
                                </p>
                                <p><Icon icon={phone} size={24} style={{ color: 'white' }} />
                                    &nbsp;&nbsp;&nbsp;<a className="text-white">+49-12345 55555</a>
                                </p>

                            </div>
 */}



                        </div>

                    </section>


                    <hr className="my-3" />


                    <section className="p-3 pt-0">
                        <div className="row d-flex align-items-center">

                            <div className="col-md-7 col-lg-8 text-center text-md-start">

                                <div className="p-3">

                                    <a className="text-white" href="https://mdbootstrap.com/">© 2024 BFRK NVBW</a>
                                </div>

                            </div>





                        </div>
                    </section>

                </div>

            </footer>
        </div >
    );
}
