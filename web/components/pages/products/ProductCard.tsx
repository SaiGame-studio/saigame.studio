// Product section, same layout as a game card on /games (image left, label + title + text + button right).
// Built from the Kubio markup of components/pages/games/PurgatoryCard.tsx. Keep classNames: the original CSS depends on them.
export type Product = {
  id: string;
  /** small heading above the title, like the platform label on a game card */
  label: string;
  title: string;
  text: string;
  href: string;
  buttonText: string;
  image: { src: string; width: number; height: number };
};

export default function ProductCard({ product }: { product: Product }) {
  const { id, label, title, text, href, buttonText, image } = product;
  return (
    <div className="wp-block wp-block-kubio-section position-relative wp-block-kubio-section__outer style-h2j98a19m-outer style-local-26-outer d-flex h-section-global-spacing align-items-lg-center align-items-md-center align-items-center" data-kubio="kubio/section" id={id}>
      <div className="background-wrapper">
        <div className="background-layer background-layer-media-container-lg"></div>
        <div className="background-layer background-layer-media-container-md"></div>
        <div className="background-layer background-layer-media-container"></div>
      </div>
      <div className="position-relative wp-block-kubio-section__inner style-h2j98a19m-inner style-local-26-inner h-section-grid-container h-section-fluid-container">
        <div className="wp-block wp-block-kubio-row position-relative wp-block-kubio-row__container style-bubjyQYhE-container style-local-27-container gutters-row-lg-0 gutters-row-v-lg-0 gutters-row-md-0 gutters-row-v-md-0 gutters-row-2 gutters-row-v-2" data-kubio="kubio/row">
          <div className="background-wrapper">
            <div className="background-layer background-layer-media-container-lg"></div>
            <div className="background-layer background-layer-media-container-md"></div>
            <div className="background-layer background-layer-media-container"></div>
          </div>
          <div className="position-relative wp-block-kubio-row__inner style-bubjyQYhE-inner style-local-27-inner h-row align-items-lg-stretch align-items-md-stretch align-items-stretch justify-content-lg-center justify-content-md-center justify-content-center gutters-col-lg-0 gutters-col-v-lg-0 gutters-col-md-0 gutters-col-v-md-0 gutters-col-2 gutters-col-v-2">
            <div className="wp-block wp-block-kubio-column position-relative wp-block-kubio-column__container style--_0u1yW6G-container style-local-28-container d-flex h-col-lg-auto h-col-md-auto h-col-auto" data-kubio="kubio/column">
              <div className="position-relative wp-block-kubio-column__inner style--_0u1yW6G-inner style-local-28-inner d-flex h-flex-basis h-px-lg-2 v-inner-lg-2 h-px-md-2 v-inner-md-2 h-px-2 v-inner-2">
                <div className="background-wrapper">
                  <div className="background-layer background-layer-media-container-lg"></div>
                  <div className="background-layer background-layer-media-container-md"></div>
                  <div className="background-layer background-layer-media-container"></div>
                </div>
                <div className="position-relative wp-block-kubio-column__align style--_0u1yW6G-align style-local-28-align h-y-container h-column__content h-column__v-align flex-basis-auto align-self-lg-center align-self-md-center align-self-center">
                  <figure className="wp-block wp-block-kubio-image position-relative wp-block-kubio-image__outer style--sexgLxaa-outer style-local-29-outer size-full align-items-center" data-kubio="kubio/image">
                    <div className="position-relative wp-block-kubio-image__captionContainer style--sexgLxaa-captionContainer style-local-29-captionContainer">
                      <a href={href} className="position-relative wp-block-kubio-image__ style--sexgLxaa- style-local-29-">
                        <div className="position-relative wp-block-kubio-image__frameContainer style--sexgLxaa-frameContainer style-local-29-frameContainer">
                          <img decoding="async" width={image.width} height={image.height} className="position-relative wp-block-kubio-image__image style--sexgLxaa-image style-local-29-image d-flex" alt={title} src={image.src} />
                        </div>
                      </a>
                    </div>
                  </figure>
                </div>
              </div>
            </div>
            <div className="wp-block wp-block-kubio-column position-relative wp-block-kubio-column__container style-8OJNIWvuy0-container style-local-30-container d-flex h-col-lg-auto h-col-md-auto h-col-auto" data-kubio="kubio/column">
              <div className="position-relative wp-block-kubio-column__inner style-8OJNIWvuy0-inner style-local-30-inner d-flex h-flex-basis h-px-lg-0 v-inner-lg-0 h-px-md-0 v-inner-md-0 h-px-0 v-inner-0">
                <div className="background-wrapper">
                  <div className="background-layer background-layer-media-container-lg"></div>
                  <div className="background-layer background-layer-media-container-md"></div>
                  <div className="background-layer background-layer-media-container"></div>
                </div>
                <div className="position-relative wp-block-kubio-column__align style-8OJNIWvuy0-align style-local-30-align h-y-container h-column__content h-column__v-align flex-basis-100 align-self-lg-start align-self-md-start align-self-start">
                  <h5 className="wp-block wp-block-kubio-heading position-relative wp-block-kubio-heading__text style-XYBNXM7-Li-text style-local-31-text" data-kubio="kubio/heading">{label}</h5>
                  <a href={href} className="d-block h-link position-relative wp-block-kubio-heading__ style-lHXvIGIoA- style-local-32-">
                    <h2 className="wp-block wp-block-kubio-heading position-relative wp-block-kubio-heading__text style-lHXvIGIoA-text style-local-32-text" data-kubio="kubio/heading">{title}</h2>
                  </a>
                  <p className="wp-block wp-block-kubio-text position-relative wp-block-kubio-text__text style-Ro0W6aSQQPa-text style-local-33-text" data-kubio="kubio/text">{text}</p>
                  <div className="wp-block wp-block-kubio-buttongroup position-relative wp-block-kubio-buttongroup__outer style-PKVNMyC2iS-outer style-local-43-outer h-x-container" data-kubio="kubio/buttongroup">
                    <div className="position-relative wp-block-kubio-buttongroup__spacing style-PKVNMyC2iS-spacing style-local-43-spacing h-x-container-inner">
                      <span className="wp-block wp-block-kubio-button position-relative wp-block-kubio-button__outer style-rccjQ4rJ4m-outer style-local-44-outer kubio-button-container" data-kubio="kubio/button">
                        <a className="position-relative wp-block-kubio-button__link style-rccjQ4rJ4m-link style-local-44-link h-w-100 h-global-transition" href={href}>
                          <span className="position-relative wp-block-kubio-button__text style-rccjQ4rJ4m-text style-local-44-text kubio-inherit-typography">{buttonText}</span>
                        </a>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
