import { Link } from 'react-router-dom';
import logo from '../../../assets/logoYandexGo.svg';
import './Header.css';
function Header() {
  return (
    <header>
      <div className="container">
        <h2 className='title-yandex'>
          <img className='logoYandexGo' src={logo} alt="" />
          <span>Hush kelibsiz</span>

          <Link to={'https://taxi.yandex.uz/ru_uz/tashkent/parks/400000196152'}>Партнёр Town Taxi</Link>
          <Link to={'https://taxi.yandex.uz/ru_uz/tashkent/parks/400000196152'}>Partner Town Taxi</Link>
          <Link to={'https://taxi.yandex.uz/ru_uz/tashkent/parks/400000196152'}>Hamkor shahar taksisi</Link>
        </h2>
      </div>
    </header>
  );
}

export default Header;