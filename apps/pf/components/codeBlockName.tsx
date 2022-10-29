export default function CodeBlockName({ name }: { name: string }) {
  return (
    <p className="m-0 inline-block border-t-2 border-l-2 border-r-2 border-gray-900 bg-gray-900 px-2">
      {name}
    </p>
  );
}
