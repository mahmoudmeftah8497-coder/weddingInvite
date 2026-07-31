import { CalendarDays, Clock3, MapPin } from "lucide-react";
import { wedding } from "@/data/wedding";
import SectionTitle from "./SectionTitle";

export default function Timeline() {
  return (
    <section className="bg-[#F8F3EA] py-24">
      <div className="mx-auto max-w-4xl px-6">

        <SectionTitle title="Our Celebration" subtitle="The Evening Ahead" />

        <div className="relative">

          <div className="absolute left-6 top-0 h-full w-[2px] bg-[#B08D57]" />

          {wedding.events.map((event, index) => (
            <div key={index} className="relative mb-20 pl-20">

              <div className="absolute left-0 flex h-12 w-12 items-center justify-center rounded-full bg-[#B08D57] text-xl shadow-lg">
                {event.icon}
              </div>

              <div className="luxury-card p-10 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl">

                <h3 className="text-3xl text-[#3B2325]">
                  {event.title}
                </h3>

                <div className="mt-6 space-y-3 text-gray-700">

                  <p className="flex items-center gap-3">
                    <CalendarDays size={18} />
                    {event.date}
                  </p>

                  <p className="flex items-center gap-3">
                    <Clock3 size={18} />
                    {event.time}
                  </p>

                  <p className="flex items-center gap-3">
                    <MapPin size={18} />
                    {event.venue}
                  </p>

                  <p className="ml-7 text-gray-500">
                    {event.city}
                  </p>

                </div>

                <a
                  href={event.map}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    mt-8
                    inline-flex
                    items-center
                    gap-2
                    rounded-full
                    border
                    border-[var(--gold)]
                    px-6
                    py-3
                    text-[var(--burgundy)]
                    transition-all
                    duration-300
                    hover:bg-[var(--gold)]
                    hover:text-white
                  "
                >
                  View Location →
                </a>

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}
