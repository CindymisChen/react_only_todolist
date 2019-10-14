/*
 * @Description: 写组件
 * @Author: chzh
 * @Date: 2019-10-12 11:01:06
 * @LastEditors: chzh
 * @LastEditTime: 2019-10-14 15:03:46
 */
import React from 'react';
import './App.css';
import InputTodo from './InputTodo';
import ListItem from './ListItem';

// 过去的todolist列表展示
class TodoList extends React.Component {
    constructor(props) {
        super(props);

        // state初始写死
        this.state = {
            items: [{
                id: 0,
                status: 0,
                value: '吃饭'
            }, {
                id: 1,
                status: 1,
                value: '皓哥吃饭'
            }, {
                id: 2,
                status: 0,
                value: '看吴京'
            }],
            // items:Array(3).fill(null),
            finished: 1,
            total: 3,
        }
    }

    addNewItem() {
        let input = document.getElementById('inputItem').value;
        let all = this.state.items;
        let id = this.state.items.length;

        let newItem = {
            status: 0,
            value: input,
            id: id
        }

        all.push(newItem);
        this.setState({
            items: all
        });
    }

    // 某条列表状态改变：更新该状态与已完成数目
    handleChangeStatus(id) {
        let updateItems = this.state.items.slice();
        let finished = this.state.finished;

        if (this.state.items[id].status === 0) {
            updateItems[id].status = 1;
            ++finished;
        } else {
            updateItems[id].status = 0;
            --finished;
        }

        this.setState({
            items: updateItems,
            finished: finished
        })
    }

    // 删除指定id的item：更新items列表与总数、已完成数目
    handleItemDelete(id) {
        let updateItems = this.state.items.slice();
        let finished = this.state.finished;
        let total = this.state.total;
        let newItems = [];

        for (let i = 0; i < updateItems.length; i++) {
            if (updateItems[i].id === id) {
                if (updateItems[i].status === 1) {
                    --finished;
                }
                --total;
                continue;
            }
            newItems.push(updateItems[i]);
        }

        this.setState({
            items: newItems,
            finished: finished,
            total: total
        })
    }

    render() {
        const items = this.state.items;
        const finished = this.state.finished;
        const total = this.state.total;

        return (
            <div className="container">
                <h1>TodoList</h1>
                <div className="items">
                    <ul>
                        {
                            // TODO:这里是抄的，遍历添加array的方法
                            // index：自动数数，往下算索引
                            items.map((item, index) => {
                                return (
                                    // 把state中存的json变成listitem
                                    // 因为只有一个返回值（listitem，所以省略return
                                    <ListItem
                                        item={item}
                                        // 这里不写key的话会报错
                                        key={index}
                                        changeStatus={(id) => this.handleChangeStatus(id)}
                                        itemDelete={(id) => this.handleItemDelete(id)}
                                    />
                                )
                            })
                        }
                        {/* 最下面统计一下完成数目和总数 */}
                        <li>
                            {/* &nbsp是空格 */}
                            {"完成数目: "}
                            &nbsp;
                            {finished}
                            /&nbsp;
                            {"总数: "}
                            {items.length};
                        </li>
                    </ul>
                </div>
                {/* 添加input组件 */}
                <InputTodo
                    handleAddItem={() => this.addNewItem()}
                />
            </div>
        )
    }

}

export default TodoList;
// ReactDOM.render(<TodoList />, document.getElementById('root'));
































// function App() {
//     return (
//         <div className="App">
//             <header className="App-header">
//                 <img src={logo} className="App-logo" alt="logo" />
//                 <p>
//                     Edit <code>src/App.js</code> and save to reload.
//         </p>
//                 <a
//                     className="App-link"
//                     href="https://reactjs.org"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                 >
//                     Learn React
//         </a>
//             </header>
//         </div>
//     );
// }

// export default App;
