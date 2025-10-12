import { useState, useEffect } from "react";
import Papa from "papaparse";

const CACHE_EXPIRY_MS = 10 * 60 * 1000; // 10 minutes

const useGoogleSheet = (csvUrl:string) => {
  const [rows, setRows] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!csvUrl) return;

    const cacheKey = `sheetCache_${csvUrl}`;
    const cached = localStorage.getItem(cacheKey);

    if (cached) {
      try {
        const parsed = JSON.parse(cached);

        // Check if cache is still valid
        const isExpired = Date.now() - parsed.timestamp > CACHE_EXPIRY_MS;

        if (!isExpired && Array.isArray(parsed.data)) {
          setRows(parsed.data);
          setLoading(false);
          return;
        }
      } catch (err) {
        console.warn("Failed to parse cached data", err);
      }
    }

    // Fetch and parse CSV if no valid cache
    Papa.parse(csvUrl, {
      download: true,
      header: true,
      skipEmptyLines: true,
      complete: (results) => {
        const data = results.data;
        setRows(data);
        setLoading(false);

        // Save to localStorage
        localStorage.setItem(
          cacheKey,
          JSON.stringify({
            data,
            timestamp: Date.now(),
          })
        );
      },
      error: (err) => {
        console.error("Error parsing CSV:", err);
        setError(err);
        setLoading(false);
      },
    });
  }, [csvUrl]);

  return { rows, loading, error };
};

export default useGoogleSheet;
