"use client";

import React from "react";
import { useForm } from "react-hook-form";

// shad cn
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

import { Label } from "@/components/ui/label";

export default function page() {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    alert(JSON.stringify(data, null, 2));
  };

  return (
    <div>
      <h1 className="text-center mt-9 font-semibold text-3xl">Login Admin</h1>
      <div className=" p-4 flex justify-center">
        <form
          className=" border w-[60%] p-5 rounded-md"
          onSubmit={handleSubmit(onSubmit)}
        >
          <h1 className=" text-center">Login</h1>
          <div className=" mt-4">
            <Label>Masukan username kamu</Label>
            <Input
              type="text"
              placeholder="username"
              {...register("username")}
            />
          </div>
          <div className=" mt-4">
            <Label>Masukan password kamu</Label>
            <Input
              type="password"
              placeholder="password"
              {...register("password")}
            />
          </div>
          <div className=" mt-4 flex justify-between gap-10">
            <Button type="submit" className="bg-blue-500 w-full">
              Login
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
