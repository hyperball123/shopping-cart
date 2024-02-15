import FormRow from "../ui/FormRow";
import Input from "../ui/Input";
import { useForm } from "react-hook-form";
import Form from "../ui/Form";
import Button from "../ui/Button";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

function LoginForm() {
  const { register, handleSubmit, reset, formState } = useForm();
  const navigate = useNavigate();
  const [error, setError] = useState(null);

  useEffect(() => {
    // Check if user is already authenticated (e.g., token exists in localStorage)
    const token = localStorage.getItem("token");
  
    if (token) {
      navigate("/home"); // Redirect to home page if already authenticated
    }
  }, []);

  const onSubmit = async (data) => {
    try {
      const response = await fetch("https://dummyjson.com/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username: "kminchelle",
          password: "0lelplR",
          // expiresInMins: 60, // optional
        }),
      });

      if (!response.ok) {
        throw new Error("Authentication failed");
      }

      // Authentication successful, extract token from response
      const { token } = await response.json();

      // Save token to localStorage
      localStorage.setItem("token", token);

      // Redirect to home page or perform any other actions
      navigate("/home");
    } catch (error) {
      setError("Authentication failed");
      console.error("Authentication failed:", error);
    }
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      {error && <p>{error}</p>}
      <FormRow label="username">
        <Input
          type="text" // Use type "text" for username input
          id="username"
          autoComplete="username"
          {...register("username", {
            required: "This field is required",
          })}
        />
      </FormRow>
      <FormRow label="password">
        <Input
          type="password"
          id="password"
          autoComplete="current-password"
          {...register("password", {
            required: "This field is required",
            minLength: {
              value: 8,
              message: "Password needs a minimum of 8 characters",
            },
          })}
        />
      </FormRow>
      <span className="grid mt-3">
        <Button type="submit" size="medium">
          Login
        </Button>
      </span>
    </Form>
  );
}

export default LoginForm;
