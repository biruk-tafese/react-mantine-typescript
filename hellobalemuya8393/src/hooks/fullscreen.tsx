import { useFullscreen } from '@mantine/hooks';
import { Button} from '@mantine/core';


export default function FullScreenHook() {
    const { ref, toggle, fullscreen } = useFullscreen();
    return (
        <div ref={ref} style={{ height: '100vh', width: '100vw', backgroundColor: 'lightblue' }}>
        <Button onClick={toggle}>{fullscreen ? 'Exit Fullscreen' : 'Go Fullscreen'}</Button>
        </div>
    );
    }
// This component uses the useFullscreen hook from Mantine to toggle fullscreen mode.