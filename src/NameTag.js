import React, { useEffect, useState } from 'react';

const NameTag = props => {
  const [name, setName] = useState(props.name);
  const [clicks, setClicks] = useState(0);

  useEffect(() => {
    document.title = `${name}-${clicks}`;
  }, [name]);

  return(
      <div>
        <p>Hello my name is:</p>
        <input
          type="text"
          value={name}
          onChange={(e) => { setName(e.target.value); }}
        />
        <p>Hey, {name}, you clicked {clicks} times</p>
        <button onClick={() => setClicks(clicks + 1) }>
          Click AGAIN?
        </button>
      </div>
    );
}

export default NameTag;
