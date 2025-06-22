"use client"

const Modal = ({ isOpen, onClose, project }) => {
  if (!isOpen || !project) return null

  return (
    <div
      className="modal-overlay"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: "rgba(15, 23, 42, 0.95)",
        backdropFilter: "blur(8px)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 1000,
        padding: "20px",
        animation: "fadeIn 0.3s ease-out",
      }}
      onClick={onClose}
    >
      <div
        className="modal-container"
        style={{
          background: "linear-gradient(135deg, #1e293b 0%, #0f172a 100%)",
          border: "1px solid rgba(59, 130, 246, 0.3)",
          borderRadius: "20px",
          width: "100%",
          maxWidth: "800px",
          maxHeight: "90vh",
          position: "relative",
          overflow: "hidden",
          boxShadow:
            "0 25px 50px -12px rgba(0, 0, 0, 0.8), 0 0 0 1px rgba(59, 130, 246, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.1)",
          animation: "slideUp 0.4s ease-out",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          style={{
            position: "absolute",
            top: "20px",
            right: "20px",
            background: "rgba(30, 41, 59, 0.8)",
            border: "1px solid rgba(59, 130, 246, 0.3)",
            borderRadius: "50%",
            width: "44px",
            height: "44px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
            color: "#e2e8f0",
            fontSize: "24px",
            zIndex: 10,
            transition: "all 0.2s ease",
          }}
          onClick={onClose}
          onMouseEnter={(e) => {
            e.target.style.background = "rgba(59, 130, 246, 0.2)"
            e.target.style.borderColor = "rgba(59, 130, 246, 0.6)"
            e.target.style.color = "#3b82f6"
            e.target.style.transform = "scale(1.05)"
          }}
          onMouseLeave={(e) => {
            e.target.style.background = "rgba(30, 41, 59, 0.8)"
            e.target.style.borderColor = "rgba(59, 130, 246, 0.3)"
            e.target.style.color = "#e2e8f0"
            e.target.style.transform = "scale(1)"
          }}
        >
          ×
        </button>

        {/* Content Container */}
        <div style={{ display: "flex", flexDirection: "column", height: "100%" }}>
          {/* Image Section */}
          <div
            style={{
              position: "relative",
              width: "100%",
              height: "300px",
              overflow: "hidden",
              background: "linear-gradient(45deg, #1e293b, #334155)",
            }}
          >
            <img
              src={project.imageSrc || "/placeholder.svg"}
              alt={project.title}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "contain",
                transition: "transform 0.3s ease",
              }}
              onMouseEnter={(e) => {
                e.target.style.transform = "scale(1.02)"
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = "scale(1)"
              }}
            />
          </div>

          {/* Content Section */}
          <div
            style={{
              padding: "32px",
              flex: 1,
              overflowY: "auto",
            }}
          >
            {/* Title */}
            <h2
              style={{
                fontSize: "2rem",
                fontWeight: "700",
                color: "#f8fafc",
                margin: "0 0 16px 0",
                lineHeight: "1.2",
                background: "linear-gradient(135deg, #f8fafc 0%, #cbd5e1 100%)",
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              {project.title}
            </h2>

            {/* Description */}
            <p
              style={{
                fontSize: "1.1rem",
                color: "#cbd5e1",
                lineHeight: "1.6",
                margin: "0 0 24px 0",
              }}
            >
              {project.description}
            </p>

            {/* Skills/Technologies */}
            {project.skills && project.skills.length > 0 && (
              <div style={{ marginBottom: "24px" }}>
                <h3
                  style={{
                    fontSize: "1.25rem",
                    fontWeight: "600",
                    color: "#3b82f6",
                    margin: "0 0 16px 0",
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                  }}
                >
                  <span
                    style={{
                      width: "4px",
                      height: "20px",
                      background: "linear-gradient(135deg, #3b82f6, #1d4ed8)",
                      borderRadius: "2px",
                    }}
                  ></span>
                  Technologies Used
                </h3>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                  {project.skills.map((skill, i) => (
                    <span
                      key={i}
                      style={{
                        background: "rgba(59, 130, 246, 0.2)",
                        color: "#93c5fd",
                        padding: "6px 12px",
                        borderRadius: "20px",
                        fontSize: "0.875rem",
                        border: "1px solid rgba(59, 130, 246, 0.3)",
                      }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Details */}
            {project.details && project.details.length > 0 && (
              <div>
                <h3
                  style={{
                    fontSize: "1.25rem",
                    fontWeight: "600",
                    color: "#3b82f6",
                    margin: "0 0 16px 0",
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                  }}
                >
                  <span
                    style={{
                      width: "4px",
                      height: "20px",
                      background: "linear-gradient(135deg, #3b82f6, #1d4ed8)",
                      borderRadius: "2px",
                    }}
                  ></span>
                  Key Features
                </h3>
                <div style={{ display: "grid", gap: "12px" }}>
                  {project.details.map((point, i) => (
                    <div
                      key={i}
                      style={{
                        color: "#e2e8f0",
                        padding: "12px 16px",
                        background: "rgba(30, 41, 59, 0.5)",
                        border: "1px solid rgba(59, 130, 246, 0.2)",
                        borderRadius: "8px",
                        position: "relative",
                        paddingLeft: "40px",
                        transition: "all 0.2s ease",
                      }}
                      onMouseEnter={(e) => {
                        e.target.style.background = "rgba(59, 130, 246, 0.1)"
                        e.target.style.borderColor = "rgba(59, 130, 246, 0.4)"
                        e.target.style.transform = "translateX(4px)"
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.background = "rgba(30, 41, 59, 0.5)"
                        e.target.style.borderColor = "rgba(59, 130, 246, 0.2)"
                        e.target.style.transform = "translateX(0)"
                      }}
                    >
                      <span
                        style={{
                          position: "absolute",
                          left: "16px",
                          color: "#3b82f6",
                          fontWeight: "bold",
                        }}
                      >
                        →
                      </span>
                      {point}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Action Buttons */}
            <div style={{ marginTop: "32px", display: "flex", gap: "12px", flexWrap: "wrap" }}>
              {project.source && (
                <a
                  href={project.source}
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    background: "linear-gradient(135deg, #3b82f6, #1d4ed8)",
                    color: "white",
                    padding: "12px 24px",
                    borderRadius: "8px",
                    textDecoration: "none",
                    fontWeight: "600",
                    transition: "all 0.2s ease",
                    border: "none",
                    cursor: "pointer",
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.transform = "translateY(-2px)"
                    e.target.style.boxShadow = "0 8px 25px rgba(59, 130, 246, 0.4)"
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.transform = "translateY(0)"
                    e.target.style.boxShadow = "none"
                  }}
                >
                  GitHub Code
                </a>
              )}
              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    background: "rgba(59, 130, 246, 0.2)",
                    color: "#3b82f6",
                    padding: "12px 24px",
                    borderRadius: "8px",
                    textDecoration: "none",
                    fontWeight: "600",
                    transition: "all 0.2s ease",
                    border: "1px solid rgba(59, 130, 246, 0.3)",
                    cursor: "pointer",
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.background = "rgba(59, 130, 246, 0.3)"
                    e.target.style.transform = "translateY(-2px)"
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.background = "rgba(59, 130, 246, 0.2)"
                    e.target.style.transform = "translateY(0)"
                  }}
                >
                  Live Demo
                </a>
              )}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes slideUp {
          from { 
            opacity: 0; 
            transform: translateY(30px) scale(0.95); 
          }
          to { 
            opacity: 1; 
            transform: translateY(0) scale(1); 
          }
        }

        @media (max-width: 768px) {
          .modal-container {
            margin: 10px !important;
            max-width: calc(100vw - 20px) !important;
            border-radius: 16px !important;
          }
        }
      `}</style>
    </div>
  )
}

export default Modal
