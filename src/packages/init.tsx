import Widget from "./Widget/index";
import PayBtn from "./Widget/payBtn";
import ReactDOM from 'react-dom/client';

function widgetInit({containerId, accept}:any) {
    const root = ReactDOM.createRoot(
        document.getElementById(containerId) as HTMLElement
    );
    root.render(
        <Widget accept={accept} />
    );
}

function buttonInit({containerId, accept}:any) {
    const root = ReactDOM.createRoot(
        document.getElementById(containerId) as HTMLElement
    );
    root.render(
        <PayBtn accept={accept} />
    );
}

export {widgetInit, buttonInit}
