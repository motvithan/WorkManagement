import React, { Component } from 'react';
import WorkItem from './WorkItem';
import { connect } from 'react-redux';
class ListWork extends Component {
    constructor(props) {
        super(props);
        this.state = {
            filterName: '',
            filterStatus: -1
        }
    }
    handleChange = (event) => {
        var target = event.target;
        var name = target.name;
        var value = target.value;
        this.props.filterData(
            name === 'filterName' ? value : this.state.filterName,
            name === 'filterStatus' ? value : this.state.filterStatus
        );
        this.setState({
            [name]: value
        });

    }
    onDelWork = () => {
        console.log();
    }
    render() {
        var { tasks } = this.props;
        var elements = tasks.map((task, index) => {
            return <WorkItem
                key={task.id}
                index={index}
                task={task}
                updateStatus={this.props.updateStatus}
                updateItem={this.props.updateItem} />
        })
        return (
            <table className="table table-bordered table-hover mt-10">
                <thead>
                    <tr>
                        <th className="text-center">STT</th>
                        <th className="text-center">Tên</th>
                        <th className="text-center">Trạng Thái</th>
                        <th className="text-center">Hành Động</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td />
                        <td>
                            <input type="text" className="form-control" onChange={this.handleChange} name="filterName" />
                        </td>
                        <td>
                            <select className="form-control" onChange={this.handleChange} name="filterStatus">
                                <option value={-1}>Tất Cả</option>
                                <option value={0}>Khóa</option>
                                <option value={1}>Kích Hoạt</option>
                            </select>
                        </td>
                        <td />
                    </tr>
                    {elements}
                </tbody>
            </table>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        tasks: state.tasks
    }
}
// const mapDispatchToProps = (dispatch) =>{
//     return {
//         onDelWork: (task) => {
//             dispatch(actions.onDelWork(task));
//         },
//     }
// }
export default connect(mapStateToProps, null)(ListWork);