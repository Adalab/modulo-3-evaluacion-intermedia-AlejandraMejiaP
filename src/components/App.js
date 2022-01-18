import { useEffect, useState } from "react";
// import callToApi from '../services/api';
import "../styles/App.scss";

function App() {
  const [adalabersData, setAdalabersData] = useState([]);
  const [newStudents, setNewStudents] = useState([]);
  const [search, setSearch] = useState("");
  const [data, setData] = useState({
    name: "",
    speciality: "",
    tutor: "",
  });
  useEffect(() => {
    fetch(
      "https://beta.adalab.es/pw-recursos/apis/adalabers-v1/promo-patata.json"
    )
      .then((response) => response.json())
      .then((dataFromApi) => {
        setAdalabersData(dataFromApi.results);
      });
  }, []);

  const filterData = adalabersData.filter((result)=>
  result.name.toLowerCase().includes(search.toLowerCase())
  )
  const htmlAdalabers = filterData.map((adalaber) => (
    <tr key={adalaber.id}>
      <th>{adalaber.name}</th>
      <th>{adalaber.counselor}</th>
      <th>{adalaber.speciality}</th>
    </tr>
  ));
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

  const handleChangeSearch = (ev) => {
    setSearch(ev.currentTarget.value);
  }

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
          <form action=""  className="form__filter" onSubmit={handleSubmitForm}>
          <label htmlFor="filter" className="form__filter--label">Filtar por tutora: 
              <select
                name="filter"
                id="filter"
                className="form__filter--selector">
                <option value="todas">Todas</option>
                <option value="dayana">Dayana</option>
                <option value="yanelis">Yanelis</option>
                <option value="ivan">Iván</option>
              </select>
            </label>
            <label htmlFor="filter"> filtrar por nombre:</label>
          <input type="search" 
          autoComplete="off"
          name="filter"
          className="form__filter--input"
          value={search} 
          onChange={handleChangeSearch}
          />
          </form>
          <table className="table">
            <thead className="table__thead">
              <tr>
                <th>Nombre</th>
                <th>Tutora</th>
                <th>Especialidad</th>
                
              </tr>
            </thead>
            <tbody>
              {htmlAdalabers}
              {htmlNewStudent}
            </tbody>
          </table>
        </section>
        <section>
          <h3 className="section__title">Añadir nueva adalaber</h3>
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
