import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import BootstrapTable from "react-bootstrap-table-next";
import ToolkitProvider from "react-bootstrap-table2-toolkit";
import { connect } from "react-redux";
import { Container, Button, Spinner, Modal, ModalHeader, ModalBody, ModalFooter  } from "reactstrap";
import * as todoActions from '../actions/todoActions';



const defaultSorted = [
    {
      dataField: "createdAt",
      order: "asc",
    },
  ];

const mapStateToProps = (state) => {    

    return {
      getTodoList: state.todos.getTodoList.data,
      deleteTodo: state.todos.getTodoList.data,
      errorTodoList: state.todos.errorTodoList,
    };
};


const TableComponent = (props) => {
    const [modal, setModal] = useState(false);
    const [idTodo, setIdTodo] = useState();
    const [titleTodo, setTitleTodo] = useState();
    const [desTodo, setDesTodo] = useState();
    const [statusTodo, setStatusTodo] = useState();
    const [createAtTodo, setcreateAtTodo] = useState();
    
    const toggle = (id,title,des,status,createdAt) => {
        setIdTodo(id);
        setTitleTodo(title);
        setDesTodo(des);
        setStatusTodo(status);
        setcreateAtTodo(createdAt);
        setModal(!modal);
    }

    const deleteContact = (id) => {
        return {
            type: todoActions.DELETE_ITEM,
            id: id
        }
    }

    const headColumn =[{
        dataField : 'id',
        text: 'ID'
    }, {
        dataField : 'title',
        text: 'Title'
    },{
    }, {
        dataField : 'createdAt',
        text: 'Created At',
        sort: true,
    },{
        dataField: "link",
        text: "Action",
        formatter: (rowContent, row) => {
          return (
            <div>
                <Button color="dark" className="mr-2" onClick={()=>toggle(row.id,row.title,row.description,row.status,row.createdAt)}>
                Detail
                </Button>
            </div>
          );
        },
    }];

   

    return (
        <Container>
            {props.getTodoList ? (
                <ToolkitProvider
                bootstrap4
                keyField="id"
                data={props.getTodoList}
                columns={headColumn}
                defaultSorted={defaultSorted}
                >
                    {(props) => (
                        <div>
                            <BootstrapTable 
                                {...props.baseProps} 
                            />
                            <Modal isOpen={modal} toggle={toggle}>
                                <ModalHeader toggle={toggle}>{titleTodo}</ModalHeader>
                                <ModalBody>
                                    <h3>Deskripsi : {desTodo}</h3>
                                    <p>Status : {statusTodo}</p>
                                    <p>Created At : {createAtTodo}</p>
                                </ModalBody>
                                <ModalFooter>
                                    <Link to={"edit/" + {idTodo}}>
                                        <Button color="primary">Edit</Button>{' '}
                                    </Link>
                                <Button color="danger" onClick={() => deleteContact(idTodo)} >Hapus Data Ini</Button>
                                </ModalFooter>
                            </Modal>
                        </div>
                    )}
                </ToolkitProvider>
                
            ) : (
                <div className="text-center">
                    {props.getTodoList ? (
                    <h4>{props.errorTodoList}</h4>
                    ) : (
                    <Spinner color="dark" />
                    )}
                </div>
                )}
        </Container>
        
    )
}


export default connect(mapStateToProps)(TableComponent);
