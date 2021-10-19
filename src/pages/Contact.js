import React from 'react';
import Mouse from '../components/Mouse';
import Navigation from '../components/Navigation';
import Logo from '../components/Logo';
import CopyToClipboard from 'react-copy-to-clipboard';
import SocialNetwork from '../components/SocialNetwork';
import ButtonsBottom from '../components/ButtonsBottom';
import ContactForm from '../components/ContactForm';

const Contact = () => {
    return (
        <main>
            <Mouse />
            <div className="contact">
                <Navigation />
                <Logo />
                <ContactForm />
                <div className="contact-infos">
                    <div className="address">
                        <div className="content">
                            <h4>adresse</h4>
                            <p>12 rue du Code</p>
                            <p>Paris</p>
                        </div>
                    </div>
                    <div className="phone">
                        <div className="content">
                            <h4>téléphone</h4>
                            <CopyToClipboard text="0675 54 78985" className="hover">
                                <p style={{ cursor: 'pointer' }} className="clipboard" onClick={() => {
                                    alert("Téléphone copié !");
                                }}>06 754 545 68743
                                </p>
                            </CopyToClipboard>
                        </div>
                    </div>
                    <div className="email">
                        <div className="content">
                            <h4>email</h4>
                            <CopyToClipboard text="yeah@gmail.com" className="hover">
                            <p style={{ cursor: 'pointer' }} className="clipboard" onClick={() => {
                                    alert("Mail copié !");
                                }}>yeah@gmail.com
                                </p>
                            </CopyToClipboard>
                        </div>
                    </div>
                    <SocialNetwork />
                </div>
                <ButtonsBottom left={'/project-4'} />
            </div>
        </main>
    );
};

export default Contact;