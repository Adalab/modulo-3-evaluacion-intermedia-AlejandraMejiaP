import { useEffect, useState } from "react";
import callToApi from "../services/api";
import "../styles/App.scss";

function App() {
  const [adalabersData, setAdalabersData] = useState([]);
  const [newStudents, setNewStudents] = useState([]);
  const [search, setSearch] = useState("");
  const [tutorFilter, setTutorFilter] = useState("all");
  const [data, setData] = useState({
    name: "",
    speciality: "",
    tutor: "",
  });

  useEffect(() => {
    callToApi().then((dataFromApi) => {
      setAdalabersData(dataFromApi);
    });
  }, []);



  const htmlAdalabers = adalabersData
    .filter((result) =>
      result.name.toLowerCase().includes(search.toLowerCase())
    )
    .filter((eachAdalaber) => {
      if (tutorFilter === "all") {
        return true;
      } else {
        return eachAdalaber.counselor === tutorFilter;
      }
    })
    .map((adalaber,i) => {
      return <tr key={i}>
<th className="table__th">{adalaber.name}</th>
<th className="table__th">{adalaber.counselor}</th>
<th className="table__th">{adalaber.speciality}</th> 
<th className="table__th"> {adalaber.social_networks}  </th>
</tr>});

  const handleNewStudent = (ev) => {
    const newData = ev.currentTarget.name;
    setData({ ...data, [newData]: ev.currentTarget.value });
  };

  const handleAddStudent = () => {
    setNewStudents([...newStudents, data]);
  };

  const handleChangeSearch = (ev) => {
    setSearch(ev.currentTarget.value);
  };
  const handleFilterTutor = (ev) => {
    const filterSelected = ev.currentTarget.value;
    setTutorFilter(filterSelected);
  };
  const handleSubmitForm = (ev) => {
    ev.preventDefault();
  };

  const htmlNewStudent = newStudents.map((student, index) => (
    <tr key={index}>
      <th className="table__th">{student.name}</th>
      <th className="table__th">{student.tutor}</th>
      <th className="table__th">{student.speciality}</th>
    </tr>
  ));

  return (
    <div className="App">
      <header className="header">
        <h1 className="header__title">Adalabers</h1>
      </header>
      <main>
        <section>
          <form action="" className="form__filter" onSubmit={handleSubmitForm}>
            <label htmlFor="filter" className="form__filter--label">
              Filtar por tutora:
              <select
                name="filter"
                id="filter"
                className="form__filter--selector"
                onClick={handleFilterTutor}
              >
                <option value="all">Todas</option>
                <option value="Dayana">Dayana</option>
                <option value="Yanelis">Yanelis</option>
                <option value="Iván">Iván</option>
              </select>
            </label>
            <label htmlFor="filter"> filtrar por nombre:</label>
            <input
              type="search"
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
                <th className="table__th">Nombre</th>
                <th className="table__th">Tutora</th>
                <th className="table__th">Especialidad</th>
                <th className="table__th">Redes Sociales</th>
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
