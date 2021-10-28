import React from 'react';
import './App.css';
import { EnterBlock } from './components/enterBlock/EnterBlock';
import { Footer } from './components/footer/Footer';
import { Header } from './components/header/Header';
import {TaskBlock} from './components/taskBlock/TaskBlock';

export class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {text: '', hasDeletedTask: false, isChecked: false};
    this.textArr = localStorage.getItem('textArr') ? JSON.parse(localStorage.getItem('textArr')) :[];
    this.addTask = this.addTask.bind(this);
    this.removeTask = this.removeTask.bind(this);
    this.markDone = this.markDone.bind(this);
  }

  changeText = (event) => {
    this.setState({text: event.target.value})
  }

  addTask() {
    this.textArr.push({text: this.state.text, done: false});
    localStorage.setItem('textArr', JSON.stringify(this.textArr));
    this.setState({text: ''});
  }

  removeTask(index) {
    this.setState({hasDeletedTask: true});
    this.textArr.splice(index, 1);
    localStorage.setItem('textArr', JSON.stringify(this.textArr));
    this.setState({hasDeletedTask: false});
  }

  markDone(index) {
    this.setState({isChecked: true});
    this.textArr[index].done = true;
    localStorage.setItem('textArr', JSON.stringify(this.textArr));
    this.setState({isChecked: false});
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
          {this.textArr.map((item, index) => <TaskBlock 
                                                text={item.text}
                                                done={item.done}
                                                key={index}
                                                markDone={() => this.markDone(index)}
                                                onClick={() => this.removeTask(index)}
                                              />
                                          )}
        </main>
        <footer>
          <Footer copyright="&#169; 2021 D_Sin" />
        </footer>
      </div>
    );
  }
}

export default App;
