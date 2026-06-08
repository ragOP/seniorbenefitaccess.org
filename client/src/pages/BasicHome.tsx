export default function BasicHome() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f4f7fb] p-6">
      <main className="max-w-[520px] w-full bg-white border border-[#d8e2ef] rounded-2xl px-8 py-10 text-center">
        <h1 className="text-[1.75rem] font-bold text-[#0f3d6e] mb-3">
          Senior Benefit Access
        </h1>
        <p className="text-[1.05rem] leading-relaxed text-[#4a5f73] mb-6">
          Helping seniors discover and access the benefits they deserve.
        </p>
        <a
          href="mailto:info@seniorbenefitaccess.org"
          className="inline-block bg-[#0f3d6e] hover:bg-[#164f8c] text-white font-semibold no-underline px-6 py-3 rounded-lg transition-colors"
        >
          Contact Us
        </a>
      </main>
    </div>
  );
}
