export default function Banner({ current }) {
  if (current) {
    return (
      <img
        className="app-background"
        src={current.i.imageUrl}
        alt={current.l}
      />
    );
  }

  return null;
}
