import { useEffect, useState } from "react";
// import callToApi from '../services/api';
import "../styles/App.scss";

function App() {
  const [newStudents, setNewStudents] = useState([]);
  const [data, setData] = useState({
    name: "",
    speciality: "",
    tutor: "",
  });

  const handleNewStudent = (ev) => {
    const newData = ev.currentTarget.name;
    setData({ ...data, [newData]: ev.currentTarget.value });
  };

  const handleAddStudent = () => {
    setNewStudents([...newStudents, data]);
  };

  const htmlNewStudent = newStudents.map((student, index) => (
    <tr key={index}>
      <th>{student.name}</th>
      <th>{student.tutor}</th>
      <th>{student.speciality}</th>
    </tr>
  ));
  const handleSubmitForm = (ev) => {
    ev.preventDefault();
  };

  return (
    <div className="App">
      <header className="header">
        <h1 className="header__title">Adalabers</h1>
      </header>
      <main>
        <section>
          <table className="table">
            <thead className="table__thead">
              <tr>
                <th>Nombre</th>
                <th>Tutora</th>
                <th>Especialidad</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>Pepa</th>
                <th>Yanelis</th>
                <th>IA</th>
              </tr>
              {htmlNewStudent}
            </tbody>
          </table>
        </section>
        <section>
          <h3 className="section__title">Añadir un nuevo club</h3>
          <form action="" className="form" onSubmit={handleSubmitForm}>
            <label
              htmlFor="newStudent"
              className="form__label form__label--title"
            >
              Nombre de la Alumna:
            </label>
            <input
              type="text"
              name="name"
              id="newStudent"
              className="form__input"
              value={data.name}
              onChange={handleNewStudent}
            />

            <label
              htmlFor="newStudent"
              className="form__label form__label--title"
            >
              Tutora:
            </label>
            <input
              type="text"
              name="tutor"
              id="newStudent"
              className="form__input"
              value={data.tutor}
              onChange={handleNewStudent}
            />
            <label
              htmlFor="newStudent"
              className="form__label form__label--title"
            >
              Especialidad:
            </label>
            <input
              type="text"
              name="speciality"
              id="newStudent"
              className="form__input"
              value={data.speciality}
              onChange={handleNewStudent}
            />
            <button className="form__button" onClick={handleAddStudent}>
              Añadir Adalaber
            </button>
          </form>
        </section>
      </main>
    </div>
  );
}

export default App;
