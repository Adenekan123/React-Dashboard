import { useDispatch } from "react-redux";
import { modalOpen } from "../features/modal/modalSlice";

const TableItem = ({
  _id,
  index,
  firstname,
  lastname,
  title,
  email,
  suspended,
}) => {
  const dispatch = useDispatch();
  return (
    <tr>
      <td>{index}</td>
      <td>{firstname + " " + lastname}</td>
      <td>{title}</td>
      <td>{email}</td>
      <td>
        <button
          className="bg-primary text-secondary px-3 py-2 rounded capitalize font-semibold mr-2"
          onClick={() =>
            dispatch(modalOpen({ name: "smallprofile", id: _id }))
          }>
          View
        </button>
      </td>
    </tr>
  );
};

export default TableItem;
