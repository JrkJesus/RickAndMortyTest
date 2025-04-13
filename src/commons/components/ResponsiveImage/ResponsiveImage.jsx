import { Image } from "@mantine/core";

const ResponsiveImage = ({ src, alt }) => (
  <div
    style={
      {
        // maxWidth: "100%",
        // height: "100%",
        // minHeight: 3000, // Altura mínima para evitar colapso
      }
    }
  >
    <Image src={src} alt={alt} />
  </div>
);

export default ResponsiveImage;
