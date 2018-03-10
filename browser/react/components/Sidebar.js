import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = ({ playlists }) => {

  return (
    <sidebar>
      <img src="juke.svg" className="logo" />
      <section>
        <h4 className="menu-item">
          <Link to="/albums">ALBUMS</Link>
        </h4>
      </section>
      <section>
        <h4 className="menu-item">
          <Link to="/artists">ARTISTS</Link>
        </h4>
      </section>
      <hr />
        <section>
          <h4 className="text-muted">PLAYLISTS</h4>
          <h4>
            <Link className="btn btn-primary btn-block" exact to="/new-playlist">
              <span className="glyphicon glyphicon-plus"></span> PLAYLIST
            </Link>
          </h4>
        </section>
        <hr />
        <ul className="list-unstyled">
        {
          playlists.length > 0 ?
          playlists.map(playlist => {
            console.log('jdshfjashdfhjdsgkajhdsfghjsgdf',`${playlist.id}`);
            return (
              <li key={playlist.id} className="playlist-item menu-item">
                <Link to={`/playlists/`} >{playlist.name}</Link>
              </li>
            )
          }) :
          null
        }
        </ul>
    </sidebar>
  );
}

export default Sidebar;
