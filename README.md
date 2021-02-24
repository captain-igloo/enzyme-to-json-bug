In React 17 with components that use ReactDOM.createPortal(), the JSON changes with each run.  The component's props contain strings like "_reactListeninga2u1embg03f" and "__reactEvents$nxgockfgcdd" which change, see screenshot.  React 16 is not affected.

Obviously these are coming from react-dom but can anything be done?  My snapshot tests fail with React 17.

![screenshot](/enzyme-to-json.png)

    cd react-17
    npm install
    npm run component-to-json

    cd react-16
    npm install
    npm run component-to-json

See https://github.com/adriantoine/enzyme-to-json/issues/178 .