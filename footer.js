import React from 'react'
import Footer from './footer/footer'
import Icon from './footer/icon'

export function FooterContainer() {
    return (
        <Footer>
            <Footer.Wrapper>
            <Footer.Row>
                <Footer.Column>
                <Footer.Title>Go travel</Footer.Title>
                    <Footer.Link href="#">Khám phá Việt Nam trong từng hơi thở</Footer.Link>
                    
                </Footer.Column>
                <Footer.Column>
                <Footer.Title></Footer.Title>
                    <Footer.Link href="#"><Icon className="fab fa-facebook-f" />Facebook</Footer.Link>
                    <Footer.Link href="#"><Icon className="fab fa-instagram" />Instagram</Footer.Link>
                </Footer.Column>
                <Footer.Column>
                <Footer.Title></Footer.Title>
                    <Footer.Link href="#"><Icon className="fab fa-youtube" />Youtube</Footer.Link>
                    <Footer.Link href="#"><Icon className="fab fa-twitter" />Twitter</Footer.Link>
                </Footer.Column>
                <Footer.Column>
                <Footer.Title>Contact</Footer.Title>
                     <Footer.Link href="#">Team 2 - UIT</Footer.Link>
                     <Footer.Link href="#">May 10 2023</Footer.Link>
                </Footer.Column>
            </Footer.Row>
            </Footer.Wrapper>
        </Footer>
    )
}