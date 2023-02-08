import React, {useEffect} from 'react';
import axios from 'axios';
const FilterableTable = require('stx-react-filterable-table');

function Table(props) {
  const {comments,setComments} = props
  const getData = async () => {
    try{
      const response = await axios.get("https://dev.ylytic.com/ylytic/test",{
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept",
        }
    })
      if(response){
        setComments(response.data.comments);
      }
    }
    catch(error){
      console.log("error:",error);
    }
  }
  useEffect(()=>{
    getData()
  },[])
  const fields = [
    { name: 'at', displayName: "At", inputFilterable: true, sortable: true },
    { name: 'author', displayName: "Author", inputFilterable: true, sortable: true },
    { name: 'like', displayName: "Like", inputFilterable: true, sortable: true },
    { name: 'reply', displayName: "Reply", inputFilterable: true, sortable: true },
    { name: 'text', displayName: "Text", inputFilterable: true, sortable: true }
  ];
  return (
    <div className='container margin-top-5'>
      <div className='text-center margin-bottom-5-fs-36'>Comments</div>
      <FilterableTable
	namespace="Comments"
	initialSort="at"
	data={comments}
	fields={fields}
	noRecordsMessage="There are no comments to display"
	noFilteredRecordsMessage="No comments match your filters!"
  pageSize = {25}
  pageSizes = {[25,50,100]}
/>
    </div>
  );
}

export default Table;
