import CustomAspectRatio from "./hooks/aspectration";
import FileUploadHook from "./hooks/fileuphook";
import FullScreenHook from "./hooks/fullscreen";
import Xgrid from "./hooks/gird";
import Notify from "./hooks/notify";
import OS from "./hooks/os";
import Search from "./hooks/search";
import Timing from "./hooks/timing";
import UseFocus from "./hooks/useFocus";
import UseForm from "./hooks/useform";

export default function MantineHooks() {

  return (
    <>
     <div style={{ display: 'flex', flexDirection: 'column',justifyContent: 'start',  height: '100vh' , paddingTop: '20px', paddingRight: '20px'}}>
        <FileUploadHook />
        <UseFocus />
        <FullScreenHook />
        <Search />
        <Timing/>
        <OS />
        <UseForm />
        <CustomAspectRatio />
        <Xgrid />
        <div style={{ paddingTop: '20px', paddingRight: '20px'}}>
        <Notify />
        </div>
     </div>
    </>
  );
}