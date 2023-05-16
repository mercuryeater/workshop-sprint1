import "./About.scss";

function About() {
  return (
    <div className="card">
      <div className="card__image">
        <img
          src="profile.jpg"
          alt="Imagen de perfil"
          className="card__image__src"
        />
      </div>
      <div className="card__info">
        <h1 className="card__info__name">Federico Córdoba Romero</h1>
        <p className="card__info__description">
          My name is Federico, I'm a visual Artist entering the world of web
          development and programming, I'm still learning but in the future I'm
          going to find a way to integrate my art's background into this world.
          Oh, what else? I have two cats.
        </p>
        <h3 className="card__info__titleList">What I learned</h3>
        <ol className="card__info__list">
          <li>
            With this exercise I reinforced my knowledge about components, props
            and states, even about useEffect, you may not see it in the final
            code but in the process I did a lot of trial and error.
          </li>
          <li>
            Also it was my first time using a library I searched on my own, I
            used it for the timer but the first time didn't work because I used
            and old library that wasn't up to date with my react version, I had
            to change it to make it work.
          </li>
          <li>3 </li>
        </ol>
        <span className="card__info__links">
        <p>Email: federicoc03@gmail.com</p>
        <a href="https://github.com/mercuryeater" target="_blank" rel="noreferrer" className="card__info__links__github">
          Github
        </a>
        </span>
      </div>
    </div>
  );
}

export default About;
