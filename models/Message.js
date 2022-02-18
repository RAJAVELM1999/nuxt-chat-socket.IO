class Message {
  constructor(name, text, id) {
    this.name = name;
    this.text = text;
    this.id = id;
    this.time = new Date().toLocaleString();
  }
}

module.exports = () => {
  return Message
}