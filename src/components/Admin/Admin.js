import React, { useState, useEffect } from 'react';
import './Admin.css';
import MaterialTable from 'material-table'
import Header1 from '../Header1/Header';
const empList = [
  { id: 10, name: "Adva. Web Service", price: '4', Category: "Course", Stock: 19 },
  { id: 2, name: "Adv. Soft dev", price: '5.99', Category: "Course", Stock: 20 },
  { id: 3, name: "Bill Gates", price: '6.74', Category: "Biography", Stock: 35 },
  { id: 4, name: "JavaScript", price: '3.2', Category: "Programming", Stock: 4 },
]

function Admin() {

  const [data, setData] = useState(empList)
  const columns = [
    { title: "Book_ID", field: "id" , editable: "false"},
    { title: "Book Name", field: "name" },
    { title: "Price($) ", field: "price" }, 
    { title: "Category", field: 'Category' },
    { title: "Stock", field: 'Stock' }
   
  ] 
 

  return (
    <div className="App">
      <Header1/>  
      <h1 align="center" style={{marginTop: "20px"}}  >Book Data</h1>
      <h4 align='center'></h4>
     <div className="container-table">
      <MaterialTable
       style={{zIndex:"0" , fontWeight:"bold", boxShadow: "5px 5px 15px -5px black" }}
        title=""
        data={data}
        columns={columns}
        editable={{
          onRowAdd: (newRow)=> new Promise((resolve , reject) =>{
            console.log(newRow);
            const updateRows = [...data, {id:Math.floor(Math.random()*100),...newRow}]
            setTimeout(()=>{
              resolve();
            setData(updateRows);
            }, 2000);
            
          }),
          onRowDelete: selectedRow => new Promise((resolve, reject)=>{
            const index = (selectedRow.tableData.id);
            const updateRows = [...data]
            updateRows.splice(index, 1)
            setTimeout(()=>{
              setData(updateRows)
            resolve()
            },2000);
           
          }),
          onRowUpdate:(updatedRow, oldRow)=>new Promise((resolve , reject)=>{
            const index = oldRow.tableData.id;
            const updatedRows =[...data];
            updatedRows[index] = updatedRow;
            setTimeout(()=>{
              setData(updatedRows);
            resolve();
            })
            
          })
        }}
        options ={{
          actionsColumnIndex: -1, addRowPosition:"first"
        }}
      />
      </div>
    </div>
  );
}

export default Admin;