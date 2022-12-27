import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Pagination from '@mui/material/Pagination';
import { useSearchParams } from "react-router-dom";
import BasicTable from "../component/Table";
import axios from "../service/axiosService";
import { setUsers } from "../redux/slice/userSlice";
import { showError } from "../redux/slice/alertSlice";
import BasicModal from "../component/Modal";

function ShowUser() {
  const dispatch = useDispatch()
  // const navigate = useNavigate()
  const [searchParams] = useSearchParams();

  const currentPage = searchParams.get('page') || 1

  const data = useSelector((state) => state.userState.users);

  const [page, setPage] = useState(currentPage)

  const [open, setOpen] = useState(false)

  useEffect(() => {
    axios.get(`/users?page=${page}&per_page=${6}`).then((res) => {
      dispatch(setUsers(res))
    }).catch((err) => dispatch(showError(err)))
  }, [page]);

  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <div style={{ width: '75%' }}>
        <BasicTable />
        <div style={{ marginTop: '10px', display: 'flex', justifyContent: 'space-between' }}>
          <button
            type="button"
            onClick={() => {
              setOpen(true)
            }}
          >
            Add User
          </button>
          <Pagination
            count={data?.total_pages}
            variant="outlined"
            shape="rounded"
            onChange={(event, value) => {
              setPage(value)
            }}
          />
        </div>
      </div>
      {
        open
        && <BasicModal open={open} setOpen={setOpen} />
      }
    </div>
  );
}

export default ShowUser;
