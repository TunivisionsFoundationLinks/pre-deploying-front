import React, { useEffect } from "react";
import { useState } from "react";
import { Container } from "react-bootstrap";
import DataTable from "react-data-table-component";
import { fetchUsers } from "../../../api/UserRequest";
import { useQuery } from "@tanstack/react-query";
import { Flip, toast } from "react-toastify";
import { Link, useParams } from "react-router-dom";
import { getClub } from "../../../api/ClubsRequest";

const ClubTableComponents = () => {
  const Columns = [
    {
      name: "Club Name",
      selector: (row) => row.ClubName,
      sortable: true,
    },
    {
      name: "email",
      selector: (row) => row.emailClubs,
      sortable: true,
    },
    {
      name: "N° Tunimateurs",
      selector: (row) => row.email,
      sortable: true,
    },
    {
      name: "score",
      selector: (row) => row.score,
      sortable: true,
    },
    {
      name: "actions",
      Button: true,
      cell: (row) => (
        <div className="d-flex col justify-content-evenly">
          <Link to={`/Clubs/${row._id}`}>
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
  const { id } = useParams();
  const { data, isError, isLoading } = useQuery({
    queryKey: ["Clubs"],
    queryFn: getClub,
  });

  isLoading &&
    toast.info("loading...", {
      position: "bottom-center",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Flip,
    });
  isError &&
    toast.error(isError.message, {
      position: "bottom-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Flip,
    });

  const ClubsInChapter = data?.filter((club) => {
    return club.ChapterId === id;
  });
  const [filters, setFilters] = useState(ClubsInChapter);

  const handleFilter = (e) => {
    const newData = ClubsInChapter?.filter((row) => {
      return (
        row.ClubName?.toLowerCase().includes(e.target.value.toLowerCase()) ||
        row.email?.toLowerCase().includes(e.target.value.toLowerCase())
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
        data={filters || ClubsInChapter}
        selectableRows
        fixedHeader
        pagination
      ></DataTable>
    </Container>
  );
};

export default ClubTableComponents;
