import React, {Component} from 'react';

class Formulario extends React.Component {
    constructor(props) {
      super(props);
      this.state = {value: ''};
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
      this.setState({value: event.target.value});
    }
  
    handleSubmit(event) {
      alert('Um nome foi enviado: ' + this.state.value);
      event.preventDefault();
    }
  
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
            <div class="form-group">
                <label for="exampleInputEmail1">Digite seu nome:</label>
                <input type="text" class="form-control" value={this.state.value} onChange={this.handleChange} id="inputName1" aria-describedby="nameHelp" placeholder="Anônimo"/>
                <small id="nameHelp" class="form-text text-muted">Deixe este espaço em branco se quiser publicar seu comentário anonimamente.</small>
            </div>
        <div class="form-group">
            <label for="exampleInputTextarea1">Deixe seu comentário:</label>
            <textarea class="form-control" id="exampleFormControlTextarea1" placeholder="Comentário" rows="3"></textarea>
        </div>
        <button type="submit" class="btn btn-primary">Enviar</button>
        </form>
      );
    }
  }

  export default Formulario;