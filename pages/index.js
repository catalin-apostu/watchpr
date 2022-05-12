import Script from "next/script";

export default function IndexPage() {
  return (
    <>
      <div className="bg-white">
        <div className="mx-auto py-12 px-4 max-w-7xl sm:px-6 lg:px-8 lg:py-24">
          <div
            className="infogram-embed"
            data-id="230e278e-b95b-41c9-9f83-871ec852c974"
            data-type="interactive"
            data-title="Raport 1 Watch PR"
          />
          <Script
            id=""
            dangerouslySetInnerHTML={{
              __html: `
                !function(e,i,n,s){var t="InfogramEmbeds",d=e.getElementsByTagName("script")[0];if(window[t]&&window[t].initialized)window[t].process&&window[t].process();else if(!e.getElementById(n)){var o=e.createElement("script");o.async=1,o.id=n,o.src="https://e.infogram.com/js/dist/embed-loader-min.js",d.parentNode.insertBefore(o,d)}}(document,0,"infogram-async");
              `,
            }}
          />
        </div>
      </div>
    </>
  );
}
