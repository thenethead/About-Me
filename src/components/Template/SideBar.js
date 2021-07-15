import React from 'react';
import { Link } from 'react-router-dom';

import ContactIcons from '../Contact/ContactIcons';

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const SideBar = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src={`${PUBLIC_URL}/images/me.jpg`} alt="JaySoniImage" width="auto" height="auto" />
      </Link>
      <header>
        <h2>Jay Soni</h2>
        <p><a href="mailto:me@jaysoni.dev">me@jaysoni.dev</a></p>
      </header>
    </section>

    <section className="blurb">
      <h2>About</h2>
      <p>I&apos;m fullstack (Angular2+/Django) Software Engineer,
        I like building things.
        I am a <a href="https://www.rgpv.ac.in/">Engineering (CSE)</a> graduate,
        <a href="https://www.tcs.com/">TCS</a> Alumni, and
        the co-founder of <a href="https://goclever.in">Go Clever Community</a>.
      </p>
      <ul className="actions">
        <li>
          {!window.location.pathname.includes('/resume') ? <Link to="/resume" className="button">Learn More (Resume)</Link> : <Link to="/about" className="button">About Me(About)</Link>}
        </li>
      </ul>
    </section>

    <section id="footer">
      <ContactIcons />
      <p className="copyright blue-color">&copy; Jay Soni <Link to="/">jaysoni.dev</Link>.</p>
    </section>
  </section>
);

export default SideBar;
