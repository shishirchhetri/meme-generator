export default function arrayData() {
    const thingsArray = ["Thing 1", "Thing 2"]
    const thingsElements = thingsArray.map(thing => <p key={thing}>{thing}</p>)
    function addThing(){
        const newThing = `Thing ${thingsArray.length + 1}`
        thingsArray.push(newThing)
        console.log(thingsArray)

    }
    return (
        <div>
            <button onClick={addThing}>Add Item</button>
            {thingsElements}
        </div>
    )
}

