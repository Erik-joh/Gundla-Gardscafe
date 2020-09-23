import urlFor from "../../imageBuilder";

export default function RespPicture({ image, alt, width }) {
  return (
    <picture>
      <source
        media="(min-width: 1200px)"
        srcSet={urlFor(image)
          .width(Math.round(1440 * width))
          .url()}
      />
      <source
        media="(min-width: 900px)"
        srcSet={urlFor(image)
          .width(Math.round(1200 * width))
          .url()}
      />
      <source
        media="(min-width: 500px)"
        srcSet={urlFor(image).width(900).url()}
      />
      <img src={urlFor(image).width(500).url()} alt={alt} />
    </picture>
  );
}
