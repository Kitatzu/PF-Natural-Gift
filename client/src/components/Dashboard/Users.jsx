import React from 'react'
import { useSelector } from 'react-redux';
import {Table, TableContainer,TableBody, TableRow, TableHead, TableCell, Modal, Button, TextField} from '@mui/material'
import { Delete} from '@mui/icons-material'
import {Link} from "react"
import { useDispatch, useEffect, useState } from 'react';
import axios from 'axios';
import './Users.scss'
import Global from '../../Global';

function Users() {
  const [data, setData] = useState([]);
  const [modalEliminar, setModalEliminar] = useState(false);
  const [usersSelector, setUsersSelector] = useState({
    userName:"",
    firstName:"",
    lastName:"",
    email:""
   })


  const usersGet = async() => {
    await axios.get(Global.ApiUrl + "/users")
    .then(response => (
      setData(response.data)
    ))
  }
  
  
  const seleccionarUsers=(users, caso) => {
    setUsersSelector(users);
    (caso==="Eliminar")&&setModalEliminar(true)
  }
  
  const abrirCerrarModalEliminar = () => {
    setModalEliminar(!modalEliminar)
  }
  const usersDelete = async() => {
    await axios.delete(Global.ApiUrl + "/users/" + usersSelector.id, usersSelector)
    .then(response =>{
      setData(data.filter(users => users.id !== usersSelector.id))
      abrirCerrarModalEliminar()
    })
  }

  
  useEffect(async() => {
    await usersGet()
  }, [])
  
  const bodyEliminar =(
    <div className="Modal">
     <p>Estas seguro que deseas eliminar el Usuario <b>{usersSelector && usersSelector.firstName}</b> ? </p>
      <div align="right">
        <Button color="secondary" onClick={() => usersDelete()}>Si</Button>
        <Button onClick={() => abrirCerrarModalEliminar()}>No</Button>
      </div>
    </div>
  )
 
  return (
    <div>
      <Button Link to="/Dashboard">volver</Button>
       <TableContainer sx={{width:{xs:"100%"}}} >
      <Table>
        <TableHead>
          <TableCell className='TableC'>User Name</TableCell>
          <TableCell className='TableC'>Name</TableCell>
          <TableCell className='TableC'>Last Name</TableCell>
          <TableCell className='TableC'>Email</TableCell>
          <TableCell className='TableC'>Acciones</TableCell>
          

        </TableHead>

        <TableBody>
          {data.map(Users =>(
            <TableRow key={Users.id}>
              <TableCell>{Users.userName}</TableCell>
              <TableCell>{Users.firstName}</TableCell>
              <TableCell>{Users.lastName}</TableCell>
              <TableCell>{Users.email}</TableCell>
              <TableCell>
                <Delete className='ButtonDelete' onClick={() => seleccionarUsers(Users, "Eliminar")}/>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
     </TableContainer>
     <Modal
     open={modalEliminar}
     onClose={abrirCerrarModalEliminar}>
      {bodyEliminar}

     </Modal>
    </div>
  )
}

export default Users