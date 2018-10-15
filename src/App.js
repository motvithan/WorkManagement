import React, { Component } from 'react';
import './App.css';
import AddWork from './components/AddWork';
import Controls from './components/Controls';
import ListWork from './components/ListWork';
import { connect } from 'react-redux';
import * as actions from './actions/index';
class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      sortBy: '',
      sortValue: 1
    }
  }
  generateData = () => {
    var tasks = [
      {
        id: this.randomString(),
        name: 'Learn C#',
        status: true
      },
      {
        id: this.randomString(),
        name: 'Fighting',
        status: false
      },
      {
        id: this.randomString(),
        name: 'Kill someone',
        status: true
      },
    ]
    this.setState({
      tasks: tasks
    });
    this.saveLocalStorage(tasks);
  }
  showAddWorkForm = () => {
    // this.setState({
    //   isDisplayForm: !this.state.isDisplayForm
    // });
    this.props.onToggleForm();
  }
  saveLocalStorage(tasks) {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }
  closeForm = () => {
    this.setState({
      isDisplayForm: false
    });
  }
  randomString() {
    var randomstring = require("randomstring");
    return randomstring.generate();
  }
  // updateStatus = (params) => {
  //   var { tasks } = this.state;
  //   var index = this.findIndex(params);
  //   if (index !== -1) {
  //     tasks[index].status = !tasks[index].status;
  //   }
  //   this.setState({
  //     tasks: tasks
  //   });
  //   this.saveLocalStorage(tasks);
  // }
  updateItem = (params) => {
    var { tasks } = this.state;
    var index = this.findIndex(params);
    this.setState({
      updateInfo: tasks[index]
    });
    this.showAddWorkForm();
  }
  filterData = (filterName, filterStatus) => {
    this.setState({
      filter: {
        name: filterName.toLowerCase(),
        status: parseInt(filterStatus, 10)
      }
    });
  }
  onSearch = (keyword) => {
    this.setState({
      keyword: keyword
    })
  }
  onSort = (sortBy, sortValue) => {
    this.setState({
      sortBy: sortBy,
      sortValue: sortValue
    });
  }
  render() {
    var { isDisplayForm } = this.props;
    // if (filter) {
    //   if (filter.name) {
    //     tasks = tasks.filter((task) => {
    //       return task.name.toLowerCase().indexOf(filter.name) !== -1;
    //     });
    //   }
    //   tasks = tasks.filter((task) => {
    //     if (filter.status === -1) {
    //       return task;
    //     }
    //     else {
    //       return task.status === (filter.status === 1 ? true : false)
    //     }
    //   });
    //   if (keyword !== "") {
    //     tasks = tasks.filter((task) => {
    //       return task.name.toLowerCase().indexOf(keyword) !== -1;
    //     });
    //   }
    // // }
    // if (sortBy === 'name') {
    //   tasks.sort((a, b) => {
    //     if (a.name > b.name) return sortValue;
    //     else if (a.name < b.name) return -sortValue;
    //     else return 0;
    //   });
    // }
    // if (sortBy === 'status') {
    //   tasks.sort((a, b) => {
    //     if (a.status > b.status) return -sortValue;
    //     else if (a.status < b.status) return sortValue;
    //     else return 0;
    //   });
    // }
    var elementAddWork = isDisplayForm === true ? <AddWork /> : '';
    return (
      <div className="container">
        <div className="text-center">
          <h1>Quản Lý Công Việc</h1>
          <hr />
        </div>
        <div className="row">
          <div className={isDisplayForm ? "col-xs-4 col-sm-4 col-md-4 col-lg-4" : ""}>
            {elementAddWork}
          </div>
          <div className={isDisplayForm ? "col-xs-8 col-sm-8 col-md-8 col-lg-8" : "col-xs-12 col-sm-12 col-md-12 col-lg-12"}>
            <button type="button" className="btn btn-primary" onClick={this.showAddWorkForm}>
              <span className="fa fa-plus mr-5" />Thêm Công Việc
            </button>
            <button type="button" className="btn btn-default" onClick={this.generateData}>
              <span className="fa fa-plus mr-5" />Generate Data
            </button>
            <Controls
              onSearch={this.onSearch}
              onSort={this.onSort}
            />
            <div className="row mt-15">
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <ListWork
                  updateStatus={this.updateStatus}
                  deleteItem={this.deleteItem}
                  updateItem={this.updateItem}
                  filterData={this.filterData} />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    isDisplayForm: state.toggleForm
  }
}
const mapDispatchToProps = (dispatch, props) => {
  return {
    onToggleForm: () => {
      dispatch(actions.toggleForm())
    },
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
