import Image from 'next/image';

export default function RoundedImage(props) {
  return (
    <Image
      alt={props.alt || ''}
      {...props}
      className={`rounded-xl ${props.className || ''}`}
    />
  );
}