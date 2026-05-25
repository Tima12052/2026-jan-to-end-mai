import Sticker from "./Sticker";

import stickerss from "./stickers.json";
import FirstComponent from "./Firstcomponent";

import "./App.css";

function App() {
  
  return (
    <>
      <div>
        <Sticker items={stickerss} />
      </div>
      <h1 id="idd">{laber}</h1>
      <FirstComponent />
    </>
  );
}

export default App;
