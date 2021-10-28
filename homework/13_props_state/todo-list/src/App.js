import React from 'react';
import './App.css';
import { EnterBlock } from './components/enterBlock/EnterBlock';
import { Footer } from './components/footer/Footer';
import { Header } from './components/header/Header';
import {TaskBlock} from './components/taskBlock/TaskBlock';

export class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {text: ''};
    this.textArr = localStorage.getItem('textArr') ? JSON.parse(localStorage.getItem('textArr')) :[];
    this.addTask = this.addTask.bind(this);
  }

  changeText = (event) => {
    this.setState({text: event.target.value})
  }

  addTask() {
    this.textArr.push(this.state.text);
    localStorage.setItem('textArr', JSON.stringify(this.textArr));
    this.setState({text: ''});
  }

  render() {
    return (
      <div className="App">
        <header>
          <Header name="ToDo list" />
        </header>
        <div className="enter-block">
          <EnterBlock text={this.state.text} onChange={this.changeText} onClick={this.addTask}/>
        </div>
        <main>
          {this.textArr.map((item, index) => <TaskBlock text={item} key={index} />)}
        </main>
        <footer>
          <Footer copyright="2021" />
        </footer>
      </div>
    );
  }
}

export default App;
