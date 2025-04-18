import { TextField, Button, IconButton} from "@mui/material";
import { useState } from "react";
import ContentCopyIcon from '@mui/icons-material/ContentCopy';

export default function ShortUrlDisplay() {

    const [url, setUrl] = useState("");
    const [alias, setAlias] = useState("");
    const [shortUrl, setShortUrl] = useState("");
    const [error, setError] = useState("");
    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText(shortUrl);
        setCopied(true);
        setTimeout(() => setCopied(false), 60000); // Reset after 1 minute
    };

    const handleShortenUrl = async () => {
        setShortUrl("");
        setError("");
        setCopied(false);

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
            console.error(err);
        }
    };

    return (
        <div className="flex flex-col mt-4">
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
            <h1 className="mt-2">
                Custom Alias
            </h1>
            <div className="inline-flex items-center gap-2 mb-2">
                <p className="text-gray-500">https://url-shortener-me.vercel.app/</p>
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
            {error && (
                <div className="mt-2 text-red-600 text-sm text-center">
                    {error}
                </div>
            )}
            <div>
                {shortUrl && (
                    <div className="mt-4 text-green-600 text-xl text-center">
                        <a href={shortUrl} target="_blank" rel="noopener noreferrer">
                            {shortUrl}
                        </a>
                        <IconButton
                            size="small"
                            onClick={handleCopy}
                            color={copied ? "success" : "default"}
                            aria-label="Copy URL"
                        >
                            <ContentCopyIcon fontSize="small" />
                        </IconButton>
                        {copied && <span className="text-sm text-gray-500">Copied!</span>}
                    </div>
                )}
            </div>
        </div>
    );
}