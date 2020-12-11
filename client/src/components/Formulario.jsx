import React, {Component} from 'react';

class Formulario extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        nameUser: '',
        commentUser: '',
        commentValid: false, //novos parâmetros para validação de submissão de um commentário em branco
        submitDisabled: true
      };

      this.handleChangeName = this.handleChangeName.bind(this);
      this.handleChangeComment = this.handleChangeComment.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }

    //handle changes foram divididas por campo
    handleChangeName(e) {
      this.setState({
        nameUser: e.target.nameUser
      });
    }
    handleChangeComment(e) {
      let commentValid = e.target.value ? true : false;
      let submitDisabled = this.state.submitDisabled
      this.setState({
        commentUser: e.target.value,
        commentValid: commentValid,
        submitDisabled: !submitDisabled
      });
    }

    //adicionado novo estado para apagar info do form depois da submissão
    //também volta o botão para o estado de desabilitado
    handleSubmit(e) {
      alert('Seu comentário foi enviado com sucesso!');
      e.preventDefault();
      this.setState({
        commentUser: '',
        nameUser: '',
        submitDisabled: true
      });
    }

    render() {
      return (
        <form onSubmit={this.handleSubmit}>
            <div class="form-group">
                <label for="inputName">Digite seu nome:</label>
                <input name="nameUser" type="text" class="form-control" value={this.state.nameUser} onChange={this.handleChangeName} id="inputName" aria-describedby="nameHelp" placeholder="Anônimo"/>
                <small id="nameHelp" class="form-text text-muted">Deixe este espaço em branco se quiser publicar seu comentário anonimamente.</small>
            </div>
            <div class="form-group">
                <label for="inputComment">Deixe seu comentário:</label>
                <textarea class="form-control" name="commentUser" value={this.state.commentUser} onChange={this.handleChangeComment} id="inputComment" placeholder="Comentário" rows="3"></textarea>
            </div>
          <button disabled={this.state.submitDisabled} onClick={this.onHandleSubmit} type="submit" class="btn btn-primary mb1 bg-olive send">Enviar</button>
        </form>
      );
    }
  }

  export default Formulario;
