import Navbar from "@/components/navbar";
const events = [
  { slug: "event1", title: "Event 1", date: "2026-03-20", location: "Jakarta", description: "Deskripsi singkat event pertama." },
  { slug: "event2", title: "Event 2", date: "2026-04-05", location: "Bandung", description: "Deskripsi singkat event kedua." },
];

export default function EventPage() {
  return (
    <main className="p-8">
      <Navbar />
      <h1 className="text-2xl font-bold mb-6">Event</h1>
      <ul className="space-y-4">
        {events.map((event) => (
          <li key={event.slug} className="border p-4 rounded">
            <a href={`/event/${event.slug}`} className="text-lg font-semibold hover:underline">
              {event.title}
            </a>
            <p className="text-sm text-gray-500">{event.date} · {event.location}</p>
            <p className="mt-1">{event.description}</p>
          </li>
        ))}
      </ul>
    </main>
  );
}
