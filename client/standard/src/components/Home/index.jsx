import React from "react";
import Stack from "react-bootstrap/Stack";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

import image from "../../images/capital.png";

function Home() {
  return (
    <Stack direction="horizontal" gap={2} style={{height: '90vh'}}>
      <div>
        <img
          src={image}
          alt="banner"
          width={640}
          height={700}
          className="rounded-2"
        />
      </div>
      <div className="mx-auto">
        <h1 className="text-uppercase">Welcome !!</h1>
        <p className="lead">
        Welcome to our news application! Stay up-to-date with the latest news and current events from around the world. Our app provides a diverse range of news articles, covering various topics including politics, sports, entertainment, technology, and more. We strive to deliver reliable and accurate news reporting to keep you informed and help you make sense of the world around you. Thank you for choosing our app as your go-to source for news.
          <br />
          <span className="fst-italic text-muted">Sign Up to get started.</span>
        </p>
        <div>
          <Button
            as={Link}
            to="/signup"
            className="text-uppercase fw-bolder"
            variant="primary"
          >
            Sign Up
          </Button>
        </div>
      </div>
    </Stack>
  );
}

export default Home;
