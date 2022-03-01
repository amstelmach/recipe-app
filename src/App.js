import './App.css';

const App = () => {
  const APP_ID = '807653a2';
  const APP_KEY = '9b391241b8eee565362a188c507c0b54';
  const exampeReq = `https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`;

  return (
    <div className='App'>
      <h1>hello react</h1>
    </div>
  );
};

export default App;
