import React, { Component } from 'react';
import PageTemplate from './PageTemplate';
import TodoInput from './TodoInput';
import TodoList from './TodoList';

const initialTodos = new Array(500).fill(0).map(
    (foo, index) => ({ id: index, text: `일정${index}`, done: false})
);

class App extends Component {
    
    state = {
        input: '' //input 값
        , todos : initialTodos,
    }

    id = 1
    getId = () => {
        return ++this.id;
    }

    handleChange = (e) => {
        const { value } = e.target;
        this.setState({
            input: value
        });
    }

    handleInsert = () => {
        const {todos, input } = this.state;

        const newTodo = {
            text: input
            , done: false
            , id:this.getId()
        }
        this.setState({
            todos: [...todos, newTodo]
            , input: ''
        });
    }

    // todo 아이템 토글하기
    handleToggle = (id) => {
        // id로 배열의 인덱스를 찾는다.
        const { todos } = this.state;
        const index = todos.findIndex(todo => todo.id === id);

        const toggled = {
            ...todos[index]
            , done: !todos[index].done
        };

        // slice를 사용하여 우리가 찾은 index 전후의 데이터들을 복사합니다.
        // 그리고 그 사이에는 변경된 to do 객체를 넣어준다.

        this.setState({
            todos:[
                ...todos.slice(0, index)
                , toggled
                , ...todos.slice(index + 1, todos.length)
            ]
        });
    }

    // todo 아이템 삭제
    handleRemove = (id) => {
        const { todos } = this.state;
        const index = todos.findIndex(todo => todo.id === id);

        // slice로 전후 데이터들을 복사하고, 우리가 찾은 index는 제외시킨다.
        this.setState({
            todos: [
                ...todos.slice(0, index)
                , ...todos.slice(index + 1, todos.length)
            ]
        });
    }

    render() {
        const { input, todos } = this.state;
        const {
            handleChange
            , handleInsert
            , handleToggle
            , handleRemove
        } = this;
        return(
            <PageTemplate>
                <TodoInput onChange={handleChange} value={input} onInsert={handleInsert} />
                <TodoList todos={todos} onToggle={handleToggle} onRemove={handleRemove} />
            </PageTemplate>
        );
    }
}

export default App;