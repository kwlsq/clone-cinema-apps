import React, { Component } from 'react';
import { SocialIcon } from 'react-social-icons';
import './Footer.css';

class FooterComp extends Component {
    state = {}
    render() {
        return (
            <div className="footer-cont">
                <div className="bot-ads-cont" >
                    <div className="bot-ads">
                        <img src="https://tpc.googlesyndication.com/simgad/15323312126400135546?sqp=4sqPyQQ7QjkqNxABHQAAtEIgASgBMAk4A0DwkwlYAWBfcAKAAQGIAQGdAQAAgD-oAQGwAYCt4gS4AV_FAS2ynT4&rs=AOga4qmLSwFobSu6dGGe0DZVUrzLq1cdxg" alt="iklan" />
                    </div>
                </div>
                <div className="footer-cont">
                    <div className="footer">
                        <div className="bot-nav">
                            <div className="bot-nav-text1">Profile</div>
                            <div className="bot-nav-text1">Terms of Use</div>
                            <div className="bot-nav-text2">Advertising</div>
                        </div>
                        <div className="social-media-icon-cont">
                            <div className="social-media-icon"><SocialIcon url="http://instagram.com/jaketrent" style={{ height: 35, width: 35 }} /></div>
                            <div className="social-media-icon"><SocialIcon url="http://facebook.com/jaketrent" style={{ height: 35, width: 35 }} /></div>
                            <div className="social-media-icon"><SocialIcon url="http://twitter.com/jaketrent" style={{ height: 35, width: 35 }} /></div>
                            <div className="social-media-icon"><SocialIcon url="http://youtube.com/jaketrent" style={{ height: 35, width: 35 }} /></div>
                        </div>
                    </div>
                    <div className="copyright-cont">
                        <div className="copyright">
                            © 1999-2012 21Cineplex.com. All materials and contents (texts, graphics, and every attributes) of 21Cineplex or 21Cineplex.com website are copyrights and trademarks of PT Nusantara Sejahtera Raya.
                            Any commercial usage of the materials and contents is forbidden without prior permission from PT Nusantara Sejahtera Raya. There is no other institutions/agencies outside
                            PT Nusantara Sejahtera Raya allowed to use www.21Cineplex.com (21Cineplex website) without prior permission from PT Nusantara Sejahtera Raya
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default FooterComp;