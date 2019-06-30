import React from 'react';
import './App.scss';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      data: [],
      date: '',
      mood: '',
      message: ''
    }
    this.handleDate = this.handleDate.bind(this);
    this.handleMessage = this.handleMessage.bind(this);
    this.handleMood = this.handleMood.bind(this);
    this.saveData = this.saveData.bind(this);
  }

  handleDate(event){
    this.setState({
      date: event.target.value
    });
  }

  handleMessage(event){
    this.setState({
      message: event.target.value
    });
  } 

  handleMood(event) {
    const currentMood = event.currentTarget;
    if (currentMood.checked) {
      this.setState({ mood: currentMood.value })
    }
  }
  
  saveData(){
    this.setState(prevState => {
      const newData = [...prevState.data, { newDate : this.state.date, newMood: this.state.mood, newMessage : this.state.message }]
      return { data: newData };
    })
  }

  render(){
    const {data} = this.state;
    return (
      <div className="App">
        <button className="add__button">+</button>
        <ul className="faces__list">
          {data.map((item, index) => 
            <li className="face__item" key={index}>{item.newMood === 'happy' ?
              <span className="smile__face">{item.newMood}</span>
              :
              <span className="sad__face">{item.newMood}</span>
            }
            </li>
          )}
        </ul>

        <form action="">
          <div className="date__container">
            <label htmlFor="date">Fecha</label>
            <input type="text" name="date" id="date" placeholder="28/06/2019" onChange={this.handleDate}/>
          </div>
          <div className="mood__container">
            <div className="happy__mood">
            <label  htmlFor="mood">
              <input id="happy" type="radio" value="happy" name="mood" onClick={this.handleMood} />
              :)
            </label>
            </div>
            <div className="sad__mood">
              <label htmlFor="mood">
                <input id="sad" type="radio" value="sad" name="mood" onClick={this.handleMood} />
                :(
              </label>
            </div>
          </div>
          {this.state.mood === "happy" ?
            <div className="message__container">
              <label htmlFor="happy__message">Mensaje</label>
              <textarea name="message" id="message" cols="30" rows="10" placeholder="¿Por qué es un buen día?" onChange={this.handleMessage}></textarea>
            </div>
            :
            null
          } 
          
          <button className="save__button" onClick={this.saveData}>Guardar</button>
          <button className="cancel__button">Cancelar</button>
        </form>
      </div>
    );
  }
}

export default App;
