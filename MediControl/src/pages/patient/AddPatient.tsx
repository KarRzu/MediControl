import { useState } from "react";
import { Button } from "../../ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../../ui/dialog";
import { Input } from "../../ui/input";
import { Label } from "../../ui/label";

export type PersonProps = {
  id: number;
  name: string;
  lastName: string;
  birthDate: string;
  age: number;
  mobile: string;
  email: string;
  address: string;
  city: string;
};

type EditPatientProps = {
  onAddPatient: (newPatient: Omit<PersonProps, "id">) => void;
};

export function AddPatient({ onAddPatient }: EditPatientProps) {
  const [newPatient, setNewPatient] = useState<Omit<PersonProps, "id">>({
    name: "",
    lastName: "",
    birthDate: "",
    age: 0,
    mobile: "",
    email: "",
    address: "",
    city: "",
  });

  const handleSave = () => {
    onAddPatient(newPatient);
    setNewPatient({
      name: "",
      lastName: "",
      birthDate: "",
      age: 0,
      mobile: "",
      email: "",
      address: "",
      city: "",
    });
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>+ Add Patient</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add New Patient</DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          {/* Form Fields */}
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Name
            </Label>
            <Input
              id="name"
              className="col-span-3"
              value={newPatient.name}
              onChange={(e) =>
                setNewPatient({ ...newPatient, name: e.target.value })
              }
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="lastname" className="text-right">
              Last Name
            </Label>
            <Input
              id="lastname"
              className="col-span-3"
              value={newPatient.lastName}
              onChange={(e) =>
                setNewPatient({ ...newPatient, lastName: e.target.value })
              }
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="date" className="text-right">
              Birth Date
            </Label>
            <Input
              id="date"
              className="col-span-3"
              type="date"
              value={newPatient.birthDate}
              onChange={(e) =>
                setNewPatient({ ...newPatient, birthDate: e.target.value })
              }
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="age" className="text-right">
              Age
            </Label>
            <Input
              id="age"
              className="col-span-3"
              type="number"
              value={newPatient.age}
              onChange={(e) =>
                setNewPatient({ ...newPatient, age: Number(e.target.value) })
              }
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="mobile" className="text-right">
              Mobile
            </Label>
            <Input
              id="mobile"
              className="col-span-3"
              value={newPatient.mobile}
              onChange={(e) =>
                setNewPatient({ ...newPatient, mobile: e.target.value })
              }
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="email" className="text-right">
              Email
            </Label>
            <Input
              id="email"
              className="col-span-3"
              value={newPatient.email}
              onChange={(e) =>
                setNewPatient({ ...newPatient, email: e.target.value })
              }
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="address" className="text-right">
              Address
            </Label>
            <Input
              id="address"
              className="col-span-3"
              value={newPatient.address}
              onChange={(e) =>
                setNewPatient({ ...newPatient, address: e.target.value })
              }
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="city" className="text-right">
              City
            </Label>
            <Input
              id="city"
              className="col-span-3"
              value={newPatient.city}
              onChange={(e) =>
                setNewPatient({ ...newPatient, city: e.target.value })
              }
            />
          </div>
        </div>
        <DialogFooter>
          <Button type="submit" onClick={handleSave}>
            Save
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
