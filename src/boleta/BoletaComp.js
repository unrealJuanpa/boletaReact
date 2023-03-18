import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';

const CompBoleta = () => {
    const[p1, setP1] = useState();
    const[p2, setP2] = useState();
    const[p3, setP3] = useState();

    const[f1, setF1] = useState();
    const[f2, setF2] = useState();
    const[f3, setF3] = useState();

    const[m1, setM1] = useState();
    const[m2, setM2] = useState();
    const[m3, setM3] = useState();

    function calcular() {
        const element1 = document.getElementById('promedio1');
        element1.textContent = (Number(p1) + Number(p2) + Number(p3))/3;

        const element2 = document.getElementById('promedio2');
        element2.textContent = (Number(f1) + Number(f2) + Number(f3))/3;

        const element3 = document.getElementById('promedio3');
        element3.textContent = (Number(m1) + Number(m2) + Number(m3))/3;

        const element4 = document.getElementById('pgen');
        element4.textContent = (Number(p1) + Number(p2) + Number(p3) + Number(f1) + Number(f2) + Number(f3) + Number(m1) + Number(m2) + Number(m3))/9;
    }

    return (
        <>
            <div style={{marginTop: 100}}>

            </div>

            <h1>Boleta de calificaciones</h1>
            <br></br>
            <br></br>            

            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">Curso</th>
                        <th scope="col">Unidad 1</th>
                        <th scope="col">Unidad 2</th>
                        <th scope="col">Unidad 3</th>
                        <th scope="col">Promedio curso</th>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                       <th scope="row"> Programación </th>
                       <td><input min="0" max="100" onChange={ (e) => setP1(e.target.value) } type="number" class="form-control" placeholder="Ingrese la nota de la unidad 1"></input></td>
                       <td><input min="0" max="100" onChange={ (e) => setP2(e.target.value) } type="number" class="form-control" placeholder="Ingrese la nota de la unidad 2"></input></td>
                       <td><input min="0" max="100" onChange={ (e) => setP3(e.target.value) } type="number" class="form-control" placeholder="Ingrese la nota de la unidad 3"></input></td>
                       <td id="promedio1">NaN</td> 
                    </tr>

                    <tr>
                       <th scope="row"> Física </th>
                       <td><input min="0" max="100" onChange={ (e) => setF1(e.target.value) } type="number" class="form-control" placeholder="Ingrese la nota de la unidad 1"></input></td>
                       <td><input min="0" max="100" onChange={ (e) => setF2(e.target.value) } type="number" class="form-control" placeholder="Ingrese la nota de la unidad 2"></input></td>
                       <td><input min="0" max="100" onChange={ (e) => setF3(e.target.value) } type="number" class="form-control" placeholder="Ingrese la nota de la unidad 3"></input></td>
                       <td id="promedio2">NaN</td> 
                    </tr>

                    <tr>
                       <th scope="row"> Matemática </th>
                       <td><input min="0" max="100" onChange={ (e) => setM1(e.target.value) } type="number" class="form-control" placeholder="Ingrese la nota de la unidad 1"></input></td>
                       <td><input min="0" max="100" onChange={ (e) => setM2(e.target.value) } type="number" class="form-control" placeholder="Ingrese la nota de la unidad 2"></input></td>
                       <td><input min="0" max="100" onChange={ (e) => setM3(e.target.value) } type="number" class="form-control" placeholder="Ingrese la nota de la unidad 3"></input></td>
                       <td id="promedio3">NaN</td> 
                    </tr>
                </tbody>
            </table>

            <div>
                Promedio General <p id="pgen">NaN</p>
            </div>

            <button onClick={ () => calcular() } type="button" class="btn btn-success">
                Calcular promedios
            </button>
        </>
    )
}

export default CompBoleta;