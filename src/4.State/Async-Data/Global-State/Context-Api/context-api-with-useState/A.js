import React, { useEffect, useState } from 'react';
import B from './B';
import C from './C';
import axios from 'axios';

export var nameContext = React.createContext();
export var ageContext = React.createContext();
export var postsContext = React.createContext();

function A() {
  var [name, setName] = useState('sachin');
  var [age, setAge] = useState(40);

  var [loading, setLoading] = useState(false);
  var [posts, setPosts] = useState([]);
  var [error, setError] = useState(null);

  // function getData() {
  //   setLoading(true);
  //   axios
  //     .get('https://jsonplaceholder.typicode.com/posts')
  //     .then((res) => {
  //       console.log(res.data);
  //       setPosts(res.data)
  //       setLoading(false)
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //       setError(err.message)
  //       setLoading(false)
  //     });
  // }

  useEffect(() => {
    setLoading(true);
    axios
      .get('https://jsonplaceholder.typicode.com/posts')
      .then((res) => {
        console.log(res.data);
        setPosts(res.data)
        setLoading(false)
      })
      .catch((err) => {
        console.log(err);
        setError(err.message)
        setLoading(false)
      });
  }, [])

  function updateName() {
    setName('kohli');
  }
  function updateAge() {
    setAge(age + 1);
  }

  return (
    <div>
      {/* <button onClick={getData}>get data</button> */}
      <h2>Name: {name}</h2>
      <button onClick={updateName}>update name</button>
      <h2>Age: {age}</h2>
      <button onClick={updateAge}>update age</button>
      <postsContext.Provider value={{loading, posts, error}}>
        <ageContext.Provider value={age}>
          <nameContext.Provider value={name}>
            <B />
            <C />
          </nameContext.Provider>
        </ageContext.Provider>
      </postsContext.Provider>
    </div>
  );
}

export default A;
