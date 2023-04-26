import './App.css';
import Video from "./pages/Video"

function App() {
  return (
    <div className="App">
      <div className='app__videos'>
        <Video 
          likes={300}
          messages={200}
          shares={100}
          name='Lucas'
          description='Gato branco'
          music='musica de tapas'
          url='https://firebasestorage.googleapis.com/v0/b/jornada2-eb156.appspot.com/o/ZqU6oFX6.mp4.mp4?alt=media&token=9839e872-2d5e-4da3-9299-17eb2949831d'
        />
        <Video 
          likes={300}
          messages={200}
          shares={100}
        />
      </div>
    </div>
  );
}

export default App;
