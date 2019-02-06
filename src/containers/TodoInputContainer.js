import React, { Component } from "react";
import TodoInput from "../components/TodoInput";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";

//액션 생성 함수들을 한꺼번에 불러옴
import * as inputActions from "../modules/input";
import * as todosActions from "../modules/todos";

class TodoInputContainer extends Component {
    render() {
        return (
            <TodoInput />
        );
    }
}

/* 이번에는 mapStateToProps와 mapDispatchToProps 함수에 대한 레퍼런스를
    따로 만들지 않고, 그 내부에 바로 정의해줌.
*/

export default connect (
    (state) => ({
        value: state.input.get("value")
    }),
    (dispatch) => ({
        InputActions: bindActionCreators(inputActions, dispatch),
        TodosActions: bindActionCreators(todosActions, dispatch)
    })
)(TodoInputContainer);