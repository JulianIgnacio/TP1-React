import { Container } from 'react-bootstrap';
import './App.css'
import ListaDeTareas from './Components/ListaDeTareas';

const App= () => {

  return (
    <>
    <Container className='my-5 mainPage'>
    <h1 className='display-4 text-center text-light'>Lista de Tareas</h1>
    <hr className='text-light'/>
    <ListaDeTareas/>
    </Container>
    <footer className="bg-dark text-light text-center py-4">
        <p>&copy; Todos los derechos reservados</p>
      </footer>
    </>
  );
}

export default App;
