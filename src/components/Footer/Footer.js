import React from "react";
import { Nav, Row, Col } from "react-bootstrap";
import "./Footer.css";
// import { BiMap } from "react-icons/bi";
import { HiPhoneOutgoing } from "react-icons/hi";

import {
  AiOutlineMail,
  AiOutlineInstagram,
  AiOutlineLinkedin,
  AiFillTwitterCircle
} from "react-icons/ai";
import { TiSocialFacebookCircular } from "react-icons/ti";
import { BiMap } from "react-icons/bi";

export default function Footer() {
    return (
      <div className="lfotter">
        <div className="lfmrginsda">
          <Row className="lfforbottom">
            <Col sm={7} className="lfborderded">
              <Row>
                
              </Row>
            </Col>
            <Col className="lfborderded bb" sm={5}>
              <div className="elementskit-infobox text- text-left icon-lef-right-aligin elementor-animation- media">
                <h2 className="lfekit-heading--title elementskit-section-title ">
                  Get in touch
                </h2>
  
                <ul className="lfboxx">
                  
                  <li className="box-body">
                    <AiOutlineMail
                      color="red"
                      className="fticonpadding"
                      size={25}
                    />
                    <p className="lfpsa">support@courselog.com </p>
                  </li>
                </ul>
                <ul className="ekit_social_media">
                  <li className="elementor-repeater-item-e9af37a">
                    <a href="#" className="facebook">
                      <TiSocialFacebookCircular color="white" size={35} />
                    </a>
                  </li>
                  <li className="elementor-repeater-item-e9af37a">
                    <a href="#" className="facebook">
                      <AiOutlineInstagram color="white" size={35} />
                    </a>
                  </li>
                  <li className="elementor-repeater-item-e9af37a">
                    <a href="#" className="facebook">
                      <AiOutlineLinkedin color="white" size={35} />
                    </a>
                  </li>
                  <li className="elementor-repeater-item-e9af37a">
                    <a href="#" className="facebook">
                      <AiFillTwitterCircle color="white" size={35} />
                    </a>
                  </li>
                </ul>
              </div>
            </Col>
          </Row>
          
        </div>
      </div>
    );
  }