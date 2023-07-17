import React, { useState } from "react";
import * as ReactDOM from "react-dom";
import data from "./data.json";

import MultiSelect from "./components/multi-select";

import "./index.css";

const Root = () => {
  const [selectedItems, setSelectedItems] = useState([]);

  return (
    <div className="Root">
      <div className="Root__header">
        <h1>Pasqal interviews</h1>
        <h1>Multiselect</h1>
      </div>
      <div className="Root__content">
        <div>{selectedItems.length} items selected:</div>
        <br />
        <div>
          {selectedItems.map((e) => (
            <div>{JSON.stringify(e)}</div>
          ))}
        </div>
      </div>
      <div className="Root__separator" />

      {/* TODO: Insert your component below */}
      <div className="Root__select">
        <MultiSelect
          onChange={(values) => setSelectedItems(values)}
          selectedItems={selectedItems}
        />
      </div>
    </div>
  );
};

console.log(data);

ReactDOM.render(<Root />, document.getElementById("root"));
