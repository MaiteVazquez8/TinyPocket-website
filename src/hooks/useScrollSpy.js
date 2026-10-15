import { useEffect, useState } from 'react';

/**
 * Highlights the section currently closest to the reading line.
 * Falls back to "no active section" when IntersectionObserver is missing.
 */
export function useScrollSpy(ids, { offset = 120 } = {}) {
  const [activeId, setActiveId] = useState(null);

  useEffect(() => {
    if (typeof IntersectionObserver === 'undefined' || ids.length === 0) return undefined;

    const visible = new Map();
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) visible.set(entry.target.id, entry.boundingClientRect.top);
          else visible.delete(entry.target.id);
        });

        if (visible.size === 0) return;
        const [closest] = [...visible.entries()].sort((a, b) => Math.abs(a[1]) - Math.abs(b[1]));
        setActiveId(closest[0]);
      },
      { rootMargin: `-${offset}px 0px -55% 0px`, threshold: [0, 0.01, 0.25] },
    );

    const nodes = ids
      .map((id) => document.getElementById(id))
      .filter((node) => node instanceof HTMLElement);

    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, [ids, offset]);

  return activeId;
}
