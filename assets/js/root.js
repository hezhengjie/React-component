/**
 * Created by hezhengjie on 2016/6/29.
 */
import * as React from 'react';
import * as ReactDOM from 'react-dom';

export default class Root extends React.Component{

    constructor(props)
    {
        super(props);
    }
    render() {
        return <div>
            <ul>
                <li><span>这是一个测试</span></li>
                </ul>
        </div>;
    }
}

