"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

export default function RoutePreloader() {
  const pathname = usePathname();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Show loader instantly when route changes
    setLoading(true);

    // Simulate loading delay (replace with actual data-fetch detection if needed)
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 300); // 300ms is just an example

    return () => clearTimeout(timeout);
  }, [pathname]);

  if (!loading) return null;

  return (
    <div id="loading" className="loading--theme">
      <div id="loading-center">
        <span className="loader" />
      </div>
    </div>
  );
}
