import React from 'react';
import './App.scss';

class App extends React.Component {
  render(){
    return (
      <div className="App">
        <button className="add__button">+</button>
        <ul className="faces__list">
          <li className="face__item">
            <div className="smile__face"></div>
          </li>
          <li className="face__item">
            <div className="sad__face"></div>
          </li>
          <li className="face__item"></li>
        </ul>

        <form action="">
          <div className="date__container">
            <label htmlFor="date">Fecha</label>
            <input type="text" name="date" id="date" placeholder="28/06/2019"/>
          </div>
          <div className="mood__container">
            <div className="happy__mood">
            <label for="flightoption2">
              <input
                id="happy"
                type="radio"
                value="happy"
                name="mood"
              />
              :)
            </label>
            </div>
            <div className="sad__mood">
            <label for="flightoption2">
              <input
                id="sad"
                type="radio"
                value="sad"
                name="mood"
              />
              :(
            </label>
            </div>
          </div>
          <div className="message__container">
            <label htmlFor="happy__message">Mensaje</label>
            <textarea name="message" id="message" cols="30" rows="10" placeholder="¿Por qué es un buen día?"></textarea>
          </div>
          <button className="save__button">Guardar</button>
          <button className="cancel__button">Cancelar</button>
        </form>
      </div>
    );
  }
}

export default App;
