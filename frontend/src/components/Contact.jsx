import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Contact({ listing }) {
  const [land, setLand] = useState(null);
  const [message, setMessage] = useState("");
  const onchange = (e) => {
    setMessage(e.target.value);
  };

  useEffect(() => {
    const fetchland = async () => {
      try {
        const res = await fetch(
          `https://real-estate-project-q6vq.onrender.com/api/user/${listing}`
        );
        const data = await res.json();
        setLand(data);
      } catch (error) {
        console.log("Contact error", error);
      }
    };
    fetchland();
  }, [listing.userRef]);

  return (
    <>
      {land && (
        <div className="flex flex-col gap-2">
          <p>
            contact <span className="font-semibold">{land.username}</span> for{" "}
            <span className="font-semibold">{listing.name.toLowerCase()}</span>
          </p>
          <textarea
            name="message"
            id="message"
            value={message}
            onChange={onchange}
            placeholder="Enter Your Message Here"
            className="w-full border p-3 rounded-lg"
          ></textarea>
          <Link
            to={`mailto:${land.email} ? subject =regarding ${listing.name}&body=${message}`}
            className="bg-slate-700 text-white text-center p-3 uppsercase rounded-lg hover:opcity-95"
          >
            {" "}
            Send Message
          </Link>
        </div>
      )}
    </>
  );
}

export default Contact;
