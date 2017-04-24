webpackJsonp([0],{

/***/ 174:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(5);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//import Order from './Components/Orders/Order';

var OrderModule = function OrderModule() {
    return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
            'h1',
            null,
            'Order module'
        )
    );
};

var _default = OrderModule;
exports.default = _default;
;

var _temp = function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }

    __REACT_HOT_LOADER__.register(OrderModule, 'OrderModule', '/home/achal/Documents/WebApp/src/Client/Application/OrderModule/OrderModule.js');

    __REACT_HOT_LOADER__.register(_default, 'default', '/home/achal/Documents/WebApp/src/Client/Application/OrderModule/OrderModule.js');
}();

;

/***/ }),

/***/ 192:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(5);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = _react2.default.createClass({
    displayName: '_default',
    getInitialState: function getInitialState() {
        var _this = this;

        var state = { forecasts: [], loading: true };

        fetch('http://localhost:5000/api/SampleData/WeatherForecasts', { mode: 'no-cors' })
        //.then(response => response.json())
        .then(function (data) {
            _this.setState({ forecasts: data, loading: false });
        });
        return state;
    },
    render: function render() {
        var contents = this.state.loading ? _react2.default.createElement(
            'p',
            null,
            _react2.default.createElement(
                'em',
                null,
                'Loading...'
            )
        ) : this.renderForecastsTable(this.state.forecasts);

        return _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement(
                'h1',
                null,
                'Weather forecast'
            ),
            _react2.default.createElement(
                'p',
                null,
                'This component demonstrates fetching data from the server.'
            ),
            contents,
            _react2.default.createElement(
                'p',
                null,
                'For more sophisticated applications, consider an architecture such as Redux or Flux for managing state. You can generate an ASP.NET Core application with React and Redux using ',
                _react2.default.createElement(
                    'code',
                    null,
                    'dotnet new aspnet/spa/reactredux'
                ),
                ' instead of using this template.'
            )
        );
    },
    renderForecastsTable: function renderForecastsTable(forecasts) {
        return _react2.default.createElement(
            'table',
            { className: 'table' },
            _react2.default.createElement(
                'thead',
                null,
                _react2.default.createElement(
                    'tr',
                    null,
                    _react2.default.createElement(
                        'th',
                        null,
                        'Date'
                    ),
                    _react2.default.createElement(
                        'th',
                        null,
                        'Temp. (C)'
                    ),
                    _react2.default.createElement(
                        'th',
                        null,
                        'Temp. (F)'
                    ),
                    _react2.default.createElement(
                        'th',
                        null,
                        'Summary'
                    )
                )
            ),
            _react2.default.createElement(
                'tbody',
                null,
                forecasts.map(function (forecast) {
                    return _react2.default.createElement(
                        'tr',
                        { key: forecast.dateFormatted },
                        _react2.default.createElement(
                            'td',
                            null,
                            forecast.dateFormatted
                        ),
                        _react2.default.createElement(
                            'td',
                            null,
                            forecast.temperatureC
                        ),
                        _react2.default.createElement(
                            'td',
                            null,
                            forecast.temperatureF
                        ),
                        _react2.default.createElement(
                            'td',
                            null,
                            forecast.summary
                        )
                    );
                })
            )
        );
    }
});

exports.default = _default;
;

var _temp = function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }

    __REACT_HOT_LOADER__.register(_default, 'default', '/home/achal/Documents/WebApp/src/Client/Application/WeatherModule/Weather.jsx');
}();

;

/***/ })

},[174]);