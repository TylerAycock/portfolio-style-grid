import "./App.css";
import one from "./assets/img/1.png";
import two from "./assets/img/2.png";

function App() {
  return (
    <div class="wrapper">
    <div class="panel welcome">
      <nav>
        <a href="">Home</a>
        <a href="">Portfolio</a>
        <a href="">Contact</a>
      </nav>
      <div className="blurb">
        <h1>Tyler Aycock</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni hic eveniet voluptatum? Omnis fugit doloremque quasi numquam dolor. Quis eius libero voluptatibus nihil sapiente, commodi ex quam nam reiciendis tempora!</p>
      </div>
      <footer>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
      </footer>
    </div>
    <div class="panel about">
      <img src={one} alt="look out into the wilderness"/>
      <div class="text">
        <h2>About Me</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit harum accusamus at laudantium, doloribus quam voluptate consequatur ullam soluta labore distinctio mollitia eius quis nam, esse cum deleniti. Voluptas, reprehenderit?</p>
      </div>
    </div>
    <div class="panel photos">
      <div class="text">
        <h2>Photography</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat at vel corrupti beatae, repudiandae tempore nam illum nihil facilis fuga voluptatum hic saepe in porro, temporibus perspiciatis architecto, ullam vero.</p>
      </div>
      <img src={two} alt="the forest pic"/>
    </div>
  </div>
  );
}

export default App;
