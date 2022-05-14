import { useDispatch } from "react-redux";
import { modalOpen } from "../features/modal/modalSlice";
import { toggleSuspendUser } from "../features/user/usersSlice";

const TableItem = ({ id, index, name, title, email, suspended }) => {
  const dispatch = useDispatch();
  return (
    <tr>
      <td>{index}</td>
      <td>{name}</td>
      <td>{title}</td>
      <td>{email}</td>
      <td>
        <button
          className="bg-primary text-secondary px-3 py-2 rounded capitalize font-semibold mr-2"
          onClick={() => dispatch(modalOpen({ name: "smallprofile", id: id }))}>
          View
        </button>
        {suspended ? (
          <button
            className="bg-green-500 text-secondary px-3 py-2 rounded capitalize font-semibold"
            onClick={() => dispatch(toggleSuspendUser({ userid: id }))}>
            Activate
          </button>
        ) : (
          <button
            className="bg-red-500 text-secondary px-3 py-2 rounded capitalize font-semibold"
            onClick={() => dispatch(toggleSuspendUser({ userid: id }))}>
            Suspend
          </button>
        )}
      </td>
    </tr>
  );
};

export default TableItem;
