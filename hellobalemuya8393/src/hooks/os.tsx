import { useOs } from '@mantine/hooks';

export default function OS() {
  const os = useOs();
  return <>Your os is <b>{os}</b></>;
}