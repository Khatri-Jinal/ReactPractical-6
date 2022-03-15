import ReactPaginate from "react-paginate";
import { DataType } from "../../App";
import "./UserPagination.css";

interface UserPaginationPropTypes {
  handlePageClick: (data: DataType) => void;
}

function UserPagination({ handlePageClick }: UserPaginationPropTypes) {
  return (
    <div>
      <ReactPaginate
        pageCount={2}
        previousLabel="< Prev"
        nextLabel="Next >"
        onPageChange={handlePageClick}
        containerClassName="pagination"
        pageClassName="page-item"
        pageLinkClassName="page-link"
        previousClassName="page-item"
        previousLinkClassName="page-link"
        nextClassName="page-item"
        nextLinkClassName="page-link"
        activeClassName="active"
      ></ReactPaginate>
    </div>
  );
}

export default UserPagination;
