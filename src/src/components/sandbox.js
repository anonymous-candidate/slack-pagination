import React from "react"
import WalkThrough from "./walkthrough"
import Params from "./params"
import Code from "./code"

const Sandbox = () => {
    const [query, setQuery] = useState($firstQuery);
    //some transformation of query
    const changeQuery = (e) => {
        setQuery(query.$next);
    }
    return (
//text cards beside component that walk you through the scenarios
<div>
<WalkThrough query={query.scenario} />
{/*//response object display as json parsed object 
//parameter fields
    //cursor
    //limi*/}
<Params query={query.params} />
<Button onClick={changeQuery} />
<Code query={query.example} />
{/*//possible scenario 1: you enter a limit and cursor and get the first page
//possible scenario 2: you enter a limit and the next cursor and get the last page
//possible scenario 3: you enter the recommended limit and receive the complete size
//possible scenario 4: you enter the recommended limit and you receive an incomplete size but there's a another page
//possible scenario 5: you enter an unreasonable limit and have it set to the maximum of 1000
//possible scenario X: you enter an invalid cursor and get the error*/}
</div>
)
};

export default Sandbox;
