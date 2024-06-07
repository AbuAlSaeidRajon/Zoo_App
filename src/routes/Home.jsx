import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      {/* Header Menu */}
      <nav className="header-menu">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/animals">Animals</Link></li>
          <li><Link to="/birds">Birds</Link></li>
          <li><Link to="/fishes">Fishes</Link></li>
          <li><Link to="/insects">Insects</Link></li>
          <li><Link to="/about">About</Link></li>
        </ul>
      </nav>

      {/* Category headers */}
      <h1>Explore Categories</h1>
      <div className='box'>
        {/* Animals */}
        <Link to="/animals" className="category-link">
          <div className="category-item">
            <img src="https://images.unsplash.com/photo-1607274134639-043342705e6f?q=80&w=2786&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
            <p className='category-name'>Animals</p>
          </div>
        </Link>

        {/* Birds */}
        <Link to="/birds" className="category-link">
          <div className="category-item">
            <img src="https://images.unsplash.com/photo-1626826248416-a899c24f4e07?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
            <p className='category-name'>Birds</p>
          </div>
        </Link>

        {/* Fishes */}
        <Link to="/fishes" className="category-link">
          <div className="category-item">
            <img src="https://cdn.pixabay.com/photo/2013/07/18/20/24/shark-164899_1280.jpg" alt="" />
            <p className='category-name'>Fishes</p>
          </div>
        </Link>

        {/* Insects */}
        <Link to="/insects" className="category-link">
          <div className="category-item">
            <img src="https://images.unsplash.com/photo-1527083811398-92939acc80a8?q=80&w=1972&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
            <p className='category-name'>Insects</p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Home;
