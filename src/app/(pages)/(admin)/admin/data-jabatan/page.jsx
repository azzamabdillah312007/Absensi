'use client'
import { useState } from "react";

import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function page() {

  const [ jabatan,setJabatan ] = useState('jabatan')
  const [ tempJabatan , setTempJabatan ] = useState('')

  const inputJabatan = (event) => {
     setTempJabatan(event.target.value)
  }

  const submitJabatan = () => {
    setJabatan(tempJabatan)
  } 

  return (
    <div className=" p-8">
      <h1 className=" text-2xl font-semibold">Data jabatan</h1>
      <div className=" flex items-center gap-5 mt-6">
        <span className=" py-2 px-3 rounded-md border w-[20%] bg-white">{jabatan}</span>
        <div className=" flex gap-4 w-full">
          <Input
            type="text"
            placeholder="masukan jabatan anda"
            className=" w-[76%]"
            onChange={inputJabatan}
          />
          <Button onClick={submitJabatan} className="bg-blue-500">Simpan</Button>
          <Button onClick={submitJabatan} className="bg-red-500">Batal</Button>
        </div>
        {/* <Select>
          <SelectTrigger className="w-[76%]">
            <SelectValue placeholder="Jabatan" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="manager">Manager</SelectItem>
            <SelectItem value="satpam">Satpam</SelectItem>
            <SelectItem value="ob">Office boy</SelectItem>
          </SelectContent>
        </Select> */}
      </div>

      <table className=' w-full mt-6 bg-white'>
        <tr className=' border'>
          <th className=' p-4'>No</th>
          <th className=' p-4'>Nip</th>
          <th className=' p-4'>Nama</th>
          <th className=' p-4'>Waktu</th>
          <th className=' p-4'>Aksi</th>
        </tr>
        <tr className=' border text-center'>
          <td className=' p-4'>01</td>
          <td className=' p-4'>098669696</td>
          <td className=' p-4'>Doyok supriadi</td>
          <td className=' p-4'>09:00 - 16:00</td>
          <td className=' p-4'>Menjaga gudang </td>
        </tr>
      </table>
    </div>
  );
}
