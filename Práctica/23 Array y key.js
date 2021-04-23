import { useState, useEffect } from 'react'; 

const jsonData = [
  {key: 1,
  name: 'Gilda'
  },
  {key: 2,
  name: 'Dania'
  },
  {key: 3,
  name: 'Estefania'
  }
];

const App = () => {

const Data = () => {
  return jsonData.map((value) => (
    <div key={value.key}>
      <p>{value.name}</p>
    </div>
  ));
}
return(
  <div>
    {Data()}
  </div>
);
 
};

export default App;