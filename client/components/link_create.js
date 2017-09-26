import React, {Component} from 'react';



class LinkCreate extends Component {
  constructor(props) {
    super(props);

    this.state = { error: '' };
  }

  handleSubmit(event) {
      event.preventDefault();

    Meteor.call('links.insert', this.refs.link.value, (error) => {
        if(error) {
          this.setState({ error: 'url invalide'});
        } else {
            this.setState({ error: ''});
            this.refs.link.value = '';
        }

      });
  }


  render(){
    return(
      <form onSubmit={this.handleSubmit.bind(this)}>
        <div className="form-group">
          <label>Link short</label>
            <input ref="link" className="form-control" />
        </div>
        <div className="text-danger" > {this.state.error}</div>
        <button  className="btn btn-primary">Shorten</button>
      </form>
      );
  }
};


export default LinkCreate;
