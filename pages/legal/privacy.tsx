import { NextSeo } from 'next-seo'

import { useRouter } from 'next/router'
import ErrorPage from 'next/error'
import Layout from 'components/layout'

export default function IndexPage({ preview }: { preview: boolean }) {
  const router = useRouter()
  return (
    <Layout preview={preview}>
      {router.isFallback ? (
        <>Loading…</>
      ) : (
        <>
          <NextSeo
            title={`Politica de confidențialitate - Watch PR`}
            canonical={`https://watchpr.ro/legal/privacy`}
            openGraph={{
              url: `https://watchpr.ro/legal/privacy`,
              title: `Politica de confidențialitate - Watch PR`,
            }}
          />
          <div className='bg-white'>
            <div className='mx-auto py-12 px-4 max-w-7xl sm:px-6 lg:px-8 lg:py-24'>
              <h3 className='mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl'>
                Politica de confidențialitate
              </h3>
              <div className='mt-8 lg:mt-0'>
                <div className='text-base max-w-prose mx-auto lg:max-w-none'>
                  <strong className='text-lg text-gray-500'>Ultima actualizare 13.10.2022</strong>
                </div>
                <div className='mt-5 prose prose-indigo text-gray-500 mx-auto lg:max-w-none lg:row-start-1 lg:col-start-1'>
                  <p>
                    1. Operatorul de date este: Asociația Casa Bună, cu sediul în Șoseaua Giurgiului 78, Jilava 077120 România
                    (Asociația).
                  </p>
                  <p>
                    2. Datele Personale prelucrate sunt cele furnizate Asociației, în mod direct şi voluntar, de către dvs. atunci
                    când interacţionaţi cu Asociaţia, de exemplu, atunci când completaţi un chestionar/ sondaj sau participaţi la
                    întâlniri organizate de Asociație (inclusiv prin intermediul unor platforme online, cum ar fi ZOOM). În
                    funcţie de context, Asociația poate prelucra următoarele Date Personale: date de contact (nume, prenume,
                    adresă de e-mail, telefon, profil Facebook/ LinkedIn), gen, vârstă, CV, localitate de reședință, echipa
                    selectată, calitatea de membru de partid şi partidul, păreri, opinii (inclusiv politice), etnie, imagine,
                    voce, orice alte informaţii completate/ furnizate în cadrul chestionarului/ sondajului/ întâlnirii sau făcute
                    publice în mod manifest de către dvs., după caz.
                  </p>
                  <p>
                    3. Temeiurile legale ale prelucrărilor şi scopurile acestora sunt următoarele: a) urmărirea intereselor
                    legitime ale Asociației (art. 6 (1) (f) din GDPR): organizarea şi desfășurarea activităţii Asociației
                    (inclusiv a echipelor de membri), comunicarea cu dvs. şi ceilalţi membri ai comunității în cadrul proiectelor
                    derulate), eliminarea unor potențiale interferențe şi efectuarea unei cercetări obiective, soluționarea
                    cererilor dvs., întocmirea, documentarea (inclusiv prin înregistrarea întâlnirilor din cadrul proiectelor
                    finanţate şi stocarea imaginilor captate) şi arhivarea dosarelor de finanțare prin granturi europene conform
                    contractelor de finanțare încheiate, efectuarea de statistici, constatarea, exercitarea sau apărarea unui
                    drept al Asociației în instanţă; b) consimţământul dvs. (art. 6 (1) (a) din GDPR) pentru prelucrarea datelor
                    cu caracter sensibil, cum ar fi etnia, opinia politică, acord furnizat la completarea chestionarului/
                    sondajului, respectiv pentru activităţi de marketing care nu sunt bazate pe interesul legitim al Asociației;
                    c) îndeplinirea obligațiilor legale care revin Asociației (art. 6 (1) (c) din GDPR). Dacă nu doriți ca Datele
                    Personale să fie prelucrate conform celor precizate mai sus, vă rugăm să NU completaţi chestionarul/
                    dezvăluiţi Datele Personale în cadrul întâlnirii.
                  </p>
                  <p>
                    4. Datele vor fi prelucrate de Asociație pentru perioade limitate de timp, determinate în funcţie de scopurile
                    prelucrărilor (de exemplu, pe durata prevăzută în contractele încheiate cu finanţatorii) şi prevederile legale
                    aplicabile sau pe durata existenței consimţământului dvs.
                  </p>
                  <p>
                    5. Asociaţia poate dezvălui Datele Personale către ceilalţi membri ai comunității care au ales să completeze
                    chestionarul/ ceilalţi participanți la întâlniri, alţi destinatari implicați în scopurile identificate mai
                    sus, către autorităţi competente şi finanțatori ai proiectului de cercetare. Având în vedere faptul că membrii
                    comunității contribuie la atingerea scopurilor Asociaţiei, în mod direct, individual sau în comun cu alţi
                    membri, în funcţie de resursele proprii (ex. timp, know-how), prelucrarea Datelor dvs. Personale în afara
                    scopurilor Asociaţiei este răspunderea proprie a fiecăruia și tuturor celorlalți membri ai comunității care au
                    avut acces la Date. Pentru Datele Personale şi informaţiile pe care alegeți să le dezvăluiți public pe pagina
                    de Facebook a Grupului Integritate pe Bune, Integritatea pe Bune – Grup de lucru sau pe orice alt sub-grup
                    constituit, vă rugăm să consultați politica de confidenţialitate a Facebook.
                  </p>
                  <p>
                    6. Conform articolelor 12-22 din GDPR, aveți dreptul la informare, dreptul de acces, dreptul la rectificare,
                    dreptul la ştergerea datelor (”dreptul de a fi uitat”), dreptul la restricţionarea prelucrării, dreptul la
                    portabilitatea datelor, dreptul la opoziţie, dreptul de a nu fi supus unei decizii individuale automatizate,
                    dreptul de a depune o plângere în fața autorității de supraveghere (ANSPDCP) și de a vă adresa justiției. În
                    cazul prelucrărilor bazate pe consimțământ, aveți dreptul să vă retrageți consimțământul în orice moment, însă
                    acest lucru nu afectează legalitatea prelucrărilor efectuate până la momentul retragerii.
                  </p>
                  <p>
                    7. În scop GDPR, puteţi consulta Asociaţia la adresa de e-mail:{' '}
                    <a href='mailto:contact@integritatepebune.ro'>contact@integritatepebune.ro</a>.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </Layout>
  )
}
