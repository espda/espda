import React, { Component } from 'react';
import Card from './card';

import cards from '../data/cards';

export default class CardGrid extends Component {
  render() {
    const cardElements = cards.map((element, i) => {
      return (
        <Card
          key={i}
          {...element} />
      );
    });

    return (
      <div
        className="card-grid">
        {cardElements}
      </div>
    )
  }
}
