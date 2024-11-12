// const parent = React.createElement('div', {id:'parent'}, 
//     [React.createElement('div', {id:'child1'},
//         [React.createElement('h1', {id:'heading'}, 'I am h1 tag'),React.createElement('h2', {id:'heading2'}, 'I am h2 tag')] ),
//         React.createElement('div', {id:'child1'},
//             [React.createElement('h1', {id:'heading'}, 'I am h1 tag'),React.createElement('h2', {id:'heading2'}, 'I am h2 tag')] )]);

//functional componet

// const Tittle = ()=>(
//     <h1>Tittle</h1>
// )

// const HeaderComp = ()=>{

//     return (

//         <div className="container">
//             <h1 className="header">Namste React</h1>
//             {/* componet composition */}
//             <Tittle/> 
//             <Tittle/> 
//         </div>
//     )
// }

const root = ReactDOM.createRoot(document.getElementById('root'));
        root.render(<HeaderComp/>);