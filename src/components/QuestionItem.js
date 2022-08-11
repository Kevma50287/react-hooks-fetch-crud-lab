import React from "react";

function QuestionItem({ question, onDelete, onPatch }) {
  const { id, prompt, answers, correctIndex } = question;

  function fetchDelete (e){
    fetch(`http://localhost:4000/questions/${id}`, {
      method:'DELETE'
    }).then(r=>r.json()).then(() => onDelete(id))
  }

  function fetchUpdate (e){
    fetch(`http://localhost:4000/questions/${id}`, {
      method:'PATCH',
      headers:{
        'Content-type':'application/json'
      },
      body: JSON.stringify({
        correctIndex: e.target.value
      })
    })
    .then(r=>r.json())
    .then((data) => onPatch(data))
  }

  const options = answers.map((answer, index) => (
    <option key={index} value={index}>
      {answer}
    </option>
  ));

  return (
    <li>
      <h4>Question {id}</h4>
      <h5>Prompt: {prompt}</h5>
      <label>
        Correct Answer:
        <select defaultValue={correctIndex} onChange={fetchUpdate} >{options}</select>
      </label>
      <button onClick={fetchDelete} >Delete Question</button>
    </li>
  );
}

export default QuestionItem;
