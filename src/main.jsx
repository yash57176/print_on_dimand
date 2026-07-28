import React from "react";
import ReactDOM from "react-dom/client";
import "./styles.css";

function App() {
  return (
    <div className="app">

      <header className="header">

        <div className="logo">
          <div className="logo-box">P</div>

          <div>
            <h2>PRINTLY</h2>
            <span>PRINT ON DEMAND</span>
          </div>
        </div>

        <nav>
          <button>Home</button>
          <button>Designs</button>
          <button>Products</button>
          <button>Login</button>
        </nav>

      </header>


      <main>

        <section className="hero">

          <div className="hero-content">

            <span className="small-title">
              CREATE YOUR STYLE
            </span>

            <h1>
              Design
              <br />
              Your Own
            </h1>

            <p>
              Create your own custom products.
              Upload your design and print it
              on your favourite products.
            </p>

            <button className="primary-btn">
              Start Designing
            </button>

          </div>


          <div className="shirt">

            <div className="shirt-design">
              YOUR
              <br />
              DESIGN
            </div>

          </div>

        </section>


        <section className="section">

          <div className="section-heading">
            <h2>Categories</h2>
            <button>View All →</button>
          </div>


          <div className="categories">

            <div className="category">
              <div className="category-icon">👕</div>
              <span>T-Shirts</span>
            </div>

            <div className="category">
              <div className="category-icon">🧥</div>
              <span>Hoodies</span>
            </div>

            <div className="category">
              <div className="category-icon">🧢</div>
              <span>Caps</span>
            </div>

            <div className="category">
              <div className="category-icon">☕</div>
              <span>Mugs</span>
            </div>

            <div className="category">
              <div className="category-icon">👜</div>
              <span>Bags</span>
            </div>

            <div className="category">
              <div className="category-icon">📱</div>
              <span>Cases</span>
            </div>

          </div>

        </section>


        <section className="section">

          <div className="section-heading">
            <h2>Popular Designs</h2>
            <button>View All →</button>
          </div>


          <div className="designs">

            <div className="design design-one">
              CREATE
              <br />
              YOUR
              <br />
              STYLE
            </div>

            <div className="design design-two">
              BE
              <br />
              BOLD
            </div>

            <div className="design design-three">
              MAKE
              <br />
              IT
              <br />
              HAPPEN
            </div>

            <div className="design design-four">
              ROAR
            </div>

            <div className="design design-five">
              NO
              <br />
              LIMITS
            </div>

          </div>

        </section>

      </main>


      <nav className="bottom-nav">

        <button className="active">
          <span>⌂</span>
          Home
        </button>

        <button>
          <span>♡</span>
          Designs
        </button>

        <button className="create">
          ＋
        </button>

        <button>
          <span>🛒</span>
          Cart
        </button>

        <button>
          <span>◉</span>
          Profile
        </button>

      </nav>

    </div>
  );
}


ReactDOM.createRoot(
  document.getElementById("root")
).render(

  <React.StrictMode>
    <App />
  </React.StrictMode>

);
