/*
 * @Description: conponents:ListItem
 * @Author: chzh
 * @Date: 2019-10-14 09:07:20
 * @LastEditors: chzh
 * @LastEditTime: 2019-10-14 14:55:03
 */
import React from 'react';
import './App.css';

// list中的每一项
class ListItem extends React.Component {
    constructor(props) {
        // props计划传入：
        // Array: items[i]=item(status(1:finish/0:unfinish),id,value)
        // changeItemStatus(newItem)
        // itemDelete(this.props.item)
        super(props);
    }

    render() {
        const item = this.props.item;

        // 给不同的状态设置不同的STYLE
        const unfinish = {
            backgroundColor: '#DFFCB5',
            color: '#2EB872',
        }
        const finish = {
            backgroundColor: '#FFFA9D',
            color: '#FF9A3C',
            textDecoration: 'line-through'
        }

        let itemStyle = item.status === 0 ? unfinish : finish;

        return (
            <div className="item">
                {/*  TODO:style瞎写的 */}
                {/* li的key */}
                <li key={item.id} style={itemStyle}>
                    {/* span：行内组合 */}
                    <span
                        id={item.id}
                        style={{ backgroundColor: item.status === 0 ? '#fff' : '#A1EAFB' }}
                    ></span>
                    <span>
                        <button onClick={() => this.props.changeStatus(item.id)}>
                            {"done"}
                        </button>
                    </span>
                    <span>
                        {item.value}
                    </span>
                    <span>
                        <button onClick={() => this.props.itemDelete(item.id)}>
                            {"delete"}
                        </button>
                    </span>
                </li >
            </div>
        );
    }
}

export default ListItem