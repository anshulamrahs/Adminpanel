import React from 'react'
import './datatable.scss'
import { DataGrid } from '@mui/x-data-grid';
import { userColumns, userRows } from '../../datatablesource';
import { Link } from 'react-router-dom';

const Datatable = () => {

    const actionColumn = [{field: 'action', headerName: 'action', width: 200,renderCell:()=>{
        return (
            <div className="cellAction">
              <Link to={"/users/test"} style={{textDecoration: "none"}}>
                <div className="viewButton">View</div>
              </Link>
                <div className="deleteButton">delete</div>
            </div>
        )
    }}];
  return (
    <div className='datatable'>
      <div className="datatableTitle">
        ADD NEW USER
        <Link to={"/users/new"} style={{textDecoration: "none"}} className='link'>
          ADD NEW
        </Link>
      </div>
          <DataGrid
        rows={userRows}
        columns={userColumns.concat(actionColumn)}
        pageSize={9}
        rowsPerPageOptions={[9]}
        checkboxSelection
      />
    </div>
  )
}

export default Datatable