// Hero: Privacy Policy
// Auto-converted from the original saigame.studio markup (Kubio). Keep classNames: the original CSS depends on them.
import { getI18n } from "@/lib/i18n";

export default async function Hero() {
  const { t } = await getI18n();
  return (
    <div className="wp-block wp-block-kubio-hero position-relative wp-block-kubio-hero__outer style-KFTMhA6WOVh-outer style-local-22-outer d-flex h-section-global-spacing align-items-lg-center align-items-md-center align-items-center" data-kubio="kubio/hero" id="hero">
      <div className="background-wrapper">
        <div className="background-layer background-layer-media-container-lg"></div>
        <div className="background-layer background-layer-media-container-md"></div>
        <div className="background-layer background-layer-media-container"></div>
      </div>
      <div className="position-relative wp-block-kubio-hero__inner style-KFTMhA6WOVh-inner style-local-22-inner h-navigation-padding h-section-grid-container h-section-boxed-container">
          <div className="wp-block wp-block-kubio-row position-relative wp-block-kubio-row__container style-vv0pRzL5YoZ-container style-local-23-container gutters-row-lg-0 gutters-row-v-lg-0 gutters-row-md-0 gutters-row-v-md-0 gutters-row-0 gutters-row-v-0" data-kubio="kubio/row">
          <div className="background-wrapper">
            <div className="background-layer background-layer-media-container-lg"></div>
            <div className="background-layer background-layer-media-container-md"></div>
            <div className="background-layer background-layer-media-container"></div>
          </div>
          <div className="position-relative wp-block-kubio-row__inner style-vv0pRzL5YoZ-inner style-local-23-inner h-row align-items-lg-stretch align-items-md-stretch align-items-stretch justify-content-lg-center justify-content-md-center justify-content-center gutters-col-lg-0 gutters-col-v-lg-0 gutters-col-md-0 gutters-col-v-md-0 gutters-col-0 gutters-col-v-0">
            <div className="wp-block wp-block-kubio-column position-relative wp-block-kubio-column__container style-vPVKm6K-swr-container style-local-24-container d-flex h-col-lg-auto h-col-md-auto h-col-auto" data-kubio="kubio/column">
              <div className="position-relative wp-block-kubio-column__inner style-vPVKm6K-swr-inner style-local-24-inner d-flex h-flex-basis h-px-lg-2 v-inner-lg-2 h-px-md-2 v-inner-md-2 h-px-2 v-inner-2">
                <div className="background-wrapper">
                  <div className="background-layer background-layer-media-container-lg"></div>
                  <div className="background-layer background-layer-media-container-md"></div>
                  <div className="background-layer background-layer-media-container"></div>
                </div>
                <div className="position-relative wp-block-kubio-column__align style-vPVKm6K-swr-align style-local-24-align h-y-container h-column__content h-column__v-align flex-basis-100 align-self-lg-center align-self-md-center align-self-center">
                  <h1 className="wp-block wp-block-kubio-page-title position-relative wp-block-kubio-page-title__container style-SzZXH7PdCL-container style-local-25-container" data-kubio="kubio/page-title">{t("Privacy Policy")}</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
