import React from "react";

const PREFIX = 'CodeIt-';


function useLocalStorage (key , initialValue) {

  const prefixedKey = PREFIX + key;

  const [value , setValue] = React.useState(() => {

    const jsonValue = localStorage.getItem(prefixedKey)

    if (jsonValue !== null) {
      return JSON.parse (jsonValue);
    }


    if (typeof (initialValue) === 'function') {
      return initialValue();
    } 
    
    else {
      return initialValue;
    }

  });

  React.useEffect (() => {
    localStorage.setItem (prefixedKey , JSON.stringify (value))
  }, [prefixedKey , value]);

  return [value , setValue];

}


export default useLocalStorage;
