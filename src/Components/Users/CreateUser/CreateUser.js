import React from "react";
import { useForm } from "react-hook-form";

export default function CreateUser() {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  function onSubmit(data) {
    // display form data on success
    alert("SUCCESS!! :-)\n\n" + JSON.stringify(data, null, 4));
    return false;
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("firstName", { required: true })} />
      {errors.firstName?.type === "required" && "First name is required"}

      <input {...register("lastName", { required: true })} />
      {errors.lastName && "Last name is required"}

      <input type="submit" />
    </form>
  );
}
