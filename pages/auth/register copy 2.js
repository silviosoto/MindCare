import React , { useEffect, useState } from 'react';
import {  getDepatamentos, getMunicipios, RegistrarPsicologo } from '../../components/services/ServicesRegister';
import Swal from 'sweetalert2'
import { Formik, useFormik } from 'formik';

export default function Register() {
  const datosPersonalesInit = {
    id: 0,
    nombre: "",
    apellidos: "",
    fechaNacimiento: "",
    email: "",
    telefono: "",
    tipoId: "1",
    numeroId: 0,
    ciudad:0,
    departamento: 0
  }
 
  const datosPsicologoInit = {
    id: 0,
    descripcion: "",
    estado: "1",
    validado: "0",
    idDatosPersonales: 0
  }

  const [datosPersonales, setDatosPersonales] = useState( datosPersonalesInit );
  const [datosPsicologo, setDatosPsicologo] = useState( datosPsicologoInit );
  const [selectDepartamentos, setSelectDepartamentos] = useState( [] );
  const [selectMunicipios, setSelectMunicipios] = useState( [] );
  const [opcionSeleccionada, setOpcionSeleccionada] = useState('');
  
  const handleChangeDatosPersonales = (e) => {

    const { name, value } = e.target
    
    setDatosPersonales({
        ...datosPersonales,
        [name]: value 
    }); 
  };

  const handleChangeDatosPsicologo= (e) => {

    const { name, value } = e.target; 
    setDatosPsicologo({
        ...datosPsicologo,
        [name]: value 
    }); 
  };
 
  const GetDepartamentos = () => {

    getDepatamentos().then(response => response.json() )
    .then(data => { 

      let departamentos = [];
      if( data != undefined ){
        departamentos = data;
      }

      let selectDepartamentos = departamentos.map(( a, y) =>
        <option  key={y}value={a.id}>{a.nombre}</option>
      );

      setSelectDepartamentos(selectDepartamentos)  
    })
    .catch(e => {
        console.log(e);
    });
  };

  const handleSelectChange = (event) => {
    // Actualiza el estado con el nuevo valor seleccionado
    setOpcionSeleccionada(event.target.value);

    setDatosPersonales({
      ...datosPersonales,
      departamento: event.target.value 
    }); 
 

    getMunicipios( event.target.value ).then(response => response.json() )
    .then(data => { 
        console.log(data);
        let municipios = [];
        if( data != undefined ){
          municipios = data;
        }

        let selectMunicipios = municipios.map(( a, y) =>
          <option  key={y}value={a.id}>{a.nombre}</option>
        );
        
        setSelectMunicipios(selectMunicipios)  
 
    })
    .catch(e => {
        console.log(e);
    });
  };

  const handleEnviar = () =>{
 
    datosPsicologo.idDatosPersonalesNavigation = datosPersonales; 

    RegistrarPsicologo( datosPsicologo )
    .then(data => {  
      // Swal.fire({
      //   title: "Good job!",
      //   text: "You clicked the button!",
      //   icon: "success"
      // });
    })
    .catch(e => {
        console.log("error: handleEnviar ",e);
        Swal.fire('Error', e, 'Error al ggrabar los datos');
    });
  };

  const validacion = () =>{ 
    
  };

  useEffect(() => {
    GetDepartamentos();
  }, []);
 

  const formik = useFormik({
    initialValues: datosPersonales,
    onSubmit: (data) =>{
      console.log(data);
    }
  })
  return (
    <>
      <div className="container mx-auto px-4 h-full">
        <div className="flex content-center items-center justify-center h-full">
          <div className="w-full lg:w-6/12 px-4">
            <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0">
              <div className="rounded-t bg-white mb-0 px-6 py-6">
                <div className="text-center flex justify-between">
                  <h6 className="text-blueGray-700 text-xl font-bold">Registro</h6>
                </div>
              </div>
              <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
                 <form onSubmit={formik.handleSubmit} >
                  <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
                    Datos Personales
                  </h6>
                  <div className="flex flex-wrap">
                    <div className="w-full lg:w-6/12 px-4">
                      <div className="relative w-full mb-3">
                        <label
                          className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                          htmlFor="grid-password"
                        >
                          Nombre
                        </label>
                        <input
                          type="text"
                          name="nombre"
                          required 
                          value= {datosPersonales.nombre}
                          onChange={formik.handleChange}
                          id="name"
                          className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                          defaultValue=""
                        />
                      </div>
                    </div>
                    <div className="w-full lg:w-6/12 px-4">
                      <div className="relative w-full mb-3">
                        <label
                          className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                          htmlFor="grid-password"
                        >
                          Apellidos
                        </label>
                        <input
                          type="text"
                          name='apellidos'
                          value= {datosPersonales.apellidos}
                          onChange={handleChangeDatosPersonales}
                          id="apellidos"
                          className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                          defaultValue=""
                        />
                      </div>
                    </div>
                    <div className="w-full lg:w-6/12 px-4">
                      <div className="relative w-full mb-3">
                        <label
                          className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                          htmlFor="grid-password"
                        >
                          Fecha de nacimiento
                        </label>
                        <input
                          type="date"
                          name='fechaNacimiento'
                          className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                          value= {datosPersonales.fechaNacimiento}
                          onChange={handleChangeDatosPersonales}
                          id="fechaNacimiento"
                        />
                      </div>
                    </div>
                    <div className="w-full lg:w-6/12 px-4">
                      <div className="relative w-full mb-3">
                        <label
                          className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                          htmlFor="grid-password"
                        >
                          Email
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value= {datosPersonales.email}
                          onChange={handleChangeDatosPersonales}
                          className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        />
                      </div>
                    </div>
                    <div className="w-full lg:w-6/12 px-4">
                      <div className="relative w-full mb-3">
                        <label
                          className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                          htmlFor="grid-password"
                        >
                          Teléfono
                        </label>
                        <input
                          type="text"
                          name="telefono"
                          value= {datosPersonales.telefono}
                          id="telefono"
                          onChange={handleChangeDatosPersonales}
                          className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        />
                      </div>
                    </div>
                    <div className="w-full lg:w-6/12 px-4">
                      <div className="relative w-full mb-3">
                        <label
                          className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                          htmlFor="grid-password"
                        >
                          Identificación
                        </label>
                        <input
                          type="text"
                          name="numeroId"
                          value= {datosPersonales.numeroId}
                          onChange={handleChangeDatosPersonales}
                          className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        />
                      </div>
                    </div>
                  </div>

                  <hr className="mt-6 border-b-1 border-blueGray-300" />

                  <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
                    Contact Information
                  </h6>
                  <div className="flex flex-wrap">
                    <div className="w-full lg:w-12/12 px-4">
                      <div className="relative w-full mb-3">
                        <label
                          className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                          htmlFor="grid-password"
                        >
                          Direccion
                        </label>
                        <input
                          type="text"
                          name="direccion"
                          value= {datosPersonales.direccion}
                          onChange={handleChangeDatosPersonales}
                          className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                          defaultValue="Bld Mihail Kogalniceanu, nr. 8 Bl 1, Sc 1, Ap 09"
                        />
                      </div>
                    </div>
                    <div className="w-full lg:w-6/12 px-4">
                      <div className="relative w-full mb-3">
                        <label
                          className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                          htmlFor="grid-password"
                        >
                          Departamento
                        </label>
                        <select 
                        name="departamento"
                        value= {datosPersonales.departamento}
                        onChange={handleSelectChange}
                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"  
                        data-style="btn btn-primary " title="Single Select" >
                          <option value={0}>SELECCIONE UNA OPCION</option>
                             {selectDepartamentos}
                        </select>
                      </div>
                    </div>
                    <div className="w-full lg:w-6/12 px-4">
                      <div className="relative w-full mb-3">
                        <label
                          className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                          htmlFor="grid-password"
                        >
                          Ciudad
                        </label>
                        <select 
                        name="ciudad"
                        value= {datosPersonales.ciudad}
                        onChange={handleChangeDatosPersonales}
                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" 
                         data-style="btn btn-primary " title="Single Select" >
                          <option value={0}>SELECCIONE UNA OPCION</option>
                             {selectMunicipios}
                        </select>
                      </div>
                    </div> 
                  </div> 
                  <div className="flex flex-wrap">
                    <div className="w-full lg:w-12/12 px-4">
                      <div className="relative w-full mb-3">
                        <label
                          className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                          htmlFor="grid-password"
                        >
                          Acerca de mi
                        </label>
                        <textarea 
                          name="descripcion"
                          value= {datosPsicologo.descripcion}
                          onChange={handleChangeDatosPsicologo}
                          className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                          rows="4" 
                        ></textarea>
                      </div>
                    </div>
                  </div>
                  <div className="text-center mt-6">
                    <button
                      onClick={handleEnviar}
                      className="bg-blueGray-800 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
                      type="submit"
                    >
                      Enviar
                    </button>
                  </div>
                  {/* <hr className="mt-6 border-b-1 border-blueGray-300" /> */}

                  {/* <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
                    Estudios
                  </h6>
                  <div className="flex flex-wrap">
                    <div className="w-full lg:w-12/12 px-4">
                      <div className="relative w-full mb-3">
                        <label
                          className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                          htmlFor="grid-password"
                        >
                          Acerca de mi
                        </label>
                        <textarea
                          type="text"                          
                          className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                          rows="4" 
                        ></textarea>
                      </div>
                    </div>
                  </div> */}
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
 