import { useEffect, useState } from "react";
import "./Tools.css";
import FormShow from "./FormShow.js";
import Search from "./Search.js";

export default function Tools() {
  let [tools, setTools] = useState([]);
  let [selected, setSelected] = useState();
  let [table, setTable] = useState(true);
  let [input, setInput] = useState();
  // get data from api
  useEffect(() => {
    fetch("http://localhost:9000/tools")
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setTools(data);
      });
  }, []);

  // search
  function whatSelected(e) {
    e.preventDefault();
    setSelected(e.target.value);
  }
  function handlesearch() {
    <Search
      selected={selected}
      table={setTable}
      data={tools}
      inputValue={input}
    />;
  }
  // show
  function formShow() {
    return <FormShow data={tools} showBtn={formShow} />;
  }
  return (
    <div className="Tools ml-4">
      <form
        className="d-flex align-items-center justify-content-center"
        role="search"
      >
        <h2 className=" me-2">Search with </h2>
        <select className="me-2" onChange={whatSelected}>
          <option value={0}>ID</option>
          <option value={1}>Title</option>
        </select>
        <input
          className=" me-2"
          type="search"
          placeholder={
            selected === 0
              ? "Search With Id"
              : selected === 1
              ? "Search With Title"
              : "Search With Id"
          }
          aria-label="Search"
          onChange={(e) => {
            setInput(e.target.value);
          }}
          value={input}
        />
        <button
          className="btn btn-outline"
          type="submit"
          on
          onClick={handlesearch}
        >
          Search
        </button>
      </form>

      <table
        onChange={setTable}
        value={table}
        className="table  table-striped mt-5 p-5"
        border="1"
      >
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Image</th>
            <th>Count</th>
            <th>Status</th>
            <th>Last modified</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {tools.map((el) => {
            return (
              <tr key={el.id}>
                <td>{el.id}</td>
                <td>{el.name}</td>
                <td>{el.img}</td>
                <td>{el.count}</td>
                <td>{el.status}</td>
                <td>{el.lastModified}</td>
                <td>
                  <button
                    className="btn btn-info btn-sm"
                    onClick={({ el }) => {
                      formShow(el.id);
                    }}
                  >
                    Show
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
