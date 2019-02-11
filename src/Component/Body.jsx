import React, { Component } from 'react';
import 'antd/dist/antd.css';
import { Input, Button, List } from 'antd';
import store from '../reducers/store';
import { NavLink } from 'react-router-dom';
import axios from "axios";

class Body extends Component {
  constructor(props){
    super(props);
    this.state = {
      projects: []
    };
    this.state = store.getState();
    this.handleInputchange = this.handleInputchange.bind(this);
    this.handleInputchangeOne = this.handleInputchangeOne.bind(this);
    this.handleInputchangeTwo = this.handleInputchangeTwo.bind(this);
    this.handleBtnClick = this.handleBtnClick.bind(this);
    this.handleStoreChange = this.handleStoreChange.bind(this);
    store.subscribe(this.handleStoreChange)
  }

  componentDidMount() {
    axios.get('./src/data/mycv.json')
      .then(response => {
        this.setState({
          projects: response.data
        })
      })
   }

  handleInputchange(e) {
    const action = {
      type: 'change_input_value',
      value: e.target.value,
    }
    store.dispatch(action);
  }
  handleInputchangeOne(e) {
    const action = {
      type: 'changeOne_input_value',
      valueOne: e.target.value,
    }
    store.dispatch(action);
  }
  handleInputchangeTwo(e) {
    const action = {
      type: 'changeTwo_input_value',
      valueTwo: e.target.value,
    }
    store.dispatch(action);
  }

  handleStoreChange() {
    this.setState(store.getState());
  }

  handleBtnClick() {
    const action = {
      type: 'add_todo_list',
    }
    store.dispatch(action);
  }

  handleItemDelete(index) {
    const action = {
      type: 'delete_todo_item',
      index,
    }
    store.dispatch(action);
  }


  render() {
    const { TextArea } = Input;
    const projects = this.state.projects
    let projectsList 

    // if (projects.length > 0) {
    //   projectsList = projects.map(project => {
    //    return (
    //      <div key={project.id} >
    //         <h1>{project.name}</h1>
    //         <p>{project.experience}</p>
    //         <p>{project.education}</p>
    //      </div>
    //     )
    //   })
    // }
    
    return (
      <div className="body-div">
        <div className="body-div-left">
          <div className="body-input-div">
            <h1 className="input-title">Your name</h1>
            <Input
              value = {this.state.inputValue}
              placeholder = "your name..."
              style = {{width: '300px', marginRight: '10px'}}
              onChange = {this.handleInputchange}
            />
            <h1 className="input-title">Your experience</h1>
            <TextArea
              value = {this.state.inputValueOne}
              placeholder = "your job experience..."
              autosize={{ minRows: 2, maxRows: 6 }}
              style = {{width: '300px', marginRight: '10px'}}
              onChange = {this.handleInputchangeOne}
            />
            <h1 className="input-title">Your education</h1>
            <TextArea
              value = {this.state.inputValueTwo}
              autosize={{ minRows: 2, maxRows: 6 }}
              placeholder = "your education..."
              style = {{width: '300px', marginRight: '10px'}}
              onChange = {this.handleInputchangeTwo}
            />
            <div>
             <Button className="button-div" onClick={this.handleBtnClick}>submit</Button>
            </div>
            <div className="Cv-div">
             {/* {projectsList} */}
            <NavLink activeStyle={{fontWeight: "bold"}} to='/about'>About Me</NavLink>
            </div>
          </div>
          <div className="body-list-div">
            <ul>
              <List
                bordered
                dataSource={this.state.list}
                renderItem={(item, index) => (
                  <List.Item onClick={this.handleItemDelete.bind(this, index)}>
                    {item}
                  </List.Item>
                )}
                
                style={{
                  marginTop: '40px',
                  marginBottom: '10px',
                  marginLeft: '10px',
                  width: '450px',
                }}
              />
            </ul>
          </div>    
        </div> 

        <style jsx>{`
         .body-div{ 
           margin-top: 70px;
           overflow: hidden
         }
         .Body-div-left{
           overflow: hidden
         }
         .body-input-div{
           margin-left: 10px;
           float: right
         }
         .input-title{
           font-family: "Times New Roman", Times, serif;
           font-style: italic;
           color: #588aac;
         }
         .button-div{
            background-color: #6ca1be;
            color: white;
            font-weight: 800;
            margin-top: 15px;
            margin-bottom: 20px;
         }
        `}</style>
      </div>
    )
  }
}

export default Body;


