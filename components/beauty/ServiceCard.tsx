"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";

interface ServiceCardProps {
  title: string;
  icon: LucideIcon;
  items: string[];
  children?: React.ReactNode;
}

export function ServiceCard({ title, icon: Icon, items, children }: ServiceCardProps) {
  return (
    <Card className="border-pink-100 hover:shadow-lg transition-shadow bg-white/50 backdrop-blur-sm">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Icon className="w-5 h-5 text-pink-500" />
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <ul className="space-y-3">
          {items.map((item, index) => (
            <li key={index} className="flex items-start gap-2">
              <span className="text-pink-500">•</span>
              {item}
            </li>
          ))}
        </ul>
        {children}
      </CardContent>
    </Card>
  );
}