export default function FormShow(props) {
    return (
      <div className="show">
        <div>
          <img src={props.img} alt="" />
          <h6 className="align-items-center">name</h6>
          <p>Status: {props.status}</p>
          <p>description: {props.desc}</p>
        </div>
        <button>close</button>
      </div>
    );
  }