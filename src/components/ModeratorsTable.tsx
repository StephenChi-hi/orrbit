"use client";

import React from "react";
import Image from "next/image";
import { moderators } from "@/data/moderators";

const ModeratorsTable: React.FC = () => {
  return (
    <div>
      {/* Header */}
      <div className="flex px-[25px] py-[22px] items-center justify-between bg-white rounded-[30px] mb-[10px]">
        <h2 className="text-[16px] font-semibold">Moderators</h2>
        <button className="px-[28px] text-[14px] py-[16px] bg-gradient-to-r from-[#4285F4] pink-500 to-[#D209A3] purple-500 text-white rounded-full hover:opacity-90">
          + Add moderator
        </button>
      </div>

      {/* Table */}
      <div className="overflow-x-auto h-screen scrollbar-hide bg-white rounded-[30px] p-[20px]">
        <h1 className="text-[14px] font-semibold px-[10px] ">Manage all 20 moderators</h1>

        <table className="w-full text-left border-separate border-spacing-y-3">
          <thead>
            <tr className="text-[14px] ">
              <th className="p-3 font-medium border-b">Moderator</th>
              <th className="p-3 font-medium border-b text-center">Data</th>
              <th className="p-3 font-medium border-b text-center">Data</th>
              <th className="p-3 font-medium border-b text-center">Actions</th>
            </tr>
          </thead>

          <tbody className="divide-y">
            {moderators.map((mod) => (
              <tr
                key={mod.id}
                className="text-[12px] border rounded-[20px] overflow-hidden"
              >
                {/* Profile cell */}
                <td className="p-3 rounded-l-[30px] border-l border-t border-b">
                  <div className="flex items-start gap-3">
                    <Image
                      src={`https://i.pravatar.cc/150?img=${mod.id}`}
                      alt={mod.name}
                      width={60}
                      height={60}
                      className="rounded-[15px] object-cover"
                    />
                    <div className="flex flex-col">
                      <p className="font-semibold text-[13px]">{mod.name}</p>
                      <p className="text-[12px]">{mod.username}</p>
                      <p className="text-[12px] text-gray-600">
                        {mod.location}
                      </p>
                    </div>

                    <div>
                      <p className="text-[12px] w-[200px]">{mod.bio}</p>
                    </div>
                  </div>
                </td>

                {/* Data Buttons */}
                <td className="p-3 border-t border-b  ">
                  <div className="items-center flex flex-col">
                    <button className="px-[46px] text-[12px] font-semibold py-[8px]  rounded-full bg-gradient-to-r from-pink-100 to-blue-100 text-sm">
                      Data
                    </button>
                  </div>
                </td>

                <td className="p-3 border-t border-b">
                  <div className="items-center flex flex-col">
                    <button className="px-[16px] py-[8px] text-[12px] flex font-semibold items-center gap-1 rounded-full bg-gradient-to-r from-pink-100 to-blue-100 text-sm">
                      Data{" "}
                      <img
                        src="/drop.svg"
                        alt=""
                        className="w-[12px] h-[12px]"
                      />
                    </button>
                  </div>
                </td>

                {/* Actions */}
                <td className="p-3 border-r border-t border-b rounded-r-[30px]">
                  <div className="items-center flex flex-col">
                    {" "}
                    <div className="flex items-center gap-3">
                      <button className="p-2 rounded-full bg-[#F8F8F8] hover:bg-gray-200">
                        <Image
                          src="/edit.svg"
                          alt="edit"
                          width={18}
                          height={18}
                          className="object-cover"
                        />
                      </button>
                      <button className="p-2 rounded-full bg-[#F8F8F8] hover:bg-gray-200">
                        <Image
                          src="/Trash.svg"
                          alt="Trash"
                          width={18}
                          height={18}
                          className="object-cover"
                        />
                      </button>
                    </div>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ModeratorsTable;
