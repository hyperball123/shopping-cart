import FormRow from "../../ui/FormRow";
import Input from "../../ui/Input";
import { useForm } from "react-hook-form";
import Form from "../../ui/Form";
import Button from "../../ui/Button";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

function LoginForm() {
  const { register, handleSubmit, formState } = useForm();
  const { errors } = formState;
  const navigate = useNavigate();
  const [error, setError] = useState(null);

  useEffect(() => {
    // Check if user is already authenticated 
    const token = localStorage.getItem("token");

    if (token) {
      navigate("/home"); 
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
        }),
      });

      if (!response.ok) {
        throw new Error("Authentication failed");
      }

      const { token } = await response.json();

      localStorage.setItem("token", token);

      navigate("/home");
    } catch (error) {
      setError("Authentication failed");
      console.error("Authentication failed:", error);
    }
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      {error && (
        <p className="font-bold text-red-500 text-sm sm:text-lg">{error}</p>
      )}
      <FormRow label="username" error={errors?.username?.message}>
        <Input
          type="text" 
          id="username"
          autoComplete="username"
          {...register("username", {
            required: "This field is required",
          })}
        />
      </FormRow>
      <FormRow label="password" error={errors?.password?.message}>
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
