import {  useDisclosure } from "@mantine/hooks";
import { Modal, Button, TextInput, Group } from "@mantine/core";



 export default function UseFocus() {


    const [opened , { open , close}] = useDisclosure(false);
    return (
        <>
         <Modal opened = {opened} onClose={close} title="Login" >
            <div>
                <p>Welcome to the Hello Balemuya!</p>
                <form>
                    <TextInput label="full name" placeholder="Enter your full name" required />
                    <TextInput label="email" placeholder="Enter your email" required />
                    <TextInput label="password" placeholder="Enter your password" required />
                    <TextInput label="confirm password" placeholder="Confirm your password" required />
                    
                    <Group justify="space-between" mt="md">
                        <Button variant="subtle" color="red" onClick={close}>
                            back
                        </Button>
                        <Button variant="subtle" color="blue" >
                            Submit
                        </Button>
                    </Group>
                </form>
                
            </div>
            </Modal>

        <Button onClick={open}>Open Modal</Button>
        </>
    )

}