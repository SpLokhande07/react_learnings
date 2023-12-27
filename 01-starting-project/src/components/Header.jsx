import reactImg from '../assets/react-core-concepts.png'

const data = ['Fundamentals', 'Hooks', 'Context', 'Forms', 'Performance'];


function getRandomItem(array) {

return Math.floor(Math.random() * array.length);

}


export default function Header(){
    return (
      <header>
      <img src={reactImg} alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        {data[getRandomItem(data)]} React concepts you will need for almost any app you are
        going to build!
      </p>
    </header>
    );
  }