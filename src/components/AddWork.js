import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from './../actions/index';

class AddWork extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: '',
            name: '',
            status: true
        };
    }
    onCloseForm = () => {
        this.props.onCloseForm();
        this.formClear();
    }
    componentWillReceiveProps(nextProps) {
        console.log(nextProps);
        // if (nextProps.updateWork && nextProps.updateWork) {
        //     this.setState({
        //         id: nextProps.task.id,
        //         name: nextProps.task.name,
        //         status: nextProps.task.status
        //     })
        // } else { this.formClear()  }
    }
    onAddSubmit = (event) => {
        event.preventDefault();
        this.props.onAddTask(this.state);
        this.onCloseForm();
    }
    handleChange = (event) => {
        var target = event.target;
        var name = target.name;
        var value = target.value;
        if (name === 'status') {
            value = target.value === "true" ? true : false;
        }
        this.setState({
            [name]: value
        });
    }
    formClear = () => {
        this.setState({
            id: '',
            name: '',
            status: 1
        })
    }
    render() {
        var { id } = this.state;
        return (
            <div className="panel panel-warning">
                <div className="panel-heading">
                    <h3 className="panel-title"> {id !== '' ? 'Cập Nhật Công Việc' : 'Thêm Công Việc'}
                        <button type="button" className="close" aria-label="Close" onClick={this.onCloseForm}>
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </h3>
                </div>
                <div className="panel-body">
                    <form onSubmit={this.onAddSubmit}>
                        <div className="form-group">
                            <label>Tên :</label>
                            <input type="text" name="name" onChange={this.handleChange} className="form-control" value={this.state.name} />
                        </div>
                        <label>Trạng Thái :</label>
                        <select className="form-control" name="status" required="required" value={this.state.status} onChange={this.handleChange}>
                            <option value={true}>Kích Hoạt</option>
                            <option value={false}>Ẩn</option>
                        </select>
                        <br />
                        <div className="text-center">
                            <button type="submit" className="btn btn-warning">Lưu Lại</button>&nbsp;
                            <button type="button" className="btn btn-danger" onClick={this.closeForm}>Hủy Bỏ</button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        isDisplayForm: state.toggleForm,
        updateWork: state.updateWork
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        onAddTask: (task) => {
            dispatch(actions.addWork(task))
        },
        onCloseForm: () => {
            dispatch(actions.closeForm())
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddWork);