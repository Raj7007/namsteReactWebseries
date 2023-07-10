const heading=React.createElement("h1",{},"i am from react ")
const root=ReactDOM.createRoot(document.getElementById("root"))

const parent=React.createElement("div",{id:"perent"},[React.createElement("h1",{id:"heading"},"Iam from h1 tag"),React.createElement("h2",{id:"h2id"},"Iam from h2 tag")])

console.log(parent)
root.render(parent)