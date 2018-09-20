import React from "react";
import { Input, Button, Fa } from "mdbreact";

class FormsPage extends React.Component {
  render() {
    return (
      <form className="container-fluid" id="haf">
        <div className="row">
          <div className="col-md-6">
            <Input
              label="Your name"
              group
              type="text"
              validate
              error="wrong"
              success="right"
            />
          </div>

          <div className="col-md-6">
            <Input
              label="Subject"
              group
              type="text"
              validate
              error="wrong"
              success="right"
            />
          </div>

          <div className="col-md-6">
            <Input
              label="Your email"
              group
              type="email"
              validate
              error="wrong"
              success="right"
            />
          </div>
          <div className="col-md-6">
            <Input type="textarea" rows="2" label="Your message" />
          </div>
          <div className="col-md-6">
            <Button color="primary col-md-6">
              Send <Fa icon="paper-plane-o" className="ml-1" />
            </Button>
          </div>
        </div>
      </form>
    );
  }
}

export default FormsPage;
