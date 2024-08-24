import { Button } from "../../../ui/button";
import { Input } from "../../../ui/input";

export function Header() {
  return (
    <>
      <div className="bg-blue-300 w-full h-24 flex justify-around items-center">
        <Input placeholder="Search..." className="w-1/3" />
        <Button>Create Event</Button>
      </div>
    </>
  );
}
