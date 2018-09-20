import React, { Component } from "react";
import { Mask, Row, Fa, Button, View, Container } from "mdbreact";
import { Link } from "react-router-dom";
class Landing extends Component {
  render() {
    return (
      <View>
        <Mask className="d-flex justify-content-center align-items-center gradient">
          <Container>
            <Row>
              <div style={{ width: "100%", margin: "auto" }}>
                <header className="masthead">
                  <div className="container">
                    <div className="intro-text">
                      <div className="intro-lead-in">
                        Welcome To My Portfolio!
                      </div>
                      <div className="intro-heading text-uppercase">
                        It's Nice To Meet You
                      </div>
                      <Link to="/contact">
                        <Button rounded color="white">
                          <Fa icon="home" />
                          Contact Me
                        </Button>
                      </Link>
                    </div>
                  </div>
                </header>
              </div>
            </Row>
          </Container>
        </Mask>
      </View>
    );
  }
}

export default Landing;
