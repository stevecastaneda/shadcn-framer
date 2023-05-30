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
        <div className="mt-4 flex justify-center">
          <Dialog onOpenChange={setOpen}>
            <DialogTrigger asChild>
              <Button>Click to Open Dialog</Button>
            </DialogTrigger>
            <DialogContent open={open} className="sm:max-w-xs">
              <DialogHeader>
                <DialogTitle className="text-center text-3xl">👋</DialogTitle>
                <DialogDescription>
                  I used a slower initial animation (0.2), and a faster exit
                  (0.1).
                </DialogDescription>
              </DialogHeader>
            </DialogContent>
          </Dialog>
        </div>
      </CardContent>
    </Card>
  );
}
