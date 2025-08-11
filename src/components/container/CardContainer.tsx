import type { JSX } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

interface CardContainerProps {
  title: string;
  children: JSX.Element;
}

export default function CardContainer({ title, children }: CardContainerProps) {
  return (
    <div className="flex min-h-svh w-full items-center justify-center p-6 md:p-10">
      <div className="w-full max-w-sm">
        <Card>
          <CardHeader>
            <CardTitle>{title}</CardTitle>
          </CardHeader>
          <CardContent>{children}</CardContent>
        </Card>
      </div>
    </div>
  );
}
