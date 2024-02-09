import { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const LoginModal = () => {
  const navigate = useNavigate();
  const { loginUser, setLoading, resetPassword } = useContext(AuthContext);

  const handleLogin = (e) => {
    e.preventDefault();
    setLoading(true);
    const email = e.target.user_email.value;
    const password = e.target.user_password.value;
    loginUser(email, password)
      .then(() => {
        setLoading(false);
        toast.success("Your login is successful");
        navigate("/admin");
        e.target.reset();
        document.getElementById("my_modal_3").close();
      })
      .catch(() => {
        toast.error("Only owner can be logged in");
        setLoading(false);
        e.target.reset();
        document.getElementById("my_modal_3").close();
      });
  };
  const handleReset = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Prompt the user for input
    const email = prompt("Please enter your email");

    // Check if the input is a valid email
    if (email !== null && emailRegex.test(email)) {
      resetPassword(email)
        .then(() => {
          toast.success("A reset email has been sent");
          document.getElementById("my_modal_3").close();
        })
        .catch(() => {
          toast.error("Please enter a valid email address.");
          document.getElementById("my_modal_3").close();
        });
    } else {
      alert("Invalid email. Please enter a valid email address.");
      document.getElementById("my_modal_3").close();
    }
  };
  return (
    <dialog id="my_modal_3" className="modal bg-transparent">
      <div className="modal-box">
        <form method="dialog">
          <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
            ✕
          </button>
        </form>
        <form
          onSubmit={handleLogin}
          className="px-3 pt-3 mb-2 flex flex-col justify-center text-white"
        >
          <input
            required
            type="email"
            name="user_email"
            id="user_email-"
            placeholder="Email"
            className="w-100 bg-transparent text-white placeholder-white border border-white rounded-md p-2 outline-none focus:border-fuchsia-500 my-3"
          />

          <input
            required
            id="pass"
            type="password"
            name="user_password"
            placeholder="Password"
            className={` w-100  bg-transparent text-white placeholder-white border border-white rounded-md p-2 outline-none focus:border-fuchsia-500`}
          />

          <input
            className="bg-[#00ADB5] hover:bg-[#00ADB5] text-white text-sm py-3 my-4 px-4 rounded cursor-pointer"
            type="submit"
            value="Login"
          />
        </form>
        <div
          onClick={handleReset}
          className="text-sm text-end hover:underline px-3"
        >
          <button>Forgot password?</button>
        </div>
      </div>
    </dialog>
  );
};

export default LoginModal;
