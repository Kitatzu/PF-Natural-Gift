import React from 'react'
import './Prods.scss'
import {Table, TableContainer,TableBody, TableRow, TableHead, TableCell, Modal, Button, TextField} from '@mui/material'
import {Edit, Delete} from '@mui/icons-material'
import {makeStyles} from '@material-ui/core/styles'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../Redux/Thunks/index";
import { getCategories } from "../../Redux/Thunks/Categories"
import axios from 'axios'
import Global from "../../Global"



const useStyles = makeStyles((theme) => ({
  modal: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    top:"50%",
    left:"%50",
    transform: "transalate(-50%, -50%)"
  },
  iconos:{
    cursor:'pointer'
  },
  inputMaterial:{
    width: '100%'
  }
}))

function Prods() {
  const styles= useStyles();
  const [data, setData] = useState([])
  const [ModalInsertar, setModalInsertar] = useState(false);
  const [modalEditar, setModalEditar] = useState(false);
  const [modalEliminar, setModalEliminar] = useState(false);
 const [prodsSeleccionanda, setProdsSeleccionada] = useState({
  name:"",
  price:"",
  stock:"",
  rating:"",
  categories:""
 })

 const handleChange = e => {
  const{name, value} = e.target;
  setProdsSeleccionada(prevState=>({
    ...prevState,
    [name]:value
  }))
  console.log(prodsSeleccionanda)
 }


 const { categories = null } = useSelector((store) => store.categories);
  const { products = [] } = useSelector((state) => state.products);
   const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getProducts());
        dispatch(getCategories())
      }, []);

      

      const prodsPost = async() => {
        await axios.post(Global.ApiUrl + "/products", prodsSeleccionanda)
        .then(response=>{
          setData(data.concat(response.data))
          console.log(response.data)
          abrirCerrarModalInsertar()
          dispatch(getProducts())
        })
        
      }

      const prodsPut = async() => {
        await axios.put(Global.ApiUrl + "/products/"+ prodsSeleccionanda.id, prodsSeleccionanda)
        .then(response => {
          let dataNueva=data;
          dataNueva.map(prods=>{
            if(prodsSeleccionanda.id === prods.id){
              prods.name=prodsSeleccionanda.name;
              prods.price=prodsSeleccionanda.price;
              prods.stock=prodsSeleccionanda.stock;
              prods.rating=prodsSeleccionanda.rating;
            }
          })
          setData(dataNueva)
          dispatch(getProducts())
          abrirCerrarModalEditar()
        }).catch(err => {console.log(err)})
      }
      

      const abrirCerrarModalInsertar = () => {
        setModalInsertar(!ModalInsertar)
      }

      const abrirCerrarModalEditar = () => {
        setModalEditar(!modalEditar)
      }
      const prodsDelete = async() => {
        await axios.delete(Global.ApiUrl + "/products/" + prodsSeleccionanda.id, prodsSeleccionanda)
        .then(response =>{
          setData(data.filter(prods => prods.id !== prodsSeleccionanda.id))
          dispatch(getProducts())
          abrirCerrarModalEliminar()
        })
      }
      const abrirCerrarModalEliminar = () => {
        setModalEliminar(!modalEliminar)
      }

      const seleccionarProds=(prods, caso) => {
        setProdsSeleccionada(prods);
        (caso==="Editar")?abrirCerrarModalEditar():abrirCerrarModalEliminar()
      }

      const bodyInsertar =(
        <div className={styles.modal}>
          <h3>Agregar Product</h3>
          <TextField name="name" className={styles.inputMaterial} label="Name" onChange={handleChange}></TextField>
          <br />
          <TextField name="price"className={styles.inputMaterial} label="Price" onChange={handleChange}></TextField>
          <br />
          <TextField name="stock" className={styles.inputMaterial} label="Stock" onChange={handleChange}></TextField>
          <br />
          <TextField name="rating" className={styles.inputMaterial} label="Rating" onChange={handleChange}></TextField>
          <br /><br />
          <div align="right">
            <Button color="primary" onClick={() => prodsPost()}>Agregar</Button>
            <Button onClick={() => abrirCerrarModalInsertar()}>Cancelar</Button>
          </div>
        </div>
      )

      const bodyEditar =(
        <div className={styles.modal}>
          <h3>Editar Product</h3>
          <TextField name="name" className={styles.inputMaterial} label="Name" onChange={handleChange} value={prodsSeleccionanda && prodsSeleccionanda.name}></TextField>
          <br />
          <TextField name="price"className={styles.inputMaterial} label="Price" onChange={handleChange} value={prodsSeleccionanda && prodsSeleccionanda.price}></TextField>
          <br />
          <TextField name="stock" className={styles.inputMaterial} label="Stock" onChange={handleChange} value={prodsSeleccionanda && prodsSeleccionanda.stock}></TextField>
          <br />
          <TextField name="ranking" className={styles.inputMaterial} label="Ranking" onChange={handleChange} value={prodsSeleccionanda && prodsSeleccionanda.rating}></TextField>
          <br /><br />
          <div align="right">
            <Button color="primary" onClick={() => prodsPut()}>Editar</Button>
            <Button onClick={() => abrirCerrarModalEditar()}>Cancelar</Button>
          </div>
        </div>
      )

      const bodyEliminar =(
        <div className={styles.modal}>
         <p>Estas seguro que deseas eliminar el producto <b>{prodsSeleccionanda && prodsSeleccionanda.name}</b> ? </p>
          <div align="right">
            <Button color="secondary" onClick={()=>prodsDelete()}>Si</Button>
            <Button onClick={() => abrirCerrarModalEliminar()}>No</Button>
          </div>
        </div>
      )


  return (
    <div className='Prods'>
      <br />
      <Button className='ButtonInsertar' onClick={() => abrirCerrarModalInsertar()} align="center" >Insertar</Button>
      <br /><br />
     <TableContainer sx={{width:{xs:"100%"}}} >
      <Table>
        <TableHead>
          <TableCell>Name</TableCell>
          <TableCell>Price</TableCell>
          <TableCell>Stock</TableCell>
          <TableCell>Rating</TableCell>
          <TableCell>Acciones</TableCell>
          

        </TableHead>

        <TableBody>
          {products.map(prods =>(
            <TableRow key={prods.id}>
              <TableCell>{prods.name}</TableCell>
              <TableCell>{prods.price}</TableCell>
              <TableCell>{prods.stock}</TableCell>
              <TableCell>{prods.rating}</TableCell>
              <TableCell>
                <Edit className="ButtonEdit" onClick={() => seleccionarProds(prods, "Editar")}/>
                &nbsp;&nbsp;&nbsp;
                <Delete className="ButtonDelete" onClick={() => seleccionarProds(prods, "Eliminar")} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
     </TableContainer>
     <Modal
     open={ModalInsertar}
     onClose={abrirCerrarModalInsertar}>
      {bodyInsertar}

     </Modal>
     <Modal classes="Modales"
     open={modalEditar}
     onClose={abrirCerrarModalEditar}
     >
    {bodyEditar}

     </Modal>
     <Modal classes="Modal"
     open={modalEliminar}
     onClose={abrirCerrarModalEliminar}>
      {bodyEliminar}

     </Modal>
     
      </div>
  )
}

export default Prods