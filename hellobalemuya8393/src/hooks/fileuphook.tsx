import { Button, Group, List } from "@mantine/core";
import { useFileDialog } from "@mantine/hooks";




export default function FileUploadHook() {
    
  const fileDialog = useFileDialog();
  
  const pickedFiles = Array.from(fileDialog.files || [] ).map((file) => (
     <List.Item key ={file.name}>{file.name}</List.Item>
  ));

    return (
        <>
        <div >
            <Group>
                  <Button onClick={fileDialog.open}>PickUp files</Button>
                  {pickedFiles.length > 0 && ( 
                    <Button variant="default" onClick={fileDialog.reset}>
                        Clear
                    </Button>
                  )}
            </Group>

            {pickedFiles.length > 0 && (
                <List mt="md" size="sm" center>
                    {pickedFiles}
                </List>
            )}
        </div>
        </>
    );
    }