import React from "react";
import { send } from "emailjs-com";
import { Link } from "react-router-dom";

const Contact = () => {
  const [status, setStatus] = React.useState("");
  const [showForm, setShowForm] = React.useState(false);

  const [toSend, setToSend] = React.useState({
    from_name: "",
    to_name: "",
    message: "",
    reply_to: "",
  });

  const onSubmit = (e) => {
    e.preventDefault();
    send("service_aqpnvzh", "template_msjy814", toSend, "mPg_FyUhdBxNtlKUm")
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
      })
      .catch((err) => {
        console.log("FAILED...", err);
      });
    setShowForm(!showForm);
  };
  const handleChange = (e) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
  };

  const displayForm = () => {
    setShowForm(!showForm);
  };

  return (
    <div>
      {showForm === false ? (
        <Link onClick={displayForm} to="">
          me
        </Link>
      ) : (
        <form onSubmit={onSubmit}>
          <label>Name</label>
          <input
            type="text"
            name="from_name"
            placeholder="from name"
            value={toSend.from_name}
            onChange={handleChange}
          />
          <input
            type="text"
            name="to_name"
            placeholder="to name"
            value={toSend.to_name}
            onChange={handleChange}
          />
          <input
            type="text"
            name="message"
            placeholder="Your message"
            value={toSend.message}
            onChange={handleChange}
          />
          <input
            type="text"
            name="reply_to"
            placeholder="Your email"
            value={toSend.reply_to}
            onChange={handleChange}
          />
          <button type="submit">Submit</button>
        </form>
      )}
    </div>
  );
};

export default Contact;
