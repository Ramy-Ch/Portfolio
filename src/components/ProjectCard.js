import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl, links }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} alt={title} />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
          {links && links.length > 0 && (
            <div style={{ marginTop: "10px", display: "flex", flexDirection: "column", gap: "5px" }}>
              {links.map((link, index) => (
                <a key={index} href={link.url} target="_blank" rel="noreferrer">
                  {link.label}
                </a>
              ))}
            </div>
          )}
        </div>
      </div>
    </Col>
  )
}
