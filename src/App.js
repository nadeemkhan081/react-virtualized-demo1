import React from 'react';
import { List, AutoSizer } from 'react-virtualized';
import faker from 'faker';

const generateRandomHeight = () => {
  return 50 + Math.round(Math.random() * 100); // Random height between 50 and 150
};

const generateRandomData = (count) => {
  const data = [];
  for (let i = 0; i < count; i++) {
    const item = {
      name: faker.name.findName(),
      height: generateRandomHeight(),
    };
    data.push(item);
  }
  return data;
};

const App = () => {
  const itemCount = 10000; //No of items to generate.

  const data = generateRandomData(itemCount);

  const rowRenderer = ({ key, index, style }) => {
    const item = data[index];

    return (
      <div key={key} style={{ ...style, height: item.height }}>
        {item.name}
      </div>
    );
  };

  return (
    <div style={{ height: '900px', width: '50%' }}>
      <AutoSizer>
        {({ height, width }) => (
          <List
            height={height}
            width={width}
            rowCount={itemCount}
            rowHeight={({ index }) => data[index].height}
            rowRenderer={rowRenderer}
          />
        )}
      </AutoSizer>
    </div>
  );
};

export default App;
