"use client";
import Image from "next/image";

import { APP_NAME } from "@/lib/constants";
import { Button } from "@/components/ui/button";
const NotFoundPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <div className="p-7 w-90 md:w-1/2 lg:w-1/3 rounded-3xl shadow-md text-center">
        <Image
          src="/images/logo.svg"
          width={80}
          height={80}
          alt={`${APP_NAME} logo`}
          priority={true}
          className="mx-auto mt-4 mb-4"
        />
        <h1 className="text-3xl font-bold mb-4">Not Found</h1>
        <p className="text-destructive mb-4">Could not find requested page</p>
        <Button
          variant="outline"
          className="ml-2 mb-4"
          onClick={() => (window.location.href = "/")}
        >
          Back to Homepage
        </Button>
      </div>
    </div>
  );
};

export default NotFoundPage;
