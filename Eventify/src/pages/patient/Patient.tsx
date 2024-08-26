import { useState } from "react";
import { Input } from "../../ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../../ui/table";
import { FiEdit } from "react-icons/fi";
import { RiDeleteBin6Line } from "react-icons/ri";
import { AddPatient, PersonProps } from "./AddPatient";

export function Patient() {
  const [patients, setPatients] = useState<PersonProps[]>([
    {
      id: 1,
      name: "Michael",
      lastName: "Brown",
      birthDate: "24/8/2024",
      age: 24,
      mobile: "+1234567890",
      email: "test123@gmail.com",
      address: "street2",
      city: "New York",
    },
  ]);

  const addPatient = (newPatient: Omit<PersonProps, "id">) => {
    setPatients([...patients, { id: patients.length + 1, ...newPatient }]);
  };

  return (
    <>
      <div className="flex justify-center items-center gap-48">
        <Input
          placeholder="Search patient by full name"
          className="w-1/3 h-8 m-12"
        />
        <AddPatient onAddPatient={addPatient} />
      </div>

      <Table className="">
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Profile</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Age</TableHead>
            <TableHead>Mobile</TableHead>
            <TableHead>City</TableHead>
            <TableHead>Date</TableHead>
            <TableHead>Time</TableHead>
            <TableHead className="text-right">Option</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {patients.map((patient) => (
            <TableRow key={patient.id}>
              <TableCell className="font-medium">Profile</TableCell>
              <TableCell>{`${patient.name} ${patient.lastName}`}</TableCell>
              <TableCell>{patient.age}</TableCell>
              <TableCell>{patient.mobile}</TableCell>
              <TableCell>{patient.city}</TableCell>
              <TableCell>{patient.birthDate}</TableCell>
              <TableCell>
                {/* Dodaj tutaj czas jeśli jest dostępny */}
              </TableCell>
              <TableCell>
                <div className="flex gap-8">
                  <FiEdit />
                  <RiDeleteBin6Line />
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  );
}
