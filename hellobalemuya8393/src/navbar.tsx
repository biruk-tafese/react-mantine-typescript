import { Button, Paper, Text, TextInput } from '@mantine/core';


export default function Navbar() {
  return (
    <>
    <div> 
     
    <div>
    <Text fz="md" lh="md" style={{paddingTop:"30px"}}>
      Paras is an orange, insectoid Pokémon that resembles the nymph stage of a cicada. Its ovoid
      body is segmented, and it has three pairs of legs. The foremost pair of legs is the largest
      and has sharp claws at the tips. There are five specks on its forehead and three teeth on
      either side of its mouth. It has circular eyes with large pseudopupils.
    </Text>ss
    </div>


     <div>
     <form>
        <TextInput label="Search" placeholder="Search for a Pokémon" style={{marginTop:"20px"}} />
        <TextInput label="Search" placeholder="Search for a Pokémon" style={{marginTop:"20px"}} />
        <TextInput label="First Name" mt="md" placeholder="John" />
     </form>
     </div>

     <Paper p="xl">
     Paras is an orange, insectoid Pokémon that resembles the nymph stage of a cicada. Its ovoid
      body is segmented, and it has three pairs of legs. The foremost pair of legs is the largest
      and has sharp claws at the tips. There are five specks on its forehead and three teeth on
      either side of its mouth. It has circular eyes with large pseudopupils.
     </Paper>
     <Button style={{ flex: 1}}> Small Button</Button>


    </div>
    
   
    </>
  );
}