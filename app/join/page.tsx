"use client";

import { buttonVariants } from "@/components/ui/button";
import textContent from "@/app/text/public.json";
import Link from "next/link";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { useState } from "react";

export default function Home() {
  const [email, setEmail] = useState("");
  const [emailGift, setEmailGift] = useState("");

  return (
    <>
      <section className="relative py-20">
        <div className="flex flex-col items-center text-center space-y-8">
          <h3 className="text-2xl md:text-4xl font-bold tracking-tight">
            Join Technology Basics Journey
          </h3>
          <p className="max-w-[700px] text-muted-foreground md:text-xl">
            {textContent.description}
          </p>
          <Tabs defaultValue="basic-info">
            <TabsList className="grid grid-cols-2 w-sm">
              <TabsTrigger value="basic-info">For myself</TabsTrigger>
              <TabsTrigger value="course-structure">It's a gift</TabsTrigger>
            </TabsList>
            <TabsContent value="basic-info">
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                  placeholder="m@example.com"
                  required
                />
              </div>
            </TabsContent>
            <TabsContent value="course-structure">
              <Card>
                <CardHeader>
                  <CardTitle>Razradi ovo</CardTitle>
                  <CardTitle>It's easy</CardTitle>
                  <CardDescription>
                    1. You buy the course with your email address
                  </CardDescription>
                  <CardDescription>
                    2. You receive a confirmation email with a link to send
                    access to course as a gift
                  </CardDescription>
                  <CardDescription>
                    3. You pick an option to send the course access to the
                    recipient: We send an email to the recipient 
                  </CardDescription>
                </CardHeader>
              </Card>
              <div className="grid gap-2 pt-4">
                <Label htmlFor="email">Email</Label>
                <Input
                  value={emailGift}
                  onChange={(e) => setEmailGift(e.target.value)}
                  type="email"
                  placeholder="m@example.com"
                  required
                />
              </div>
            </TabsContent>
          </Tabs>

          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <Link
              className={buttonVariants({
                size: "lg",
              })}
              href="/courses"
            >
              Next step
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
