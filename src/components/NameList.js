import React from "react";
import Person from "./Person";

function NameList() {
  const names = ["man", "tap", "pak"];
  const nameList = names.map((name) => <h2>{name}</h2>);

  const persons = [
    {
      id: 1,
      name: "Yuki",
      age: 20,
      skill: "Sigma",
    },
    {
      id: 2,
      name: "Aoi",
      age: 25,
      skill: "Mogging",
    },
    {
      id: 3,
      name: "Quandale",
      age: 28,
      skill: "Rizz",
    },
  ];

  const personList = persons.map((person) => (
    <Person key={person.id} person={person}></Person>

  ));
  return (
    <div>
      {
        personList
        //nameList
        //names.map(name=><h2>{name}</h2>)
      }

      {/* <h1>{names[0]}</h1>
        <h2>{names[1]}</h2>
        <h2>{names[2]}</h2> */}
    </div>
  );
}

export default NameList;
