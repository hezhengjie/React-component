/**
 * Created by hezhengjie on 2016/6/11.
 */

'use strict';
//模块导入

var _react = require('react');

var React = _interopRequireWildcard(_react);

var _reactDom = require('react-dom');

var ReactDOM = _interopRequireWildcard(_reactDom);

var _root = require('../../dist/js/root.js');

var _root2 = _interopRequireDefault(_root);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

//var React = require('react');
//var ReactDOM = require('react-dom');

ReactDOM.render(React.createElement(
    _root2.default,
    null,
    React.createElement(
        'span',
        null,
        'lala'
    ),
    React.createElement(
        'span',
        null,
        'ass'
    )
), document.getElementById('root'));