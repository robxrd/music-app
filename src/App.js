import AlbumHead from './components/AlbumHead';
import Nav from './components/Nav'
import Player from './components/Player';
import TrackContainer from './components/TrackContainer';

function App() {
  return (
    <div>
      <AlbumHead albumArt="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimg.discogs.com%2FYTowwwHGojp-7OYH9xvBGk1PR8Q%3D%2Ffit-in%2F600x600%2Ffilters%3Astrip_icc()%3Aformat(jpeg)%3Amode_rgb()%3Aquality(90)%2Fdiscogs-images%2FR-7240348-1437277144-6299.jpeg.jpg&f=1&nofb=1" albumName="Currents" albumYear="2015" artist="Tame Impala"/>
      <TrackContainer />
    </div>
  )
}

export default App;
