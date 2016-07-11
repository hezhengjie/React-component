/**
 * Created by hezhengjie on 2016/6/11.
 */

'use strict';
//模块导入

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Root from '../../dist/js/root.js';//加大括号会报错，为什么？
//var React = require('react');
//var ReactDOM = require('react-dom');

ReactDOM.render(
    <Root>
        <span>lala</span>
        <span>ass</span>
    </Root>,
    document.getElementById('root')
);