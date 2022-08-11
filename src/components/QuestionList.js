import React from "react";
import QuestionItem from "./QuestionItem";

function QuestionList({questions = [], onDelete, onPatch}) {

  const questionArr = questions.map((question)=>{
    return (
      <QuestionItem key={question.id} question={question} onDelete={onDelete} onPatch={onPatch} />
    )
  })

  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>{/* display QuestionItem components here after fetching */}</ul>
      {questionArr}
    </section>
  );
}

export default QuestionList;
