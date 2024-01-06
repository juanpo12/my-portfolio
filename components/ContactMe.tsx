'use client';
import { Button, Input, Textarea } from "@nextui-org/react";
import React, { useState, useCallback } from "react";

const ContactMe = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateEmail = useCallback((email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }, []);

  const isInvalid = React.useMemo(() => {
    if (form.email === "") return false;

    return !validateEmail(form.email);
  }, [form.email, validateEmail]);

  const handleChange = useCallback(
    (e : React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const { name, value } = e.target;
      setForm((prevForm) => ({ ...prevForm, [name]: value }));
    },
    [setForm]
  );

  const handleBlurEmail = useCallback(() => {
    const emailValid = validateEmail(form.email);
    if (!emailValid) {
      setErrors("Please enter a valid email address.");
    } else {
      setErrors("");
    }
  }, [form.email, validateEmail]);

  const handleSubmit = useCallback(
    (e : React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      const emailValid = validateEmail(form.email);

      if (!emailValid) {
        setErrors("Please enter a valid email address.");
        return;
      }

      setIsSubmitting(true);

      fetch("/api", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      })
        .then((response) => {
          if (response.ok) {
            console.log("Email enviado correctamente");
          } else {
            console.error("Error al enviar el email:", response.statusText);
          }
        })
        .catch((error) =>
          console.error("Error en la solicitud POST:", error)
        )
        .finally(() => {
          setIsSubmitting(false);
          setErrors("");
          setForm({
            name: "",
            email: "",
            message: "",
          });
        });
    },
    [form, validateEmail]
  );

  return (
    <form
      className="w-full h-[80vh] flex justify-center items-center text-center"
      onSubmit={handleSubmit}
    >
      <div className="sm:w-1/3 h-2/3 flex justify-center flex-col bg-gray-800 bg-opacity-50 rounded-3xl p-5 gap-4">
        <h1 className="text-3xl font-mono">Contact me</h1>
        <div className="flex flex-col justify-center items-center gap-4 p-5 m-5 h-full">
          <Input
            label="Your name"
            value={form.name}
            size={"md"}
            className="w-2/3 bg-gray-700 rounded-lg"
            onChange={handleChange}
          ></Input>
          <Input
            label="Email"
            size={"md"}
            value={form.email}
            isInvalid={isInvalid}
            color={
              isInvalid
                ? "danger"
                : form.email === ""
                ? "default"
                : "success"
            }
            errorMessage={isInvalid && "Please enter a valid email"}
            className="w-2/3 bg-gray-700 rounded-lg"
            onChange={handleChange}
            onBlur={handleBlurEmail}
          ></Input>

          <Textarea
            isRequired
            label="Message"
            labelPlacement="inside"
            placeholder="Enter your message"
            className="max-w-xs"
            onChange={handleChange}
            value={form.message}
          />

          <Button
            isDisabled={
              isInvalid ||
              isSubmitting ||
              form.email === "" ||
              form.message === "" ||
              form.name === ""
            }
            type="submit"
            color="success"
            variant="shadow"
            className="w-1/3"
          >
            {isSubmitting ? "Enviando..." : "Send"}
          </Button>
        </div>
      </div>
    </form>
  );
};

export default ContactMe;