import { Pagination } from "antd";
import './OrganisationsContentPagination.scss'
import { dummydata } from "../../fixtures/dummydata";
const OrganisationsContentPagination = ({ setpage,pageSize }) => {
  return (
    <div className="pagination-container">
      <Pagination
       size="small" 
       total={dummydata.length}
        showTotal={(total, range) => `Showing results ${range[1]} of ${total}`}
        defaultPageSize={pageSize}
        defaultCurrent={1}
        onChange={(page) => setpage(page)}
      />
    </div>
  );
};
export default OrganisationsContentPagination;
