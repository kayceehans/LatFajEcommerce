import React from "react";
import "../style/shoppingCart.css";
import ME from '../assets/images/about-me.jpg'
import { AiFillCloseCircle } from "react-icons/ai";


function ShoppingCart({
    visibilty,
    products,
    onProductRemove,
    onClose,
    onQuantityChange,
}) {
    return (
        <div
            className="modal"
            style={{
                display: visibilty
                    ? "block"
                    : "none",
            }}>
            <div className="shoppingCart">        
                <div className="header">
                    <h2>About me</h2>
                    <button
                        className="btn close-btn"
                        onClick={onClose}>   
                        <AiFillCloseCircle
                            size={30}
                        />
                    </button>
                </div>
                <div className="cart-products">                   
                    <section id='about'> 
                        <div className='container about__container'>
                            <div className='about__me'>
                                <img src={ME} alt='About Image' />
                            </div>
                            <div className="about__content">
                                <div className="about__cards">
                                    <article className='about__card'>
                                       {/* <FaAward className='about__icon' />*/}
                                        <h5>Experience</h5>
                                        <small>Chandelliers and Electrical Gadgests</small>                                        
                                    </article>
                                    <article className='about__card'>
                                       {/* <FiUsers className='about__icon' />*/}
                                        <h5>Clients</h5>
                                        <small>300+ Nationwide</small>
                                    </article>
                                    {/*<article className='about__card'>*/}
                                    {/*    */}{/*<VscFolderLibrary className='about__icon' />*/}
                                    {/*    <h5>Projects</h5>*/}
                                    {/*    <small>80+ completed projects</small>*/}
                                    {/*</article>*/}
                                </div>
                                <p>
                                    My name is Jamiu Momoh, Ceo LatFaj Power venture and a graduate of Economics, Adekunle Ajasin University Akungba Akoko Ondo state. 
                                </p>
                                <div className="about__cards">
                                    <article className='about__card'>
                                        {/* <FaAward className='about__icon' />*/}
                                        <h5>Mobile</h5>
                                        <small>08053597333</small><br/>
                                        <small>08021115303</small>
                                    </article>
                                    <article className='about__card'>
                                        {/* <FiUsers className='about__icon' />*/}
                                        <h5>Email</h5>
                                        <small>latfajpowerventure@gmail.com</small>
                                    </article>
                                    {/*<article className='about__card'>*/}
                                    {/*    */}{/*<VscFolderLibrary className='about__icon' />*/}
                                    {/*    <h5>Projects</h5>*/}
                                    {/*    <small>80+ completed projects</small>*/}
                                    {/*</article>*/}
                                </div>
                                <a href='#contact' className='btn btn-primary'>Let's talk</a>
                            </div>
                        </div>
                    </section>

                </div>
            </div>
        </div>
    );
}

export default ShoppingCart;
