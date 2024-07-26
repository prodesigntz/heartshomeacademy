import React from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import AllStudents from './students/allStudents';
import AllTeachers from './teachers/allTeachers';
import AllParents from './parent/allParents';
import AllStaff from './staff/allStaff';
import { Button } from '@/components/ui/button';
import Link from 'next/link';


export default function page() {
  return (
    <main className="">
      <section className="sektion md:grid-cols-2">
        <div></div>
        <div className="flex items-center justify-center md:justify-end">
          <Button
            asChild
            variant="hearts-primary"
            className="rounded-full bg-heartsprimary text-white"
          >
            <Link href="/cms/dashUsers/addUsers">Create User</Link>
          </Button>
        </div>
      </section>
      <Tabs defaultValue="students" className="">
        <TabsList>
          <TabsTrigger value="students">Students</TabsTrigger>
          <TabsTrigger value="teachers">Teachers</TabsTrigger>
          <TabsTrigger value="parents">Parents</TabsTrigger>
          <TabsTrigger value="staffs">Staffs</TabsTrigger>
        </TabsList>
        <TabsContent value="students">
          <AllStudents />
        </TabsContent>
        <TabsContent value="teachers">
          <AllTeachers />
        </TabsContent>
        <TabsContent value="parents">
          <AllParents />
        </TabsContent>
        <TabsContent value="staffs">
          <AllStaff />
        </TabsContent>
      </Tabs>
    </main>
  );
}
