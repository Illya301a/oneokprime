import './App.css';
import Header from './components/Header';
import Slider from './components/Slider';
import Footer from './components/Footer';
import Button from "./components/Button";

function App() {
  return (
    <div className="App min-h-screen flex flex-col bg-gradient-to-br from-purple-50 via-purple-100 to-purple-200 dark:from-purple-900 dark:via-purple-800 dark:to-purple-900">

    <Header />

    <div className="my-auto">
      <h1 className="text-white font-medium text-3xl text-center m-5">ДОБРО ПОЖАЛОВАТЬ НА САЙТ ВАНЬКА СУКА</h1>
      <Slider />
      <h1 className="text-white font-medium text-3xl text-center m-5">ЭТО БЛЯТЬ ВАНЯ ЧЕРТ ПОДЕРИ ЕГО НАХЪ</h1>
    </div>

    <Button />

    <Footer />

    </div>
  );
}

export default App;
