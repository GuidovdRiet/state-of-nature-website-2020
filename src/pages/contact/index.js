import React from "react";
import { navigate } from "gatsby-link";
import styled from "styled-components";

// Components
import Layout from "../../components/Layout";
import Button from "../../components/button/Button";

function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
}

export default class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isValidated: false };
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": form.getAttribute("name"),
        ...this.state
      })
    })
      .then(() => navigate(form.getAttribute("action")))
      .catch(error => alert(error));
  };

  render() {
    return (
      <Layout>
        <Wrapper>
          <h1>Contact</h1>
          <form
            name="contact"
            method="post"
            action="/contact/thanks/"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
            onSubmit={this.handleSubmit}
          >
            {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
            <input type="hidden" name="form-name" value="contact" />
            <div hidden>
              <label>
                Don’t fill this out:{" "}
                <input name="bot-field" onChange={this.handleChange} />
              </label>
            </div>
            <div className="field">
              <label className="label" htmlFor={"name"}>
                Naam
              </label>
              <div className="control">
                <input
                  className="input"
                  placeholder="Naam"
                  type={"text"}
                  name={"name"}
                  onChange={this.handleChange}
                  id={"name"}
                  required={true}
                />
              </div>
            </div>
            <div className="field">
              <label className="label" htmlFor={"email"}>
                Email
              </label>
              <div className="control">
                <input
                  className="input"
                  placeholder="Email"
                  type={"email"}
                  name={"email"}
                  onChange={this.handleChange}
                  id={"email"}
                  required={true}
                />
              </div>
            </div>
            <div className="field">
              <label className="label" htmlFor={"message"}>
                Bericht
              </label>
              <div className="control">
                <textarea
                  className="textarea"
                  name={"message"}
                  placeholder="Bericht"
                  onChange={this.handleChange}
                  id={"message"}
                  required={true}
                />
              </div>
            </div>
            <div className="field">
              <Button className="button is-link" type="submit">
                Verstuur
              </Button>
            </div>
          </form>
        </Wrapper>
      </Layout>
    );
  }
}

const Wrapper = styled.div`
  background-color: #ffb7b7;
  padding: 40px 30px;
  @media (max-width: 1150px) {
    margin: 0 16px;
  }
  .control {
    margin-bottom: 25px;
  }
  .label {
    margin-bottom: 10px;
  }
  .input,
  .textarea {
    border: 0;
    width: 100%;
    padding: 10px;
  }
  .input {
    height: 50px;
  }
  .textarea {
    width: 100%;
    height: 300px;
  }
`;
