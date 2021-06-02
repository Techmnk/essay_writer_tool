import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import Text_time from './Text_time';
import Api_fetch from './Api_fetch';





function App() {


  return (

    <div className="App">

      <h2>Essay Writing Practice </h2>
      <Api_fetch />
      <Text_time />



    </div>
  );
}

export default App;
