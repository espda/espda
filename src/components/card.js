import React from 'react';

export default function Card(props) {
  const {
    name,
    logo,
    background,
    target,
    description,
    raised,
    equity,
    investors,
    favourited,
    tags,
    stage,
    sector
  } = props;

  return (
    <section
      className="card">
      <div
        className="card__header">
        <div
          className="card__header-image"
          role="img"
          aria-label=""
          title=""
          style={{backgroundImage: `url(${background})`}}>
        </div>

        <img
          className="card__logo"
          alt=""
          src={logo} />
      </div>

      <div
        className="card__body">
          <h1>{name}</h1>
          <p>{description}</p>
      </div>
    </section>
  )
}
