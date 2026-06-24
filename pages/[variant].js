import Head from 'next/head';
import Link from 'next/link';
var _vd = {"vegansk":{"h1":"Vegansk matkasse 2026","breadcrumbLabel":"Vegansk matkasse","metaTitle":"Vegansk matkasse 2026 | Matkassepriset","metaDescription":"Jämför 7 alternativ för Vegansk matkasse 2026 ✓ Uppdaterad 2026 ✓ Oberoende ✓ Hitta billigaste på 2 min.","intro":"Vi har oberoende granskat 7 alternativ för vegansk matkasse 2026. Se ranking och hitta bästa valet för dig.","seeAlso":[{"slug":"keto","label":"Keto-matkasse"},{"slug":"familj","label":"Matkasse för familj"},{"slug":"student","label":"Studentvänlig matkasse"},{"slug":"ekologisk","label":"Ekologisk matkasse"}]},"keto":{"h1":"Keto-matkasse 2026","breadcrumbLabel":"Keto-matkasse","metaTitle":"Keto-matkasse 2026 | Matkassepriset","metaDescription":"Jämför 7 alternativ för Keto-matkasse 2026 ✓ Uppdaterad 2026 ✓ Oberoende ✓ Hitta billigaste på 2 min.","intro":"Vi har oberoende granskat 7 alternativ för keto-matkasse 2026. Se ranking och hitta bästa valet för dig.","seeAlso":[{"slug":"vegansk","label":"Vegansk matkasse"},{"slug":"familj","label":"Matkasse för familj"},{"slug":"student","label":"Studentvänlig matkasse"},{"slug":"ekologisk","label":"Ekologisk matkasse"}]},"familj":{"h1":"Matkasse för familj 2026","breadcrumbLabel":"Matkasse för familj","metaTitle":"Matkasse för familj 2026 | Matkassepriset","metaDescription":"Jämför 7 alternativ för Matkasse för familj 2026 ✓ Uppdaterad 2026 ✓ Oberoende ✓ Hitta billigaste på 2 min.","intro":"Vi har oberoende granskat 7 alternativ för matkasse för familj 2026. Se ranking och hitta bästa valet för dig.","seeAlso":[{"slug":"vegansk","label":"Vegansk matkasse"},{"slug":"keto","label":"Keto-matkasse"},{"slug":"student","label":"Studentvänlig matkasse"},{"slug":"ekologisk","label":"Ekologisk matkasse"}]},"student":{"h1":"Studentvänlig matkasse 2026","breadcrumbLabel":"Studentvänlig matkasse","metaTitle":"Studentvänlig matkasse 2026 | Matkassepriset","metaDescription":"Jämför 7 alternativ för Studentvänlig matkasse 2026 ✓ Uppdaterad 2026 ✓ Oberoende ✓ Hitta billigaste på 2 min.","intro":"Vi har oberoende granskat 7 alternativ för studentvänlig matkasse 2026. Se ranking och hitta bästa valet för dig.","seeAlso":[{"slug":"vegansk","label":"Vegansk matkasse"},{"slug":"keto","label":"Keto-matkasse"},{"slug":"familj","label":"Matkasse för familj"},{"slug":"ekologisk","label":"Ekologisk matkasse"}]},"ekologisk":{"h1":"Ekologisk matkasse 2026","breadcrumbLabel":"Ekologisk matkasse","metaTitle":"Ekologisk matkasse 2026 | Matkassepriset","metaDescription":"Jämför 7 alternativ för Ekologisk matkasse 2026 ✓ Uppdaterad 2026 ✓ Oberoende ✓ Hitta billigaste på 2 min.","intro":"Vi har oberoende granskat 7 alternativ för ekologisk matkasse 2026. Se ranking och hitta bästa valet för dig.","seeAlso":[{"slug":"vegansk","label":"Vegansk matkasse"},{"slug":"keto","label":"Keto-matkasse"},{"slug":"familj","label":"Matkasse för familj"},{"slug":"student","label":"Studentvänlig matkasse"}]}};
var _pr = [{"name":"Linas Matkasse","url":"https://www.linasmatkasse.se","description":"Personligt anpassade matkassar för alla smaker","badge":"Bäst totalt","score":"4.8","price":"från 499 kr/mån","pros":["Brett urval","Hälsosamma alternativ","Flexibla leveranser"]},{"name":"Middagsfrid","url":"https://www.middagsfrid.se","description":"Ekologiska råvaror för hållbar matlagning","badge":null,"score":"4.7","price":"från 549 kr/mån","pros":["Ekologiskt fokus","Nya recept varje vecka","Miljövänlig förpackning"]},{"name":"HelloFresh","url":"https://www.hellofresh.se","description":"Internationella rätter med lokala ingredienser","badge":null,"score":"4.6","price":"från 489 kr/mån","pros":["Globalt inspirerade menyer","Enkla recept","Högkvalitativa råvaror"]},{"name":"Simple Feast","url":"https://www.simplefeast.com/se","description":"Vegetariska och veganska rätter för alla","badge":null,"score":"4.9","price":"från 599 kr/mån","pros":["100% växtbaserat","Klimatsmarta förpackningar","Snabb tillagning"]},{"name":"MatHem Matkasse","url":"https://www.mathem.se","description":"Bekväma matkassar med hemleverans","badge":null,"score":"4.5","price":"från 529 kr/mån","pros":["Leverans till dörren","Stort sortiment","Anpassningsbara menyer"]},{"name":"Årstiderna","url":"https://www.arstiderna.com","description":"Säsongsbetonade ekologiska matkassar","badge":null,"score":"4.8","price":"från 569 kr/mån","pros":["Säsongsanpassade råvaror","Ekologiska produkter","Inspirerande recept"]},{"name":"City Gross Matkasse","url":"https://www.citygross.se/matkasse","description":"Prisvärda matkassar för hela familjen","badge":null,"score":"4.6","price":"från 479 kr/mån","pros":["Familjevänliga alternativ","Bra priser","Stort urval"]}];
var _paths = [{"params":{"variant":"vegansk"}},{"params":{"variant":"keto"}},{"params":{"variant":"familj"}},{"params":{"variant":"student"}},{"params":{"variant":"ekologisk"}}];
var PC = '#d97706';
var SITE = 'Matkassepriset';
var BASE_URL = 'https://matkassepriset.vercel.app';
var YEAR = new Date().getFullYear();
var _TB = 'https://axiom-engine-production-54c3.up.railway.app/r';
var _SL = 'matkassepriset';
function _aff(name, url) {
  if (_TB && _TB.startsWith('http')) return _TB + '?p=' + encodeURIComponent(name) + '&url=' + encodeURIComponent(url) + '&site=' + _SL;
  return url;
}
export function getStaticPaths() { return { paths: _paths, fallback: false }; }
export function getStaticProps({ params }) {
  var data = _vd[params.variant];
  if (!data) return { notFound: true };
  return { props: { variant: params.variant, ...data }, revalidate: 86400 };
}
export default function VariantPage({ variant, h1, breadcrumbLabel, metaTitle, metaDescription, intro, seeAlso }) {
  return (
    <>
      <Head>
        <title>{metaTitle}</title>
        <meta name="description" content={metaDescription} />
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large" />
        <link rel="canonical" href={BASE_URL + '/' + variant} />
        <meta property="og:title" content={metaTitle} />
        <meta property="og:description" content={metaDescription} />
        <meta property="og:url" content={BASE_URL + '/' + variant} />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="sv_SE" />
        <link rel="alternate" hreflang="sv" href={BASE_URL + '/' + variant} />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
      </Head>
      <nav style={{ background:'#fff', borderBottom:'1px solid #e2e8f0', padding:'0 20px', height:60, display:'flex', alignItems:'center', justifyContent:'space-between', position:'sticky', top:0, zIndex:100, fontFamily:'Inter,sans-serif' }}>
        <Link href="/" style={{ fontWeight:800, fontSize:18, color:PC, textDecoration:'none' }}>{SITE}</Link>
        <div style={{ fontSize:13, color:'#94a3b8', display:'flex', gap:6, alignItems:'center' }}>
          <Link href="/" style={{ color:'#94a3b8', textDecoration:'none' }}>Hem</Link>
          <span>›</span>
          <span style={{ color:'#0f172a' }}>{breadcrumbLabel}</span>
        </div>
      </nav>
      <section style={{ background:'linear-gradient(135deg,#f0f9ff 0%,#f8fafc 100%)', padding:'52px 20px 36px', fontFamily:'Inter,sans-serif' }}>
        <div style={{ maxWidth:980, margin:'0 auto' }}>
          <p style={{ fontSize:12, color:'#94a3b8', marginBottom:14 }}>
            <Link href="/" style={{ color:PC }}>Hem</Link> › {breadcrumbLabel}
          </p>
          <h1 style={{ fontSize:'clamp(24px,4vw,42px)', fontWeight:800, color:'#0f172a', lineHeight:1.18, marginBottom:16 }}>{h1}</h1>
          <p style={{ fontSize:16, color:'#475569', lineHeight:1.75, maxWidth:600, marginBottom:28 }}>{intro}</p>
          <a href="#jamfor" style={{ display:'inline-block', background:PC, color:'#fff', padding:'13px 28px', borderRadius:10, fontWeight:700, fontSize:15, textDecoration:'none' }}>Se jämförelsen →</a>
        </div>
      </section>
      <section id="jamfor" style={{ maxWidth:980, margin:'0 auto', padding:'48px 20px', fontFamily:'Inter,sans-serif' }}>
        <h2 style={{ fontSize:24, fontWeight:800, marginBottom:24, color:'#0f172a' }}>Jämförelse — {h1}</h2>
        <div style={{ display:'flex', flexDirection:'column', gap:12 }}>
          {_pr.map(function(p, i) {
            return (
              <div key={p.name} style={{ background:'#fff', border:i===0?'2px solid '+PC:'1px solid #e2e8f0', borderRadius:16, padding:'20px 24px', position:'relative', boxShadow:i===0?'0 4px 20px '+PC+'18':'0 1px 4px #0000000a' }}>
                {i===0 && <div style={{ position:'absolute', top:-13, left:18, background:PC, color:'#fff', fontSize:11, fontWeight:800, padding:'3px 12px', borderRadius:10 }}>⭐ REDAKTIONENS VAL</div>}
                <div style={{ display:'flex', gap:18, alignItems:'center', flexWrap:'wrap' }}>
                  <div style={{ width:38, height:38, borderRadius:9, background:'#f8fafc', display:'flex', alignItems:'center', justifyContent:'center', fontWeight:800, fontSize:15, color:PC, flexShrink:0, border:'1px solid #e2e8f0' }}>{i+1}</div>
                  <div style={{ flex:1, minWidth:180 }}>
                    <div style={{ fontWeight:800, fontSize:17, color:'#0f172a', marginBottom:2 }}>{p.name}</div>
                    <div style={{ fontSize:13, color:'#64748b' }}>{p.description}</div>
                  </div>
                  <div style={{ textAlign:'right', display:'flex', flexDirection:'column', alignItems:'flex-end', gap:6 }}>
                    <div style={{ fontSize:19, fontWeight:800, color:PC }}>{p.price}</div>
                    <a href={_aff(p.name, p.url)} target="_blank" rel="noopener noreferrer sponsored" style={{ background:i===0?PC:'#0f172a', color:'#fff', padding:'9px 18px', borderRadius:8, fontWeight:700, fontSize:13, textDecoration:'none' }}>Välj {p.name} →</a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <p style={{ marginTop:16, fontSize:12, color:'#94a3b8' }}>* Vi kan erhålla provision via våra länkar. Det påverkar aldrig priset för dig.</p>
      </section>
      {seeAlso && seeAlso.length > 0 && (
        <section style={{ background:'#f8fafc', borderTop:'1px solid #e2e8f0', padding:'36px 20px', fontFamily:'Inter,sans-serif' }}>
          <div style={{ maxWidth:760, margin:'0 auto' }}>
            <p style={{ fontSize:14, color:'#64748b', marginBottom:14, fontWeight:600 }}>Se även:</p>
            <div style={{ display:'flex', flexWrap:'wrap', gap:10 }}>
              <Link href="/" style={{ background:'#fff', border:'1px solid #e2e8f0', borderRadius:8, padding:'7px 14px', fontSize:13, color:'#374151', textDecoration:'none' }}>← Alla alternativ</Link>
              {seeAlso.map(function(sa) { return (
                <Link key={sa.slug} href={'/' + sa.slug} style={{ background:'#fff', border:'1px solid #e2e8f0', borderRadius:8, padding:'7px 14px', fontSize:13, color:'#374151', textDecoration:'none' }}>{sa.label}</Link>
              ); })}
            </div>
          </div>
        </section>
      )}
      <footer style={{ background:'#0f172a', color:'#94a3b8', padding:'28px 20px', fontFamily:'Inter,sans-serif', textAlign:'center', fontSize:12 }}>
        <Link href="/" style={{ fontWeight:800, color:'#fff', textDecoration:'none', fontSize:16 }}>{SITE}</Link>
        <p style={{ marginTop:10 }}>&copy; {YEAR} {SITE}. Oberoende jämförelsetjänst.</p>
      </footer>
    </>
  );
}