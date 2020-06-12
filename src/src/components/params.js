import { useState } from "react"

const Params = props => {
    const [input, setInput] = useState("");
    return (
        <div>
            <Query query={props.query} />
        </div>
    )
}

export default Params;