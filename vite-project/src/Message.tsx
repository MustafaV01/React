const React = "TEST2";

function CreateMessage() {
  if (React) {
    return <h1>Hello {React}</h1>;
  } else {
    return <h1>Hello World</h1>;
  }
}

export default CreateMessage;
