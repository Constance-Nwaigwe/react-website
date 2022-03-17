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
        <h1>FOOD BLOG</h1>
        <img
          src="https://www.arabnews.jp/en/wp-content/uploads/sites/2/2021/04/WhatsApp-Image-2021-04-13-at-1.33.15-PM-1.jpeg"
          alt="Cartoon food"
        />
      </header>
      <section>
        <p>Body</p>
        <div>
          {recipeData.map((data) => {
            return (
              <div>
                <img src={data.image} />
                <p>{data.name}</p>
                <p>{data.items}</p>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}

export default App;
