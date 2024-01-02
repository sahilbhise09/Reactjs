function customRender(reactElement, container){
    /*const domElement = document.createElement(reactElement.type) //created <a></a> element
    domElement.innerHTML = reactElement.children // add text msg
    domElement.setAttribute('href', reactElement.props.href) //added properties
    domElement.setAttribute('target', reactElement.props.target)//added properties

    container.appendChild(domElement) // append that to the container*/

    const domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.children
    for (const prop in reactElement.props) {
        if(prop === 'children') continue;
        domElement.setAttribute(prop, reactElement.props[prop])
    }

    container.appendChild(domElement)
}

const reactElement = {
    type: 'a',
    props: {
        href: 'https://google.com',
        target: '_blank'
    },
    children: 'Click me to visit google'
} //created object 

const mainContainer = document.querySelector('#root') // get the div element

customRender(reactElement, mainContainer)