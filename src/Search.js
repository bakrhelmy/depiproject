import { useEffect } from "react";
export default function Search({ selected, setTable, data, showBtn, inputValue }) {
  useEffect(() => {
    setTable(false); // لتحديث الجدول بعد البحث
  }, [inputValue, setTable]);

  const filteredData = data.filter((el) => {
    if (selected === 0) {
      return el.id.toString().includes(inputValue); // البحث بـ ID
    } else if (selected === 1) {
      return el.name.toUpperCase().includes(inputValue.toUpperCase()); // البحث بالعنوان
    }
    return false;
  });

  return (
    <table className="table table-striped mt-5 p-5" border="1">
      <thead>
        <tr>
          <th>ID</th>
          <th>Title</th>
          <th>Image</th>
          <th>Count</th>
          <th>Status</th>
          <th>Last modified</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {filteredData.map((el) => (
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
                onClick={() => showBtn(el)}
              >
                Show
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
