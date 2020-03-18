import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import './style.css';


export const Footer = (props) => {
    return(
        <div>
            <footer className='footer'>
            <Container>
                <Row>
                    <Col md={12}>
                        <a className='project-github' href='https://github.com/Nicole103/U-Travel' rel='noopener noreferrer' target='_blank'><i className='fab fa-github'></i></a>
                    </Col>
                </Row>
                <Row>
                    <Col md={12}>
                        <a href='https://github.com/alixgrillo' rel="noopener noreferrer" target='_blank' className='profile-links'>Alix Grillo</a> 
                        | 
                        <a href='https://github.com/stacyholtz6' rel="noopener noreferrer" target='_blank' className='profile-links'>Stacy Holtz</a> 
                        | 
                        <a href='https://github.com/Nicole103' rel="noopener noreferrer" target='_blank' className='profile-links'>Nicole Heersink</a> 
                        | 
                        <a href='https://github.com/joditivis' rel="noopener noreferrer" target='_blank' className='profile-links'>Jodi Tivis</a>
                    </Col>
                </Row>
                <Row>
                    <Col md={12}>
                        <div className='copyright'>
                            © 2020 U-Travel
                        </div>
                    </Col>
                </Row>
            </Container>
            </footer>
        </div>
    );
};

export default Footer;