import { TextField, Button} from "@mui/material";
import { useState } from "react";

export default function ShortUrlDisplay() {

    const [url, setUrl] = useState("");
    const [alias, setAlias] = useState("");
    const [shortUrl, setShortUrl] = useState("");
    const [error, setError] = useState("");

    const handleShortenUrl = async () => {
        setShortUrl("");
        setError("");

        // Basic validation
        if (!url) {
            setError("Please enter a URL.");
            return;
        }

        try {
            const res = await fetch("/api/shorten", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ url, alias }),
            });
            const data = await res.json();

            if (res.ok) {
                setShortUrl(data.shortUrl);
            } else {
                setError(data.error || "Failed to shorten URL.");
            }
        } catch (err) {
            setError("Network error.");
        }
    };

    return (
        <div className="flex flex-col">
            <h1>
                URL
            </h1>
            <TextField
                variant="outlined"
                placeholder="https://example.com/very/long/url"
                className="rounded-lg mb-2"
                value={url}
                onChange={e => setUrl(e.target.value)}
                size="small"
                fullWidth
            />
            <h1>
                Custom Alias
            </h1>
            <div className="inline-flex items-center gap-2 mb-2">
                <p>https://url-shortener.vercel.app/</p>
                <TextField
                    variant="outlined"
                    placeholder="your-custom-alias"
                    className="rounded-lg"
                    value={alias}
                    onChange={e => setAlias(e.target.value)}
                    size="small"
                />
            </div>
            <Button
                variant="contained"
                color="primary"
                className="rounded-lg"
                onClick={handleShortenUrl}
            >
                Shorten
            </Button>
            {shortUrl && (
                <div className="mt-2 text-green-600 text-sm text-center">
                    <a href={shortUrl} target="_blank" rel="noopener noreferrer" className="underline">
                        {shortUrl}
                    </a>
                </div>
            )}
            {error && (
                <div className="mt-2 text-red-600 text-sm text-center">
                    {error}
                </div>
            )}
        </div>
    );
}