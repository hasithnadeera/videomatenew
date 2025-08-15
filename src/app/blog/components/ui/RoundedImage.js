import Image from 'next/image';

export default function RoundedImage(props) {
  return (
    <Image
      {...props}
      className={`rounded-xl ${props.className || ''}`}
    />
  );
}