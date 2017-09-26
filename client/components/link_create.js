import React, {Component} from 'react';



class LinkCreate extends Component {

  handleSubmit(event) {
      event.preventDefault();
  }


  render(){
    return(
      <form onSubmit={this.handleSubmit.bin(this)}>
        <div className="form-group">
          <label>Link short</label>
            <input ref="link" className="form-control" />
        </div>
        <button  className="btn btn-primary">Shorten</button>
      </form>
      );
  }
};


export default LinkCreate;
