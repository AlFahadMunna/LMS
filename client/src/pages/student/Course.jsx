import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import React from "react";

const Course = () => {
  return (
    <Card className="overflow-hidden rounded-lg dark:bg-gray-800 bg-white shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
      <div className="relative">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRxNY2UBOEJz3nf-301GNllhQHBpYp9GSv4A&s"
          alt="course"
        />
      </div>
      <CardContent className="px-5 py-4 space-y-3">
        <h2 className="hover:underline font-bold text-lg truncate">
          Next js complete course
        </h2>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Avatar className="h-8 w-8">
              <AvatarImage
                src={"https://github.com/shadcn.png"}
                alt="@shadcn"
              />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <h2 className="font-medium text-sm">Md Al Fahad</h2>
          </div>
          <Badge className="bg-blue-600  text-white px-2 py-1 text-xs rounded-full">
            Advanced
          </Badge>
        </div>
        <div className="text-lg font-bold">
          <span>৳ 5990</span>
        </div>
      </CardContent>
    </Card>
  );
};

export default Course;
