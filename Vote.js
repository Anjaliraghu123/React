import React, { Component } from "react";

class Vote extends Component {
  constructor(props) {
    super(props);
    this.state = {
      parties: [
        { name: "BJP", vote: 0 },
        { name: "CPI", vote: 0 },
        { name: "CBI(M)", vote: 0 },
        { name: "IMC", vote: 0 },
      ],
    };
  }

  // Corrected method name to 'Vote' (uppercase 'V')
  Vote(i) {
    let newPartyVote = this.state.parties;
    console.log("click on = " + newPartyVote[i].name);
    newPartyVote[i].vote++;
    this.setState({
      parties: newPartyVote,
    });
  }

  render() {
    return (
      <div>
        <h1>Vote Your Party</h1>
        <div className="partices">
          {this.state.parties.map((party, i) => (
            <div className="party" key={i}>
              <div className="voteCount">{party.vote}</div>
              <div className="partyname">{party.name}</div>
              {/* Fixed the method name to 'Vote' (uppercase 'V') */}
              <button onClick={this.Vote.bind(this, i)}>Click Here</button>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Vote;
