const enzyme = require('enzyme');
const Adapter = require('@wojtekmaj/enzyme-adapter-react-17');
const toJson = require('enzyme-to-json').default;
const JSDOM = require("jsdom").JSDOM;
const React = require('react');
const ReactDOM = require('react-dom');

const jsdom = new JSDOM('<!doctype html><html><body><div id="my-div" /></body></html>');
global.window = jsdom.window;
global.document = jsdom.window.document;
enzyme.configure({ adapter: new Adapter() });

class MyComponent extends React.Component {
    render() {
        const { children, element } = this.props;
        return ReactDOM.createPortal(children, element);
    }
}

const element = global.document.getElementById('my-div');

const wrapper = enzyme.mount(<MyComponent element={ element } />);

console.log(toJson(wrapper));
