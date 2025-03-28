import FileUploadHook from "./hooks/fileuphook";
import FullScreenHook from "./hooks/fullscreen";
import Search from "./hooks/search";
import Timing from "./hooks/timing";
import UseFocus from "./hooks/useFocus";

export default function MantineHooks() {

  return (
    <>
     <div style={{ display: 'flex', flexDirection: 'column',justifyContent: 'start',  height: '100vh' , paddingTop: '20px', paddingRight: '20px'}}>
        <FileUploadHook />
        <UseFocus />
        <FullScreenHook />
        <Search />
        <Timing/>
     </div>
    </>
  );
}