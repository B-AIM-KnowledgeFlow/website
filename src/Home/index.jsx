import React from 'react';
import styled from 'styled-components';

import Header from './Header';
import MakingKAccessible from './MakingKAccessible';
import ANewWay from './ANewWay';
import Contact from './Contact';
import Footer from './Footer';
import Webchat from './Webchat';

/* eslint-disable jsx-a11y/media-has-caption */

const Container = styled.div`
  overflow: hidden;
`;

const Video = styled.video`
  width: 100%;
  height: 31.25em;
  background: #a1bdc9;
`;

const Segment = styled.div`
  height: 15.625em;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Home = () => (
  <Container>
    <Header />
    <Video>
      <source />
      Your browser does not support the video tag.
    </Video>
    <MakingKAccessible />
    <ANewWay />
    <Segment>What we can do for you</Segment>
    <Segment>Pricing</Segment>
    <Segment>Map</Segment>
    <Contact />
    <Footer />
    <Webchat />
  </Container>
);

export default Home;
