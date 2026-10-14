// Top navigation bar (logo, menu with dropdowns, language switcher)
// Auto-converted from the original saigame.studio markup (Kubio). Keep classNames: the original CSS depends on them.
import { getI18n } from "@/lib/i18n";

export default async function Navigation() {
  const { t, flags } = await getI18n();
  return (
    <div className="wp-block wp-block-kubio-navigation position-relative wp-block-kubio-navigation__outer style-jZZ7ZgkWWk-outer style-local-1-outer h-navigation_overlap" data-kubio="kubio/navigation" data-kubio-component="overlap" data-kubio-settings="true" id="navigation">
      <div className="wp-block wp-block-kubio-navigation-section position-relative wp-block-kubio-navigation-section__nav style-cokser9d3k-nav style-local-2-nav h-section h-navigation" data-kubio="kubio/navigation-section" data-kubio-component="navigation" data-kubio-settings={"{\"sticky\":false,\"overlap\":true}"}>
        <div className="position-relative wp-block-kubio-navigation-section__nav-section style-cokser9d3k-nav-section style-local-2-nav-section h-section-grid-container h-section-fluid-container h-section-boxed-container">
          <div className="wp-block wp-block-kubio-navigation-items position-relative wp-block-kubio-navigation-items__outer style-jAz4q5UdG1-outer style-local-3-outer" data-kubio="kubio/navigation-items" data-nav-normal="true">
            <div className="wp-block wp-block-kubio-row position-relative wp-block-kubio-row__container style-Jh6IniCKIK-container style-local-4-container gutters-row-lg-0 gutters-row-v-lg-0 gutters-row-md-0 gutters-row-v-md-0 gutters-row-2 gutters-row-v-0" data-kubio="kubio/row">
              <div className="background-wrapper">
                <div className="background-layer background-layer-media-container-lg"></div>
                <div className="background-layer background-layer-media-container-md"></div>
                <div className="background-layer background-layer-media-container"></div>
              </div>
              <div className="position-relative wp-block-kubio-row__inner style-Jh6IniCKIK-inner style-local-4-inner h-row align-items-lg-stretch align-items-md-stretch align-items-stretch justify-content-lg-center justify-content-md-center justify-content-center gutters-col-lg-0 gutters-col-v-lg-0 gutters-col-md-0 gutters-col-v-md-0 gutters-col-2 gutters-col-v-0">
                <div className="wp-block wp-block-kubio-column position-relative wp-block-kubio-column__container style-p8q1gQwZk8-container style-local-5-container d-flex h-col-lg-auto h-col-md-auto h-col" data-kubio="kubio/column">
                  <div className="position-relative wp-block-kubio-column__inner style-p8q1gQwZk8-inner style-local-5-inner d-flex h-flex-basis h-px-lg-0 v-inner-lg-0 h-px-md-2 v-inner-md-0 h-px-2 v-inner-2">
                    <div className="background-wrapper">
                      <div className="background-layer background-layer-media-container-lg"></div>
                      <div className="background-layer background-layer-media-container-md"></div>
                      <div className="background-layer background-layer-media-container"></div>
                    </div>
                    <div className="position-relative wp-block-kubio-column__align style-p8q1gQwZk8-align style-local-5-align h-y-container h-column__content h-column__v-align flex-basis-auto align-self-lg-center align-self-md-center align-self-center">
                      <a className="wp-block wp-block-kubio-logo position-relative wp-block-kubio-logo__container style-pCBjS67tbM7-container style-local-6-container kubio-has-gap-fallback kubio-logo-direction-row kubio-logo-without-text autodetect-mode" data-kubio="kubio/logo" href="/">
                        <img decoding="async" className="position-relative wp-block-kubio-logo__image style-pCBjS67tbM7-image style-local-6-image kubio-logo-image" alt="" src="/wp-content/uploads/2025/12/LogoSaiGame_shadown.png" />
                        <img decoding="async" className="position-relative wp-block-kubio-logo__alternateImage style-pCBjS67tbM7-alternateImage style-local-6-alternateImage kubio-logo-image kubio-alternate-logo-image" alt="" src="/wp-content/uploads/2025/12/LogoSaiGame_shadown.png" />
                        <span className="position-relative wp-block-kubio-logo__text style-pCBjS67tbM7-text style-local-6-text"></span>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="wp-block wp-block-kubio-column kubio-hide-on-mobile position-relative wp-block-kubio-column__container style-GQy4e2i_VhU-container style-local-7-container d-flex h-col-lg h-col-md h-col-auto" data-kubio="kubio/column">
                  <div className="position-relative wp-block-kubio-column__inner style-GQy4e2i_VhU-inner style-local-7-inner d-flex h-flex-basis h-px-lg-0 v-inner-lg-0 h-px-md-0 v-inner-md-0 h-px-0 v-inner-0">
                    <div className="background-wrapper">
                      <div className="background-layer background-layer-media-container-lg"></div>
                      <div className="background-layer background-layer-media-container-md"></div>
                      <div className="background-layer background-layer-media-container"></div>
                    </div>
                    <div className="position-relative wp-block-kubio-column__align style-GQy4e2i_VhU-align style-local-7-align h-y-container h-column__content h-column__v-align flex-basis-100 align-self-lg-center align-self-md-center align-self-center">
                      <div className="wp-block wp-block-kubio-spacer position-relative wp-block-kubio-spacer__container style-uTjkb3qLKro-container style-local-8-container" data-kubio="kubio/spacer"></div>
                    </div>
                  </div>
                </div>
                <div className="wp-block wp-block-kubio-column position-relative wp-block-kubio-column__container style-Vb6ApGnmw8l-container style-local-9-container d-flex h-col-lg-auto h-col-md-auto h-col-auto" data-kubio="kubio/column">
                  <div className="position-relative wp-block-kubio-column__inner style-Vb6ApGnmw8l-inner style-local-9-inner d-flex h-flex-basis h-px-lg-0 v-inner-lg-0 h-px-md-0 v-inner-md-0 h-px-2 v-inner-2">
                    <div className="background-wrapper">
                      <div className="background-layer background-layer-media-container-lg"></div>
                      <div className="background-layer background-layer-media-container-md"></div>
                      <div className="background-layer background-layer-media-container"></div>
                    </div>
                    <div className="position-relative wp-block-kubio-column__align style-Vb6ApGnmw8l-align style-local-9-align h-y-container h-column__content h-column__v-align flex-basis-auto align-self-lg-center align-self-md-center align-self-center">
                      <div className="wp-block wp-block-kubio-dropdown-menu position-relative wp-block-kubio-dropdown-menu__outer style-S2itoG6vEiw-outer style-local-10-outer kubio-dropdown-menu h-ignore-global-body-typography has-offcanvas-tablet bordered-active-item bordered-active-item--bottom effect-borders-grow grow-from-left" data-kubio="kubio/dropdown-menu" data-kubio-component="dropdown-menu" data-kubio-settings="[]">
                        <div className="wp-block wp-block-kubio-menu-items position-relative wp-block-kubio-menu-items__outer style-dDUW0WNaaoB-outer style-local-11-outer kubio-menu" data-kubio="kubio/menu-items">
                          <ul id="menu-primary-menu" className="menu kubio-has-gap-fallback">
                            <li id="menu-item-17" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-home menu-item-17">
                              <a href="/" style={{ "--kubio-menu-item-depth": "0" } as React.CSSProperties}>{t("Home")}</a>
                            </li>
                             <li id="menu-item-37" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-37">
                              <a href="/games" style={{ "--kubio-menu-item-depth": "0" } as React.CSSProperties}>
                                <span>Games</span>
                                <svg className="kubio-menu-item-icon" role="img" viewBox="0 0 320 512">
                                   <path d="M143 352.3L7 216.3c-9.4-9.4-9.4-24.6 0-33.9l22.6-22.6c9.4-9.4 24.6-9.4 33.9 0l96.4 96.4 96.4-96.4c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9l-136 136c-9.2 9.4-24.4 9.4-33.8 0z"></path>
                                </svg>
                              </a>
                               <ul className="sub-menu">
                                 <li id="menu-item-649" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-649">
                                  <a href="/games/purgatory" style={{ "--kubio-menu-item-depth": "1" } as React.CSSProperties}>Purgatory</a>
                                </li>
                                 <li id="menu-item-39" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-39">
                                  <a href="/games/the-immortal" style={{ "--kubio-menu-item-depth": "1" } as React.CSSProperties}>{t("The Immortal")}</a>
                                </li>
                                 <li id="menu-item-40" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-40">
                                  <a href="/games/the-watcher" style={{ "--kubio-menu-item-depth": "1" } as React.CSSProperties}>The Watcher</a>
                                </li>
                               </ul>
                             </li>
                             <li id="menu-item-46" className="menu-item menu-item-type-custom menu-item-object-custom current-menu-ancestor current-menu-parent menu-item-has-children menu-item-46">
                              <a href="/courses" style={{ "--kubio-menu-item-depth": "0" } as React.CSSProperties}>
                                <span>{t("Courses")}</span>
                                <svg className="kubio-menu-item-icon" role="img" viewBox="0 0 320 512">
                                   <path d="M143 352.3L7 216.3c-9.4-9.4-9.4-24.6 0-33.9l22.6-22.6c9.4-9.4 24.6-9.4 33.9 0l96.4 96.4 96.4-96.4c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9l-136 136c-9.2 9.4-24.4 9.4-33.8 0z"></path>
                                </svg>
                              </a>
                               <ul className="sub-menu">
                                 <li id="menu-item-505" className="menu-item menu-item-type-post_type menu-item-object-page current-menu-item page_item page-item-478 current_page_item menu-item-505">
                                  <a href="/unity-dev-basic/" aria-current="page" style={{ "--kubio-menu-item-depth": "1" } as React.CSSProperties}>{t("Unity Dev Basic")}</a>
                                </li>
                                 <li id="menu-item-811" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-811">
                                  <a href="/co-ban-sai-server/" style={{ "--kubio-menu-item-depth": "1" } as React.CSSProperties}>{t("Basic Sai Server")}</a>
                                </li>
                               </ul>
                             </li>
                             <li id="menu-item-18" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-18">
                              <a href="/blog" style={{ "--kubio-menu-item-depth": "0" } as React.CSSProperties}>Blog</a>
                            </li>
                             <li id="menu-item-61" className="trp-language-switcher-container menu-item menu-item-type-post_type menu-item-object-language_switcher menu-item-has-children current-language-menu-item menu-item-61">
                              <a href="#" data-lang={flags.current.code} style={{ "--kubio-menu-item-depth": "0" } as React.CSSProperties}>
                                <span>
                                  <span data-no-translation="">
                                    <img decoding="async" className="trp-flag-image" src={flags.current.src} width="18" height="12" alt={flags.current.alt} title={flags.current.title} />
                                  </span>
                                </span>
                                <svg className="kubio-menu-item-icon" role="img" viewBox="0 0 320 512">
                                   <path d="M143 352.3L7 216.3c-9.4-9.4-9.4-24.6 0-33.9l22.6-22.6c9.4-9.4 24.6-9.4 33.9 0l96.4 96.4 96.4-96.4c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9l-136 136c-9.2 9.4-24.4 9.4-33.8 0z"></path>
                                </svg>
                              </a>
                               <ul className="sub-menu">
                                 <li id="menu-item-59" className="trp-language-switcher-container menu-item menu-item-type-post_type menu-item-object-language_switcher menu-item-59">
                                  <a href="#" data-lang={flags.other.code} style={{ "--kubio-menu-item-depth": "1" } as React.CSSProperties}>
                                    <span data-no-translation="">
                                      <img decoding="async" className="trp-flag-image" src={flags.other.src} width="18" height="12" alt={flags.other.alt} title={flags.other.title} />
                                    </span>
                                  </a>
                                </li>
                               </ul>
                             </li>
                           </ul>
                        </div>
                      </div>
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
