function ContactForm() {
  return (
    <form>
      <div>
        <p>имя</p>
        <input />
      </div>
      <div>
        <p>фамилия</p>
        <input />
      </div>
      <div>
        <p>сообщение</p>
        <textarea type="text" rows={5} cols={30}>
          ваше сообщение
        </textarea>
      </div>
      <div>
        <input type={"submit"} />
      </div>
    </form>
  );
}
export default ContactForm;
