import properties from '../../data/properties.json';

export default function PropertiesPage() {
  return (
    <div>
      <h1>All Red Apple Properties</h1>

      <div 
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
          gap: "20px",
          marginTop: "20px"
        }}
      >
        {properties.map((p) => (
          <a 
            key={p.slug}
            href={`/properties/${p.slug}`}
            style={{
              border: "1px solid #ccc",
              borderRadius: "8px",
              padding: "15px",
              textDecoration: "none",
              color: "black",
              background: "#fafafa"
            }}
          >
            <img 
              src={p.image} 
              alt={p.name} 
              style={{ width: "100%", borderRadius: "8px" }} 
            />
            <h3>{p.name}</h3>
            <p style={{ fontSize: "14px", color: "#555" }}>{p.address}</p>
          </a>
        ))}
      </div>
    </div>
  );
}
