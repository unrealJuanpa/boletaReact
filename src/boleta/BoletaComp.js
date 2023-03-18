import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

const CompBoleta = () => {

    function calcular() {
        let sc = 0;
        let sg = 0;

        for (let i = 1; i <= 9; i++) {
            let elementv = document.getElementById('n'+i).value;
            let elementl = document.getElementById('l'+i);
            elementl.textContent = elementv;
            sc += parseInt(elementv);

            if (i%3 == 0) {
                let elementp = document.getElementById('promedio' + parseInt(i/3));
                elementp.textContent = (sc/3).toFixed(3);
                sg += sc;
                sc = 0;
            }
        }

        let elementg = document.getElementById('pgen');
        elementg.textContent = (sg/9).toFixed(3);
    }

    return (
        <>
            <div style={{marginTop: 100}}>

            </div>

            <h1>Boleta de calificaciones</h1>
            <p>
                Los valores se actualizan automáticamente al ajustar los rangos
            </p>
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

                        <td>
                            <div class="input-group mb-3">
                                <input id="n1" defaultValue={0} aria-describedby="basic-addon2" min="0" max="100" onChange={ (e) => calcular() } type="range" class="form-control"></input>
                                <span class="input-group-text" id="l1">0</span>
                            </div>
                        </td>
                        <td>
                            <div class="input-group mb-3">
                                <input id="n2" defaultValue={0}  aria-describedby="basic-addon2" min="0" max="100" onChange={ (e) => calcular() } type="range" class="form-control"></input>
                                <span class="input-group-text" id="l2">0</span>
                            </div>
                        </td>
                        <td>
                            <div class="input-group mb-3">
                                <input id="n3" defaultValue={0} aria-describedby="basic-addon2" min="0" max="100" onChange={ (e) => calcular() } type="range" class="form-control"></input>
                                <span class="input-group-text" id="l3">0</span>
                            </div>
                        </td>
                       <td id="promedio1">0.000</td> 
                    </tr>

                    <tr>
                       <th scope="row"> Física </th>
                       <td>
                            <div class="input-group mb-3">
                                <input id="n4" defaultValue={0} aria-describedby="basic-addon2" min="0" max="100" onChange={ (e) => calcular() } type="range" class="form-control"></input>
                                <span class="input-group-text" id="l4">0</span>
                            </div>
                        </td>
                        <td>
                            <div class="input-group mb-3">
                                <input id="n5" defaultValue={0} aria-describedby="basic-addon2" min="0" max="100" onChange={ (e) => calcular() } type="range" class="form-control"></input>
                                <span class="input-group-text" id="l5">0</span>
                            </div>
                        </td>
                        <td>
                            <div class="input-group mb-3">
                                <input id="n6" defaultValue={0} aria-describedby="basic-addon2" min="0" max="100" onChange={ (e) => calcular() } type="range" class="form-control"></input>
                                <span class="input-group-text" id="l6">0</span>
                            </div>
                        </td>
                       <td id="promedio2">0.000</td> 
                    </tr>

                    <tr>
                       <th scope="row"> Matemática </th>
                       <td>
                            <div class="input-group mb-3">
                                <input id="n7" defaultValue={0} aria-describedby="basic-addon2" min="0" max="100" onChange={ (e) => calcular() } type="range" class="form-control"></input>
                                <span class="input-group-text" id="l7">0</span>
                            </div>
                        </td>
                        <td>
                            <div class="input-group mb-3">
                                <input id="n8" defaultValue={0} aria-describedby="basic-addon2" min="0" max="100" onChange={ (e) => calcular() } type="range" class="form-control"></input>
                                <span class="input-group-text" id="l8">0</span>
                            </div>
                        </td>
                        <td>
                            <div class="input-group mb-3">
                                <input id="n9" defaultValue={0} aria-describedby="basic-addon2" min="0" max="100" onChange={ (e) => calcular() } type="range" class="form-control"></input>
                                <span class="input-group-text" id="l9">0</span>
                            </div>
                        </td>
                       <td id="promedio3">0.000</td> 
                    </tr>
                </tbody>
            </table>

            <div>
                Promedio General <p id="pgen">0.000</p>
            </div>
        </>
    )
}

export default CompBoleta;