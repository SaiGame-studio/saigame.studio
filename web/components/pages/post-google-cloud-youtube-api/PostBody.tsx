// Body of the post, converted from the original WordPress markup; rendered inside BlogPostLayout.
export default function PostBody() {
  return (
    <>
                                    <h4 className="wp-block-heading">1️⃣ Enable YouTube Data API v3</h4>
                                    <p className="wp-block-paragraph">
      1. Go to                                 <strong>Google Cloud Console</strong>
       →                                 <a href="https://console.cloud.google.com">https://console.cloud.google.com</a>
      .                              </p>
                                    <p className="wp-block-paragraph">
      2. Select an existing                                 <strong>project</strong>
       or create a new one.                              </p>
                                    <ol className="wp-block-list">
                                      <li></li>
                                    </ol>
                                    <figure className="wp-block-image size-large">
                                      <img fetchPriority="high" decoding="async" width="1024" height="357" src="/wp-content/uploads/2025/11/Screenshot_1-2-1024x357.jpg" alt="" className="wp-image-651" srcSet="/wp-content/uploads/2025/11/Screenshot_1-2-1024x357.jpg 1024w, /wp-content/uploads/2025/11/Screenshot_1-2-300x105.jpg 300w, /wp-content/uploads/2025/11/Screenshot_1-2-768x268.jpg 768w, /wp-content/uploads/2025/11/Screenshot_1-2-18x6.jpg 18w, /wp-content/uploads/2025/11/Screenshot_1-2-600x209.jpg 600w, /wp-content/uploads/2025/11/Screenshot_1-2.jpg 1424w" sizes="(max-width: 1024px) 100vw, 1024px" />
                                    </figure>
                                    <figure className="wp-block-image size-full">
                                      <img loading="lazy" decoding="async" width="680" height="560" src="/wp-content/uploads/2025/11/Screenshot_2-2.jpg" alt="" className="wp-image-653" srcSet="/wp-content/uploads/2025/11/Screenshot_2-2.jpg 680w, /wp-content/uploads/2025/11/Screenshot_2-2-300x247.jpg 300w, /wp-content/uploads/2025/11/Screenshot_2-2-15x12.jpg 15w, /wp-content/uploads/2025/11/Screenshot_2-2-600x494.jpg 600w" sizes="(max-width: 680px) 100vw, 680px" />
                                    </figure>
                                    <p className="wp-block-paragraph">
      3. Navigate to                                 <strong>APIs & Services → Library</strong>
      .                              </p>
                                    <figure className="wp-block-image size-full">
                                      <img loading="lazy" decoding="async" width="585" height="558" src="/wp-content/uploads/2025/11/Screenshot_3-2.jpg" alt="" className="wp-image-655" srcSet="/wp-content/uploads/2025/11/Screenshot_3-2.jpg 585w, /wp-content/uploads/2025/11/Screenshot_3-2-300x286.jpg 300w, /wp-content/uploads/2025/11/Screenshot_3-2-13x12.jpg 13w" sizes="(max-width: 585px) 100vw, 585px" />
                                    </figure>
                                    <p className="wp-block-paragraph">
      4. Search for                                 <strong>“YouTube Data API v3”</strong>
      .                              </p>
                                    <figure className="wp-block-image size-large">
                                      <img loading="lazy" decoding="async" width="1024" height="504" src="/wp-content/uploads/2025/11/Screenshot_4-1024x504.jpg" alt="" className="wp-image-656" srcSet="/wp-content/uploads/2025/11/Screenshot_4-1024x504.jpg 1024w, /wp-content/uploads/2025/11/Screenshot_4-300x148.jpg 300w, /wp-content/uploads/2025/11/Screenshot_4-768x378.jpg 768w, /wp-content/uploads/2025/11/Screenshot_4-18x9.jpg 18w, /wp-content/uploads/2025/11/Screenshot_4-600x295.jpg 600w, /wp-content/uploads/2025/11/Screenshot_4.jpg 1328w" sizes="(max-width: 1024px) 100vw, 1024px" />
                                    </figure>
                                    <p className="wp-block-paragraph">
      5. Click                                 <strong>Enable</strong>
      .                              </p>
                                    <figure className="wp-block-image size-full">
                                      <img loading="lazy" decoding="async" width="504" height="356" src="/wp-content/uploads/2025/11/Screenshot_5-1.jpg" alt="" className="wp-image-657" srcSet="/wp-content/uploads/2025/11/Screenshot_5-1.jpg 504w, /wp-content/uploads/2025/11/Screenshot_5-1-300x212.jpg 300w, /wp-content/uploads/2025/11/Screenshot_5-1-18x12.jpg 18w" sizes="(max-width: 504px) 100vw, 504px" />
                                    </figure>
                                    <ol className="wp-block-list">
                                      <li></li>
                                    </ol>
                                    <h4 className="wp-block-heading">2️⃣Create OAuth 2.0 Credentials</h4>
                                    <p className="wp-block-paragraph">
      1. Go to                                 <strong>APIs & Services → Credentials</strong>
      .                              </p>
                                    <figure className="wp-block-image size-large">
                                      <img loading="lazy" decoding="async" width="1024" height="490" src="/wp-content/uploads/2025/11/Screenshot_6-2-1024x490.jpg" alt="" className="wp-image-659" srcSet="/wp-content/uploads/2025/11/Screenshot_6-2-1024x490.jpg 1024w, /wp-content/uploads/2025/11/Screenshot_6-2-300x143.jpg 300w, /wp-content/uploads/2025/11/Screenshot_6-2-768x367.jpg 768w, /wp-content/uploads/2025/11/Screenshot_6-2-18x9.jpg 18w, /wp-content/uploads/2025/11/Screenshot_6-2-600x287.jpg 600w, /wp-content/uploads/2025/11/Screenshot_6-2.jpg 1330w" sizes="(max-width: 1024px) 100vw, 1024px" />
                                    </figure>
                                    <p className="wp-block-paragraph"></p>
                                    <p className="wp-block-paragraph">
                                      <strong>2. If the OAuth consent screen has not been configured yet:</strong>
                                    </p>
                                    <ul className="wp-block-list">
                                      <li>
      Open                                   <strong>OAuth consent screen</strong>
      .                                </li>
                                    </ul>
                                    <figure className="wp-block-image size-large">
                                      <img loading="lazy" decoding="async" width="1024" height="216" src="/wp-content/uploads/2025/11/Screenshot_8-1024x216.jpg" alt="" className="wp-image-662" srcSet="/wp-content/uploads/2025/11/Screenshot_8-1024x216.jpg 1024w, /wp-content/uploads/2025/11/Screenshot_8-300x63.jpg 300w, /wp-content/uploads/2025/11/Screenshot_8-768x162.jpg 768w, /wp-content/uploads/2025/11/Screenshot_8-1536x323.jpg 1536w, /wp-content/uploads/2025/11/Screenshot_8-18x4.jpg 18w, /wp-content/uploads/2025/11/Screenshot_8-600x126.jpg 600w, /wp-content/uploads/2025/11/Screenshot_8.jpg 1891w" sizes="(max-width: 1024px) 100vw, 1024px" />
                                    </figure>
                                    <figure className="wp-block-image size-large">
                                      <img loading="lazy" decoding="async" width="1024" height="468" src="/wp-content/uploads/2025/11/Screenshot_9-1024x468.jpg" alt="" className="wp-image-663" srcSet="/wp-content/uploads/2025/11/Screenshot_9-1024x468.jpg 1024w, /wp-content/uploads/2025/11/Screenshot_9-300x137.jpg 300w, /wp-content/uploads/2025/11/Screenshot_9-768x351.jpg 768w, /wp-content/uploads/2025/11/Screenshot_9-18x8.jpg 18w, /wp-content/uploads/2025/11/Screenshot_9-600x274.jpg 600w, /wp-content/uploads/2025/11/Screenshot_9.jpg 1445w" sizes="(max-width: 1024px) 100vw, 1024px" />
                                    </figure>
                                    <p className="wp-block-paragraph">Fill in the application information (App Name, Support Email, etc.).</p>
                                    <figure className="wp-block-image size-full">
                                      <img loading="lazy" decoding="async" width="893" height="721" src="/wp-content/uploads/2025/11/Screenshot_10.jpg" alt="" className="wp-image-664" srcSet="/wp-content/uploads/2025/11/Screenshot_10.jpg 893w, /wp-content/uploads/2025/11/Screenshot_10-300x242.jpg 300w, /wp-content/uploads/2025/11/Screenshot_10-768x620.jpg 768w, /wp-content/uploads/2025/11/Screenshot_10-15x12.jpg 15w, /wp-content/uploads/2025/11/Screenshot_10-600x484.jpg 600w" sizes="(max-width: 893px) 100vw, 893px" />
                                    </figure>
                                    <ul className="wp-block-list">
                                      <li>
      Select                                   <strong>External</strong>
       (if your app is used outside your organization).                                </li>
                                    </ul>
                                    <figure className="wp-block-image size-full is-resized">
                                      <img loading="lazy" decoding="async" width="837" height="864" src="/wp-content/uploads/2025/11/Screenshot_11.jpg" alt="" className="wp-image-666" style={{ "width": "840px", "height": "auto" } as React.CSSProperties} srcSet="/wp-content/uploads/2025/11/Screenshot_11.jpg 837w, /wp-content/uploads/2025/11/Screenshot_11-291x300.jpg 291w, /wp-content/uploads/2025/11/Screenshot_11-768x793.jpg 768w, /wp-content/uploads/2025/11/Screenshot_11-12x12.jpg 12w, /wp-content/uploads/2025/11/Screenshot_11-600x619.jpg 600w" sizes="(max-width: 837px) 100vw, 837px" />
                                    </figure>
                                    <p className="wp-block-paragraph">Enter your own email.</p>
                                    <figure className="wp-block-image size-full">
                                      <img loading="lazy" decoding="async" width="817" height="608" src="/wp-content/uploads/2025/11/Screenshot_13.jpg" alt="" className="wp-image-670" srcSet="/wp-content/uploads/2025/11/Screenshot_13.jpg 817w, /wp-content/uploads/2025/11/Screenshot_13-300x223.jpg 300w, /wp-content/uploads/2025/11/Screenshot_13-768x572.jpg 768w, /wp-content/uploads/2025/11/Screenshot_13-16x12.jpg 16w, /wp-content/uploads/2025/11/Screenshot_13-600x447.jpg 600w" sizes="(max-width: 817px) 100vw, 817px" />
                                    </figure>
                                    <figure className="wp-block-image size-full">
                                      <img loading="lazy" decoding="async" width="766" height="583" src="/wp-content/uploads/2025/11/Screenshot_14.jpg" alt="" className="wp-image-671" srcSet="/wp-content/uploads/2025/11/Screenshot_14.jpg 766w, /wp-content/uploads/2025/11/Screenshot_14-300x228.jpg 300w, /wp-content/uploads/2025/11/Screenshot_14-16x12.jpg 16w, /wp-content/uploads/2025/11/Screenshot_14-600x457.jpg 600w" sizes="(max-width: 766px) 100vw, 766px" />
                                    </figure>
                                    <ul className="wp-block-list">
                                      <li>
      Click                                   <strong>Create</strong>
       button to finish.                                </li>
                                    </ul>
                                    <p className="wp-block-paragraph"></p>
                                    <p className="wp-block-paragraph">
                                      <strong>3. Create Client ID</strong>
                                    </p>
                                    <p className="wp-block-paragraph">
      Go back to                                 <a href="https://console.cloud.google.com/apis/credentials?project=ss05-myclient">Youtube API Credentials</a>
      ,                               </p>
                                    <p className="wp-block-paragraph">
      If your project name not is                                 <strong>
                                        <em>ss05-myclient</em>
                                      </strong>
      , then enter your onw project name.                              </p>
                                    <p className="has-text-align-center wp-block-paragraph">
                                      <a href="https://console.cloud.google.com/apis/credentials?project=ss05-myclient">https://console.cloud.google.com/apis/credentials?project=ss05-myclient</a>
                                    </p>
                                    <p className="wp-block-paragraph">
      Click                                 <strong>Create Credentials → OAuth Client ID</strong>
      .                              </p>
                                    <figure className="wp-block-image size-large">
                                      <img loading="lazy" decoding="async" width="1024" height="486" src="/wp-content/uploads/2025/11/Screenshot_7-1024x486.jpg" alt="" className="wp-image-661" srcSet="/wp-content/uploads/2025/11/Screenshot_7-1024x486.jpg 1024w, /wp-content/uploads/2025/11/Screenshot_7-300x142.jpg 300w, /wp-content/uploads/2025/11/Screenshot_7-768x365.jpg 768w, /wp-content/uploads/2025/11/Screenshot_7-18x9.jpg 18w, /wp-content/uploads/2025/11/Screenshot_7-600x285.jpg 600w, /wp-content/uploads/2025/11/Screenshot_7.jpg 1055w" sizes="(max-width: 1024px) 100vw, 1024px" />
                                    </figure>
                                    <p className="wp-block-paragraph">
      Enter a recognizable name (e.g.,                                 <em>My Desktop App Client</em>
      ).                              </p>
                                    <figure className="wp-block-image size-full">
                                      <img loading="lazy" decoding="async" width="817" height="480" src="/wp-content/uploads/2025/11/Screenshot_15.jpg" alt="" className="wp-image-676" srcSet="/wp-content/uploads/2025/11/Screenshot_15.jpg 817w, /wp-content/uploads/2025/11/Screenshot_15-300x176.jpg 300w, /wp-content/uploads/2025/11/Screenshot_15-768x451.jpg 768w, /wp-content/uploads/2025/11/Screenshot_15-18x12.jpg 18w, /wp-content/uploads/2025/11/Screenshot_15-600x353.jpg 600w" sizes="(max-width: 817px) 100vw, 817px" />
                                    </figure>
                                    <p className="wp-block-paragraph">
      Click                                 <strong>Create</strong>
      .                              </p>
                                    <figure className="wp-block-image size-large">
                                      <img loading="lazy" decoding="async" width="1024" height="659" src="/wp-content/uploads/2025/11/Screenshot_16-1024x659.jpg" alt="" className="wp-image-677" srcSet="/wp-content/uploads/2025/11/Screenshot_16-1024x659.jpg 1024w, /wp-content/uploads/2025/11/Screenshot_16-300x193.jpg 300w, /wp-content/uploads/2025/11/Screenshot_16-768x494.jpg 768w, /wp-content/uploads/2025/11/Screenshot_16-18x12.jpg 18w, /wp-content/uploads/2025/11/Screenshot_16-600x386.jpg 600w, /wp-content/uploads/2025/11/Screenshot_16.jpg 1227w" sizes="(max-width: 1024px) 100vw, 1024px" />
                                    </figure>
                                    <p className="wp-block-paragraph">Save the Client ID and Client Secret somewhere safe.</p>
                                    <p className="wp-block-paragraph">Download the credentials → you will receive a JSON file like:</p>
                                    <pre className="wp-block-code">
                                      <code>
                                        <code>client_secret_XXXXX.json</code>
                                         <strong>4. Add your email to Client</strong>
                                       </code>
                                    </pre>
                                    <figure className="wp-block-image size-large">
                                      <img loading="lazy" decoding="async" width="1024" height="811" src="/wp-content/uploads/2025/11/Screenshot_20-1024x811.jpg" alt="" className="wp-image-688" srcSet="/wp-content/uploads/2025/11/Screenshot_20-1024x811.jpg 1024w, /wp-content/uploads/2025/11/Screenshot_20-300x238.jpg 300w, /wp-content/uploads/2025/11/Screenshot_20-768x608.jpg 768w, /wp-content/uploads/2025/11/Screenshot_20-15x12.jpg 15w, /wp-content/uploads/2025/11/Screenshot_20-600x475.jpg 600w, /wp-content/uploads/2025/11/Screenshot_20.jpg 1032w" sizes="(max-width: 1024px) 100vw, 1024px" />
                                    </figure>
                                    <figure className="wp-block-image size-large">
                                      <img loading="lazy" decoding="async" width="1024" height="232" src="/wp-content/uploads/2025/11/Screenshot_21-1024x232.jpg" alt="" className="wp-image-689" srcSet="/wp-content/uploads/2025/11/Screenshot_21-1024x232.jpg 1024w, /wp-content/uploads/2025/11/Screenshot_21-300x68.jpg 300w, /wp-content/uploads/2025/11/Screenshot_21-768x174.jpg 768w, /wp-content/uploads/2025/11/Screenshot_21-1536x348.jpg 1536w, /wp-content/uploads/2025/11/Screenshot_21-18x4.jpg 18w, /wp-content/uploads/2025/11/Screenshot_21-600x136.jpg 600w, /wp-content/uploads/2025/11/Screenshot_21.jpg 1885w" sizes="(max-width: 1024px) 100vw, 1024px" />
                                    </figure>
                                    <h4 className="wp-block-heading">3️⃣ Copy the Client Secret File to Your Application Folder</h4>
                                    <ol className="wp-block-list">
                                      <li>
      Locate your downloaded                                   <code>client_secret_XXXXX.json</code>
       file.                                </li>
                                       <li>
      Copy it into the                                   <strong>root directory of your application</strong>
      , next to your main startup file                                  <br />
      (e.g.,                                   <code>main.js</code>
      ,                                   <code>app.exe</code>
      ,                                   <code>App.cs</code>
      , etc.).                                </li>
                                    </ol>
                                    <figure className="wp-block-image size-large">
                                      <img loading="lazy" decoding="async" width="1024" height="793" src="/wp-content/uploads/2025/11/Screenshot_17-1024x793.jpg" alt="" className="wp-image-681" srcSet="/wp-content/uploads/2025/11/Screenshot_17-1024x793.jpg 1024w, /wp-content/uploads/2025/11/Screenshot_17-300x232.jpg 300w, /wp-content/uploads/2025/11/Screenshot_17-768x595.jpg 768w, /wp-content/uploads/2025/11/Screenshot_17-15x12.jpg 15w, /wp-content/uploads/2025/11/Screenshot_17-600x465.jpg 600w, /wp-content/uploads/2025/11/Screenshot_17.jpg 1152w" sizes="(max-width: 1024px) 100vw, 1024px" />
                                    </figure>
                                    <p className="wp-block-paragraph">
      <img draggable="false" role="img" className="emoji" alt="\u26a0\ufe0f" src="/wp-emoji/26a0.svg" />                                 <strong>Do not share this file with anyone.</strong>
                                    </p>
                                    <h4 className="wp-block-heading">4️⃣ Restart Your Application</h4>
                                    <p className="wp-block-paragraph">Run your app again. The application should automatically detect the client secret file.</p>
                                    <p className="wp-block-paragraph">
      Click                                 <strong>Connect Youtube</strong>
       button                              </p>
                                    <ol className="wp-block-list">
                                      <li></li>
                                    </ol>
                                    <figure className="wp-block-image size-large">
                                      <img loading="lazy" decoding="async" width="1024" height="530" src="/wp-content/uploads/2025/11/Screenshot_18-1024x530.jpg" alt="" className="wp-image-684" srcSet="/wp-content/uploads/2025/11/Screenshot_18-1024x530.jpg 1024w, /wp-content/uploads/2025/11/Screenshot_18-300x155.jpg 300w, /wp-content/uploads/2025/11/Screenshot_18-768x397.jpg 768w, /wp-content/uploads/2025/11/Screenshot_18-18x9.jpg 18w, /wp-content/uploads/2025/11/Screenshot_18-600x310.jpg 600w, /wp-content/uploads/2025/11/Screenshot_18.jpg 1392w" sizes="(max-width: 1024px) 100vw, 1024px" />
                                    </figure>
                                    <p className="wp-block-paragraph">Choose your Gmail</p>
                                    <figure className="wp-block-image size-large">
                                      <img loading="lazy" decoding="async" width="1024" height="439" src="/wp-content/uploads/2025/11/Screenshot_19-1024x439.jpg" alt="" className="wp-image-686" srcSet="/wp-content/uploads/2025/11/Screenshot_19-1024x439.jpg 1024w, /wp-content/uploads/2025/11/Screenshot_19-300x129.jpg 300w, /wp-content/uploads/2025/11/Screenshot_19-768x329.jpg 768w, /wp-content/uploads/2025/11/Screenshot_19-18x8.jpg 18w, /wp-content/uploads/2025/11/Screenshot_19-600x257.jpg 600w, /wp-content/uploads/2025/11/Screenshot_19.jpg 1075w" sizes="(max-width: 1024px) 100vw, 1024px" />
                                    </figure>
                                    <p className="wp-block-paragraph">
      Once authenticated, your app will receive an                                 <strong>access token</strong>
       (and possibly a refresh token if configured).                              </p>
                                    <figure className="wp-block-image size-large">
                                      <img loading="lazy" decoding="async" width="1024" height="446" src="/wp-content/uploads/2025/11/Screenshot_22-1024x446.jpg" alt="" className="wp-image-691" srcSet="/wp-content/uploads/2025/11/Screenshot_22-1024x446.jpg 1024w, /wp-content/uploads/2025/11/Screenshot_22-300x131.jpg 300w, /wp-content/uploads/2025/11/Screenshot_22-768x335.jpg 768w, /wp-content/uploads/2025/11/Screenshot_22-18x8.jpg 18w, /wp-content/uploads/2025/11/Screenshot_22-600x262.jpg 600w, /wp-content/uploads/2025/11/Screenshot_22.jpg 1101w" sizes="(max-width: 1024px) 100vw, 1024px" />
                                    </figure>
                                    <figure className="wp-block-image size-large">
                                      <img loading="lazy" decoding="async" width="1024" height="628" src="/wp-content/uploads/2025/11/Screenshot_23-1024x628.jpg" alt="" className="wp-image-692" srcSet="/wp-content/uploads/2025/11/Screenshot_23-1024x628.jpg 1024w, /wp-content/uploads/2025/11/Screenshot_23-300x184.jpg 300w, /wp-content/uploads/2025/11/Screenshot_23-768x471.jpg 768w, /wp-content/uploads/2025/11/Screenshot_23-18x12.jpg 18w, /wp-content/uploads/2025/11/Screenshot_23-600x368.jpg 600w, /wp-content/uploads/2025/11/Screenshot_23.jpg 1109w" sizes="(max-width: 1024px) 100vw, 1024px" />
                                    </figure>
                                    <ol className="wp-block-list">
                                      <li></li>
                                    </ol>
                                    <h4 className="wp-block-heading">5️⃣ Verify Successful Authentication</h4>
                                    <div className="wp-block-image">
                                      <figure className="aligncenter size-full">
                                        <img loading="lazy" decoding="async" width="544" height="701" src="/wp-content/uploads/2025/11/Screenshot_24.jpg" alt="" className="wp-image-693" srcSet="/wp-content/uploads/2025/11/Screenshot_24.jpg 544w, /wp-content/uploads/2025/11/Screenshot_24-233x300.jpg 233w, /wp-content/uploads/2025/11/Screenshot_24-9x12.jpg 9w" sizes="(max-width: 544px) 100vw, 544px" />
                                      </figure>
                                    </div>
                                    <figure className="wp-block-image size-large">
                                      <img loading="lazy" decoding="async" width="1024" height="531" src="/wp-content/uploads/2025/11/Screenshot_25-1024x531.jpg" alt="" className="wp-image-694" srcSet="/wp-content/uploads/2025/11/Screenshot_25-1024x531.jpg 1024w, /wp-content/uploads/2025/11/Screenshot_25-300x156.jpg 300w, /wp-content/uploads/2025/11/Screenshot_25-768x398.jpg 768w, /wp-content/uploads/2025/11/Screenshot_25-18x9.jpg 18w, /wp-content/uploads/2025/11/Screenshot_25-600x311.jpg 600w, /wp-content/uploads/2025/11/Screenshot_25.jpg 1404w" sizes="(max-width: 1024px) 100vw, 1024px" />
                                    </figure>
                                    <h4 className="wp-block-heading"><img draggable="false" role="img" className="emoji" alt="\ud83d\udcdd" src="/wp-emoji/1f4dd.svg" /> Additional Recommendations</h4>
                                    <p className="wp-block-paragraph">
      Now you can click                                 <em>Get Live Streams</em>
       to see your past and upcoming live streams.                              </p>
                                    <figure className="wp-block-image size-large">
                                      <img loading="lazy" decoding="async" width="1024" height="526" src="/wp-content/uploads/2025/11/Screenshot_26-1024x526.jpg" alt="" className="wp-image-696" srcSet="/wp-content/uploads/2025/11/Screenshot_26-1024x526.jpg 1024w, /wp-content/uploads/2025/11/Screenshot_26-300x154.jpg 300w, /wp-content/uploads/2025/11/Screenshot_26-768x394.jpg 768w, /wp-content/uploads/2025/11/Screenshot_26-18x9.jpg 18w, /wp-content/uploads/2025/11/Screenshot_26-600x308.jpg 600w, /wp-content/uploads/2025/11/Screenshot_26.jpg 1410w" sizes="(max-width: 1024px) 100vw, 1024px" />
                                    </figure>
                                    <p className="wp-block-paragraph">When starting a live stream, choose a time interval, 15 seconds is recommended</p>
                                    <figure className="wp-block-image size-large">
                                      <img loading="lazy" decoding="async" width="1024" height="532" src="/wp-content/uploads/2025/11/Screenshot_27-1024x532.jpg" alt="" className="wp-image-697" srcSet="/wp-content/uploads/2025/11/Screenshot_27-1024x532.jpg 1024w, /wp-content/uploads/2025/11/Screenshot_27-300x156.jpg 300w, /wp-content/uploads/2025/11/Screenshot_27-768x399.jpg 768w, /wp-content/uploads/2025/11/Screenshot_27-18x9.jpg 18w, /wp-content/uploads/2025/11/Screenshot_27-600x312.jpg 600w, /wp-content/uploads/2025/11/Screenshot_27.jpg 1406w" sizes="(max-width: 1024px) 100vw, 1024px" />
                                    </figure>
                                    <p className="wp-block-paragraph">That’s all, have fund.</p>
    </>
  );
}
