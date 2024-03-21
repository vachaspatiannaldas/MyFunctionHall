import React, { useEffect, useState } from 'react';

function FilterYoutube() {
  const [api, setApi] = useState([]);
  const [selected, setSelected] = useState({});
  const [showSelected, setShowSelected] = useState(false);

  useEffect(() => {
    // Fetch the complete data from your API
    fetch('http://127.0.0.1:8000/api/hallfrontend')
      .then((data) => data.json())
      .then((val) => setApi(val));
  }, []);

  const handleChange = (e, index) => {
    const checked = document.getElementById(index).checked;
    const value = e.target.value;

    setSelected((prevSelected) => ({
      ...prevSelected,
      [index]: checked ? value : undefined,
    }));
    setShowSelected(true); // Show the selected data
  };

  return (
    <div>
      {api.map((fruit, i) => (
        <div key={i}>
          <input
            id={i}
            type="checkbox"
            value={fruit.hname}
            onChange={(e) => handleChange(e, i)}
          />{' '}
          <span>{fruit.hname}</span>
        </div>
      ))}
      <br />
      {showSelected &&
        api
          .filter((_, i) => selected[i] !== undefined)
          .map((selectedFruit, i) => (
            <div key={i}>{selectedFruit.hname}</div>
          ))}
    </div>
  );
}

export default FilterYoutube;
