const customRender = (reactElement, container) => {
    /* This code is aa bit un-optimized becuase we're manually setting all the attributes
    const domElement = document.createElement(reactElement.type)  
    domElement.innerHTML = reactElement.children 
    domElement.setAttribute('href', reactElement.props.href)
    domElement.setAttribute('target', reactElement.props.target)
    container.appendChild(domElement);
    */

    const domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.children
    for (const prop in reactElement.props) {
        if(prop === 'children') continue;
        domElement.setAttribute(prop, reactElement.props[prop])
    }
    container.appendChild(domElement)
}

const reactElement = {
    type: "a",
    props: {
        href: "https://www.google.com",
        target: "_blank",
    },
    children: "Click me to visit Google",
}

const mainContainer = document.getElementById("root")
customRender(reactElement, mainContainer)
