"use client";

import { Calendar, Clock, Heart } from "lucide-react";
import { OfferHeader } from "@/components/beauty/OfferHeader";
import { ServiceCard } from "@/components/beauty/ServiceCard";
import { ContactInfo } from "@/components/beauty/ContactInfo";

export default function Home() {
  return (
    <main className="min-h-screen bg-[url('https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?auto=format&fit=crop&q=80')] bg-cover bg-center bg-fixed">
      <div className="min-h-screen bg-white/90 backdrop-blur-sm py-12 px-4">
        <div className="max-w-6xl mx-auto space-y-12">
          <OfferHeader />

          <div className="grid md:grid-cols-3 gap-6">
            <ServiceCard
              title="Основные процедуры"
              icon={Heart}
              items={[
                "Уход за лицом с применением профессиональных, абсолютно гипоаллергенных средств",
                "Массаж лица на выбор: ручной или аппаратный (ультразвук)",
                "За время сеанса проведу мини семинар по правильному уходу за лицом (бесплатно)",
                "Возможность приобрести профессиональные средства со скидкой (по заказу и рекомендациям, подбор по типу кожи)"
              ]}
            />

            <ServiceCard
              title="Детали курса"
              icon={Calendar}
              items={[
                "Для видимого результата рекомендован курс 8-10 дней",
                "Время экспозиций плюс массаж - 1,5 часа",
                "Выезд на дом включён в стоимость",
                "Начало процедур с 12 декабря 24 г"
              ]}
            />

            <ServiceCard
              title="Условия и цены"
              icon={Clock}
              items={[
                "Цена за 1 процедуру - 900 руб",
                "В цену включён выезд на дом",
                "Запись веду по предоплате 50% (от выбранного Вами количества процедур)",
                "Место и время ограничены!"
              ]}
            >
              <div className="mt-4 p-3 bg-pink-50 rounded-lg">
                <p className="text-sm text-pink-700 font-medium">
                  Только для своих! Акция "СИЯЙ" с сюрприз-подарком!
                </p>
              </div>
            </ServiceCard>
          </div>

          <ContactInfo />
        </div>
      </div>
    </main>
  );
}