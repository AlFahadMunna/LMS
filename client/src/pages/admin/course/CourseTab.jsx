import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React from "react";

const CourseTab = () => {
  const isPublished = true;
  return (
    <Card>
      <CardHeader className="flex flex-row justify-between">
        <div>
          <CardTitle>Basic course information</CardTitle>
          <CardDescription>
            Make changes to your courses here. Click save when you're done.
          </CardDescription>
        </div>
        <div className="space-x-2">
          <Button variant="outline">
            {isPublished ? "Unpublished" : "Published"}
          </Button>
          <Button>Remove Course</Button>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-4 mt-5">
          <div>
            <Label>Title</Label>
            <Input
              type="text"
              name="courseTitle "
              placeholder="Ex. Fullstack developer"
            />
          </div>
          <div>
            <Label>Subtitle</Label>
            <Input
              type="text"
              name="subTitle "
              placeholder="Ex. Become a fullstack developer from zero to hero."
            />
          </div>
          <div>
            <Label>Description</Label>
            <RichTextEditor />
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default CourseTab;
