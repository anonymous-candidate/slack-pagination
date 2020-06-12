
import React, { useState } from "react"

const Walkthrough = props => {
  const [query, setQuery] = useState("");
  const onClick = (e) => {
    setQuery(props.query);
  }

  return (
    <div>
      <Query query={query} />
      <Button onClick={onClick}/>
    </div>
  )

}

export default Walkthrough;