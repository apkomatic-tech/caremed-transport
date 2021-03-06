import React from 'react';
import HeroSlider from 'react-slick';
import PropTypes from 'prop-types';
import Container from '../components/container';
import FlexContainer from '../components/flex-container';
import Button from '../components/button';
import Reviews from '../components/yelp/Reviews';
import heroImage1 from '../images/caremed-hero1.jpg';
import heroImage2 from '../images/caremed-hero2.jpg';
import heroImage3 from '../images/caremed-hero3.jpg';
import splashImage from '../images/splash.jpg';
import ahaImage from '../images/aha.svg';
import CardStack from '../components/common/CardStack';
import Card from '../components/common/Card';
import CardSection from '../components/common/CardSection';

import '../styles/slider.scss';
import '../styles/icons.scss';

const heroSliderOptions = {
  arrows: false,
  autoplay: true,
  autoplaySpeed: 5000,
  speed: 1000,
  dots: false,
  draggable: false,
  fade: true,
  pauseOnHover: false,
  pauseOnFocus: false,
};

const heroButtonProps = {
  cssClass: 'callout-btn--primary',
  isLink: true,
  to: '/contact',
};

const Hero = ({ cssClass, text }) => (
  <div className={`hero ${cssClass}`}>
    <FlexContainer className="hero-flex">
      <h1>Care Med Transport</h1>
      <h3>{text}</h3>
      <div>
        <Button {...heroButtonProps}>Schedule Appointment</Button>
      </div>
    </FlexContainer>

    <style jsx>
      {`
        .hero h1 {
          color: #b3001b;
          font-size: 3rem;
          margin-bottom: 10px;
          font-weight: bold;
        }
        .hero h3 {
          font-size: 1.5rem;
          color: #fff;
          margin-bottom: 50px;
        }

        .hero {
          color: #fff;
          display: flex;
          justify-content: center;
          align-items: center;
          height: 450px;
          margin-bottom: 60px;
          background-color: #222;
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
        }

        .hero-1 {
          background-image: linear-gradient(
              rgba(0, 0, 0, 0.6),
              rgba(0, 0, 0, 0.6)
            ),
            url(${heroImage1});
        }

        .hero-2 {
          background-image: linear-gradient(
              rgba(0, 0, 0, 0.6),
              rgba(0, 0, 0, 0.6)
            ),
            url(${heroImage2});
        }

        .hero-3 {
          background-image: linear-gradient(
              rgba(0, 0, 0, 0.6),
              rgba(0, 0, 0, 0.6)
            ),
            url(${heroImage3});
        }

        @media only screen and (max-width: 767px) {
          .hero {
            text-align: center;
          }

          .hero h1 {
            font-size: 2.2rem;
          }

          .hero p {
            font-size: 1.2rem;
          }
        }
      `}
    </style>
  </div>
);

Hero.propTypes = {
  cssClass: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

const IndexPage = () => (
  <div>
    <HeroSlider {...heroSliderOptions}>
      <div>
        <Hero
          cssClass="hero-1"
          text="We are a non-emergency medical transportation services that understands your needs."
        />
      </div>
      <div>
        <Hero
          cssClass="hero-2"
          text="We provide the best 24/7 transporation services - wheelchair, gurney, long distance, and ambulatory."
        />
      </div>
      <div>
        <Hero
          cssClass="hero-3"
          text="We are here to provide safe, convenient and reliable transportation to your chosen destination."
        />
      </div>
    </HeroSlider>

    <Container>
      <h3>
        <strong>What we offer</strong>
      </h3>
      <div className="featured">
        <CardStack>
          <Card>
            <CardSection>
              <h4 className="card__title">
                <i className="icon icon-clock" /> 24 HOUR SERVICE
              </h4>
            </CardSection>
            <CardSection>
              <p className="card__text">
                That&apos;s why we at Care MED Transport are providing a 24-hour
                service that should answer to their needs whenever they need it,
                wherever they are.
              </p>
            </CardSection>
          </Card>
          <Card>
            <CardSection>
              <h4 className="card__title">
                <i className="icon icon-calendar" /> SAME-DAY APPOINTMENT
              </h4>
            </CardSection>
            <CardSection>
              <p className="card__text">
                We know that dealing with an ailment is already tough. That's
                why we chose not to burden our patients with more things to
                worry about and decided to allow same-day appointments that will
                allow us to cater to more people who require the special kind of
                care that we can provide.
              </p>
            </CardSection>
          </Card>
          <Card>
            <CardSection>
              <h4 className="card__title">
                {' '}
                <i className="icon icon-star" /> QUALITY SERVICE
              </h4>
            </CardSection>
            <CardSection>
              <p className="card__text">
                We believe that our clients deserve only the best quality
                service that we can provide and it is our mission to make life
                easier for people who can use for things to get better.
              </p>
            </CardSection>
          </Card>
        </CardStack>
        <style jsx>
          {`
            .featured {
              margin-bottom: 60px;
            }

            .featured h4 {
              color: #b3001b;
              font-weight: 700;
            }

            .featured h4 i {
              display: inline-block;
              margin-right: 5px;
              transform: scale(1.2) translateY(-2px);
            }
          `}
        </style>
      </div>
    </Container>

    <div className="extra">
      <Container>
        <div className="inner">
          <h2>
            Serving our community with pride, respect and safe transportation.
          </h2>
          <Button cssClass="callout-btn--secondary" to="/contact" isLink>
            Contact Us
          </Button>
        </div>
      </Container>

      <style jsx>
        {`
          .extra {
            padding: 120px 30px;
            text-align: center;
            background-color: #222;
            background-image: linear-gradient(
                rgba(0, 0, 0, 0.6),
                rgba(0, 0, 0, 0.6)
              ),
              url(${splashImage});
            background-position: center;
            background-size: cover;
            background-repeat: no-repeat;
          }

          .extra h2 {
            color: #fff;
            margin: 0;
          }

          .inner {
            display: flex;
            justify-content: space-between;
            align-items: center;
          }

          @media only screen and (min-width: 1024px) {
            background-attachment: fixed;
          }

          @media only screen and (min-width: 767px) and (max-width: 1024px) {
            .extra h2 {
              flex: 0 0 70%;
            }
          }

          @media only screen and (max-width: 767px) {
            .extra h2 {
              margin-bottom: 30px;
            }

            .inner {
              flex-direction: column;
            }
          }
        `}
      </style>
    </div>

    <div className="featured-bottom">
      <Container>
        <h3 className="title">
          <strong>Our services</strong>
        </h3>
        <p>
          Care MED Transport is a Non-Emergency Transportation service
          specializing in wheelchair, gurney, and long distance transportation
          for:
        </p>
        <div className="featured-bottom-wrapper">
          <div className="bucket">
            <h3>
              Nursing Facility Transfers <span className="icon icon-check" />
            </h3>
          </div>

          <div className="bucket">
            <h3>
              Outpatient Care <span className="icon icon-check" />
            </h3>
          </div>

          <div className="bucket">
            <h3>
              Dialysis Center <span className="icon icon-check" />
            </h3>
          </div>

          <div className="bucket">
            <h3>
              Doctors Appointments
              <span className="icon icon-check" />
            </h3>
          </div>

          <div className="bucket">
            <h3>
              Discharge from Hospitals
              <span className="icon icon-check" />
            </h3>
          </div>

          <div className="bucket">
            <h3>
              Discharge from Care Center
              <span className="icon icon-check" />
            </h3>
          </div>

          <div className="bucket">
            <h3>
              Radiation Treatment <span className="icon icon-check" />
            </h3>
          </div>

          <div className="bucket">
            <h3>
              Chemotherapy Treatment <span className="icon icon-check" />
            </h3>
          </div>
        </div>
      </Container>

      <style jsx>
        {`
          .featured-bottom {
            margin: 50px 0;
          }

          .featured-bottom .icon-check {
            color: #b3001b;
            display: inline-block;
            font-size: 120%;
            margin-left: 10px;
          }

          .featured-bottom-wrapper {
            display: flex;
            justify-content: center;
            flex-wrap: wrap;
          }

          .featured-bottom-wrapper h3 {
            margin: 0;
            color: #b3001b;
          }

          .featured-bottom-wrapper > div {
            flex: 0 0 45%;
            height: 90px;
            display: flex;
            justify-content: center;
            align-items: center;
            text-align: center;
            margin: 15px 2.5%;
            padding: 24px;
            box-shadow: 0 5px 45px rgba(0, 0, 0, 0.2);

            transition: background 100ms ease-in-out;
          }

          @media only screen and (max-width: 767px) {
            .featured-bottom-wrapper > div {
              flex-basis: 100%;
              margin-bottom: 0 0 30px;
            }
          }
        `}
      </style>
    </div>
  </div>
);

export default IndexPage;
