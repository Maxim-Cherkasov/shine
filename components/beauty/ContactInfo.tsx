"use client";

import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";

export function ContactInfo() {
  return (
    <div className="text-center space-y-4">
      <div className="bg-white/50 backdrop-blur-sm rounded-lg p-6 max-w-md mx-auto">
        <p className="font-medium text-xl text-gray-800">Наталья Георгиевна</p>
        <p className="text-md text-gray-600">Косметолог-Эстетист</p>
        <p className="text-sm text-pink-600 mt-2">Пишите, звоните!</p>
        <Button className="w-full bg-pink-500 hover:bg-pink-600 mt-4" size="lg">
          <Phone className="w-4 h-4 mr-2" />
          8 908 832-89-85
        </Button>
      </div>
    </div>
  );
}