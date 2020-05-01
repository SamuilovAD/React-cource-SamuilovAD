import React, {Component} from "react";
import './TodoListItem.css';

export default class TodoListItem extends Component {
    render() {
        const {label, onDeleted, onToggleDone, onToggleImportant, isDone, important = false} = this.props;
        const labelClasses = "todo-list-item-label " + (important ? "todo-list-item-text-important" : "");
        const labelClassNames = "todo-list-item" + (isDone ? " done" : "");
        return (
            <span className={labelClassNames}>
              <span
                  className={labelClasses}
                  onClick={onToggleDone}
              >{label}</span>

              <button type="button"
                      className="btn btn-outline-success btn-sm float-right"
                      onClick={onToggleImportant}
              >
                <i className="fa fa-exclamation"></i>
              </button>

              <button type="button"
                      className="btn btn-outline-danger btn-sm float-right"
                      onClick={onDeleted}
              >
                <i className="fa fa-trash-o"></i>
              </button>
        </span>);
    };
}
