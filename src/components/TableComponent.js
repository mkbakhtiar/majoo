import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import BootstrapTable from "react-bootstrap-table-next";
import ToolkitProvider from "react-bootstrap-table2-toolkit";
import { connect } from "react-redux";
import { Container, Button, Spinner, Modal, ModalHeader, ModalBody, ModalFooter  } from "reactstrap";


const mapStateToProps = (state) => {    
    return {
      getTodoList: state.todos.getTodoList.data,
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

    const headColumn =[{
        dataField : 'id',
        text: 'ID'
    }, {
        dataField : 'title',
        text: 'Title'
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
                >
                    {(props) => (
                        <div>
                            <BootstrapTable 
                                {...props.baseProps} 
                            />
                            <Modal isOpen={modal} toggle={toggle}>
                                <ModalHeader toggle={toggle}>{titleTodo}</ModalHeader>
                                <ModalBody>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                </ModalBody>
                                <ModalFooter>
                                <Button color="primary" onClick={toggle}>Do Something</Button>{' '}
                                <Button color="secondary" onClick={toggle}>Cancel</Button>
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

export default connect(mapStateToProps, null)(TableComponent);
