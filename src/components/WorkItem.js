import React, { Component } from 'react';
import {connect} from 'react-redux';
import * as actions from './../actions/index';

class WorkItem extends Component {
    updateStatus = () => {
        this.props.updateStatus(this.props.task.id);
    }
    deleteItem = () => {
        this.props.deleteItem(this.props.task.id);
    }
    updateItem = () => {
        this.props.openForm();
        this.props.updateWork(this.props.task);
    }
    render() {
        var { task, index } = this.props;
        return (
            <tr>
                <td>{index + 1}</td>
                <td>{task.name}</td>
                <td className="text-center">
                    <span className={task.status === true ? 'label label-success' : 'label label-danger'} onClick={this.updateStatus}>
                        {task.status === true ? 'Kích Hoạt' : 'Khóa'}
                    </span>
                </td>
                <td className="text-center">
                    <button type="button" className="btn btn-warning" onClick={this.updateItem}>
                        <span className="fa fa-pencil mr-5" />Sửa
                        </button>
                    &nbsp;
                        <button type="button" className="btn btn-danger" onClick={this.deleteItem} >
                        <span className="fa fa-trash mr-5" />Xóa
                        </button>
                </td>
            </tr>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        tasks: state.tasks
    }
}
const mapDispatchToProps = (dispatch) =>{
    return {
        deleteItem: (id) => {
            dispatch(actions.delWork(id));
        },
        updateStatus: (id) => {
            dispatch(actions.updateStatus(id));
        },
        closeForm: () =>
        {
            dispatch(actions.closeForm());
        },
        openForm: () =>
        {
            dispatch(actions.openForm());
        },
        updateWork: (task) =>{
            dispatch(actions.updateWork(task));
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(WorkItem);