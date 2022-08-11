import React, { useEffect, useState } from "react";
import AdminNavBar from "./AdminNavBar";
import QuestionForm from "./QuestionForm";
import QuestionList from "./QuestionList";

function App() {
  const [page, setPage] = useState("List");
  const [questions, setQuestions] = useState([])

  function handlePost (item){
    const newQuestions = [...questions, item]
    setQuestions(newQuestions)
  }

  function handleDelete(id) {
    const newQuestions = questions.filter((el)=>el.id !== id)
    setQuestions(newQuestions)
  }

  function handlePatch(data) {
    let newArr = questions.map((question)=>{
      if (question.id === data.id){
        return data
      } else {
        return question
      }
    })
    setQuestions(newArr)
  }

  useEffect(()=>{
    fetch('http://localhost:4000/questions')
    .then(r=>r.json())
    .then(data=>setQuestions(data))
  }, [])


  return (
    <main>
      <AdminNavBar onChangePage={setPage} />
      {page === "Form" ? <QuestionForm onPost={handlePost} /> : <QuestionList questions={questions} onDelete={handleDelete} onPatch={handlePatch} />}
    </main>
  );
}

export default App;
