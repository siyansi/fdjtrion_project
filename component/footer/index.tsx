"use client";

export function Footers() {
  const cols = [
    { t: "Products", items: ["P2 Vision+", "V4e LiDAR", "P2 LiDAR", "S2 Series", "V10L GNSS", "EC100 Guidance"] },
    { t: "Industries", items: ["Surveying", "Construction", "Mining", "Utilities", "Forensics", "BIM"] },
    { t: "Company", items: ["About", "News & Insights", "Support", "Careers", "Contact", "Partners"] },
  ];
  return (
    <footer className="relative border-t border-white/10 mt-20 px-6 pt-20 pb-10">
      <div className="mx-auto max-w-7xl grid gap-12 md:grid-cols-4">
        <div>
          <div className="flex items-center gap-2">
            <div className="h-9 w-9 rounded-md bg-[image:var(--gradient-brand)] p-[3px]">
              <div className="h-full w-full rounded-[4px] bg-background flex items-center justify-center text-[10px] font-bold text-brand">FJD</div>
            </div>
            <span className="font-display text-lg font-semibold">Trion<span className="text-brand">.in</span></span>
          </div>
          <p className="mt-4 text-sm text-muted-foreground max-w-xs">
            3D reality capture, LiDAR and GNSS solutions engineered for
            India's surveying and construction industry.
          </p>
        </div>
        {cols.map((c) => (
          <div key={c.t}>
            <div className="text-xs uppercase tracking-widest text-brand">{c.t}</div>
            <ul className="mt-4 space-y-2.5">
              {c.items.map((i) => (
                <li key={i}>
                  <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    {i}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="mx-auto max-w-7xl mt-16 pt-6 border-t border-white/10 flex flex-wrap gap-4 items-center justify-between text-xs text-muted-foreground">
        <div>© {new Date().getFullYear()} JAS geomatics  India. All rights reserved.</div>
        <div className="flex gap-6">
          <a href="#" className="hover:text-foreground transition">Privacy</a>
          <a href="#" className="hover:text-foreground transition">Terms</a>
          <a href="#" className="hover:text-foreground transition">Cookies</a>
        </div>
      </div>
    </footer>
  );
}