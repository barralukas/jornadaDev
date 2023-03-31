import React from "react";
import "./videoFooter.css";
import MusicNoteIcon from '@mui/icons-material/MusicNote';

function VideoFooter() {
  return (
    <div className="videoFooter">
      <div className="videoFooter__text">
        <h3>@lucas</h3>
        <p>Descrição do Vídeo</p>
        <div className="videoFoote__music">
          <MusicNoteIcon className="videoFooter__icon"/>
          <div className="videoMusicFooter__text">
            <p>Titulo da Musica</p>
          </div>
        </div>
      </div>
      <img 
        className="videoFooter__img"
        alt="Imagem do vinil girando"
        src="https://poqlymuephttfsljdabn.supabase.co/storage/v1/object/public/jornadadev/vinil.png"
      />
    </div>
  );
}

export default VideoFooter;
