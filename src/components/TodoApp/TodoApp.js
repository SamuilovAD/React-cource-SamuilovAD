import React, {Component} from 'react';
import AppHeader from "../AppHeader";
import SearchPanel from "../SearchPanel";
import TodoList from "../TodoList";
import './TodoApp.css';
import ItemStatusFilter from "../ItemStatusFilter";
import ItemAddForm from "../ItemAddForm";

class TodoListApp extends Component
{
    maxId = 100;
    createNewItem = (label) => {
        return {
            label: label,
            important: false,
            isDone: false,
            id: ++this.maxId
        };
    };
    state = {
        todoData: [
            this.createNewItem('Drink coffee'),
            this.createNewItem('Work hard')
        ],
        term: '',
        filter:'all'
    };

    deleteItem = (id) => {
        this.setState(({todoData}) => {
            const idx = todoData.findIndex((el) => el.id === id);
            let newTodoData = [...todoData].filter((element, index) => index !== idx);
            return {
              todoData: newTodoData
            };
        });
    };

    addItem = (text) => {
        const newItem = this.createNewItem(text);

        this.setState(({todoData}) => {
            let newTodoData = [...todoData, newItem];
            return {
                todoData: newTodoData
            };
        });
    };
    toggleProperty = (arr, id,property) => {
        const idx = arr.findIndex((el) => el.id === id);
        let arrItem = arr[idx];
        let newArrItem = {...arrItem,[property]: !arrItem[property]};
        arr = [
            ...arr.slice(0,idx),
            newArrItem,
            ...arr.slice(idx + 1),
        ];
        return arr;
    };

    toggleDone = (id) => {
        this.setState(({todoData}) => {
            return {
                todoData: this.toggleProperty([...todoData],id,'isDone')
            };
        });
    };

    toggleImportant = (id) => {
        this.setState(({todoData}) => {
            return {
                todoData: this.toggleProperty([...todoData],id,'important')
            };
        });
    };

    search(visibleItems, term) {
        if(term.length === 0){
            return visibleItems;
        }
        return visibleItems.filter((item) => {
            return item.label.toLowerCase().indexOf(term.toLowerCase())>-1;
        });
    };

    filterItems(items, filter){
        switch(filter){
            case 'all':
                return items;
            case 'done':
                return items.filter((item) => item.isDone ===true);
            case 'active':
                return items.filter((item) => item.isDone ===false);
            default:
                return items;
        }
    }

    onSearchChange = (term) => {
        this.setState({term});
    };

    onFilterChange = (filter) => {
        this.setState({filter});
    };


    render() {
        const {todoData, term,filter} = this.state;
        const visibleItems = this.filterItems(this.search(todoData, term),filter);
        const doneCount = this.state.todoData.filter((el)=>el.isDone).length;
        const todoCount = this.state.todoData.filter((el)=>!el.isDone).length;
        return (
            <div className="todo-app">
                <AppHeader toDo={todoCount} done={doneCount}/>
                <div className="top-panel d-flex">
                    <SearchPanel onSearchChange={this.onSearchChange}/>
                    <ItemStatusFilter filter={filter} onFilterChange={this.onFilterChange}/>
                </div>
                <TodoList
                    todos={visibleItems}
                    onDeleted={this.deleteItem}
                    onToggleDone={this.toggleDone}
                    onToggleImportant={this.toggleImportant}
                />
                <ItemAddForm onItemAdded = {this.addItem}/>
            </div>);
    };
}

export default TodoListApp;
