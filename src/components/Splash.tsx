export default function Splash({ show }: { show: boolean }) {
  if (!show) return null;

  return (
    <div className="splash" role="status" aria-live="polite" aria-label="Loading">
      <img className="splash-logo" src="/logo.png" alt="Pink" />
    </div>
  );
}