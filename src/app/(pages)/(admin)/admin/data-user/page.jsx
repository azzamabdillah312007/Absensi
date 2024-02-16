"use client";

import React from "react";
import { useForm } from "react-hook-form";

// shad cn
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function page() {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    alert(JSON.stringify(data, null, 2));
  };

  return (
    <div className=" p-4 flex justify-center">
      <form
        className=" border w-[80%] p-5 rounded-md bg-white"
        onSubmit={handleSubmit(onSubmit)}
      >
        <h1 className=" text-center">Data User</h1>
        <div className=" mt-4">
          <Input type="text" placeholder="username" {...register("username")} />
        </div>
        <div className=" mt-4">
          <Input type="password" placeholder="password" {...register("password")} />
        </div>
        <div className=" mt-4 flex justify-between gap-10">
          <Button type="submit" className="bg-blue-500 w-full">
            Kirim
          </Button>
          <Button type="submit" className="bg-orange-500 w-full">
            Batal
          </Button>
        </div>
      </form>
    </div>
  );
}
