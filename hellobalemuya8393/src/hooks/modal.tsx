import { Button, Text } from '@mantine/core';
import { modals } from '@mantine/modals';

export default function ModalDemo() {
  console.log('ModalDemo rendered'); // Debugging log
  const openModal = () => modals.openConfirmModal({
    title: 'Please confirm your action',
    children: (
      <Text size="md" style={{ paddingTop: 10, paddingBottom: 10, paddingLeft: 10 }}>
        Are you sure you want to perform this action? This action is so important that you are
        required to confirm it with a modal. Please click one of these buttons to proceed.
      </Text>
    ),
    labels: { confirm: 'Confirm', cancel: 'Cancel' },
    onCancel: () => console.log('Cancel'),
    onConfirm: () => console.log('Confirmed'),
  });

  return <Button onClick={openModal}>Open confirm modal</Button>;
}