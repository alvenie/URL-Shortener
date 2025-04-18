import Box from '@mui/material/Box';
import ShortUrlDisplay from '../components/ShortUrlDisplay';

export default function Content() {
    return (
        <Box
            className="inline-block w-1/2 p-6 border border-solid border-gray-300 shadow-md bg-white m-10 rounded-xl">
            <h1 className="text-2xl font-semibold">
                Shorten a URL
            </h1>
            <p className="text-sm font-semibold text-gray-400">
                Enter a long URL to create a shorter, shareable link
            </p>
            <ShortUrlDisplay />
        </Box>
    )
}