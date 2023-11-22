function ContactForm() {
  return (
    <div>
      <form>
        <p>имя</p>
        <input />
        <p>фамилия</p>
        <input />
        <p>сообщение</p>
        <textarea type="text" rows={5} cols={30}>
          ваше сообщение
        </textarea>
        <input type={"submit"} />
      </form>
    </div>
  );
}
export default ContactForm;
