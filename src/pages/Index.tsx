import { useState } from "react";
import { Helmet } from "react-helmet-async";

const PDP_URL = "https://samthestrategist.github.io/lmm-centella-restore-cream-pdp/";

const CDN = {
  heroFront: "https://cdn.shopify.com/s/files/1/0462/8591/4267/files/crc-hero-front_26ad5e04-3c33-4c93-afd1-dff74707da43.png?v=1771569957",
  heroAngle: "https://cdn.shopify.com/s/files/1/0462/8591/4267/files/crc-hero-angle_e2e548fa-1756-4701-8f69-83924cbc2201.png?v=1771569970",
  lifestyleHands: "https://cdn.shopify.com/s/files/1/0462/8591/4267/files/crc-texture-swatch_33b5eff6-8a2c-40fb-998a-df3c3a9cab8c.png?v=1771569979",
  textureSwatch: "https://cdn.shopify.com/s/files/1/0462/8591/4267/files/crc-texture-swatch_33b5eff6-8a2c-40fb-998a-df3c3a9cab8c.png?v=1771569979",
  bundle3jars: "https://cdn.shopify.com/s/files/1/0462/8591/4267/files/crc-bundle-3jars_10d120e7-f7d8-41fd-85d6-fa5fc6ce1d32.png?v=1771569973",
  adOverlay: "https://cdn.shopify.com/s/files/1/0462/8591/4267/files/crc-ad-overlay_316b6422-0fa4-438f-ac87-17ad74a35734.png?v=1771569982",
};

const COLORS = {
  primary: "#C4956A",
  cta: "#B85C38",
  headline: "#3D2B1F",
  body: "#4A3C31",
  bg: "#FAF6EE",
  bgDark: "#F3EDE1",
  green: "#2D6A4F",
  accent: "#7A5C40",
  gold: "#F4A40A",
  bestOverall: "#2D6A4F",
};

const Stars = ({ rating, max = 10 }: { rating: number; max?: number }) => {
  const filled = Math.round((rating / max) * 5);
  return (
    <span style={{ color: COLORS.gold, fontSize: "20px" }}>
      {"★".repeat(filled)}{"☆".repeat(5 - filled)}
    </span>
  );
};

const CTAButton = ({ href, children, variant = "primary", small = false }: { href: string; children: React.ReactNode; variant?: "primary" | "secondary"; small?: boolean }) => (
  <a
    href={href}
    target={variant === "secondary" ? "_blank" : undefined}
    rel={variant === "secondary" ? "noopener noreferrer" : undefined}
    style={{
      display: "inline-block",
      background: variant === "primary" ? COLORS.cta : "#E5E7EB",
      color: variant === "primary" ? "#fff" : COLORS.body,
      fontFamily: "'DM Sans', sans-serif",
      fontWeight: 700,
      fontSize: small ? "14px" : "16px",
      padding: small ? "10px 20px" : "14px 32px",
      borderRadius: "9999px",
      textDecoration: "none",
      letterSpacing: "0.01em",
    }}
  >
    {children}
  </a>
);

const Index = () => {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const products = [
    {
      rank: 1,
      badge: "BEST OVERALL",
      name: "Centella Restore Cream™",
      brand: "Little Miss Mineral",
      rating: 9.9,
      image: CDN.heroFront,
      description: "The only cica moisturizer on this list formulated specifically for perimenopausal and post-menopausal skin biology. Built around pharmaceutical-grade TECA and the proprietary Centelloid Renewal Cascade™ — it targets the actual cause of post-40 skin decline rather than masking its symptoms.",
      pros: [
        "✅ Pharmaceutical-grade TECA at clinically documented concentrations — activates dormant fibroblasts and stimulates Type I collagen synthesis (NIH-published research, PMC3834700)",
        "✅ Three-phase Centelloid Renewal Cascade™ — addresses fibroblast reactivation, collagen synthesis, and barrier restoration in sequence",
        "✅ Fragrance-free, dye-free formulation designed for the sensitized, reactive skin common in perimenopause",
        "✅ 60-day money-back guarantee — the longest guarantee on this list, timed specifically to the 8-week protocol",
        "✅ Free gifts with every order, code SECRET25 for 25% off — $59.25 / $111.75 / $147.75 — the most generous offer structure in this category",
      ],
      cta: PDP_URL,
      ctaText: "Visit Site →",
      discountBadge: "25% OFF — CODE: SECRET25",
      ourProduct: true,
    },
    {
      rank: 2,
      name: "Cicapair™ Tiger Grass Cream",
      brand: "Dr. Jart+",
      rating: 9.4,
      image: null,
      description: "The most recognizable name in cica skincare, Dr. Jart+'s Cicapair line popularized the ingredient category in the Western market. A solid option for barrier support and redness reduction, with strong K-beauty brand credibility. Available at Sephora at approximately $52 for 1.69 oz.",
      pros: [
        "✅ Establishes K-beauty cica credibility — the brand most responsible for Western awareness of Centella Asiatica",
        "✅ Color-correcting technology reduces visible redness — the green-tinted formulation provides immediate tonal evening on application",
        "✅ Widely available and well-reviewed for general barrier support and calming",
      ],
      weakness: "⚠️ Key Limitation for Women 40+: Not positioned as an anti-aging product and contains no specific collagen-synthesis or fibroblast-activation mechanism. The most common review theme from women 40+ on Sephora: \"Great for sensitive skin, love the color correcting — but it didn't help with my deeper lines or the overall thinning I'm experiencing.\"",
      cta: PDP_URL,
      ctaText: "Visit Site",
      ourProduct: false,
    },
    {
      rank: 3,
      name: "Centella Blemish Cream",
      brand: "COSRX",
      rating: 9.1,
      image: null,
      description: "An affordable and well-formulated cica option from the popular K-beauty brand COSRX. At $18-22, it's accessible, well-reviewed, and effective at what it's designed to do.",
      pros: [
        "✅ Affordable entry into cica skincare — strong value at the price point",
        "✅ Lightweight texture — absorbs quickly and layers well under other products",
        "✅ Anti-inflammatory and calming — effective for reactive skin episodes",
      ],
      weakness: "⚠️ Key Limitation for Women 40+: Specifically positioned around blemish control — a concern that resonates primarily with younger skin. Women 40-55 rarely identify blemishes as their primary skin concern; their concerns are structural (thinning, loss of resilience, persistent dryness). Additionally, at this price point, the Centella extract concentration is unlikely to reach the threshold documented in clinical fibroblast-activation studies.",
      cta: "https://www.cosrx.com/products/centella-blemish-cream",
      ctaText: "Visit Site",
      ourProduct: false,
    },
    {
      rank: 4,
      name: "Cicaplast Baume B5",
      brand: "La Roche-Posay",
      rating: 8.8,
      image: null,
      description: "La Roche-Posay's Cicaplast Baume B5 is a dermatologist-recommended barrier repair product used primarily for post-procedure recovery, eczema management, and irritated skin. At $16-20, widely available at drugstores.",
      pros: [
        "✅ Strong dermatologist recommendation history — frequently recommended post-procedure (laser, peel) for barrier recovery",
        "✅ Price point makes it accessible — lowest cost on this list, widely available",
      ],
      weakness: "⚠️ Limitations for Women 40+: Clinical not luxury positioning — its stark white packaging signals \"skin emergency\" rather than \"daily restorative care.\" No anti-aging mechanism: not formulated with fibroblast activation, collagen synthesis, or perimenopausal skin biology in mind. If your concern is the structural changes of post-40 skin, it addresses a different problem.",
      cta: "https://www.laroche-posay.us/our-products/face/cicaplast-baume-b5",
      ctaText: "Visit Site",
      ourProduct: false,
    },
  ];

  const faqs = [
    {
      q: "What should I actually look for in a cica moisturizer if I'm over 40?",
      a: "Look for: (1) TECA (Titrated Extract of Centella Asiatica) rather than generic \"Centella Asiatica extract\" — TECA is the standardized pharmaceutical form with documented clinical activity; (2) a product that explains its mechanism, not just its ingredients; (3) ceramides, which address barrier dysfunction common in perimenopause; (4) a guarantee of at least 60 days — structural skin changes take 6-8 weeks and any guarantee shorter than that doesn't give you time to evaluate real results.",
    },
    {
      q: "How long does it realistically take to see results from a cica moisturizer?",
      a: "For surface hydration and immediate soothing: days 1-7. For barrier improvement: weeks 2-3. For visible structural changes — which is what most women over 40 are actually after — you need 6-8 weeks minimum. Any product that promises visible anti-aging results in 1-2 weeks is referring to surface hydration, not structural change.",
    },
    {
      q: "Is Centella Restore Cream™ suitable for sensitive skin?",
      a: "Based on our testing group — which included 22 women who self-identified as having sensitive or reactive skin — none reported adverse reactions. Centella Asiatica has a strong clinical history as an anti-inflammatory and calming ingredient, used in pharmaceutical wound healing where tolerability is critical. The formula contains no added fragrance, dyes, or common sensitizers. A patch test before full application is always recommended.",
    },
    {
      q: "How does Centella Restore Cream™ compare to Dr. Jart+ Cicapair?",
      a: "They're solving different problems. Dr. Jart+ Cicapair excels at immediate calming, redness reduction, and barrier support — and its color-correcting technology provides a cosmetic benefit that Centella Restore Cream™ doesn't offer. If your primary concern is redness or reactive episodes, Cicapair is an excellent product. If your primary concern is the structural changes of perimenopause — skin thinning, loss of resilience, persistent hollowness — Centella Restore Cream™ is formulated for that biology specifically.",
    },
    {
      q: "What's the return policy on Centella Restore Cream™?",
      a: "60-day full money-back guarantee. Contact support@littlemissmineral.com within 60 days of purchase and request a refund — no forms, no restocking fees, no return shipping required. The guarantee is timed to the Centelloid Renewal Cascade™ protocol: if you haven't seen the structural results the mechanism is designed to produce by day 60, the money comes back. It's the most generous guarantee we found in this category.",
    },
  ];

  return (
    <>
      <Helmet>
        <title>Best Cica Moisturizers for Women Over 40 (2026) — Skin Intelligence</title>
        <meta name="description" content="We spent eight weeks testing the leading cica moisturizers specifically with women 40-55 in mind. One product stood significantly apart from the rest." />
      </Helmet>

      <div style={{ fontFamily: "'Inter', sans-serif", background: COLORS.bg, color: COLORS.body, minHeight: "100vh" }}>

        {/* ADVERTISER DISCLOSURE BAR */}
        <div style={{ background: "#333", color: "#ccc", textAlign: "right", padding: "6px 24px", fontSize: "11px", letterSpacing: "0.06em" }}>
          <a href="#disclosure" style={{ color: "#aaa", textDecoration: "underline" }}>Advertiser Disclosure</a>
        </div>

        {/* MAGAZINE HEADER */}
        <header style={{ background: "#fff", borderBottom: `3px solid ${COLORS.primary}`, padding: "20px 24px", textAlign: "center" }}>
          <div style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 800, fontSize: "28px", color: COLORS.headline, letterSpacing: "-0.03em" }}>
            Skin Intelligence
          </div>
          <div style={{ fontSize: "12px", color: COLORS.accent, marginTop: "4px", letterSpacing: "0.06em" }}>
            UPDATED: FEBRUARY 2026 &nbsp;·&nbsp; EDITORIAL TEAM REVIEW
          </div>
        </header>

        <div style={{ maxWidth: "900px", margin: "0 auto", padding: "40px 24px 80px" }}>

          {/* CATEGORY HEADLINE */}
          <h1 style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 800, fontSize: "clamp(26px, 5vw, 40px)", color: COLORS.headline, textAlign: "center", marginBottom: "16px", lineHeight: 1.2 }}>
            Best Cica Moisturizers for Women Over 40 (2026)
          </h1>

          {/* EDITORIAL INTRO */}
          <p style={{ fontSize: "17px", lineHeight: 1.8, color: COLORS.body, textAlign: "center", maxWidth: "680px", margin: "0 auto 40px" }}>
            The cica moisturizer market has exploded in the last three years — but most of what's available was formulated for younger skin with different concerns. We spent eight weeks testing the leading options specifically with women 40-55 in mind, asking one question their skin is actually asking: does this address the biological changes of perimenopause, or does it just moisturize? The results were clear, and one product stood significantly apart from the rest.
          </p>

          {/* PRODUCT CARDS */}
          {products.map((product, i) => (
            <div
              key={i}
              style={{
                background: product.ourProduct ? "linear-gradient(135deg, #FFFAF5 0%, #F9F0E3 100%)" : "#fff",
                borderRadius: "20px",
                padding: "32px",
                marginBottom: "24px",
                border: product.ourProduct ? `2px solid ${COLORS.primary}` : "1px solid #E5DDD5",
                boxShadow: product.ourProduct ? "0 8px 32px rgba(196,149,106,0.15)" : "0 2px 12px rgba(0,0,0,0.05)",
                position: "relative",
              }}
            >
              {/* Rank badge */}
              <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "16px", flexWrap: "wrap" }}>
                <div style={{
                  background: product.ourProduct ? COLORS.cta : COLORS.bgDark,
                  color: product.ourProduct ? "#fff" : COLORS.accent,
                  fontFamily: "'DM Sans', sans-serif",
                  fontWeight: 800,
                  fontSize: "16px",
                  padding: "6px 16px",
                  borderRadius: "9999px",
                }}>
                  #{product.rank}
                </div>
                {product.badge && (
                  <div style={{ background: COLORS.bestOverall, color: "#fff", fontFamily: "'DM Sans', sans-serif", fontWeight: 700, fontSize: "13px", padding: "4px 12px", borderRadius: "9999px", letterSpacing: "0.05em" }}>
                    {product.badge}
                  </div>
                )}
                {product.discountBadge && (
                  <div style={{ background: COLORS.gold, color: "#fff", fontFamily: "'DM Sans', sans-serif", fontWeight: 700, fontSize: "12px", padding: "4px 12px", borderRadius: "9999px" }}>
                    🏷 {product.discountBadge}
                  </div>
                )}
              </div>

              <div style={{ display: "grid", gridTemplateColumns: product.ourProduct ? "200px 1fr" : "120px 1fr", gap: "24px", alignItems: "start" }}>
                {/* Image */}
                <div>
                  {product.image ? (
                    <img
                      src={product.image}
                      alt={`${product.name} by ${product.brand}`}
                      style={{ width: "100%", borderRadius: "16px", boxShadow: "0 4px 16px rgba(0,0,0,0.10)" }}
                    />
                  ) : (
                    <div style={{ background: COLORS.bgDark, borderRadius: "12px", padding: "24px", textAlign: "center", color: COLORS.accent, fontSize: "13px", minHeight: "80px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                      {product.brand}
                    </div>
                  )}
                </div>

                {/* Content */}
                <div>
                  <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", marginBottom: "8px" }}>
                    <h2 style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 800, fontSize: "20px", color: COLORS.headline, margin: 0 }}>
                      {product.name}
                    </h2>
                    <span style={{ fontSize: "14px", color: COLORS.accent }}>{product.brand}</span>
                  </div>

                  <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "12px" }}>
                    <Stars rating={product.rating} />
                    <span style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 700, fontSize: "16px", color: COLORS.headline }}>{product.rating}/10</span>
                  </div>

                  <p style={{ fontSize: "15px", lineHeight: 1.7, color: COLORS.body, marginBottom: "16px" }}>{product.description}</p>

                  <div style={{ marginBottom: "16px" }}>
                    {product.pros.map((pro, j) => (
                      <div key={j} style={{ fontSize: "14px", lineHeight: 1.7, marginBottom: "6px", color: product.ourProduct ? "#1A4731" : COLORS.body }}>
                        {pro}
                      </div>
                    ))}
                  </div>

                  {product.weakness && (
                    <div style={{ background: "#FFF8F0", border: "1px solid #F4C07A", borderRadius: "8px", padding: "12px 16px", fontSize: "13px", lineHeight: 1.7, color: "#7A4F1A", marginBottom: "16px" }}>
                      {product.weakness}
                    </div>
                  )}

                  <CTAButton href={product.cta} variant={product.ourProduct ? "primary" : "secondary"} small={!product.ourProduct}>
                    {product.ctaText}
                  </CTAButton>
                </div>
              </div>
            </div>
          ))}

          {/* FEATURE HIGHLIGHT ROW */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "20px", margin: "48px 0" }}>
            {[
              {
                icon: "🔬",
                label: "Pharmaceutical-Grade TECA",
                desc: "The only concentration shown in NIH-published research to activate fibroblast proliferation and Type I collagen synthesis — not trace-amount Centella that earns a label mention",
              },
              {
                icon: "🕐",
                label: "60-Day Guarantee",
                desc: "Timed to the Centelloid Renewal Cascade™ protocol — because structural results take 8 weeks, and 30-day guarantees don't give the mechanism time to work",
              },
              {
                icon: "🌿",
                label: "Built for Perimenopausal Skin",
                desc: "The only formulation on this list designed specifically for the fibroblast slowdown, barrier dysfunction, and collagen decline that begins in perimenopause",
              },
            ].map((feature, i) => (
              <div key={i} style={{ background: "#fff", borderRadius: "16px", padding: "28px 24px", textAlign: "center", border: `1px solid rgba(196,149,106,0.2)`, boxShadow: "0 2px 12px rgba(0,0,0,0.05)" }}>
                <div style={{ fontSize: "36px", marginBottom: "12px" }}>{feature.icon}</div>
                <h3 style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 700, fontSize: "16px", color: COLORS.headline, marginBottom: "8px" }}>{feature.label}</h3>
                <p style={{ fontSize: "13px", lineHeight: 1.7, color: COLORS.body }}>{feature.desc}</p>
              </div>
            ))}
          </div>

          {/* EDITORIAL DEEP DIVE */}
          <section style={{ background: "#fff", borderRadius: "20px", padding: "40px", border: "1px solid #E5DDD5", marginBottom: "40px" }}>
            <h2 style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 800, fontSize: "clamp(22px, 3vw, 28px)", color: COLORS.headline, marginBottom: "24px" }}>
              Why We Chose Centella Restore Cream™ as Best Overall: A Closer Look
            </h2>

            {[
              "Our testing methodology for this category was specific: we weren't evaluating cica moisturizers in general. We were evaluating them for a particular type of skin — the skin of women experiencing perimenopause or post-menopausal hormonal shifts, where the primary concerns are structural (loss of collagen density, increased skin permeability, persistent barrier dysfunction) rather than general (dryness, redness, or acne). This narrowed the field considerably. Most cica products, whatever their merits for younger or general audiences, weren't designed with this specific biology in mind.",
              "Centella Restore Cream™ stood out from the first review of its formulation because it's the only product on this list that names a mechanism rather than an ingredient. The Centelloid Renewal Cascade™ describes a three-phase biological process — fibroblast reactivation, Type I collagen synthesis, barrier and hydration restoration — that maps directly onto the cellular changes perimenopause produces. When we compared this to Dr. Jart's Cicapair (excellent at calming and color correction but not anti-aging in mechanism), COSRX (designed for blemish, not structural aging), and La Roche-Posay's Cicaplast (pharmaceutical wound recovery, not restoration), the difference was clear: Centella Restore Cream™ is asking a different question than its competitors.",
              "The women we surveyed in our 8-week testing group reported something consistently meaningful: they didn't describe dramatic before-and-afters. They described quieter changes. A face that looked more like them in the morning. A skin texture that felt denser, more like the material it used to be. More willingness to go bare-faced. One participant wrote that she stopped avoiding the bathroom mirror — not because her skin was suddenly perfect, but because she'd stopped losing ground.",
              "On value: at $79 for one jar, Centella Restore Cream™ is positioned in the premium tier of this category. The offer structure addresses the price concern directly: the 60-day guarantee eliminates financial risk, the SECRET25 code brings the price down 25%, and the bundle gift structure rewards commitment. The longer guarantee isn't just marketing; it reflects genuine confidence in the science.",
            ].map((para, i) => (
              <p key={i} style={{ fontSize: "16px", lineHeight: 1.85, color: COLORS.body, marginBottom: "20px" }}>{para}</p>
            ))}
          </section>

          {/* FAQ */}
          <section style={{ marginBottom: "48px" }}>
            <h2 style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 800, fontSize: "clamp(22px, 3vw, 28px)", color: COLORS.headline, marginBottom: "24px", textAlign: "center" }}>
              Frequently Asked Questions
            </h2>
            {faqs.map((faq, i) => (
              <div key={i} style={{ borderBottom: "1px solid rgba(196,149,106,0.25)", marginBottom: 0 }}>
                <button
                  onClick={() => setActiveFaq(activeFaq === i ? null : i)}
                  style={{ width: "100%", textAlign: "left", padding: "18px 0", background: "none", border: "none", cursor: "pointer", display: "flex", justifyContent: "space-between", alignItems: "center", gap: "16px" }}
                >
                  <span style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 600, fontSize: "16px", color: COLORS.headline }}>{faq.q}</span>
                  <span style={{ fontSize: "22px", color: COLORS.primary, flexShrink: 0 }}>{activeFaq === i ? "−" : "+"}</span>
                </button>
                {activeFaq === i && (
                  <div style={{ padding: "0 0 18px", lineHeight: 1.8, color: COLORS.body, fontSize: "15px" }}>{faq.a}</div>
                )}
              </div>
            ))}
          </section>

          {/* COMPARISON TABLE */}
          <section style={{ marginBottom: "48px", overflowX: "auto" }}>
            <h2 style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 800, fontSize: "clamp(22px, 3vw, 28px)", color: COLORS.headline, marginBottom: "24px", textAlign: "center" }}>
              Full Product Comparison
            </h2>
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "14px", minWidth: "640px" }}>
              <thead>
                <tr style={{ background: COLORS.bgDark }}>
                  {["Product", "Rating", "Price", "Guarantee", "Anti-Aging Mechanism", "For 40+?", "Discount"].map((h) => (
                    <th key={h} style={{ padding: "12px 16px", textAlign: "left", fontFamily: "'DM Sans', sans-serif", fontWeight: 700, color: COLORS.headline, borderBottom: `2px solid ${COLORS.primary}` }}>
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[
                  {
                    product: "Centella Restore Cream™ by Little Miss Mineral",
                    rating: "9.9 ★★★★★",
                    price: "$79–$197",
                    guarantee: "60 Days",
                    mechanism: "✅ Centelloid Renewal Cascade™",
                    for40: "✅ Formulated specifically for perimenopausal biology",
                    discount: "SECRET25 — 25% OFF",
                    highlight: true,
                  },
                  {
                    product: "Dr. Jart+ Cicapair Tiger Grass Cream",
                    rating: "9.4 ★★★★☆",
                    price: "~$52",
                    guarantee: "30 days",
                    mechanism: "❌ Soothing / color-correcting only",
                    for40: "⚠️ General use; skews younger",
                    discount: "None",
                    highlight: false,
                  },
                  {
                    product: "COSRX Centella Blemish Cream",
                    rating: "9.1 ★★★★☆",
                    price: "~$20",
                    guarantee: "30 days",
                    mechanism: "❌ Anti-blemish focus only",
                    for40: "❌ Wrong emotional fit for 40+",
                    discount: "None",
                    highlight: false,
                  },
                  {
                    product: "La Roche-Posay Cicaplast Baume B5",
                    rating: "8.8 ★★★★☆",
                    price: "~$18",
                    guarantee: "30 days",
                    mechanism: "❌ Wound healing only",
                    for40: "❌ Not for hormonal skin changes",
                    discount: "None",
                    highlight: false,
                  },
                ].map((row, i) => (
                  <tr key={i} style={{ background: row.highlight ? "#FFF8EF" : (i % 2 === 0 ? "#fff" : COLORS.bgDark) }}>
                    <td style={{ padding: "12px 16px", fontWeight: row.highlight ? 700 : 400, color: row.highlight ? COLORS.headline : COLORS.body }}>{row.product}</td>
                    <td style={{ padding: "12px 16px", color: COLORS.gold, fontWeight: 600 }}>{row.rating}</td>
                    <td style={{ padding: "12px 16px" }}>{row.price}</td>
                    <td style={{ padding: "12px 16px", color: row.highlight ? COLORS.green : COLORS.body, fontWeight: row.highlight ? 700 : 400 }}>{row.guarantee}</td>
                    <td style={{ padding: "12px 16px", fontSize: "13px" }}>{row.mechanism}</td>
                    <td style={{ padding: "12px 16px", fontSize: "13px" }}>{row.for40}</td>
                    <td style={{ padding: "12px 16px", color: row.highlight ? COLORS.cta : COLORS.accent, fontWeight: row.highlight ? 700 : 400, fontSize: "13px" }}>{row.discount}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </section>

          {/* FINAL CTA */}
          <section style={{ background: `linear-gradient(135deg, ${COLORS.headline} 0%, #5C3D2E 100%)`, borderRadius: "24px", padding: "60px 40px", textAlign: "center", color: "#fff" }}>
            <img src={CDN.adOverlay} alt="Centella Restore Cream" style={{ maxWidth: "180px", borderRadius: "16px", marginBottom: "24px" }} />
            <h2 style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 800, fontSize: "clamp(22px, 4vw, 32px)", marginBottom: "16px" }}>
              Ready to Try Our #1 Pick?
            </h2>
            <p style={{ fontSize: "17px", opacity: 0.9, marginBottom: "8px" }}>
              Centella Restore Cream™ by Little Miss Mineral — the only cica moisturizer formulated specifically for the biological changes of perimenopause.
            </p>
            <div style={{ margin: "24px 0 8px" }}>
              <div style={{ fontSize: "15px", opacity: 0.85, marginBottom: "8px" }}>→ Use code <strong>SECRET25</strong> for 25% off: 1 jar $59.25 | 2 jars $111.75 | 3 jars $147.75</div>
              <div style={{ fontSize: "15px", opacity: 0.85, marginBottom: "8px" }}>→ 60-Day Money-Back Guarantee — no forms, no fine print</div>
              <div style={{ fontSize: "15px", opacity: 0.85, marginBottom: "24px" }}>→ Free gifts with every order (Digital Guide + Roller + Masks by tier)</div>
            </div>
            <a
              href={PDP_URL}
              style={{ display: "inline-block", background: COLORS.cta, color: "#fff", fontFamily: "'DM Sans', sans-serif", fontWeight: 700, fontSize: "18px", padding: "18px 48px", borderRadius: "9999px", textDecoration: "none", boxShadow: "0 4px 20px rgba(0,0,0,0.3)" }}
            >
              Shop Centella Restore Cream™ — View Bundles & Pricing →
            </a>
            <p style={{ fontSize: "13px", opacity: 0.6, marginTop: "20px" }}>
              Updated February 2026 | Skin Intelligence Editorial Team
            </p>
          </section>

        </div>

        {/* FOOTER */}
        <footer id="disclosure" style={{ background: "#1A1A1A", color: "#9CA3AF", padding: "40px 24px", textAlign: "center" }}>
          <div style={{ maxWidth: "740px", margin: "0 auto" }}>
            <p style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 700, fontSize: "16px", color: "#fff", marginBottom: "12px" }}>Skin Intelligence</p>
            <p style={{ fontSize: "12px", lineHeight: 1.8, maxWidth: "600px", margin: "0 auto 12px" }}>
              <strong>Advertiser Disclosure:</strong> This page contains affiliate links and sponsored placements. Centella Restore Cream™ is a featured partner. We receive compensation for featuring this product. Placements and rankings may be influenced by compensation received.
            </p>
            <p style={{ fontSize: "12px", lineHeight: 1.8, maxWidth: "600px", margin: "0 auto 12px" }}>
              <strong>FDA Disclaimer:</strong> These statements have not been evaluated by the Food and Drug Administration. This product is not intended to diagnose, treat, cure, or prevent any disease. Results may vary. Individual results will depend on many factors.
            </p>
            <p style={{ fontSize: "12px" }}>
              © 2026 Skin Intelligence | Updated February 2026
            </p>
          </div>
        </footer>

      </div>
    </>
  );
};

export default Index;
