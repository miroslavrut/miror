export default function YouTube({ id }: { id: string }) {
  return (
    <div className={''}>
      <iframe
        src={`https://www.youtube.com/embed/${id}`}
        allow="autoplay; encrypted-media"
        title="Embedded YouTube video"
        className={''}
      />
    </div>
  );
}
