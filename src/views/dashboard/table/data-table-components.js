import React from "react";
import { useState } from "react";
import { Container } from "react-bootstrap";
import DataTable from "react-data-table-component";
import { fetchUsers } from "../../../api/UserRequest";
import { useQuery } from "@tanstack/react-query";
import { Flip, toast } from "react-toastify";
import { Link } from "react-router-dom";

const DataTableComponents = () => {
  const Columns = [
    {
      name: "User",
      selector: (row) => `${row.firstname} ${row.lastname}`,
      sortable: true,
    },
    {
      name: "score",
      selector: (row) => row.points,
      sortable: true,
    },
    {
      name: "email",
      selector: (row) => row.email,
      sortable: true,
    },
    {
      name: "actions",
      Button: true,
      cell: (row) => (
        <div className="d-flex col justify-content-evenly">
          <Link to={`/friend-profile/${row._id}`}>
            <i
              className="material-symbols-outlined me-0 text-primary"
              role="button"
              onClick={() => console.log("row.id")}
            >
              duo
            </i>
          </Link>
          <i
            className="material-symbols-outlined me-0 text-secondary"
            role="button"
            onClick={() => console.log("visit profile")}
          >
            visibility
          </i>
          <i
            className="material-symbols-outlined me-0 text-danger"
            role="button"
            onClick={() => console.log("block")}
          >
            Block
          </i>
        </div>
      ),
    },
  ];
  const { data, isError, isLoading } = useQuery({
    queryKey: ["Users"],
    queryFn: fetchUsers,
  });

  const [filters, setFilters] = useState(data);

  const handleFilter = (e) => {
    const newData = data?.filter((row) => {
      return (
        row?.firstname?.toLowerCase().includes(e.target.value.toLowerCase()) ||
        row?.lastname?.toLowerCase().includes(e.target.value.toLowerCase()) ||
        row?.email?.toLowerCase().includes(e.target.value.toLowerCase())
      );
    });
    setFilters(newData);
  };

  return (
    <Container className="mt-5">
      <div className="text-end">
        <input type="text" onChange={handleFilter} />
      </div>
      <DataTable
        columns={Columns}
        data={filters || data}
        selectableRows
        fixedHeader
        pagination
      ></DataTable>
    </Container>
  );
};

export default DataTableComponents;
