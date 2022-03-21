import "./App.css";
import recipeData from "./components/data";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img
          src="https://www.arabnews.jp/en/wp-content/uploads/sites/2/2021/04/WhatsApp-Image-2021-04-13-at-1.33.15-PM-1.jpeg"
          alt="Cartoon food"
        />
        <h1>FOOD FACTS</h1>
        <img
          src="https://www.arabnews.jp/en/wp-content/uploads/sites/2/2021/04/WhatsApp-Image-2021-04-13-at-1.33.15-PM-1.jpeg"
          alt="Cartoon food"
        />
      </header>
      <section>
        <div className="cards">
          {recipeData.map((data) => {
            return (
              <div className="flip-card">
                <div className="flip-card-inner">
                  <div className="flip-card-front">
                    <img src={data.image} className="cardimg" />
                    <p>{data.name}</p>
                  </div>
                  <div className="flip-card-back">
                    <p>{data.items}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}

export default App;
