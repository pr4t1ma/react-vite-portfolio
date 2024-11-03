import { useState } from "react";

const Registrationform = () => {
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState({
    value: "",
    isTouched: false,
  });

  const [role, setRole] = useState("role");
  const isFormValid = () => {
    return firstName && password.value.length >= 8 && role !== "role";
  };

  const clearForm = () => {
    setFirstName("");
    setLastName("");
    setPassword("");
    setEmail("");
    setPassword({
      value: "",
      isTouched: false,
    });
    setRole("role");
  };

  const submitBtn = (e) => {
    e.preventDeffault();
    alert("account create!");
    clearForm();
  };

  return (
    <div className=" bg-white w-fit-content max-mx-auto my-10 p-10 ">
      <form
        onSubmit={submitBtn}
        action=""
        className="bg-oxblood text-white p-20 rounded-md"
      >
        <div className="formselector">
          <h1>Sign up</h1>
          <div className="field ">
            <label htmlFor="name">Name</label>
            <input
              className="w-full p-2 border-2 border-warmGray-200 rounded-xl my-4 text-blackboard "
              type="text"
              name="name"
              id=""
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              placeholder="fitrst name"
            />
          </div>
          <div className="field">
            <label htmlFor="lastname">Last name</label>
            <input
              className="w-full p-2 border-2 border-warmGray-200 rounded-xl my-4 text-blackboard "
              type="text"
              name="name"
              id=""
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              placeholder="last name"
            />
          </div>
          <div className="field">
            <label htmlFor="email">Email</label>
            <input
              className="w-full p-2 border-2 border-warmGray-200 rounded-xl my-4 text-blackboard "
              type="email"
              name="name"
              id=""
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email Address"
            />
          </div>
          <div className="field">
            <label htmlFor="password">Password</label>
            <input
              className="w-full p-2 border-2 border-warmGray-200 rounded-xl my-4 text-blackboard "
              type="password"
              name="name"
              id=""
              value={password.value}
              onChange={(e) => {
                setPassword({ ...password, value: e.target.value });
              }}
              onBlur={() => {
                setPassword({ ...password, isTouched: true });
              }}
              placeholder="password"
            />
          </div>
          <div className="field">
            <label htmlFor="role">Role</label>
            <select
              value={role}
              onChange={(e) => setRole(e.target.value)}
              className="w-full p-2 border-2 border-warmGray-200 rounded-xl my-4"
            >
              <option value="role">Role</option>
              <option value="individual">Individual</option>
              <option value="business">Business</option>
            </select>
          </div>
          <button>Create account</button>
        </div>
      </form>
    </div>
  );
};

export default Registrationform;
