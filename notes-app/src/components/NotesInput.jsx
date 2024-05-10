import React from "react";

class NotesInput extends React.Component {
  constructor(props) {
    super(props);

    // inisialisasi state
    this.state = {
      title: "",
      body: "",
      limit: 50,
    };

    this.onTitleChangeEventHandler = this.onTitleChangeEventHandler.bind(this);
    this.onBodyChangeEventHandler = this.onBodyChangeEventHandler.bind(this);
    this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
  }

  onTitleChangeEventHandler(event) {
    const title = event.target.value;
    const sisaKarakter = this.state.limit - title.length;

    this.setState(() => {
      if (sisaKarakter < 0) {
        return;
      } else {
        return {
          title: title,
          sisaKarakter: sisaKarakter < 0 ? 0 : sisaKarakter,
        };
      }
    });
  }

  onBodyChangeEventHandler(event) {
    this.setState(() => {
      return {
        body: event.target.value,
      };
    });
  }

  onSubmitEventHandler(event) {
    event.preventDefault();
    this.props.addNote(this.state);

    this.setState({
      title: "",
      body: "",
      limit: 50,
    });
  }

  render() {
    return (
      <form className="contact-input" onSubmit={this.onSubmitEventHandler}>
        <p>
          Sisa Karakter: <strong>{this.state.sisaKarakter}</strong>
        </p>
        <input
          type="text"
          placeholder="Judul"
          value={this.state.title}
          onChange={this.onTitleChangeEventHandler}
        />
        <textarea
          name="content"
          rows="4"
          cols="50"
          className="note-input__content"
          placeholder="Tuliskan Konten catatan"
          value={this.state.body}
          onChange={this.onBodyChangeEventHandler}
        />
        <button type="submit">Tambah</button>
      </form>
    );
  }
}

export default NotesInput;
