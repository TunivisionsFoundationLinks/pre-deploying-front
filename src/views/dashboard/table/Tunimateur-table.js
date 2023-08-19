import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import { Flip, toast } from "react-toastify";
import DataTable from "react-data-table-component";
import { Container } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import { FetchOneUser, fetchUsers } from "../../../api/UserRequest";
import { useEffect } from "react";
import { getOneClub } from "../../../api/ClubsRequest";
import AddBureauCard from "../../../components/addBureauCard";
import { useSelector } from "react-redux";

const TunimateurList = () => {
  const { id } = useParams();
  const { userInfo } = useSelector((state) => state.user);
  const { data, isError, isLoading, Error } = useQuery({
    queryKey: ["Users"],
    queryFn: fetchUsers,
  });
  const [dataMembers, setDataMembers] = useState();
  const getUser = useQuery({
    queryKey: ["info", userInfo.user._id],
    queryFn: () => FetchOneUser(userInfo.user._id),
  });
  const getClub = useQuery({
    queryKey: ["info", id],
    queryFn: () => getOneClub(id),
  });
  const getMembers = () => {
    const datas = data?.filter((user) => user?.club === id);

    setDataMembers(datas);
  };
  useEffect(() => {
    getMembers();
  }, [getMembers]);
  const Columns = [
    {
      name: "Tunimateur Name",
      selector: (row) => row.firstname + " " + row.lastname,
      sortable: true,
    },
    {
      name: "email",
      selector: (row) => row.email,
      sortable: true,
    },
    {
      name: "Role",
      selector: (row) => row.role,
      sortable: true,
    },
    {
      name: "Department",
      selector: (row) => row.Departement,
      sortable: true,
    },
    {
      name: "score",
      selector: (row) => row.points,
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

  const chapter = getUser?.data?.Chapter;
  const isPresident = getUser?.data?.role;
  const manager = getUser?.data?.role;
  const departement = getUser?.data?.Departement;
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
    toast.error(Error.message, {
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

  const [filters, setFilters] = useState(dataMembers);

  const handleFilter = (e) => {
    const newData = dataMembers?.filter((row) => {
      return (
        row?.firstname?.toLowerCase().includes(e.target.value.toLowerCase()) ||
        row?.lastname?.toLowerCase().includes(e.target.value.toLowerCase()) ||
        row?.Departement?.toLowerCase().includes(
          e.target.value.toLowerCase()
        ) ||
        row?.role?.toLowerCase().includes(e.target.value.toLowerCase()) ||
        row?.email?.toLowerCase().includes(e.target.value.toLowerCase())
      );
    });
    setFilters(newData);
  };
  return (
    <>
      <Container className="mt-5">
        <div className="d-flex justify-content-between">
          <AddBureauCard dataMembers={dataMembers} />

          {(manager === "Manager") &
          (departement === "Ressource Humaine") &
          (chapter === getClub.data?.otherDetails?.ChapterId) ? (
            <AddBureauCard dataMembers={dataMembers} />
          ) : (
            ""
          )}
          <div className="d-flex iq-search-bar device-search mb-3  w-auto">
            <input
              type="text"
              className="text search-input bg-grey border-none p-2"
              onChange={handleFilter}
              placeholder="Type here to search..."
            />
            <div className="search-link px-2 d-flex justifiy-content-center align-items-center bg-white">
              <i className="ri-search-line"></i>
            </div>
          </div>
        </div>
        <DataTable
          columns={Columns}
          data={filters ? filters : dataMembers}
          selectableRows
          fixedHeader
          pagination
        ></DataTable>
      </Container>
    </>
  );
};

export default TunimateurList;
