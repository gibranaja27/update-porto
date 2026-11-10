
type AmbientVisualProps = {
  className?: string;
};

export default function AmbientVisual({
  className = "",
}: AmbientVisualProps) {
  return (
    <div
      aria-hidden="true"
      className={`ambient-visual ${className}`}
    >
      {/* 3D SPHERE */}
      <span className="ambient-sphere" />

      {/* ROTATING RING */}
      <span className="ambient-ring">
        <span />
      </span>

      {/* LIQUID SHAPE */}
      <span className="ambient-liquid" />

      {/* FLOATING PARTICLES */}
      <span className="ambient-particle particle-one" />
      <span className="ambient-particle particle-two" />
      <span className="ambient-particle particle-three" />
      <span className="ambient-particle particle-four" />
      <span className="ambient-particle particle-five" />
    </div>
  );
}
