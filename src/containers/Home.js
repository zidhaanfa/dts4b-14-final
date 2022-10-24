
import React from "react";
import {
  AiOutlineSearch,
  AiOutlineCheck,
  AiFillCheckCircle
} from "react-icons/ai";
import {
  Container,
  Row,
  Col,
  Form,
  FormControl,
  Button,
  Carousel
} from "react-bootstrap";
import Buttons from '@mui/material/Button';

import "./Home.css";

export default function HomePageBanner() {
    return (
      <div>
        <div className="homepagebannersection">
            <Container>
              <Row className="homepagebannerpadiing">
                <Col className="hpbcoldirst">
                  <div className="homepagecolfirst">
                    <h2 class="homesection-title ">
                      Tempat mencari film favorit kamu.
                    </h2>
                    <div class="heading__description">
                      <p>
                        Lihat review dan rating dari film yang kamu suka.
                      </p>
                    </div>
                    <div class="course-search">
                      <div class="elementor-widget-container">
                        <div class="header-course-search">
                          <Form className="d-flex hpbform">
                            <FormControl
                              type="search"
                              placeholder="Search"
                              className="mr-2"
                              aria-label="Search"
                            />
                            <Buttons variant="contained" size="large" color="success">
                              Cari Film
                            </Buttons>
                          </Form>
                        </div>
                      </div>
                    </div>
                    <div className="homecheckicon">
                      <ul>
                        <li className="hide">
                          <span>
                            <AiOutlineCheck className="check" color="green" />
                          </span>
                          <span>Lebih dari 10 juta film.</span>
                        </li>
                        <li className="hide">
                          <span>
                            <AiOutlineCheck className="check" color="green" />
                          </span>
                          <span>
                            Hasil review ter-update.
                          </span>
                        </li>
                        <li className="hide">
                          <span>
                            <AiOutlineCheck className="check" color="green" />
                          </span>
                          <span>
                            Rating dari seluruh dunia.
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </Col>
              </Row>
            </Container>
          </div>
      </div>
    );
  }