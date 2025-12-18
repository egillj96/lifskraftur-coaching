import Image from "next/image";
import Link from "next/link";
export default function CoachingPage() {
  return (
    <div className="min-h-screen bg-[#0a0f1a] text-[#d6eafe] flex flex-col items-center px-6 py-10">
      <div className="max-w-5xl w-full space-y-12">
        {/* Hero Section */}
        <section className="mt-28 text-center space-y-4">
          <p className="text-sm uppercase tracking-[0.25em] text-[#9bb4d8]">
            Fjarþjálfun fyrir alvöru menn
          </p>
          <h1 className="text-4xl md:text-5xl font-semibold text-[#e4f2ff] leading-tight">
            Byggðu heilbrigðan og hraustan líkama
            <span className="block text-[#5ecbff]">án þess að brenna út</span>
          </h1>
          <p className="text-lg text-[#9bb4d8] max-w-xl mx-auto">
            Fjarþjálfun fyrir menn sem vilja styrkja sig líkamlega og andlega
            með einföldu og skýru kerfi sem virkar til lengri tíma.
          </p>
          <a
            href="#apply"
            className="inline-block mt-4 px-8 py-3 rounded-xl bg-[#5ecbff] hover:bg-[#7fd8ff] text-[#020813] font-medium transition shadow-lg shadow-[#5ecbff]/30"
          >
            Skráðu þig í þjálfun
          </a>
        </section>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-[#1e344e] to-transparent" />

        {/* Who This Is For */}
        <section id="coaching" className="space-y-4">
          <h2 className="text-2xl font-semibold text-[#7fd8ff]">
            Fyrir hvern er þjálfunin?
          </h2>
          <p className="text-[#a7c3e8]">
            Þjálfunin er hönnuð fyrir menn sem vilja meiri styrk, aga og
            sjálfstraust – án þess að fórna heilsu eða jafnvægi.
          </p>
          <p className="text-[#a7c3e8]">Þjálfunin er fyrir þig ef:</p>
          <div className="grid gap-3">
            {[
              "Þú ert ungur maður á aldrinum 18–30 ára og finnst þú týndur í ræktinni eða veist ekki hvar þú átt að byrja.",
              "Þig langar að líta betur út, byggja upp sjálfstraust og líða betur í eigin skinni.",
              "Þú ert þreyttur á því að byrja alltaf upp á nýtt og detta út eftir nokkrar vikur.",
              "Þig vantar skýra áætlun, stuðning og kerfi sem auðvelt er að fylgja.",
            ].map((item) => (
              <div
                key={item}
                className="flex items-start gap-3 rounded-xl bg-[#0d1624]/70 border border-[#1e344e] px-4 py-3"
              >
                <span className="mt-1 h-2 w-2 rounded-full bg-[#5ecbff]" />
                <p className="text-sm text-[#d6eafe]">{item}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-[#1e344e] to-transparent" />

        {/* What You Get */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-[#7fd8ff]">Þú færð</h2>
          <div className="grid gap-3 md:grid-cols-2">
            {[
              "Sérsniðna æfingaáætlun sem tekur mið af þínum markmiðum og lífsstíl.",
              "Einfalda og framkvæmanlega næringarráðgjöf án öfga.",
              "Vikulegan stöðufund þar sem við förum yfir árangur, aðlögum áætlun og höldum fókus.",
              "Aðstoð með lífsstílsvenjur, streitu og hugarfar.",
              "Dagleg skilaboð og stuðning.",
              "Skýrleika og einfaldleika í stað ringulreiðar á samfélagsmiðlum.",
            ].map((item) => (
              <div
                key={item}
                className="rounded-xl bg-[#0d1624]/70 border border-[#1e344e] px-4 py-3 flex gap-3"
              >
                <span className="mt-1 h-2 w-2 rounded-full bg-[#7fd8ff]" />
                <p className="text-sm text-[#d6eafe]">{item}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-[#1e344e] to-transparent" />

        {/* How it works */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-[#7fd8ff]">
            Hvernig virkar þetta?
          </h2>
          <div className="grid gap-3">
            {[
              {
                title: "1. Skráning",
                text: "Fylltu út formið hér að neðan og segðu mér aðeins frá þér og markmiðunum þínum.",
              },
              {
                title: "2. Stuttur fundur",
                text: "Við tökum stuttan fjarfund þar sem við förum yfir stöðuna.",
              },
              {
                title: "3. Áætlun",
                text: "Ég útbý æfingaáætlun sem hentar þér og þínu lífi og gef þér aðgang að innra neti.",
              },
              {
                title: "4. Þjálfun",
                text: "Við vinnum saman vikulega, fylgjumst með árangri og aðlögum áætlunina þannig að þú haldir áfram að vaxa.",
              },
            ].map((step) => (
              <div
                key={step.title}
                className="rounded-xl bg-[#0d1624]/70 border border-[#1e344e] px-4 py-3"
              >
                <p className="text-sm font-semibold text-[#e4f2ff]">
                  {step.title}
                </p>
                <p className="text-sm text-[#b4ccef] mt-1">{step.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-[#1e344e] to-transparent" />

        {/* About Me */}
        <section id="about" className="space-y-4">
          <h2 className="text-2xl font-semibold text-[#7fd8ff]">Um mig</h2>

          <div
            className="rounded-2xl bg-[#0d1624]/70 border border-[#1e344e] p-5 
                  flex flex-col md:flex-row md:items-center md:justify-between md:gap-10"
          >
            {/* TEXT */}
            <div className="space-y-3 md:w-2/3">
              <p className="text-sm uppercase tracking-[0.25em] text-[#9ddcff]">
                Egill Þór Jóhannsson
              </p>
              <p className="text-[#d6eafe]">
                Ég heiti Egill Þór Jóhannsson og er menntaður tölvunarfræðingur
                og ÍAK einkaþjálfari. Ég hef verið heltekinn af lyftingum,
                mataræði og heilbrigðum lífsstíl í mörg ár. Ég hef prófað margar
                aðferðir, brunnið út og með árunum þróað mína eigin nálgun í
                þjálfun.
              </p>
              <p className="text-[#d6eafe]">
                Núna aðstoða ég unga menn að losna við ringulreiðina sem fylgir
                oft nýjum lífsstíl og býð upp á einfalt og skýrt kerfi sem
                virkar. Markmiðið er að þú finnir bæði styrk og ró – ekki bara
                stærri vöðva.
              </p>
            </div>

            {/* BIGGER IMAGE ON THE RIGHT */}
            <img
              src="/egill.jpg"
              alt="Egill Þór Jóhannsson"
              className="w-56 h-56 md:w-72 md:h-72 rounded-2xl object-cover border border-[#7fd8ff]/60 
                 shadow-xl shadow-[#5ecbff]/25 mt-6 md:mt-0 md:ml-10"
            />
          </div>
        </section>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-[#1e344e] to-transparent" />

        {/* Pricing */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-[#7fd8ff]">
            Verð og skráning
          </h2>
          <div className="rounded-2xl bg-[#0d1624]/80 border border-[#5ecbff]/60 px-5 py-4 space-y-2">
            <p className="text-sm text-[#c3daf6]">
              <span className="font-semibold text-[#7fd8ff]">
                Kynningarverð:
              </span>{" "}
              20.000 kr/mán
            </p>
            <p className="text-sm text-[#c3daf6]">
              <span className="font-semibold text-[#e4f2ff]">
                Staðlað mánaðarverð:
              </span>{" "}
              40.000 kr/mán
            </p>
            <p className="text-xs text-[#8ea8d4] mt-2">
              Ég tek inn lítið af kúnnum í einu svo að hver og einn fái
              raunverulega athygli, eftirfylgni og rými til að vaxa.
            </p>
          </div>
        </section>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-[#1e344e] to-transparent" />

        {/* Application Form */}
        <section id="apply" className="space-y-4 mb-10">
          <h2 className="text-2xl font-semibold text-[#7fd8ff]">
            Skráðu þig í þjálfun
          </h2>
          <p className="text-sm text-[#9bb4d8]">
            Fylltu út formið hér fyrir neðan. Ég svara yfirleitt innan 24–48
            klukkustunda og við finnum síðan tíma fyrir stuttan fund.
          </p>
          <form
            action="https://formspree.io/f/YOUR_FORM_ID"
            method="POST"
            className="space-y-4"
          >
            <input
              type="text"
              name="name"
              placeholder="Nafn"
              className="w-full bg-[#050b18] border border-[#1e344e] rounded-lg px-4 py-3 text-sm text-[#d6eafe] placeholder:text-[#7289aa] focus:outline-none focus:border-[#5ecbff]"
              required
            />

            <input
              type="email"
              name="email"
              placeholder="Tölvupóstur"
              className="w-full bg-[#050b18] border border-[#1e344e] rounded-lg px-4 py-3 text-sm text-[#d6eafe] placeholder:text-[#7289aa] focus:outline-none focus:border-[#5ecbff]"
              required
            />

            <textarea
              name="goals"
              placeholder="Segðu mér frá markmiðum þínum, stöðunni í dag og hverju þú vilt breyta..."
              className="w-full bg-[#050b18] border border-[#1e344e] rounded-lg px-4 py-3 text-sm text-[#d6eafe] placeholder:text-[#7289aa] h-32 focus:outline-none focus:border-[#5ecbff]"
              required
            />

            <button
              type="submit"
              className="w-full px-6 py-3 rounded-xl bg-[#5ecbff] hover:bg-[#7fd8ff] hover:cursor-pointer text-[#020813] font-medium transition shadow-lg shadow-[#5ecbff]/30"
            >
              Senda umsókn
            </button>
          </form>
        </section>
      </div>
    </div>
  );
}
