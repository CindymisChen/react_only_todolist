/*
 * @Description: components:inputTodo
 * @Author: chzh
 * @Date: 2019-10-14 09:07:20
 * @LastEditors: chzh
 * @LastEditTime: 2019-10-14 19:20:50
 */
import React from 'react';
import './App.css';

// 添加todo的输入框和按钮
class InputTodo extends React.Component {
    constructor(props) {
        // 期待传入的props：
        // addNewItem(newItem)
        super(props);
    }

    render() {
        // 在这里写会报错，提到TodoList里写
        // const input = document.getElementById('inputItem').value;
        // const input = $("#inputItem").val();

        return (
            <div className="inputDiv">
                <h3>New Todo: </h3>
                <input
                    id="inputItem"
                    type="text"
                    name="newTodo"
                    placeholder="your new todo ！"
                />
                <button
                    className="submit"
                    onClick={() => this.props.handleAddItem()}>
                    {"submit"}
                </button>
            </div>
        );
    }
}

export default InputTodo