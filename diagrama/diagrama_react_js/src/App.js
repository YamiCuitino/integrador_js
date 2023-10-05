import React from 'react';
import DrawClass from './components/DrawClass';

function App() {
  const CLASS_UML = {
    name: 'Persona',
    attributes: ['+nombre:str', '+telefono:str', '+direccionDeEmail:str'],
    methods: ['+calcularEdad()', 'actuaclizarInformacion(datos)'],
    borderColor: '#0B252A',
    headColor: 'white',
    titleBackgroundColor: '#718F94',
    textColor: '#333333',
    separatorColor: 'gray'
  };
  return (
    <div className="App">
      <DrawClass data={CLASS_UML} />
    </div>
    
  );
  
}
export default App;




