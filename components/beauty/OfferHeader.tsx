"use client";

import { Badge } from "@/components/ui/badge";
import { Sparkles, Gift } from "lucide-react";

export function OfferHeader() {
  return (
    <div className="text-center space-y-4 my-12">
      <div className="flex justify-center gap-2">
        <Badge variant="secondary" className="bg-pink-100">
          <Sparkles className="w-4 h-4 mr-1" />
          Акция "СИЯЙ"
        </Badge>
        <Badge variant="secondary" className="bg-pink-100">
          <Gift className="w-4 h-4 mr-1" />
          С сюрприз-подарком
        </Badge>
      </div>
      <h1 className="text-4xl font-bold text-gray-900 bg-clip-text text-transparent bg-gradient-to-r from-pink-600 to-purple-600">
        Профессиональный уход за лицом
      </h1>
      <div className="max-w-2xl mx-auto p-6 border-2 border-pink-200 rounded-[20px] bg-white/50 backdrop-blur-sm shadow-lg">
        <p className="text-gray-600 mt-6">
          Дорогие Девочки!!! В преддверии Новогоднего праздника, хочу предложить Вам свою Акцию "СИЯЙ" 
          (с сюрпризом подарком!!!) За чисто символическую цену (с выездом на дом).
        </p>
      </div>
    </div>
  );
}