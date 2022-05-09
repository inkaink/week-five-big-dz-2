import { useState } from 'react';
import { dataLondon } from './dataLondon';
import { dataRome } from './dataRome';
import './App.css';

function App() {

  const [landmarkLondon, setLandmarkLondon] = useState(0);
  const {idLondon, nameLondon, descriptionLondon, imageLondon, showMoreLondon} = dataLondon[landmarkLondon];

  const [landmarkRome, setLandmarkRome] = useState(0);
  const {idRome, nameRome, descriptionRome, imageRome, showMoreRome} = dataRome[landmarkRome];

  const [showTextLondon, setShowTextLondon] = useState(false);
  
  const [showTextRome, setShowTextRome] = useState(false);

  const previousLandmarkLondon = () => {
    setLandmarkLondon((landmarkLondon => {
      landmarkLondon --;
      if(landmarkLondon < 0) {
        return dataLondon.length-1;
      }
      return landmarkLondon;
    }))
  }

  const nextLandmarkLondon = () => {
    setLandmarkLondon((landmarkLondon => {
      landmarkLondon ++;
      if(landmarkLondon > dataLondon.length-1) {
        landmarkLondon = 0;
      }
      return landmarkLondon;
    }))
  }

  const previousLandmarkRome = () => {
    setLandmarkRome((landmarkRome => {
      landmarkRome --;
      if(landmarkRome < 0) {
        return dataRome.length-1;
      }
      return landmarkRome;
    }))
  }

  const nextLandmarkRome = () => {
    setLandmarkRome((landmarkRome => {
      landmarkRome ++;
      if(landmarkRome > dataRome.length-1) {
        landmarkRome = 0;
      }
      return landmarkRome;
    }))
  }

  const showTextClickLondon = (landmarkLondon) => {
    landmarkLondon.showMoreLondon = !landmarkLondon.showMoreLondon;
    setShowTextLondon(!showTextLondon);
  }

  const showTextClickRome = (landmarkRome) => {
    landmarkRome.showMoreRome = !landmarkRome.showMoreRome;
    setShowTextRome(!showTextRome);
  }


  return (
    <div>
      
      <div>
        <div className='container'>
          <h2>Достопримечательности Лондона</h2>
        </div>

        <div className='container'>
          <h2>{idLondon} - {nameLondon}</h2>
        </div>

        <div className='container'>
          <img src={imageLondon} width="300px" alt="foto"/>
        </div>

        <div className='container'>
          <h3>{showMoreLondon ? descriptionLondon : descriptionLondon.substring(0, 200) + "..."}
          <button onClick={() => showTextClickLondon(landmarkLondon)}>{showMoreLondon ? "Показать меньше" : "Показать больше"}</button>
          </h3>
        </div>

        <div className='container'>
          <button onClick={previousLandmarkLondon}>Previous</button>
          <button onClick={nextLandmarkLondon}>Next</button>
        </div>

        <div className='container'>
          <button onClick={() => setLandmarkLondon([])}>Удалить</button>
        </div>
      </div>

      <div>
        <div className='container'>
          <h2>Достопримечательности Италии</h2>
        </div>

        <div className='container'>
          <h2>{idRome} - {nameRome}</h2>
        </div>

        <div className='container'>
          <img src={imageRome} width="300px" alt="foto"/>
        </div>

        <div className='container'>
          <h3>{showMoreRome ? descriptionRome : descriptionRome.substring(0, 200) + "..."}
          <button onClick={() => showTextClickRome(landmarkRome)}>{showMoreRome ? "Показать меньше" : "Показать больше"}</button>
          </h3>
        </div>

        <div className='container'>
          <button onClick={previousLandmarkRome}>Previous</button>
          <button onClick={nextLandmarkRome}>Next</button>
        </div>

      </div>

    </div>
  );
}

export default App;