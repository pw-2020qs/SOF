import React, {Component} from 'react';

class Formulario extends React.Component {
    constructor(props) {
      super(props);
      this.state = {};

      this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(event) {
      const target = event.target;
      const value = target.type;
      const name = target.name;

      this.setState({
        [name]: value
      });
    }
  
    handleSubmit(event) {
      alert('Seu comentário foi enviado com sucesso!');
      event.preventDefault();
    }
  
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
            <div class="form-group">
                <label for="inputName">Digite seu nome:</label>
                <input name="nameUser" type="text" class="form-control" value={this.state.nameUser} onChange={this.handleChange} id="inputName" aria-describedby="nameHelp" placeholder="Anônimo"/>
                <small id="nameHelp" class="form-text text-muted">Deixe este espaço em branco se quiser publicar seu comentário anonimamente.</small>
            </div>
            <div class="form-group">
                <label for="inputComment">Deixe seu comentário:</label>
                <textarea class="form-control" name="commentUser" value={this.state.commentUser} onChange={this.handleChange} id="inputComment" placeholder="Comentário" rows="3"></textarea>
            </div>
          <button type="submit" class="btn btn-primary mb1 bg-olive send">Enviar</button>
        </form>
      );
    }
  }

  export default Formulario;