const Contact = () => {
  return (
    <div>
      <h1>Contact Page</h1>
      <form>
        <input
          type="text"
          className="border border-black p-1 m-2"
          placeholder="name"
        />
        <input
          type="text"
          className="border border-black p-1 m-2"
          placeholder="Enter Your Message "
        />
        <button className="border border-black p-2 m-2 bg-gray-100 rounded-lg">
          Submit
        </button>
      </form>
    </div>
  );
};
export default Contact;
