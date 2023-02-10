"use client";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useState } from "react";

export function DialogCard() {
  const [open, setOpen] = useState(false);
  return (
    <Card>
      <CardHeader>
        <CardTitle>ShadUI Dialog + Framer Motion</CardTitle>
      </CardHeader>
      <CardContent>
        <div>Click the button to open a dialog.</div>
        <div className="mt-4 flex justify-center">
          <Dialog onOpenChange={setOpen}>
            <DialogTrigger asChild>
              <Button>Click Me</Button>
            </DialogTrigger>
            <DialogContent open={open} className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>Hello</DialogTitle>
                <DialogDescription>This is my description</DialogDescription>
              </DialogHeader>
            </DialogContent>
          </Dialog>
        </div>
      </CardContent>
    </Card>
  );
}
