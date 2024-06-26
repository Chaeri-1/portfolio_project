import { Form } from "react-router-dom";
import img from '../img/smile_cookie.jpg'

export default function Contact() {
  const contact = {
    first: "Han",
    last: "Chaeri",
    avatar: img,
    instar: "@kirsche_cr",
    kakao: "Kakao_chat",
    notes: "preparing to be frontend-developer",
    favorite: true,
  };

  return (
    <div id="contact">
      <div>
        <img key={contact.avatar} src={contact.avatar || null} />
      </div>

      <div>
        <h1>
          {contact.first || contact.last ? (
            <>
              {contact.first} {contact.last}
            </>
          ) : (
            <i>No Name</i>
          )}{" "}
          <Favorite contact={contact} />
        </h1>

        {contact.instar && (
          <p>
            <a target="_blank" href={`https://www.instagram.com/kirsche_cr/${contact.instar}`}>
              {contact.instar}
            </a>
          </p>
        )}

        {contact.kakao && (
          <p>
            <a target="_blank" href={`https://open.kakao.com/o/sQHNouhg${contact.kakao}`}>
              {contact.kakao}
            </a>
          </p>
        )}

        {contact.notes && <p>{contact.notes}</p>}

        <div>
          <Form action="edit">
            <button type="submit">Edit</button>
          </Form>
          <Form
            method="post"
            action="destroy"
            onSubmit={(event) => {
              if (!confirm("Please confirm you want to delete this record.")) {
                event.preventDefault();
              }
            }}
          >
            <button type="submit">Delete</button>
          </Form>
        </div>
      </div>
    </div>
  );
}

function Favorite({ contact }) {
  // yes, this is a `let` for later
  let favorite = contact.favorite;
  return (
    <Form method="post">
      <button
        name="favorite"
        value={favorite ? "false" : "true"}
        aria-label={favorite ? "Remove from favorites" : "Add to favorites"}
      >
        {favorite ? "★" : "☆"}
      </button>
    </Form>
  );
}
