import React, { Component } from "react";
import Slide from "react-reveal";
import { ethers } from "ethers";
import { Link } from "react-router-dom";

class ExclusiveContent extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <section id="resume">
        <Slide left duration={1300}>
          <div
            style={
              this.props.sillySquaresClubBalance > 0
                ? {
                    background: "url('../images/stars.png')",
                    backgroundRepeat: "repeat"
                  }
                : { backgroundColor: "#fff" }
            }
          >

                  <div className="row excl text-center">
                    <br />

                    <div
                      style={{
                        border: "2px solid gold",
                        backgroundColor: "white",
                        borderRadius: "20px"
                      }}
                    >
                      <br />
                      <h1>
                        <span>Exclusive Content For Token Holders!</span>
                      </h1>
                      <h2>
                        <span>
                          You own:
                          <br />
                          (&nbsp;{this.props.sillySquaresClubBalance}&nbsp;)
                          Original Silly Squares Club NFTs
                          <br />
                          and
                          <br />
                          (&nbsp;{this.props.sillySquaresSummertimeBalance}
                          &nbsp;) Silly Squares Summertime NFTs.
                          <br />
                          Total Silly Squares Owned: (&nbsp;
                          {this.props.sillySquaresClubBalance +
                            this.props.sillySquaresSummertimeBalance}
                          &nbsp;)
                          <br />
                        </span>
                      </h2>
                    </div>
                  </div>



                  <div className="row excl text-center box2">
                    <br />

                    <div
                      style={{
                        border: "2px solid gold",
                        backgroundColor: "white",
                        borderRadius: "20px"
                      }}
                    >
                      <br />
                      <h1>
                        <span>Exclusive Content For Token Holders!</span>
                      </h1>
                      <h4>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and
                        scrambled it to make a type specimen book. It has
                        survived not only five centuries, but also the leap into
                        electronic typesetting, remaining essentially unchanged.
                        It was popularised in the 1960s with the release of
                        Letraset sheets containing Lorem Ipsum passages, and
                        more recently with desktop publishing software like
                        Aldus PageMaker including versions of Lorem Ipsum.
                      </h4>
                      <br />
                    </div>
                  </div>


                  <div className="row excl text-center box2">
                    <br />

                    <div
                      style={{
                        border: "2px solid gold",
                        backgroundColor: "white",
                        borderRadius: "20px"
                      }}
                    >
                      <br />
                      <h1>
                        <span>Exclusive Content For Token Holders!</span>
                      </h1>
                      <h4>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and
                        scrambled it to make a type specimen book. It has
                        survived not only five centuries, but also the leap into
                        electronic typesetting, remaining essentially unchanged.
                        It was popularised in the 1960s with the release of
                        Letraset sheets containing Lorem Ipsum passages, and
                        more recently with desktop publishing software like
                        Aldus PageMaker including versions of Lorem Ipsum.
                      </h4>
                      <br />
                    </div>
                  </div>


            {this.props.sillySquaresClubBalance < 1 && (
              <div
                style={{
                  border: "2px solid gold",
                  backgroundColor: "white",
                  borderRadius: "20px",
                  padding: "15px"
                }}
              >
                <p>
                  Uh oh, you don't own any Silly Squares!
                  <br />
                  <br />
                  You need to connect a MetaMask account that owns at least one
                  Silly Square to see the exclusive content here!
                </p>
              </div>
            )}

            {this.props.sillySquaresClubBalance > 0 && (
              <h2>
                <div
                  style={{
                    border: "2px solid gold",
                    backgroundColor: "white",
                    borderRadius: "20px"
                  }}
                >
                  <br />
                  You are a Silly Squares NFT holder!!
                  <br />
                  <br />
                  Please enjoy this EXCLUSIVE picture of a zebra!
                  <br />
                  <br />
                </div>
                <br />

                <img src="../images/zebra.jpg" />
                <br />
                <br />
              </h2>
            )}
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
          </div>
        </Slide>
      </section>
    );
  }
}
export default ExclusiveContent;
