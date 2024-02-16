"use client";

import React from "react";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
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
        <h1 className=" text-center">Data pegawai</h1>
        <div className=" mt-4">
          <Input type="text" placeholder="NIP" {...register("nip")} />
        </div>
        <div className=" mt-4">
          <Input type="text" placeholder="username" {...register("username")} />
        </div>
        <div className=" mt-4">
          <Input
            type="password"
            placeholder="password"
            {...register("password")}
          />
        </div>
        <div className=" mt-4">
          <Input type="text" placeholder="nama" {...register("nama")} />
        </div>
        <div className=" mt-4">
          <Input
            type="text"
            placeholder="tempat tanggal lahir"
            {...register("pob")}
          />
        </div>
        <div className=" mt-4">
          <Input
            type="text"
            placeholder="jenis kelamin"
            {...register("jenis_kelamin")}
          />
        </div>
        <div className=" mt-4">
          <Input type="text" placeholder="agama" {...register("agama")} />
        </div>
        <div className=" mt-4">
          <Input type="text" placeholder="alamat" {...register("alamat")} />
        </div>
        <div className=" mt-4">
          <Input
            type="number"
            placeholder="no telepon"
            {...register("no_hp")}
          />
        </div>
        <div className=" mt-4">
          <Input type="text" placeholder="jabatan" {...register("jabatan")} />
        </div>
        <div className=" mt-4">
          <Input type="file" placeholder="foto" {...register("foto")} />
        </div>
        <div className=" mt-4">
          <Button type="submit" className="bg-blue-500 w-full">
            Kirim
          </Button>
        </div>
      </form>
    </div>
  );
}
