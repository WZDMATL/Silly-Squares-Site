import React, { Component } from "react";
import ParticlesBg from "particles-bg";
import Fade from "react-reveal";

class Header extends Component {
  render() {
    if (!this.props.data) return null;

    const purchase = this.props.data.purchaseLink;
    const enterClubLink = this.props.data.enterClubLink;
    
    const purchaseSquaresClubLink = this.props.data.purchaseSquaresClubLink;
    const purchaseSquaresSummertimeLink = this.props.data.purchaseSquaresSummertimeLink;
    const name = this.props.data.name;
    const description = this.props.data.description;
    const description2 = this.props.data.description2;

    return (
      <header id="home">
        <ParticlesBg type="cobweb" bg={true} />

        <nav id="nav-wrap">
          <a className="mobile-btn" href="#nav-wrap" title="Show navigation">
            Show navigation
          </a>
          <a className="mobile-btn" href="#home" title="Hide navigation">
            Hide navigation
          </a>

          <ul id="nav" className="nav">
            <li className="current">
              <a className="smoothscroll" href="#home">
                Home
              </a>
            </li>

            <li>
              <a className="smoothscroll" href="#about">
                About
              </a>
            </li>

            <li>
              <a className="smoothscroll" href="#resume">
                NFTs
              </a>
            </li>

            <li>
              <a className="smoothscroll" href="#portfolio">
                Team
              </a>
            </li>

            <li>
              <a className="smoothscroll" href="#mint">
                Mint
              </a>
            </li>

            <li>
              <a className="smoothscroll" href="#contact">
                Contact
              </a>
            </li>
          </ul>
        </nav>

        <div className="row banner">
          <div className="banner-text">
            <Fade bottom>
              <h1 className="responsive-headline">{name}</h1>
            </Fade>
            <br />
            <Fade bottom duration={1200}>
              <h3>{description}</h3>
              <h3>{description2}</h3>
            </Fade>
            <hr />
            <Fade bottom duration={2000}>
              <ul className="social">
                <a
                  href={purchaseSquaresClubLink}
                  className="button btn project-btn"
                >
                  <i className="fa fa-book"></i> Mint to Login
                </a>
                <a
                  href={purchaseSquaresSummertimeLink}
                  className="button btn project-btn"
                >
                  <i className="fa fa-anchor"></i> Dashboard
                </a>
                {/* <a href={enterClubLink} className="button btn github-btn">
                  <i className="fa fa-globe"></i>Enter The Club
                </a> */}
              </ul>
            </Fade>
          </div>
        </div>

        <p className="scrolldown">
          <a className="smoothscroll" href="#mint-here">
            <i className="icon-down-circle"></i>
          </a>
        </p>
      </header>
    );
  }
}

export default Header;
