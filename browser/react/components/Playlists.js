import React from 'react';

const Playlists = (props) => {
  return (
  <div className="well">
    <form onSubmit={props.handleSubmit} className="form-horizontal">
      <fieldset>
        <legend>New Playlist</legend>
        <div className="form-group">
          <label className="col-xs-2 control-label">Name</label>
          <div className="col-xs-10">
            <input className="form-control" type="text"
            onChange={props.playlistInput}
            value={props.playlistName}
            />
          </div>
        </div>
        <div className="form-group">
          <div className="col-xs-10 col-xs-offset-2">
            <button type="submit" className="btn btn-success" disabled={props.inputValue}>Create Playlist</button>
          </div>
        </div>
      </fieldset>
    </form>
  </div>
  )}

  export default Playlists;
