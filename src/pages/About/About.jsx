import "./About.scss";

function About() {
  return (
    <div className="card">
      <div className="card__image">
        <img src="profile.jpg" alt="Imagen de perfil" className="card__image__src" />
      </div>
      <div className="card__info">
        <h1 className="card__info__name">Federico Córdoba Romero</h1>
        <p className="card__info__description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero,
          maiores? Nobis fugit, officia praesentium totam illum nesciunt, non
          placeat ullam quasi delectus at voluptatibus numquam unde excepturi,
          ab soluta cum.
        </p>
        <ul className="card__info__list">
            <li>1</li>
            <li>2</li>
        </ul>
        <p>Email: federicoc03@gmail.com
        </p>
        <a href="https://github.com/mercuryeater" target="_blank">Github</a>
      </div>
    </div>
  );
}

export default About;
