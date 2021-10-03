import React from "react";

export default function liPhones() {
  const arrayPhonesNumbers = ["85468", "85748", "45485", "44858", "12348"];
  const liPhonesNumbers = arrayPhonesNumbers.map((number) => {
    return <li key={number}>{number}</li>;
  });

  return (
    <div>
      <h4>Список контактов:</h4>
      <ul>{liPhonesNumbers}</ul>
    </div>
  );
}
