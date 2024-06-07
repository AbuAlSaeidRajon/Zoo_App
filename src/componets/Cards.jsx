import { Link } from "react-router-dom";

const Cards = ({ name, likes, addLikes, removeCard, removeLikes }) => {
  return (
    <div className="card">
      <img
        className="card-img-top"
        src={`https://source.unsplash.com/400x400/?${name}`}
        alt={`${name}`}
      />
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <div className="container text-center">
          <div className="row align-items-center">
            <button onClick={addLikes} className="col card-button">
              <span className="material-symbols-outlined">heart_plus</span>
            </button>
            <div className="col">
              <p>{likes}</p>
            </div>
            <button onClick={removeLikes} className="col card-button">
              <span className="material-symbols-outlined">heart_minus</span>
            </button>
          </div>
          <Link className="btn btn-primary" to={name}>See More</Link>
        </div>
      </div>
      <button className="removeCard" onClick={removeCard}>
        <span className="material-symbols-outlined">cancel</span>
      </button>
    </div>
  );
};

export default Cards;
