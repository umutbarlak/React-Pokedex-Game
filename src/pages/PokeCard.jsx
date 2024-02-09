import React, { Component } from "react";
import "../style/PokeCard.css";

const POKE_API =
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/";

class PokeCard extends Component {
  render() {
    let imgSrc = `${POKE_API}${this.props.id}.png`;
    return (
      <div className="PokeCard">
        <h2 className="PokeCard-Title">{this.props.name}</h2>
        <div className="PokeCard-Img">
          <img src={imgSrc} alt={this.props.name} />
        </div>
        <div className="PokeCard-Data"> Type: {this.props.type}</div>
        <div className="PokeCard-Data"> Exp: {this.props.exp}</div>
      </div>
    );
  }
}

export default PokeCard;
