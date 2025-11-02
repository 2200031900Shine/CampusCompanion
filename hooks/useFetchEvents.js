import { useEffect, useState } from 'react';
import eventsData from '../data/events.json';

export default function useFetchEvents() {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const t = Math.floor(800 + Math.random() * 400); // 800-1200ms
    const id = setTimeout(() => {
      setEvents(eventsData);
      setLoading(false);
    }, t);
    return () => clearTimeout(id);
  }, []);

  return { events, loading };
}
