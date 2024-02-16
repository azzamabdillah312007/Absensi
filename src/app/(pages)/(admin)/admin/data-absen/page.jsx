import React from 'react'
import { Input } from '@/components/ui/input'

export default function page() {
  return (
    <div className=' p-8'>
      <Input type="text" placeholder="Cari Id pegawai" className=" w-[60%]" />
      <table className=' w-full mt-6 bg-white'>
        <tr className=' border'>
          <th className=' p-4'>No</th>
          <th className=' p-4'>Nip</th>
          <th className=' p-4'>Nama</th>
          <th className=' p-4'>Waktu</th>
          <th className=' p-4'>Aksi</th>
        </tr>
        <tr className=' border'>
          <td className=' p-4'>01</td>
          <td className=' p-4'>098669696</td>
          <td className=' p-4'>Doyok supriadi</td>
          <td className=' p-4'>09:00 - 16:00</td>
          <td className=' p-4'>Menjaga gudang </td>
        </tr>
      </table>
    </div>
  )
}
