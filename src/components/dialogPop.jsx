import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";

export function DialogPop({ btnTitle, title, content, onSave }) {
  const [comment, setComment] = useState("");
  const [status, setStatus] = useState("On Follow-Up");

  const handleSave = () => {
    // Call onSave to handle the save operation
    onSave({ comment, status });
    setComment(""); // Clear the comment field
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant="hearts-primary"
          className="bg-heartsprimary text-white"
        >
          {btnTitle}
        </Button>
        {/* <Button variant="outline">{title}</Button> */}
      </DialogTrigger>

      <DialogContent className="">
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription>
            Make changes to your profile here. Click save when you're done.
          </DialogDescription>
        </DialogHeader>
        <div className="py-4 mt-5">
          {content}

          {/* <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Name
            </Label>
            <Input
              id="name"
              defaultValue="Pedro Duarte"
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-right">
              Username
            </Label>
            <Input
              id="username"
              defaultValue="@peduarte"
              className="col-span-3"
            />
          </div>
        </div> */}
          <div className="my-4">
            <Label htmlFor="comment">Comment</Label>
            <textarea
              className="shadow appearance-none border rounded w-full py-2 px-3 text-slate-700 leading-tight focus:outline-none focus:shadow-outline"
              id="comment"
              type="text"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              placeholder="Add a comment..."
            />
          </div>

          <div className="my-4">
            <Label htmlFor="status">Status</Label>
            <select
              id="status"
              value={status}
              onChange={(e) => setStatus(e.target.value)}
              className="w-full mt-2 border-gray-300 rounded-md shadow-sm"
            >
              <option value="On Follow-Up">On Follow-Up</option>
              <option value="Cancelled">Cancelled</option>
              <option value="Admitted">Admitted</option>
            </select>
          </div>
        </div>

        <DialogFooter>
          <Button type="button" onClick={handleSave}>
            Save changes
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
